// Shared inspection engine used by both Static PDI (script.js) and Road Test (road-test/road-test.js).
// Plain global namespace (no bundler/build step in this project) - attaches window.InspectionEngine.
(function (global) {
    'use strict';

    // ── HTML / STRING HELPERS ──
    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function formatDuration(ms) {
        if (!Number.isFinite(ms) || ms < 0) return '--:--:--';
        const totalSeconds = Math.floor(ms / 1000);
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        const pad = (n) => String(n).padStart(2, '0');
        return `${pad(h)}:${pad(m)}:${pad(s)}`;
    }

    // ── STORAGE (hardened localStorage wrapper) ──
    function safeGetJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (raw == null) return fallback;
            return JSON.parse(raw);
        } catch (err) {
            console.warn(`[InspectionEngine] Failed to read/parse localStorage key "${key}"`, err);
            return fallback;
        }
    }

    function safeSetJSON(key, value, onQuotaError) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (err) {
            console.error(`[InspectionEngine] Failed to persist localStorage key "${key}"`, err);
            if (typeof onQuotaError === 'function') onQuotaError(err);
            return false;
        }
    }

    // ── INDEXEDDB EVIDENCE STORE (photo blobs, keyed by inspectionId_itemId_timestamp) ──
    const DB_NAME = 'inspection-evidence-db';
    const DB_VERSION = 1;
    const STORE_NAME = 'evidence';

    function openEvidenceDB() {
        return new Promise((resolve, reject) => {
            if (!('indexedDB' in global)) {
                reject(new Error('IndexedDB not supported'));
                return;
            }
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = () => {
                const db = request.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            };
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    const EvidenceStore = {
        async put(key, blob) {
            const db = await openEvidenceDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(STORE_NAME, 'readwrite');
                tx.objectStore(STORE_NAME).put(blob, key);
                tx.oncomplete = () => resolve(true);
                tx.onerror = () => reject(tx.error);
            });
        },
        async get(key) {
            const db = await openEvidenceDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(STORE_NAME, 'readonly');
                const req = tx.objectStore(STORE_NAME).get(key);
                req.onsuccess = () => resolve(req.result || null);
                req.onerror = () => reject(req.error);
            });
        },
        async delete(key) {
            const db = await openEvidenceDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(STORE_NAME, 'readwrite');
                tx.objectStore(STORE_NAME).delete(key);
                tx.oncomplete = () => resolve(true);
                tx.onerror = () => reject(tx.error);
            });
        }
    };

    // ── STATE MACHINE / COUNTERS ──
    function getCheckState(item) {
        if (!item.status) return 'NOT_STARTED';
        if (item.evidenceRequired && !item.evidenceCaptured) return 'EVIDENCE_REQUIRED';
        if (item.evidenceRequired && item.evidenceCaptured) return 'COMPLETED';
        return 'ANSWERED';
    }

    function computeCounters(items) {
        const counters = {
            total: items.length,
            completed: 0,
            passed: 0,
            failed: 0,
            pending: 0,
            evidenceRequired: 0,
            evidenceCompleted: 0,
            remaining: 0
        };
        items.forEach((item) => {
            if (item.status === 'PASS') counters.passed++;
            else if (item.status === 'FAIL') counters.failed++;
            else counters.pending++;

            if (item.status) counters.completed++;
            if (item.evidenceRequired) {
                counters.evidenceRequired++;
                if (item.evidenceCaptured || item.photo) counters.evidenceCompleted++;
            }
        });
        counters.remaining = counters.total - counters.completed;
        return counters;
    }

    // ── FILTERS ──
    function getFilteredGroups(groups, filter, searchQuery, searchFields) {
        let result = groups;
        if (filter === 'pass') {
            result = result.filter((g) => g.passCount > 0);
        } else if (filter === 'fail') {
            result = result.filter((g) => g.failCount > 0);
        } else if (filter === 'pending') {
            result = result.filter((g) => g.pendCount > 0);
        }
        const q = (searchQuery || '').trim().toLowerCase();
        if (q) {
            result = result.filter((g) =>
                String(g.adc).toLowerCase().includes(q) ||
                g.items.some((item) => (searchFields || []).some((field) => String(item[field] || '').toLowerCase().includes(q)))
            );
        }
        return result;
    }

    function buildGroups(items, groupKey) {
        const map = new Map();
        items.forEach((item) => {
            const key = item[groupKey];
            if (!map.has(key)) map.set(key, { adc: key, items: [], passCount: 0, failCount: 0, pendCount: 0 });
            const group = map.get(key);
            group.items.push(item);
            if (item.status === 'PASS') group.passCount++;
            else if (item.status === 'FAIL') group.failCount++;
            else group.pendCount++;
        });
        return Array.from(map.values());
    }

    // ── DEBOUNCE ──
    function debounce(fn, delayMs) {
        let handle = null;
        return function debounced(...args) {
            if (handle) clearTimeout(handle);
            handle = setTimeout(() => fn.apply(this, args), delayMs);
        };
    }

    // ── TIMER (timestamp-based - survives refresh/backgrounding/sleep) ──
    function createTimer(options) {
        const {
            storageKey,
            mode = 'countup',
            durationSeconds = 0,
            onTick,
            onExpire
        } = options;

        let intervalHandle = null;

        function load() {
            return safeGetJSON(storageKey, null);
        }

        function persist(state) {
            safeSetJSON(storageKey, state);
        }

        function start(existing) {
            const now = Date.now();
            const state = existing || load() || { startedAt: now, lastActivityAt: now, completedAt: null, pausedAt: null, pausedAccumMs: 0 };
            if (!state.startedAt) state.startedAt = now;
            state.pausedAt = null;
            persist(state);
            tick(state);
            intervalHandle = setInterval(() => tick(load() || state), 1000);
            return state;
        }

        function pause() {
            const state = load();
            if (!state || state.pausedAt) return state;
            state.pausedAt = Date.now();
            persist(state);
            if (intervalHandle) { clearInterval(intervalHandle); intervalHandle = null; }
            return state;
        }

        function resume() {
            const state = load();
            if (!state || !state.pausedAt) return state;
            state.pausedAccumMs = (state.pausedAccumMs || 0) + (Date.now() - state.pausedAt);
            state.pausedAt = null;
            persist(state);
            intervalHandle = setInterval(() => tick(load() || state), 1000);
            return state;
        }

        function markActivity() {
            const state = load();
            if (!state) return;
            state.lastActivityAt = Date.now();
            persist(state);
        }

        function complete() {
            const state = load();
            if (!state) return;
            state.completedAt = Date.now();
            persist(state);
            if (intervalHandle) { clearInterval(intervalHandle); intervalHandle = null; }
        }

        function reset() {
            if (intervalHandle) { clearInterval(intervalHandle); intervalHandle = null; }
            const now = Date.now();
            const state = { startedAt: now, lastActivityAt: now, completedAt: null, pausedAt: null, pausedAccumMs: 0 };
            persist(state);
            tick(state);
            return state;
        }

        function elapsedMs(state) {
            const s = state || load();
            if (!s || !s.startedAt) return 0;
            const endPoint = s.completedAt || (s.pausedAt || Date.now());
            return Math.max(0, endPoint - s.startedAt - (s.pausedAccumMs || 0));
        }

        function tick(state) {
            if (!state) return;
            const elapsed = elapsedMs(state);
            let displayMs = elapsed;
            let expired = false;
            if (mode === 'countdown') {
                displayMs = Math.max(0, durationSeconds * 1000 - elapsed);
                expired = displayMs <= 0;
            }
            if (typeof onTick === 'function') onTick({ elapsedMs: elapsed, displayMs, expired, state });
            if (expired && typeof onExpire === 'function') onExpire(state);
        }

        function stopInterval() {
            if (intervalHandle) { clearInterval(intervalHandle); intervalHandle = null; }
        }

        return { load, start, pause, resume, resetTimer: reset, markActivity, complete, elapsedMs, stopInterval };
    }

    // ── EVIDENCE HELPER & COMPRESSION ──
    function compressImage(file, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        const { maxDimension = 1024, quality = 0.7 } = options || {};
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let { width, height } = img;
                if (width > maxDimension || height > maxDimension) {
                    if (width > height) { height = Math.round(height * (maxDimension / width)); width = maxDimension; }
                    else { width = Math.round(width * (maxDimension / height)); height = maxDimension; }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                callback(canvas.toDataURL('image/jpeg', quality));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // ── AUDIT LOG ──
    function createAuditLog(storageKey, maxEntries) {
        const cap = maxEntries || 2000;
        function load() { return safeGetJSON(storageKey, []); }
        function push(type, meta) {
            const log = load();
            log.push({ type, timestamp: Date.now(), ...meta });
            if (log.length > cap) log.splice(0, log.length - cap);
            safeSetJSON(storageKey, log);
            return log;
        }
        function clear() {
            safeSetJSON(storageKey, []);
        }
        return { load, push, clear };
    }

    // ── VOICE DICTATION (Web Speech API) ──
    function createVoiceDictation(options = {}) {
        const SpeechRecognition = global.SpeechRecognition || global.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            return {
                isSupported: false,
                start: () => { if (options.onError) options.onError('Speech recognition not supported in this browser.'); },
                stop: () => {},
                toggle: () => { if (options.onError) options.onError('Speech recognition not supported in this browser.'); }
            };
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = options.lang || 'en-AU';

        let isListening = false;

        recognition.onstart = () => {
            isListening = true;
            if (options.onStateChange) options.onStateChange(true);
        };

        recognition.onend = () => {
            isListening = false;
            if (options.onStateChange) options.onStateChange(false);
        };

        recognition.onerror = (event) => {
            isListening = false;
            if (options.onStateChange) options.onStateChange(false);
            if (options.onError) options.onError(event.error || 'Speech error');
        };

        recognition.onresult = (event) => {
            let finalTranscript = '';
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            if (options.onResult) {
                options.onResult(finalTranscript || interimTranscript, !!finalTranscript);
            }
        };

        return {
            isSupported: true,
            start: () => {
                try {
                    recognition.start();
                } catch (e) {
                    console.warn('[VoiceDictation] recognition.start error:', e);
                }
            },
            stop: () => {
                try {
                    recognition.stop();
                } catch (e) {}
            },
            toggle: () => {
                if (isListening) recognition.stop();
                else {
                    try { recognition.start(); } catch (e) {}
                }
            }
        };
    }

    // ── DIGITAL SIGNATURE PAD (Touch & Mouse with Smooth Interpolation) ──
    function createSignaturePad(canvasEl) {
        if (!canvasEl) return null;
        const ctx = canvasEl.getContext('2d');
        let isDrawing = false;
        let points = [];
        let hasDrawn = false;

        function resize() {
            const rect = canvasEl.getBoundingClientRect();
            const dpr = global.devicePixelRatio || 1;
            canvasEl.width = rect.width * dpr;
            canvasEl.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = '#0f172a';
        }

        function getPos(e) {
            const rect = canvasEl.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        }

        function start(e) {
            e.preventDefault();
            isDrawing = true;
            hasDrawn = true;
            points = [getPos(e)];
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
        }

        function move(e) {
            if (!isDrawing) return;
            e.preventDefault();
            const pos = getPos(e);
            points.push(pos);
            if (points.length > 2) {
                const lastTwo = points.slice(-2);
                const control = lastTwo[0];
                const end = {
                    x: (lastTwo[0].x + lastTwo[1].x) / 2,
                    y: (lastTwo[0].y + lastTwo[1].y) / 2
                };
                ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
                ctx.stroke();
            }
        }

        function stop(e) {
            if (!isDrawing) return;
            isDrawing = false;
            ctx.closePath();
            points = [];
        }

        function clear() {
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
            hasDrawn = false;
        }

        function isEmpty() {
            return !hasDrawn;
        }

        function toDataURL() {
            if (!hasDrawn) return null;
            return canvasEl.toDataURL('image/png');
        }

        // Bind events
        canvasEl.addEventListener('mousedown', start);
        canvasEl.addEventListener('mousemove', move);
        global.addEventListener('mouseup', stop);

        canvasEl.addEventListener('touchstart', start, { passive: false });
        canvasEl.addEventListener('touchmove', move, { passive: false });
        global.addEventListener('touchend', stop);

        resize();
        global.addEventListener('resize', debounce(resize, 200));

        return { clear, isEmpty, toDataURL, resize };
    }

    // ── NAVIGATION & AUTO-ADVANCE HELPERS ──
    function findNextPendingItem(items, currentId = null) {
        if (!items || items.length === 0) return null;
        let startIndex = 0;
        if (currentId != null) {
            const idx = items.findIndex(i => i.id === currentId);
            if (idx !== -1) startIndex = idx + 1;
        }
        for (let i = startIndex; i < items.length; i++) {
            if (!items[i].status) return items[i];
        }
        // Wrap around to start if not found after currentId
        for (let i = 0; i < startIndex; i++) {
            if (!items[i].status) return items[i];
        }
        return null;
    }

    // ── COMMON DEFECT REASON PILLS ──
    const COMMON_DEFECT_TAGS = [
        'Loose Mounting',
        'Fluid Leakage',
        'Out of Spec Tolerance',
        'Misaligned / Off-Center',
        'Abnormal Noise / Vibration',
        'Corrosion / Rust Damage',
        'Missing Fastener / Rivet',
        'Excessive Play / Backlash',
        'Component Rubbing / Interference',
        'Improper Sealing / Gasket'
    ];

    global.InspectionEngine = {
        escapeHtml,
        formatDuration,
        safeGetJSON,
        safeSetJSON,
        EvidenceStore,
        getCheckState,
        computeCounters,
        getFilteredGroups,
        buildGroups,
        debounce,
        createTimer,
        compressImage,
        createAuditLog,
        createVoiceDictation,
        createSignaturePad,
        findNextPendingItem,
        COMMON_DEFECT_TAGS
    };
})(window);
