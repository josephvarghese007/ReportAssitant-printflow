// Road Test module - configuration/data-driven instance of the same inspection engine used by Static PDI.
// Mirrors script.js's structure/UX (accordion groups, stats, filters, modal/toast, timer, print report)
// but is driven by roadTestChecklist (road-test-data.js) and uses its own 'rt-' localStorage namespace.

// ─── DATA / CONFIG ───
const ROAD_TEST_CONFIG = {
    storagePrefix: 'rt-',
    checklistVersion: (typeof CHECKLIST_VERSION !== 'undefined' ? CHECKLIST_VERSION : 'unknown'),
    highRiskCategories: [
        '007-Braking  System Assembly-BSA',
        '005-Steering System-RHD-SSR',
        '014-Safety & Control Systems-SCS'
    ],
    randomEvidenceRate: 0.06,
    reportTitle: 'ROAD TEST INSPECTION REPORT'
};

// ─── STATE ───
let inspectionItems = [];
let currentFilter = 'all';
let searchQuery = '';
let currentlyOpenGroup = null;
let modalPreviouslyFocused = null;
let challengeIds = new Set();

let inspectionMeta = {
    inspectionId: '',
    registration: '',
    vin: '',
    model: '',
    customer: '',
    inspector: '',
    date: '',
    location: ''
};

const auditLog = InspectionEngine.createAuditLog('rt-audit-log');
const timer = InspectionEngine.createTimer({
    storageKey: 'rt-timer-state',
    mode: 'countup',
    onTick: ({ displayMs }) => updateTimerDisplay(displayMs)
});

function generateInspectionId() {
    const now = new Date();
    const dateStr = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');
    const seq = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
    return 'RT-' + dateStr + '-' + seq;
}

// ─── META ───
function loadInspectionMeta() {
    const saved = InspectionEngine.safeGetJSON('rt-inspection-meta', null);
    if (saved && typeof saved === 'object') {
        inspectionMeta = { ...inspectionMeta, ...saved };
    }
    if (!inspectionMeta.inspectionId) inspectionMeta.inspectionId = generateInspectionId();
    if (!inspectionMeta.date) inspectionMeta.date = new Date().toISOString().slice(0, 10);
    populateMetaFields();
}

function populateMetaFields() {
    const fields = {
        'infoInspectionId': 'inspectionId',
        'infoRegNumber': 'registration',
        'infoVin': 'vin',
        'infoModel': 'model',
        'infoCustomer': 'customer',
        'infoInspector': 'inspector',
        'infoDate': 'date',
        'infoLocation': 'location'
    };
    for (const [elId, key] of Object.entries(fields)) {
        const el = document.getElementById(elId);
        if (el) el.value = inspectionMeta[key] || '';
    }
}

function saveInspectionMeta() {
    const fields = {
        'infoRegNumber': 'registration',
        'infoVin': 'vin',
        'infoModel': 'model',
        'infoCustomer': 'customer',
        'infoInspector': 'inspector',
        'infoDate': 'date',
        'infoLocation': 'location'
    };
    for (const [elId, key] of Object.entries(fields)) {
        const el = document.getElementById(elId);
        if (el) inspectionMeta[key] = el.value;
    }
    InspectionEngine.safeSetJSON('rt-inspection-meta', inspectionMeta);
}

function setupMetaListeners() {
    document.querySelectorAll('#inspectionInfoBody input').forEach((input) => {
        input.addEventListener('change', saveInspectionMeta);
        input.addEventListener('blur', saveInspectionMeta);
    });
}

let inspectionInfoOpen = true;
function toggleInspectionInfo() {
    inspectionInfoOpen = !inspectionInfoOpen;
    const body = document.getElementById('inspectionInfoBody');
    const toggle = document.getElementById('inspectionInfoToggle');
    if (body) body.style.display = inspectionInfoOpen ? 'grid' : 'none';
    if (toggle) toggle.style.transform = inspectionInfoOpen ? 'rotate(180deg)' : 'rotate(0)';
}

// ─── SAVE / STORAGE ───
function saveToLocalStorage() {
    InspectionEngine.safeSetJSON('rt-inspection-items', inspectionItems, () => {
        showToast('⚠️ Storage full. Some photo attachments may be too large.', 'error');
    });
}

