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
    // onQuotaError is called (once per failed save) so callers can surface a persistent warning.
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
        // key convention: `${inspectionId}_${itemId}_${timestamp}`
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
    // Derived (never stored redundantly): NOT_STARTED -> ANSWERED -> EVIDENCE_REQUIRED -> VALIDATED -> COMPLETED
    function getCheckState(item) {
        if (!item.status) return 'NOT_STARTED';
        if (item.evidenceRequired && !item.evidenceCaptured) return 'EVIDENCE_REQUIRED';
        if (item.evidenceRequired && item.evidenceCaptured) return 'COMPLETED';
        return 'ANSWERED';
    }

    // Single source of truth for all counters - invariant passed+failed+pending===total by construction.
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
                if (item.evidenceCaptured) counters.evidenceCompleted++;
            }
        });
        counters.remaining = counters.total - counters.completed;
        return counters;
    }

    // ── FILTERS (any-match visibility: a group shows under a filter if ANY item in it matches) ──
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

    // ── DEBOUNCE (for search inputs) ──
    function debounce(fn, delayMs) {
        let handle = null;
        return function debounced(...args) {
            if (handle) clearTimeout(handle);
            handle = setTimeout(() => fn.apply(this, args), delayMs);
        };
    }

    // ── TIMER (timestamp-based - survives refresh/backgrounding/sleep, never reset by rerender) ──
    // mode 'countdown': counts down from durationSeconds using startedAt. mode 'countup': elapsed since startedAt.
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
            const state = existing || { startedAt: now, lastActivityAt: now, completedAt: null, pausedAt: null, pausedAccumMs: 0 };
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

    // ── EVIDENCE: seeded PRNG so "random" challenges are reproducible per inspection (no regen on refresh) ──
    function mulberry32(seed) {
        let a = seed >>> 0;
        return function next() {
            a |= 0; a = (a + 0x6D2B79F5) | 0;
            let t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    function hashStringToSeed(str) {
        let h = 2166136261;
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        return h >>> 0;
    }

    // Picks a stable-but-unpredictable subset of item ids to challenge for evidence even though they PASS.
    function pickRandomChallengeIds(itemIds, rate, seedString) {
        const rng = mulberry32(hashStringToSeed(String(seedString)));
        const shuffled = itemIds.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        const count = Math.max(1, Math.round(itemIds.length * rate));
        return shuffled.slice(0, count);
    }

    function compressImage(file, options, callback) {
        const { maxDimension = 900, quality = 0.6 } = options || {};
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
                canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                callback(canvas.toDataURL('image/jpeg', quality));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // ── EVIDENCE RULES ──
    // Determines whether a checkpoint requires evidence, and why, given current status + config.
    function evidenceReasonFor(item, config, challengeIds) {
        if (item.status === 'FAIL') return 'FAIL';
        if (item.status === 'PASS' && (config.highRiskCategories || []).includes(item.adc)) return 'HIGH_RISK';
        if (item.status === 'PASS' && challengeIds && challengeIds.has(item.id)) return 'RANDOM';
        return null;
    }

    // ── AUDIT LOG (bounded, append-only) ──
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
        return { load, push };
    }

    // ── INTEGRITY HEURISTIC (best-effort, client-side only - never blocks completion) ──
    function computeIntegritySummary(auditLog) {
        const answerEvents = auditLog.filter((e) => e.type === 'ANSWER_CHECK').sort((a, b) => a.timestamp - b.timestamp);
        if (answerEvents.length < 20) return { status: 'NORMAL', reasons: [] };
        const gaps = [];
        for (let i = 1; i < answerEvents.length; i++) {
            gaps.push(answerEvents[i].timestamp - answerEvents[i - 1].timestamp);
        }
        gaps.sort((a, b) => a - b);
        const median = gaps[Math.floor(gaps.length / 2)];
        const reasons = [];
        let status = 'NORMAL';
        if (median < 800) {
            status = 'SUSPICIOUS';
            reasons.push(`Median time between answers is ${median}ms across ${answerEvents.length} checkpoints - unusually fast.`);
        } else if (median < 1500) {
            status = 'REVIEW';
            reasons.push(`Median time between answers is ${median}ms - faster than typical, recommend spot-check.`);
        }
        return { status, reasons };
    }

    // ── COMPLETION VALIDATION GATE ──
    function validateCompletion(items, config, challengeIds) {
        const reasons = [];
        const unanswered = items.filter((i) => !i.status);
        if (unanswered.length > 0) reasons.push(`${unanswered.length} checkpoint(s) not yet answered.`);

        const missingEvidence = items.filter((i) => i.evidenceRequired && !i.evidenceCaptured);
        if (missingEvidence.length > 0) reasons.push(`${missingEvidence.length} checkpoint(s) require evidence that has not been captured.`);

        if (challengeIds && challengeIds.size) {
            const unresolvedChallenges = items.filter((i) => challengeIds.has(i.id) && i.status === 'PASS' && !i.evidenceCaptured);
            if (unresolvedChallenges.length > 0) reasons.push(`${unresolvedChallenges.length} random evidence challenge(s) not completed.`);
        }

        if (config && config.checklistVersion && config.recordedChecklistVersion && config.checklistVersion !== config.recordedChecklistVersion) {
            reasons.push('Checklist version mismatch - inspection was started on a different checklist revision.');
        }

        return { ok: reasons.length === 0, reasons };
    }

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
        mulberry32,
        hashStringToSeed,
        pickRandomChallengeIds,
        compressImage,
        evidenceReasonFor,
        createAuditLog,
        computeIntegritySummary,
        validateCompletion
    };
})(window);