function saveChallengeIds() {
    InspectionEngine.safeSetJSON('rt-challenge-ids', Array.from(challengeIds));
}

function compressImage(file, callback) {
    InspectionEngine.compressImage(file, { maxDimension: 900, quality: 0.6 }, callback);
}

// ─── INIT ───
function init() {
    initTheme();
    setupEventListeners();
    setupMetaListeners();
    loadInspectionMeta();

    const savedItems = InspectionEngine.safeGetJSON('rt-inspection-items', null);
    const savedChallenges = InspectionEngine.safeGetJSON('rt-challenge-ids', null);
    if (Array.isArray(savedItems) && savedItems.length > 0) {
        openModal('Resume Road Test?', `
            <p>We found an in-progress Road Test inspection from your previous session.</p>
            <p style="margin-top:8px">Would you like to <strong>Resume</strong> it or <strong>Start Fresh</strong>?</p>
        `, () => {
            inspectionItems = savedItems;
            challengeIds = new Set(Array.isArray(savedChallenges) ? savedChallenges : []);
            timer.start(timer.load());
            renderGroups();
            updateStats();
            auditLog.push('RESUME', {});
            showToast('📂 Previous Road Test session restored', 'success');
        }, {
            confirmText: 'Resume',
            cancelText: 'Start Fresh',
            onCancel: () => startFreshSession()
        });
        return;
    }

    startFreshSession();
}

function startFreshSession() {
    inspectionItems = roadTestChecklist.map((item, index) => ({
        ...item,
        id: index,
        status: '',
        photo: null,
        remarks: '',
        evidenceRequired: false,
        evidenceCaptured: false,
        history: []
    }));
    inspectionMeta = {
        inspectionId: generateInspectionId(),
        registration: '',
        vin: '',
        model: '',
        customer: '',
        inspector: '',
        date: new Date().toISOString().slice(0, 10),
        location: ''
    };
    // Random evidence challenge is generated once per inspection and persisted so refresh doesn't reshuffle it.
    const allIds = inspectionItems.map((i) => i.id);
    challengeIds = new Set(InspectionEngine.pickRandomChallengeIds(allIds, ROAD_TEST_CONFIG.randomEvidenceRate, inspectionMeta.inspectionId));
    saveChallengeIds();

    populateMetaFields();
    saveInspectionMeta();
    saveToLocalStorage();
    timer.resetTimer();
    auditLog.push('START', { inspectionId: inspectionMeta.inspectionId });
    renderGroups();
    updateStats();
}

function confirmReset() {
    openModal('Reset Road Test?', `
        <p>Are you sure you want to reset all Road Test checkpoints, photos, and remarks?</p>
        <p style="color:var(--danger);margin-top:8px;">⚠️ This action cannot be undone unless you have exported your data.</p>
    `, () => {
        startFreshSession();
        showToast('↩️ Road Test reset successful', 'info');
    }, { confirmText: 'Reset All', cancelText: 'Cancel' });
}

// ─── GROUP DATA (shared engine - any-match filter visibility) ───
function buildGroups() {
    return InspectionEngine.buildGroups(inspectionItems, 'adc');
}

function getFilteredGroups() {
    const groups = buildGroups();
    return InspectionEngine.getFilteredGroups(groups, currentFilter, searchQuery, ['picp', 'pdc', 'sadc', 'pldc', 'method', 'spec']);
}

function escapeHtml(value = '') {
    return InspectionEngine.escapeHtml(value);
}

// ─── RENDER GROUPS ───
function renderGroups() {
    const container = document.getElementById('groupList');
    const groups = getFilteredGroups();

    container.innerHTML = groups.map((group) => {
        const isOpen = currentlyOpenGroup === group.adc;
        const total = group.items.length;
        const pct = total > 0 ? Math.round((group.passCount / total) * 100) : 0;
        const fgClass = group.failCount > 0 ? 'fg-fail' : (pct === 100 ? 'fg-pass' : 'fg-partial');
        const circumference = 2 * Math.PI * 18;
        const offset = circumference * (1 - pct / 100);

        const itemsHtml = isOpen ? group.items.map((item) => {
            const isFail = item.status === 'FAIL';
            const reason = InspectionEngine.evidenceReasonFor(item, ROAD_TEST_CONFIG, challengeIds);
            const showEvidence = isFail || item.evidenceRequired || !!item.photo;
            const evidenceTagHtml = item.evidenceRequired
                ? `<span class="stat-chip fail-chip" title="Evidence required (${escapeHtml(reason || 'RANDOM')})"><i class="fas fa-camera" aria-hidden="true"></i> Evidence required</span>`
                : '';
            return `
                <div class="checklist-item">
                    <div class="item-main">
                        <div class="item-pdc">${escapeHtml(item.pdc)} ${evidenceTagHtml}</div>
                        <div class="item-question">${escapeHtml(item.picp)}</div>
                        <div class="item-detail">
                            <span>Method: ${escapeHtml(item.method)}</span>
                            <span>Spec: ${escapeHtml(item.spec)}</span>
                        </div>
                        ${showEvidence ? `
                        <div class="evidence-section">
                            <label class="photo-upload-label" for="photo-${item.id}"><i class="fas fa-camera"></i> ${item.photo ? 'Replace' : 'Add'} evidence photo</label>
                            <input type="file" id="photo-${item.id}" accept="image/*" capture="environment" onchange="handlePhoto(${item.id}, this)" />
                            <img class="photo-preview-fail ${item.photo ? 'visible' : ''}" id="preview-${item.id}" src="${item.photo || ''}" alt="evidence" loading="lazy" />
                        </div>
                        <textarea class="evidence-remarks" placeholder="Add remarks, defect details, or test notes..." oninput="updateRemarks(${item.id}, this.value)">${escapeHtml(item.remarks || '')}</textarea>
                        ` : ''}
                    </div>
                    <div class="item-actions">
                        <button type="button" class="status-btn btn-pass ${item.status === 'PASS' ? 'active' : ''}" onclick="setStatus(${item.id}, 'PASS')" aria-pressed="${item.status === 'PASS'}" aria-label="Mark ${escapeHtml(item.picp)} as pass">
                            <i class="fas fa-check" aria-hidden="true"></i>
                        </button>
                        <button type="button" class="status-btn btn-fail ${isFail ? 'active' : ''}" onclick="setStatus(${item.id}, 'FAIL')" aria-pressed="${isFail}" aria-label="Mark ${escapeHtml(item.picp)} as fail">
                            <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('') : '';

        const contentId = `group-content-${group.adc.replace(/[^a-zA-Z0-9_-]/g, '-')}`;
        return `
            <div class="group-card">
                <div class="group-header" role="button" tabindex="0" aria-expanded="${isOpen}" aria-controls="${contentId}" onclick="toggleGroup('${group.adc}')" onkeydown="handleGroupKeyDown(event, '${group.adc}')">
                    <div class="group-info">
                        <div class="group-title">
                            ${group.adc}
                            <span class="badge">${group.items.length}</span>
                        </div>
                        <div class="group-meta">
                            <span class="stat-chip pass-chip"><i class="fas fa-check-circle" aria-hidden="true"></i> ${group.passCount}</span>
                            <span class="stat-chip fail-chip"><i class="fas fa-times-circle" aria-hidden="true"></i> ${group.failCount}</span>
                            <span class="stat-chip pend-chip"><i class="fas fa-minus-circle" aria-hidden="true"></i> ${group.pendCount}</span>
                        </div>
                    </div>
                    <div class="group-progress">
                        <svg viewBox="0 0 44 44">
                            <circle class="bg" cx="22" cy="22" r="18" />
                            <circle class="${fgClass}" cx="22" cy="22" r="18" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
                        </svg>
                        <div class="progress-text">${pct}%</div>
                    </div>
                    <i class="fas fa-chevron-down group-toggle ${isOpen ? 'open' : ''}"></i>
                </div>
                <div class="group-content ${isOpen ? 'open' : ''}">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }).join('');
}

function toggleGroup(adc) {
    currentlyOpenGroup = currentlyOpenGroup === adc ? null : adc;
    renderGroups();
}

function handleGroupKeyDown(event, adc) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleGroup(adc);
    }
}

// ─── STATUS / EVIDENCE WORKFLOW ───
function setStatus(id, status) {
    const item = inspectionItems.find((i) => i.id === id);
    if (!item) return;

    if (status === 'PASS' && item.status === 'PASS') status = '';
    else if (status === 'FAIL' && item.status === 'FAIL') status = '';

    if (!status) {
        applyStatus(item, '');
        return;
    }

    const reason = status === 'FAIL' ? 'FAIL' : InspectionEngine.evidenceReasonFor({ ...item, status }, ROAD_TEST_CONFIG, challengeIds);

    if (reason) {
        let pendingPhoto = null;
        const reasonText = {
            FAIL: 'Evidence is mandatory for failed checkpoints.',
            HIGH_RISK: 'This is a high-risk checkpoint - evidence is required even though it passed.',
            RANDOM: 'This checkpoint was randomly selected for an evidence integrity check.'
        }[reason];
        const modalHtml = `
            <div>Mark <strong>${escapeHtml(item.picp)}</strong> as <strong>${status}</strong>.</div>
            <div style="margin-top:8px;color:var(--text-secondary,inherit)">${escapeHtml(reasonText)}</div>
            <div style="margin-top:8px">
                <label for="modal-photo-input" class="photo-upload-label">Upload evidence photo<span style="color:var(--danger)"> *</span></label>
                <input type="file" id="modal-photo-input" accept="image/*" capture="environment" />
                <div><img id="modal-photo-preview" class="photo-preview-fail" src="" alt="evidence preview" style="display:none;margin-top:8px;max-width:160px;"/></div>
            </div>
            <div style="margin-top:8px">
                <textarea id="modal-remarks" placeholder="Add remarks (optional)" style="width:100%;min-height:80px;border-radius:8px;border:1px solid var(--border);padding:8px;font:inherit"></textarea>
            </div>
        `;
        auditLog.push('EVIDENCE_REQUIRED', { itemId: item.id, reason });
        openModal(`Confirm ${status === 'FAIL' ? 'Fail' : 'Pass'}`, modalHtml, () => {
            item.evidenceRequired = true;
            if (pendingPhoto) {
                item.photo = pendingPhoto;
                item.evidenceCaptured = true;
                auditLog.push('EVIDENCE_CAPTURED', { itemId: item.id, reason, timestamp: Date.now() });
            }
            const modalRemarks = document.getElementById('modal-remarks');
            if (modalRemarks) item.remarks = modalRemarks.value;
            applyStatus(item, status, reason);
        }, {
            requirePhoto: true,
            onPendingPhoto: (base64) => { pendingPhoto = base64; },
            onCancel: () => { pendingPhoto = null; }
        });
        return;
    }

    applyStatus(item, status, null);
}

function applyStatus(item, status, reason) {
    if (item.status && item.status !== status) {
        if (!item.history) item.history = [];
        item.history.push({ status: item.status, timestamp: new Date().toISOString(), remark: item.remarks || '', photo: item.photo || null });
    }
    item.status = status;
    if (status) {
        auditLog.push('ANSWER_CHECK', { itemId: item.id, result: status });
        if (status === 'FAIL') auditLog.push('FAIL_RECORDED', { itemId: item.id });
    }
    timer.markActivity();
    saveToLocalStorage();
    renderGroups();
    updateStats();
    const msg = status === 'PASS' ? '✅ Marked PASS' : status === 'FAIL' ? '❌ Marked FAIL' : '↩️ Status cleared';
    const type = status === 'PASS' ? 'success' : status === 'FAIL' ? 'error' : 'info';
    if (status === 'FAIL') showToast('⚠️ Failed! Evidence photo captured.', 'error');
    else showToast(msg, type);
}

function handlePhoto(id, input) {
    const file = input.files[0];
    if (!file) return;
    compressImage(file, (compressedBase64) => {
        const item = inspectionItems.find((i) => i.id === id);
        if (!item) return;
        item.photo = compressedBase64;
        item.evidenceCaptured = true;
        auditLog.push('EVIDENCE_CAPTURED', { itemId: item.id, timestamp: Date.now() });
        saveToLocalStorage();
        renderGroups();
        showToast('📸 Evidence photo compressed & saved', 'success');
    });
}

function updateRemarks(id, value) {
    const item = inspectionItems.find((i) => i.id === id);
    if (!item) return;
    item.remarks = value;
    saveToLocalStorage();
}

// ─── STATS ───
function updateStats() {
    const counters = InspectionEngine.computeCounters(inspectionItems);
    document.getElementById('totalCount').textContent = counters.total;
    document.getElementById('passedCount').textContent = counters.passed;
    document.getElementById('failedCount').textContent = counters.failed;
    document.getElementById('pendingCount').textContent = counters.pending;
}

// ─── EVENTS ───
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const debouncedRender = InspectionEngine.debounce(renderGroups, 250);
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        debouncedRender();
    });

    document.querySelectorAll('.filter-tabs .tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tabs .tab').forEach((t) => {
                t.classList.remove('active');
                t.setAttribute('aria-pressed', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-pressed', 'true');
            const map = { All: 'all', Pass: 'pass', Fail: 'fail', Pending: 'pending' };
            currentFilter = map[tab.textContent.trim()] || 'all';
            renderGroups();
        });
    });
}

// ─── TOAST ───
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    toast.innerHTML = `
        <i class="fas ${icons[type] || icons.info}"></i>
        <span>${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => { if (toast.parentElement) toast.remove(); }, 5000);
}

// ─── MODAL ───
let modalCallback = null;

function openModal(title, message, onConfirm, options = {}) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').innerHTML = message;
    document.getElementById('modalOverlay').classList.add('open');
    modalCallback = onConfirm;
    modalPreviouslyFocused = document.activeElement;
    const confirmBtn = document.getElementById('modalConfirmBtn');
    const cancelBtn = document.querySelector('#modalOverlay .modal-actions .btn-outline');

    confirmBtn.textContent = options.confirmText || 'Confirm';
    cancelBtn.textContent = options.cancelText || 'Cancel';

    if (options.requirePhoto) {
        confirmBtn.disabled = true;
        confirmBtn.setAttribute('aria-disabled', 'true');
        const modalInput = document.getElementById('modal-photo-input');
        const preview = document.getElementById('modal-photo-preview');
        if (modalInput) {
            modalInput.addEventListener('change', (e) => {
                const f = e.target.files[0];
                if (!f) return;
                compressImage(f, (compressedBase64) => {
                    if (options.onPendingPhoto) options.onPendingPhoto(compressedBase64);
                    if (preview) { preview.src = compressedBase64; preview.style.display = 'block'; }
                    confirmBtn.disabled = false;
                    confirmBtn.removeAttribute('aria-disabled');
                });
            });
        }
    } else {
        confirmBtn.disabled = false;
        confirmBtn.removeAttribute('aria-disabled');
    }

    const callback = modalCallback;
    confirmBtn.onclick = () => { closeModal(); if (callback) callback(); };
    cancelBtn.onclick = () => { closeModal(); if (options.onCancel) options.onCancel(); };
    document.addEventListener('keydown', handleModalKeydown);
    confirmBtn.focus();
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    modalCallback = null;
    document.removeEventListener('keydown', handleModalKeydown);
    if (modalPreviouslyFocused && modalPreviouslyFocused.focus) modalPreviouslyFocused.focus();
}

function handleModalKeydown(event) {
    if (event.key === 'Escape') { event.preventDefault(); closeModal(); return; }
    if (event.key !== 'Tab') return;
    const modal = document.querySelector('#modalOverlay .modal');
    const focusable = Array.from(modal.querySelectorAll('button'));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && active === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && active === last) { event.preventDefault(); first.focus(); }
}

// ─── VALIDATION GATE ───
function runCompletionValidation() {
    return InspectionEngine.validateCompletion(inspectionItems, ROAD_TEST_CONFIG, challengeIds);
}

// ─── EXPORT / REPORT ───
function exportPDF() {
    saveInspectionMeta();
    if (!inspectionMeta.inspectionId) {
        showToast('⚠️ Please ensure inspection info is filled', 'error');
        return;
    }
    const validation = runCompletionValidation();
    if (!validation.ok) {
        openModal('Inspection Incomplete', `
            <p>The following items are outstanding:</p>
            <ul style="margin-top:8px;padding-left:18px;">${validation.reasons.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
            <p style="margin-top:8px">You can still export a draft report marked INCOMPLETE, or go back and finish these items.</p>
        `, () => generateAndPrint(), { confirmText: 'Export Anyway', cancelText: 'Go Back' });
        return;
    }
    generateAndPrint();
}

function generateAndPrint() {
    auditLog.push('COMPLETE', {});
    timer.complete();
    document.getElementById('printReport').innerHTML = generatePrintReport();
    window.print();
    showToast('📄 PDF print dialog opened', 'info');
}

function generatePrintReport() {
    const allGroups = buildGroups();
    const counters = InspectionEngine.computeCounters(inspectionItems);
    const integrity = InspectionEngine.computeIntegritySummary(auditLog.load());
    const timerState = timer.load();
    const durationMs = timer.elapsedMs(timerState);

    let finalResult = 'INCOMPLETE';
    let finalResultClass = 'result-pending';
    if (counters.pending === 0 && counters.failed === 0) { finalResult = 'PASS'; finalResultClass = 'result-pass'; }
    else if (counters.failed > 0) { finalResult = 'FAIL'; finalResultClass = 'result-fail'; }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });

    let html = `
        <div class="report-page">
            <div class="report-header-block">
                <img src="../bustech-logo.png" alt="BusTech Logo" class="report-logo" />
                <h1>${escapeHtml(ROAD_TEST_CONFIG.reportTitle)}</h1>
                <div class="report-meta-line">
                    <span>Inspection Type: <strong>Road Test</strong></span>
                    <span>Checklist Version: <strong>${escapeHtml(ROAD_TEST_CONFIG.checklistVersion)}</strong></span>
                    <span>Inspection ID: <strong>${escapeHtml(inspectionMeta.inspectionId)}</strong></span>
                    <span>Date: <strong>${escapeHtml(inspectionMeta.date || dateStr)}</strong></span>
                    <span>Time: <strong>${timeStr}</strong></span>
                    <span>Inspector: <strong>${escapeHtml(inspectionMeta.inspector || 'N/A')}</strong></span>
                    <span>Duration: <strong>${InspectionEngine.formatDuration(durationMs)}</strong></span>
                    <span>Integrity: <strong>${escapeHtml(integrity.status)}</strong></span>
                </div>
            </div>

            <div class="report-section">
                <h2>Vehicle Information</h2>
                <table class="report-info-table">
                    <tr><td>Registration Number</td><td>${escapeHtml(inspectionMeta.registration || 'N/A')}</td></tr>
                    <tr><td>VIN / Chassis Number</td><td>${escapeHtml(inspectionMeta.vin || 'N/A')}</td></tr>
                    <tr><td>Vehicle Model</td><td>${escapeHtml(inspectionMeta.model || 'N/A')}</td></tr>
                    <tr><td>Customer / Company</td><td>${escapeHtml(inspectionMeta.customer || 'N/A')}</td></tr>
                    <tr><td>Inspection Location</td><td>${escapeHtml(inspectionMeta.location || 'N/A')}</td></tr>
                </table>
            </div>

            <div class="report-section">
                <h2>Inspection Summary</h2>
                <div class="report-summary-grid">
                    <div class="report-summary-item">Total Checkpoints: <strong>${counters.total}</strong></div>
                    <div class="report-summary-item report-pass">PASS: <strong>${counters.passed}</strong></div>
                    <div class="report-summary-item report-fail">FAIL: <strong>${counters.failed}</strong></div>
                    <div class="report-summary-item report-pending">PENDING: <strong>${counters.pending}</strong></div>
                    <div class="report-summary-item">Evidence Captured: <strong>${counters.evidenceCompleted} / ${counters.evidenceRequired}</strong></div>
                </div>
                <div class="report-final-result ${finalResultClass}">
                    FINAL RESULT: <strong>${finalResult}</strong>
                </div>
            </div>
    `;

    html += `<div class="report-section"><h2>Inspection Details</h2>`;
    for (const group of allGroups) {
        html += `<div class="report-group">
            <h3 class="report-group-title">${escapeHtml(group.adc)}</h3>
            <div class="report-group-stats">Pass: ${group.passCount} | Fail: ${group.failCount} | Pending: ${group.pendCount}</div>`;
        for (const item of group.items) {
            const statusText = item.status || 'PENDING';
            const statusClass = item.status === 'PASS' ? 'status-pass' : item.status === 'FAIL' ? 'status-fail' : 'status-pending';
            html += `<div class="report-checkpoint">
                <div class="report-checkpoint-header">
                    <span class="report-pdc">${escapeHtml(item.pdc)}</span>
                    <span class="report-status ${statusClass}">${statusText}</span>
                </div>
                <div class="report-checkpoint-desc">${escapeHtml(item.picp)}</div>
                <div class="report-checkpoint-detail">
                    <span>Method: ${escapeHtml(item.method)}</span>
                    <span>Spec: ${escapeHtml(item.spec)}</span>
                </div>`;
            if (item.remarks) html += `<div class="report-remarks">Remarks: ${escapeHtml(item.remarks)}</div>`;
            if (item.photo) html += `<div class="report-evidence-photo"><img src="${item.photo}" alt="Evidence photo" /></div>`;
            else if (item.evidenceRequired) html += `<div class="report-no-photo">⚠️ Required evidence photo missing</div>`;
            html += `</div>`;
        }
        html += `</div>`;
    }
    html += `</div>`;

    const failedItems = inspectionItems.filter((i) => i.status === 'FAIL');
    if (failedItems.length > 0) {
        html += `<div class="report-section report-evidence-section"><h2>Failure Evidence Summary</h2>`;
        for (const item of failedItems) {
            html += `<div class="report-evidence-block">
                <div class="report-evidence-header">
                    <span class="report-status status-fail">FAIL</span>
                    <strong>${escapeHtml(item.picp)}</strong>
                    <span class="report-pdc">${escapeHtml(item.pdc)}</span>
                </div>`;
            if (item.remarks) html += `<div class="report-remarks">Remark: ${escapeHtml(item.remarks)}</div>`;
            if (item.photo) html += `<div class="report-evidence-photo"><img src="${item.photo}" alt="Evidence" /></div>`;
            else html += `<div class="report-no-photo">⚠️ Evidence photo missing</div>`;
            html += `</div>`;
        }
        html += `</div>`;
    }

    if (integrity.reasons.length > 0) {
        html += `<div class="report-section"><h2>Integrity Notes (informational only)</h2><ul>${integrity.reasons.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}</ul></div>`;
    }

    html += `
            <div class="report-footer">
                <div>Inspection ID: ${escapeHtml(inspectionMeta.inspectionId)} | Generated: ${dateStr} ${timeStr}</div>
                <div>Registration: ${escapeHtml(inspectionMeta.registration || 'N/A')} | VIN: ${escapeHtml(inspectionMeta.vin || 'N/A')}</div>
            </div>
        </div>
    `;
    return html;
}

function exportCSV() {
    const rows = [['PDC', 'ADC', 'SADC', 'PLDC', 'Checkpoint', 'Method', 'Spec', 'Status', 'Remarks']];
    inspectionItems.forEach((item) => {
        rows.push([item.pdc, item.adc, item.sadc, item.pldc, item.picp, item.method, item.spec, item.status || 'PENDING', item.remarks]);
    });
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `RoadTest_Report_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
    showToast('📊 CSV exported', 'success');
}

function saveJSON() {
    saveInspectionMeta();
    const data = JSON.stringify({
        inspectionType: 'Road Test',
        checklistVersion: ROAD_TEST_CONFIG.checklistVersion,
        inspectionId: inspectionMeta.inspectionId,
        vehicle: { registration: inspectionMeta.registration, vin: inspectionMeta.vin, model: inspectionMeta.model, customer: inspectionMeta.customer },
        inspector: { name: inspectionMeta.inspector },
        date: inspectionMeta.date,
        location: inspectionMeta.location,
        items: inspectionItems
    }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `RoadTest_Save_${inspectionMeta.inspectionId || new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
    showToast('💾 Editable JSON saved', 'success');
}

function importJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported && typeof imported === 'object' && !Array.isArray(imported) && Array.isArray(imported.items)) {
                if (!validateItems(imported.items)) { showToast('❌ Invalid inspection items in file', 'error'); return; }
                inspectionItems = imported.items;
                if (imported.inspectionId) inspectionMeta.inspectionId = imported.inspectionId;
                if (imported.vehicle) {
                    inspectionMeta.registration = imported.vehicle.registration || '';
                    inspectionMeta.vin = imported.vehicle.vin || '';
                    inspectionMeta.model = imported.vehicle.model || '';
                    inspectionMeta.customer = imported.vehicle.customer || '';
                }
                if (imported.inspector) inspectionMeta.inspector = imported.inspector.name || '';
                if (imported.date) inspectionMeta.date = imported.date;
                if (imported.location) inspectionMeta.location = imported.location;
                populateMetaFields();
                saveInspectionMeta();
            } else if (Array.isArray(imported) && imported.length > 0) {
                if (!validateItems(imported)) { showToast('❌ Invalid file format', 'error'); return; }
                inspectionItems = imported;
            } else {
                showToast('❌ Invalid file format', 'error');
                return;
            }
            saveToLocalStorage();
            renderGroups();
            updateStats();
            showToast('📂 Data loaded successfully', 'success');
        } catch (err) {
            showToast('❌ Error parsing file', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function validateItems(items) {
    if (!Array.isArray(items) || items.length === 0) return false;
    const first = items[0];
    if (first.id === undefined || typeof first.pdc !== 'string' || typeof first.adc !== 'string') return false;
    for (const item of items) {
        if (typeof item.id !== 'number') return false;
        if (typeof item.status !== 'string' && item.status !== undefined && item.status !== '') return false;
    }
    return true;
}

// ─── THEME ───
function scanQR() {
    showToast('📷 QR scanner placeholder (html5-qrcode integration ready)', 'info');
}

function getStoredTheme() {
    return localStorage.getItem('rt-theme') || 'light';
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('rt-theme', theme);
    const icon = document.querySelector('.app-header .header-actions button[title="Theme"] i');
    if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleDarkMode() {
    const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    renderGroups();
    showToast(nextTheme === 'dark' ? '🌙 Dark mode enabled' : '☀️ Light mode enabled', 'info');
}

function initTheme() {
    applyTheme(getStoredTheme());
}

// ─── TIMER (elapsed count-up, timestamp-based - survives refresh/backgrounding/sleep) ──
function updateTimerDisplay(displayMs) {
    const displayEl = document.getElementById('timerDisplay');
    if (displayEl) displayEl.textContent = InspectionEngine.formatDuration(displayMs != null ? displayMs : timer.elapsedMs());
}

function updateTimerControls(isRunning) {
    const controlBtn = document.getElementById('timerControlBtn');
    if (controlBtn) {
        controlBtn.innerHTML = isRunning ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        controlBtn.title = isRunning ? 'Pause Timer' : 'Resume Timer';
    }
}

function toggleTimer() {
    const state = timer.load();
    if (state && state.pausedAt) {
        timer.resume();
        auditLog.push('RESUME', {});
        updateTimerControls(true);
        showToast('▶️ Timer resumed', 'info');
    } else {
        timer.pause();
        auditLog.push('PAUSE', {});
        updateTimerControls(false);
        showToast('⏸️ Timer paused', 'info');
    }
}

function resetTimer() {
    timer.resetTimer();
    updateTimerControls(true);
}

// ─── SERVICE WORKER REGISTRATION (shared with Static PDI - scope covers both apps) ──
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../service-worker.js')
            .then((reg) => console.log('Service Worker registered successfully!', reg.scope))
            .catch((err) => console.log('Service Worker registration failed:', err));
    });
}

// ─── START ───
document.addEventListener('DOMContentLoaded', () => {
    validateChecklistData(roadTestChecklist);
    init();
    timer.start(timer.load());
    updateTimerControls(true);
});
