// ═══════════════════════════════════════════════════════════════
// BUSTECH ENGINEERING · DYNAMIC ROAD TEST CONTROLLER
// High-Speed, Track & Proving Ground Dynamic Verification Suite
// ═══════════════════════════════════════════════════════════════

// ─── STATE ───
let inspectionItems = [];
let currentFilter = 'all';
let searchQuery = '';
let currentlyOpenGroup = null;
let autoAdvanceEnabled = true;
let modalPreviouslyFocused = null;

let inspectorSigPad = null;
let supervisorSigPad = null;
let signatures = {
    inspector: null,
    supervisor: null,
    signedAt: null
};

let qrStream = null;

// ─── INSPECTION METADATA ───
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

const ROAD_TEST_DEFECT_TAGS = [
    'Braking Pull / Shudder',
    'Steering Drift / Vibration',
    'Transmission Jerk / Slipping',
    'Excessive Powertrain NVH',
    'Turbo Boost Lag / Abnormal Whine',
    'Suspension Knock / Bottoming',
    'Driveline Resonance at Speed',
    'Dashboard Warning Light Active',
    'Post-Drive Fluid Leakage Detected',
    'Engine Temperature Elevated Under Load'
];

function generateInspectionId() {
    const now = new Date();
    const dateStr = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');
    const seq = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
    return 'RT-' + dateStr + '-' + seq;
}

// ─── META PERSISTENCE ───
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

let inspectionInfoOpen = false;
function toggleInspectionInfo() {
    inspectionInfoOpen = !inspectionInfoOpen;
    const body = document.getElementById('inspectionInfoBody');
    const toggle = document.getElementById('inspectionInfoToggle');
    if (body) {
        if (inspectionInfoOpen) body.classList.remove('collapsed');
        else body.classList.add('collapsed');
    }
    if (toggle) {
        if (inspectionInfoOpen) toggle.classList.add('open');
        else toggle.classList.remove('open');
    }
}

function openInspectionInfoIfNeeded() {
    if (!inspectionInfoOpen) {
        toggleInspectionInfo();
    }
    const sec = document.getElementById('inspectionInfoSection');
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── LOCAL STORAGE ───
function saveToLocalStorage() {
    InspectionEngine.safeSetJSON('rt-inspection-items', inspectionItems, () => {
        showToast('⚠️ Storage quota warning - some photos may be large', 'error');
    });
}

function compressImage(file, callback) {
    InspectionEngine.compressImage(file, { maxDimension: 1024, quality: 0.7 }, callback);
}

// ─── INITIALIZATION ───
function init() {
    initTheme();
    setupEventListeners();
    setupMetaListeners();
    loadInspectionMeta();


    const savedAutoAdvance = localStorage.getItem('rt-auto-advance');
    if (savedAutoAdvance !== null) {
        autoAdvanceEnabled = savedAutoAdvance === 'true';
        updateAutoAdvanceButton();
    }

    const savedSignatures = InspectionEngine.safeGetJSON('rt-signatures', null);
    if (savedSignatures) signatures = savedSignatures;

    const savedItems = InspectionEngine.safeGetJSON('rt-inspection-items', null);
    if (Array.isArray(savedItems) && savedItems.length > 0) {
        timer.pause();
        openModal('Resume Road Test?', `
            <p>We found an in-progress Road Test session from your previous run.</p>
            <p style="margin-top:8px;color:var(--text-secondary);">Would you like to <strong>Resume</strong> or <strong>Start Fresh</strong>?</p>
        `, () => {
            inspectionItems = savedItems;
            renderGroups();
            updateStats();
            timer.resume();
            showToast('📂 Road Test session resumed', 'success');
        }, {
            confirmText: 'Resume Session',
            cancelText: 'Start Fresh',
            onCancel: () => startFreshSession()
        });
        return;
    }

    startFreshSession();
}

function startFreshSession() {
    const rawChecklist = (typeof roadTestChecklist !== 'undefined') ? roadTestChecklist : [];
    inspectionItems = rawChecklist.map((item, index) => ({
        ...item,
        id: index,
        status: '',
        photo: null,
        remarks: '',
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
    signatures = { inspector: null, supervisor: null, signedAt: null };
    localStorage.removeItem('rt-signatures');
    localStorage.removeItem('rt-pause-logs');
    populateMetaFields();
    saveInspectionMeta();
    timer.resetTimer();
    timer.start();
    saveToLocalStorage();
    renderGroups();
    updateStats();
    auditLog.clear();
    auditLog.push('ROAD_TEST_START', { inspectionId: inspectionMeta.inspectionId });
}

function confirmReset() {
    openModal('Reset Road Test?', `
        <p>Are you sure you want to reset all road test checkpoints, photos, and remarks?</p>
        <p style="color:var(--danger);margin-top:8px;font-weight:600;">⚠️ This action cannot be undone.</p>
    `, () => {
        startFreshSession();
        showToast('↩️ Road test reset to fresh session', 'info');
    }, { confirmText: 'Reset All', cancelText: 'Cancel' });
}

// ─── GROUP DATA ───
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

    if (groups.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-road"></i>
                <h3>No dynamic test checkpoints found</h3>
                <p>Try adjusting your search query or filter tab.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = groups.map((group) => {
        const total = group.items.length;
        const pct = total > 0 ? Math.round((group.passCount / total) * 100) : 0;
        let fgClass = 'fg';
        if (pct === 100) fgClass += '';
        else if (group.failCount > 0) fgClass += ' fg-fail';
        else fgClass += ' fg-partial';

        const circumference = 2 * Math.PI * 18;
        const offset = circumference - (pct / 100) * circumference;
        const isOpen = currentlyOpenGroup === group.adc;

        const itemsHtml = isOpen ? group.items.map((item) => {
            const isPass = item.status === 'PASS';
            const isFail = item.status === 'FAIL';
            const showEvidence = isFail || item.photo || item.remarks;

            return `
                <div class="item-row ${item.status === 'FAIL' ? 'item-failed' : (item.status === 'PASS' ? 'item-passed' : '')}" id="item-row-${item.id}">
                    <div class="item-info">
                        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:2px;">
                            <div class="item-id">${escapeHtml(item.pdc)} · <span style="color:var(--text-secondary)">${escapeHtml(item.sadc || '')}</span></div>
                            <span class="item-status-pill ${item.status === 'PASS' ? 'pass' : (item.status === 'FAIL' ? 'fail' : 'pending')}">
                                ${item.status === 'PASS' ? '✓ Passed' : (item.status === 'FAIL' ? '✗ Failed' : 'Pending')}
                            </span>
                        </div>
                        <div class="item-title">${escapeHtml(item.picp)}</div>
                        <div class="item-spec"><i class="fas fa-tachometer-alt" style="font-size:0.75rem;opacity:0.7;"></i> ${escapeHtml(item.spec)}</div>
                        <div class="item-evidence ${showEvidence ? 'visible' : ''}">
                            <div class="defect-tags-container" style="margin:2px 0 6px 0;">
                                ${ROAD_TEST_DEFECT_TAGS.slice(0, 5).map(tag =>
                                    `<button type="button" class="defect-tag-pill" onclick="appendInlineDefectTag(${item.id}, '${escapeHtml(tag)}')">${escapeHtml(tag)}</button>`
                                ).join('')}
                            </div>
                            <div class="photo-fail-area">
                                <label for="photo-${item.id}" title="Capture road test photo">
                                    <i class="fas fa-camera"></i>
                                    <span>${item.photo ? 'Retake Photo' : 'Add Photo'}</span>
                                </label>
                                <input type="file" id="photo-${item.id}" accept="image/*" capture="environment" onchange="handlePhoto(${item.id}, this)" />
                                ${item.photo ? `
                                    <div class="photo-preview-wrap">
                                        <img class="photo-preview-fail visible" id="preview-${item.id}" src="${item.photo}" alt="Evidence photo" />
                                        <button type="button" class="btn-remove-photo" title="Remove photo" onclick="removePhoto(${item.id})">&times;</button>
                                    </div>
                                ` : ''}
                            </div>
                            <div class="evidence-remarks-wrap">
                                <textarea class="evidence-remarks" id="remarks-${item.id}" placeholder="Add driving notes, noise RPM, test speed..." oninput="updateRemarks(${item.id}, this.value)">${escapeHtml(item.remarks || '')}</textarea>
                                <button type="button" class="btn-mic-inline" title="Dictate dynamic notes" onclick="dictateForRemarks(${item.id})">
                                    <i class="fas fa-microphone"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="item-actions">
                        <button type="button" class="status-btn btn-pass ${isPass ? 'active' : ''}" onclick="setStatus(${item.id}, 'PASS')" aria-pressed="${isPass}" aria-label="Mark ${escapeHtml(item.picp)} as pass">
                            <i class="fas fa-check"></i>
                        </button>
                        <button type="button" class="status-btn btn-fail ${isFail ? 'active' : ''}" onclick="setStatus(${item.id}, 'FAIL')" aria-pressed="${isFail}" aria-label="Mark ${escapeHtml(item.picp)} as fail">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('') : '';

        return `
            <div class="group-card" id="group-card-${escapeHtml(group.adc).replace(/[^a-zA-Z0-9_-]/g, '-')}">
                <div class="group-header" role="button" tabindex="0" onclick="toggleGroup('${escapeHtml(group.adc)}')">
                    <div class="group-info">
                        <div class="group-title">
                            ${escapeHtml(group.adc)}
                            <span class="badge">${group.items.length} dynamic tests</span>
                        </div>
                        <div class="group-meta">
                            <span class="stat-chip pass-chip"><i class="fas fa-check-circle"></i> ${group.passCount}</span>
                            <span class="stat-chip fail-chip"><i class="fas fa-times-circle"></i> ${group.failCount}</span>
                            <span class="stat-chip pend-chip"><i class="fas fa-circle-notch"></i> ${group.pendCount}</span>
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
    currentlyOpenGroup = (currentlyOpenGroup === adc) ? null : adc;
    renderGroups();
}

// ─── STATUS UPDATES & GUIDED FLOW ───
function setStatus(id, targetStatus) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;

    if (targetStatus === 'FAIL') {
        openFailModal(item);
        return;
    }

    let nextStatus = targetStatus;
    if (item.status === targetStatus) nextStatus = ''; // Toggle off PASS

    applyStatus(item, nextStatus);
}

function clearDefectStatus(id) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;
    
    // Clear out failure data
    item.remarks = '';
    item.photo = null;
    
    closeModal();
    applyStatus(item, '');
}

function applyStatus(item, status) {
    item.status = status;
    saveToLocalStorage();
    renderGroups();
    updateStats();

    auditLog.push('ROAD_TEST_CHECK', { id: item.id, pdc: item.pdc, status });

    if (status === 'PASS') {
        showToast(`✅ Passed: ${item.picp}`, 'success');
        if (autoAdvanceEnabled) advanceToNextPending(item.id);
    } else if (status === 'FAIL') {
        showToast(`❌ Failed: ${item.picp}`, 'error');
        if (autoAdvanceEnabled) advanceToNextPending(item.id);
    } else {
        showToast('↩️ Status cleared', 'info');
    }
}

function openFailModal(item) {
    let pendingPhoto = item.photo || null;
    const defectTagsHtml = ROAD_TEST_DEFECT_TAGS.map(tag =>
        `<button type="button" class="defect-tag-pill" onclick="appendDefectTag('${escapeHtml(tag)}')">${escapeHtml(tag)}</button>`
    ).join('');
    
    const isAlreadyFailed = item.status === 'FAIL';
    
    const modalContent = `
        <div style="font-size:0.95rem;margin-bottom:12px;background:var(--surface-alt);padding:10px;border-radius:var(--radius-sm);border:1px solid var(--border);">
            <div style="font-size:0.75rem;color:var(--text-secondary);text-transform:uppercase;font-weight:700;margin-bottom:2px;">Checkpoint</div>
            <strong style="color:var(--primary);">${escapeHtml(item.picp)}</strong> 
            <span style="font-family:monospace;color:var(--text-tertiary);font-size:0.8rem;">(${escapeHtml(item.pdc)})</span>
            <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;padding-top:4px;border-top:1px dashed var(--border);">
                <strong>Spec:</strong> ${escapeHtml(item.spec)}
            </div>
        </div>

        <label style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;">Quick Defect Category:</label>
        <div class="defect-tags-container" id="modalDefectTags">
            ${defectTagsHtml}
        </div>

        <div style="margin-top:14px;position:relative;">
            <label for="modalFailRemarks" style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;">Defect Details &amp; Observations:</label>
            <div style="position:relative;margin-top:6px;">
                <textarea id="modalFailRemarks" class="evidence-remarks" style="min-height:85px;font-size:0.9rem;" placeholder="Describe the defect or reason for failure...">${escapeHtml(item.remarks || '')}</textarea>
                <button type="button" class="btn-mic-inline" id="modalMicBtn" title="Voice dictation" onclick="dictateForModal()">
                    <i class="fas fa-microphone"></i>
                </button>
            </div>
        </div>

        <div style="margin-top:16px;display:flex;align-items:flex-start;gap:12px;">
            <label class="photo-fail-area" style="flex:1;text-align:center;padding:16px;background:var(--surface-alt);border:1px dashed var(--border-strong);border-radius:var(--radius-sm);transition:all 0.2s;">
                <label for="modalPhotoInput" style="cursor:pointer;display:block;color:var(--primary);font-weight:600;">
                    <i class="fas fa-camera" style="font-size:1.2rem;margin-bottom:6px;display:block;"></i> 
                    ${pendingPhoto ? 'Change Evidence Photo' : 'Capture Evidence Photo'}
                </label>
                <input type="file" id="modalPhotoInput" accept="image/*" capture="environment" style="display:none;" />
            </label>
            <img id="modalPhotoPreview" class="photo-preview-fail" style="display:${pendingPhoto ? 'block' : 'none'};width:80px;height:80px;object-fit:cover;border-radius:var(--radius-sm);border:1px solid var(--border-strong);box-shadow:var(--shadow-sm);" src="${pendingPhoto || ''}" alt="Defect preview" />
        </div>
        
        ${isAlreadyFailed ? `
        <div style="margin-top:16px;text-align:right;">
            <button type="button" class="btn-outline" style="color:var(--text-secondary);border-color:var(--border-strong);" onclick="clearDefectStatus(${item.id})">
                <i class="fas fa-trash-alt"></i> Clear Defect Status
            </button>
        </div>
        ` : ''}
    `;

    openModal('Record Driving Defect', modalContent, () => {
        const remarksEl = document.getElementById('modalFailRemarks');
        if (remarksEl) item.remarks = remarksEl.value;
        if (pendingPhoto) item.photo = pendingPhoto;
        applyStatus(item, 'FAIL');
    }, {
        confirmText: 'Confirm Defect (FAIL)',
        cancelText: 'Cancel'
    });

    setTimeout(() => {
        const photoInput = document.getElementById('modalPhotoInput');
        const preview = document.getElementById('modalPhotoPreview');
        if (photoInput) {
            photoInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                compressImage(file, (base64) => {
                    pendingPhoto = base64;
                    if (preview) {
                        preview.src = base64;
                        preview.style.display = 'block';
                    }
                });
            });
        }
    }, 50);
}

function appendDefectTag(tag) {
    const textarea = document.getElementById('modalFailRemarks');
    if (!textarea) return;
    if (textarea.value.trim().length > 0) {
        textarea.value = textarea.value.trim() + '; ' + tag;
    } else {
        textarea.value = tag;
    }
}

// ─── AUTO-ADVANCE & NEXT PENDING ───
function toggleAutoAdvance() {
    autoAdvanceEnabled = !autoAdvanceEnabled;
    localStorage.setItem('rt-auto-advance', autoAdvanceEnabled ? 'true' : 'false');
    updateAutoAdvanceButton();
    showToast(autoAdvanceEnabled ? '⏩ Auto-advance enabled' : '⏸️ Auto-advance disabled', 'info');
}

function updateAutoAdvanceButton() {
    const btn = document.getElementById('btnAutoAdvance');
    if (!btn) return;
    if (autoAdvanceEnabled) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-step-forward"></i> Auto-Advance (ON)';
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-pause"></i> Auto-Advance (OFF)';
    }
}

function advanceToNextPending(currentId) {
    const nextItem = InspectionEngine.findNextPendingItem(inspectionItems, currentId);
    if (!nextItem) {
        showToast('🎉 All road test checkpoints verified!', 'success');
        return;
    }
    currentlyOpenGroup = nextItem.adc;
    renderGroups();
    setTimeout(() => {
        const row = document.getElementById(`item-row-${nextItem.id}`);
        if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
            row.classList.add('focused');
            setTimeout(() => row.classList.remove('focused'), 1800);
        }
    }, 80);
}

function jumpToNextPending() {
    const nextItem = InspectionEngine.findNextPendingItem(inspectionItems, null);
    if (!nextItem) {
        showToast('✨ All dynamic checkpoints completed! Ready for sign-off.', 'success');
        return;
    }
    currentlyOpenGroup = nextItem.adc;
    renderGroups();
    setTimeout(() => {
        const row = document.getElementById(`item-row-${nextItem.id}`);
        if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
            row.classList.add('focused');
            setTimeout(() => row.classList.remove('focused'), 2000);
        }
    }, 100);
}

// ─── CATEGORY JUMP DRAWER ───
function openCategoryDrawer() {
    renderCategoryDrawer();
    document.getElementById('drawerOverlay').classList.add('open');
    document.getElementById('categoryDrawer').classList.add('open');
}

function closeCategoryDrawer() {
    document.getElementById('drawerOverlay').classList.remove('open');
    document.getElementById('categoryDrawer').classList.remove('open');
}

function renderCategoryDrawer() {
    const body = document.getElementById('drawerBody');
    const groups = buildGroups();
    body.innerHTML = groups.map((g) => {
        const total = g.items.length;
        const done = g.passCount + g.failCount;
        const pct = Math.round((done / total) * 100);
        return `
            <div class="drawer-item" onclick="jumpToGroup('${escapeHtml(g.adc)}')">
                <div>
                    <div class="drawer-item-title">${escapeHtml(g.adc)}</div>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">
                        ${g.passCount} Pass · ${g.failCount} Fail · ${g.pendCount} Pending
                    </div>
                </div>
                <div style="font-weight:700;font-size:0.85rem;color:${pct === 100 ? 'var(--success)' : 'var(--primary)'}">${pct}%</div>
            </div>
        `;
    }).join('');
}

function jumpToGroup(adc) {
    currentlyOpenGroup = adc;
    closeCategoryDrawer();
    renderGroups();
    setTimeout(() => {
        const groupEl = document.getElementById(`group-card-${adc.replace(/[^a-zA-Z0-9_-]/g, '-')}`);
        if (groupEl) groupEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ─── PHOTO & REMARKS ───
function handlePhoto(id, input) {
    const file = input.files[0];
    if (!file) return;
    compressImage(file, (compressedBase64) => {
        const item = inspectionItems.find(i => i.id === id);
        if (!item) return;
        item.photo = compressedBase64;
        if (!item.status) {
            item.status = 'FAIL'; // Default to FAIL when road test photo is captured
        }
        saveToLocalStorage();
        renderGroups();
        updateStats();
        showToast(`📸 Photo attached · Status: ${item.status}`, 'success');
        auditLog.push('ATTACH_PHOTO', { id: item.id, pdc: item.pdc });
    });
}

function removePhoto(id) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;
    item.photo = null;
    saveToLocalStorage();
    renderGroups();
    updateStats();
    showToast('🗑️ Photo removed', 'info');
}

function updateRemarks(id, val) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;
    item.remarks = val;
    saveToLocalStorage();
}

function appendInlineDefectTag(id, tag) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;
    if (item.remarks && item.remarks.trim().length > 0) {
        if (!item.remarks.includes(tag)) {
            item.remarks = item.remarks.trim() + '; ' + tag;
        }
    } else {
        item.remarks = tag;
    }
    if (!item.status) {
        item.status = 'FAIL';
    }
    saveToLocalStorage();
    renderGroups();
    updateStats();
    const textarea = document.getElementById(`remarks-${id}`);
    if (textarea) textarea.value = item.remarks;
    showToast(`📝 Fault added: ${tag}`, 'info');
}

// ─── VOICE DICTATION ───
let inlineVoiceDictation = null;
function dictateForRemarks(id) {
    const textarea = document.getElementById(`remarks-${id}`);
    if (!textarea) return;

    if (!inlineVoiceDictation) {
        inlineVoiceDictation = InspectionEngine.createVoiceDictation({
            onResult: (text) => {
                textarea.value = (textarea.value.trim() ? textarea.value.trim() + ' ' : '') + text;
                updateRemarks(id, textarea.value);
            },
            onError: (err) => showToast(`Speech error: ${err}`, 'error')
        });
    }

    if (!inlineVoiceDictation.isSupported) {
        showToast('Microphone dictation not supported in this browser.', 'error');
        return;
    }
    inlineVoiceDictation.toggle();
    showToast('🎙️ Dictate driving observations...', 'info');
}

let modalVoiceDictation = null;
function dictateForModal() {
    const textarea = document.getElementById('modalFailRemarks');
    const micBtn = document.getElementById('modalMicBtn');
    if (!textarea) return;

    if (!modalVoiceDictation) {
        modalVoiceDictation = InspectionEngine.createVoiceDictation({
            onResult: (text) => {
                textarea.value = (textarea.value.trim() ? textarea.value.trim() + ' ' : '') + text;
            },
            onStateChange: (isListening) => {
                if (micBtn) {
                    if (isListening) micBtn.classList.add('recording');
                    else micBtn.classList.remove('recording');
                }
            },
            onError: (err) => showToast(`Speech error: ${err}`, 'error')
        });
    }

    if (!modalVoiceDictation.isSupported) {
        showToast('Microphone dictation not supported.', 'error');
        return;
    }
    modalVoiceDictation.toggle();
}

// ─── STATS & LIVE HUD ───
function updateStats() {
    const counters = InspectionEngine.computeCounters(inspectionItems);
    document.getElementById('totalCount').textContent = counters.total;
    document.getElementById('passedCount').textContent = counters.passed;
    document.getElementById('failedCount').textContent = counters.failed;
    document.getElementById('pendingCount').textContent = counters.pending;

    const fill = document.getElementById('overallProgressFill');
    if (fill) {
        const pct = counters.total > 0 ? ((counters.completed / counters.total) * 100).toFixed(1) : 0;
        fill.style.width = `${pct}%`;
    }
}

// ─── DIGITAL SIGNATURES ───
function openSignOffModal() {
    saveInspectionMeta();
    document.getElementById('signOffModalOverlay').classList.add('open');
    setTimeout(() => {
        if (!inspectorSigPad) {
            const inspCanvas = document.getElementById('inspectorSigCanvas');
            inspectorSigPad = InspectionEngine.createSignaturePad(inspCanvas);
        }
        if (!supervisorSigPad) {
            const supCanvas = document.getElementById('supervisorSigCanvas');
            supervisorSigPad = InspectionEngine.createSignaturePad(supCanvas);
        }
        if (inspectorSigPad) inspectorSigPad.resize();
        if (supervisorSigPad) supervisorSigPad.resize();
    }, 100);
}

function closeSignOffModal() {
    document.getElementById('signOffModalOverlay').classList.remove('open');
}

function clearInspectorSignature() {
    if (inspectorSigPad) inspectorSigPad.clear();
}

function clearSupervisorSignature() {
    if (supervisorSigPad) supervisorSigPad.clear();
}

function saveSignaturesAndExport() {
    const inspData = inspectorSigPad ? inspectorSigPad.toDataURL() : null;
    const supData = supervisorSigPad ? supervisorSigPad.toDataURL() : null;

    signatures = {
        inspector: inspData,
        supervisor: supData,
        signedAt: new Date().toISOString()
    };
    InspectionEngine.safeSetJSON('rt-signatures', signatures);
    closeSignOffModal();
    showToast('✍️ Road test signatures recorded', 'success');
    exportPDF();
}

// ─── CAMERA QR / BARCODE SCANNER ───
function openQrScanner() {
    document.getElementById('qrScannerModalOverlay').classList.add('open');
    const video = document.getElementById('qrVideo');
    const status = document.getElementById('qrScannerStatus');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then((stream) => {
                qrStream = stream;
                video.srcObject = stream;
                video.play();
                status.textContent = 'Camera active. Point at barcode/QR code.';
            })
            .catch(() => {
                status.textContent = 'Camera unavailable. Use manual input below.';
            });
    } else {
        status.textContent = 'Camera access not supported on this device.';
    }
}

function closeQrScanner() {
    if (qrStream) {
        qrStream.getTracks().forEach(track => track.stop());
        qrStream = null;
    }
    document.getElementById('qrScannerModalOverlay').classList.remove('open');
}

function applyManualVin() {
    const input = document.getElementById('manualVinInput');
    if (!input || !input.value.trim()) return;
    const val = input.value.trim();
    inspectionMeta.vin = val;
    populateMetaFields();
    saveInspectionMeta();
    closeQrScanner();
    showToast(`🚘 VIN recorded: ${val}`, 'success');
}

// ─── PDF PRINT REPORT GENERATION ───
function exportPDF() {
    saveInspectionMeta();
    if (!inspectionMeta.inspectionId || !inspectionMeta.vin || !inspectionMeta.registration) {
        showToast('⚠️ Please ensure Test ID, VIN, and Registration are entered', 'error');
        openInspectionInfoIfNeeded();
        return;
    }

    const reportContainer = document.getElementById('printReport');
    if (reportContainer) {
        reportContainer.innerHTML = generatePrintReport();
    }

    // Wait for all base64 and external images to be decoded before triggering print
    const images = reportContainer ? Array.from(reportContainer.querySelectorAll('img')) : [];
    const decodePromises = images.map(img => {
        if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
        return img.decode ? img.decode().catch(() => {}) : new Promise(res => { img.onload = img.onerror = res; });
    });

    Promise.all(decodePromises).then(() => {
        setTimeout(() => {
            window.print();
            showToast('📄 Road Test PDF print dialog launched', 'info');
        }, 150);
    });
}

function generatePrintReport() {
    const allGroups = buildGroups();
    const counters = InspectionEngine.computeCounters(inspectionItems);
    const failedItems = inspectionItems.filter(i => i.status === 'FAIL' || (i.photo && i.status !== 'PASS'));

    let finalResult = 'DYNAMIC TEST PASSED';
    let finalResultClass = 'pass';
    let finalColor = '#10B981';
    if (counters.failed > 0 || failedItems.length > 0) {
        finalResult = 'DYNAMIC DEFECTS FOUND (REJECTED)';
        finalResultClass = 'fail';
        finalColor = '#EF4444';
    } else if (counters.pending > 0) {
        finalResult = 'INCOMPLETE ROAD TEST';
        finalResultClass = 'pending';
        finalColor = '#D97706';
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });

    let metaItemsHtml = '';
    if (inspectionMeta.inspectionId) metaItemsHtml += `<div class="report-meta-item"><span>Inspection ID:</span><strong>${escapeHtml(inspectionMeta.inspectionId)}</strong></div>`;
    if (inspectionMeta.registration) metaItemsHtml += `<div class="report-meta-item"><span>Registration No:</span><strong>${escapeHtml(inspectionMeta.registration)}</strong></div>`;
    if (inspectionMeta.vin) metaItemsHtml += `<div class="report-meta-item"><span>VIN / Chassis:</span><strong>${escapeHtml(inspectionMeta.vin)}</strong></div>`;
    if (inspectionMeta.model) metaItemsHtml += `<div class="report-meta-item"><span>Vehicle Model:</span><strong>${escapeHtml(inspectionMeta.model)}</strong></div>`;
    if (inspectionMeta.customer) metaItemsHtml += `<div class="report-meta-item"><span>Customer / Fleet:</span><strong>${escapeHtml(inspectionMeta.customer)}</strong></div>`;
    if (inspectionMeta.inspector) metaItemsHtml += `<div class="report-meta-item"><span>Inspector:</span><strong>${escapeHtml(inspectionMeta.inspector)}</strong></div>`;
    metaItemsHtml += `<div class="report-meta-item"><span>Date &amp; Time:</span><strong>${escapeHtml(inspectionMeta.date || dateStr)} ${timeStr}</strong></div>`;
    if (inspectionMeta.location) metaItemsHtml += `<div class="report-meta-item"><span>Location / Route:</span><strong>${escapeHtml(inspectionMeta.location)}</strong></div>`;

    // Accurate Active Duration
    const totalActiveMs = timer.elapsedMs ? timer.elapsedMs() : 0;
    const formattedDuration = InspectionEngine.formatDuration(totalActiveMs);
    metaItemsHtml += `<div class="report-meta-item"><span>Total Active Time:</span><strong>${formattedDuration}</strong></div>`;

    let html = `
        <div class="report-page">
            <!-- Header Block -->
            <div class="report-header-block">
                <div class="report-header-text">
                    <h1>BUSTECH ENGINEERING · ROAD TEST REPORT</h1>
                    <p>Dynamic Track &amp; Highway Certification</p>
                </div>
                <img src="../bustech-logo.png" alt="BusTech Logo" class="report-logo" />
            </div>

            <!-- Vehicle & Meta Information -->
            <div class="report-meta-grid">
                ${metaItemsHtml}
            </div>

            <!-- Summary Scorecard -->
            <div class="report-summary-bar">
                <div class="report-summary-card">Total Checkpoints: <strong>${counters.total}</strong></div>
                <div class="report-summary-card pass">PASSED: <strong>${counters.passed}</strong></div>
                <div class="report-summary-card fail">FAILED: <strong>${Math.max(counters.failed, failedItems.length)}</strong></div>
                <div class="report-summary-card ${finalResultClass}">OVERALL: <strong style="color:${finalColor}">${finalResult}</strong></div>
            </div>
    `;

    // Road Test Defects Box
    if (failedItems.length > 0) {
        html += `
            <div class="report-defect-box">
                <h3>⚠️ DYNAMIC DEFECT SUMMARY (${failedItems.length} Failures Detected During Road Drive)</h3>
                <table class="report-table">
                    <thead>
                        <tr>
                            <th style="width:16%;">Code</th>
                            <th style="width:20%;">Assembly</th>
                            <th style="width:24%;">Dynamic Test Point</th>
                            <th style="width:26%;">Driving Observations &amp; Fault Description</th>
                            <th style="width:14%;">Evidence</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        failedItems.forEach((f) => {
            html += `
                <tr>
                    <td style="font-family:monospace;font-weight:700;">${escapeHtml(f.pdc)}</td>
                    <td>${escapeHtml(f.adc)}</td>
                    <td><strong>${escapeHtml(f.picp)}</strong></td>
                    <td style="color:#B91C1C;font-weight:600;">${escapeHtml(f.remarks || 'Dynamic fault noted')}</td>
                    <td>${f.photo ? `<img src="${f.photo}" alt="Fault Evidence" style="width:44px;height:44px;object-fit:cover;border-radius:3px;border:1px solid #CBD5E1;" />` : '<span style="color:#94A3B8;font-size:7pt;">No Photo</span>'}</td>
                </tr>
            `;
        });
        html += `</tbody></table></div>`;
    }

    // Full Checklist Table
    html += `<div class="report-section-title">Detailed Road Test Checklist</div>`;
    for (const group of allGroups) {
        html += `
            <div class="report-group-container">
                <div class="report-group-header">
                    ${escapeHtml(group.adc)} (${group.passCount} Pass / ${group.failCount} Fail / ${group.pendCount} Pending)
                </div>
                <table class="report-table">
                    <thead>
                        <tr>
                            <th style="width:16%;">Code</th>
                            <th style="width:36%;">Dynamic Test Point &amp; Spec</th>
                            <th style="width:12%;">Method</th>
                            <th style="width:10%;">Status</th>
                            <th style="width:26%;">Driving Observations &amp; Photo</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        for (const item of group.items) {
            const st = item.status || (item.photo ? 'FAIL' : 'PENDING');
            const badgeClass = st === 'PASS' ? 'pass' : (st === 'FAIL' ? 'fail' : 'pending');
            html += `
                <tr>
                    <td style="font-family:monospace;">${escapeHtml(item.pdc)}</td>
                    <td><strong>${escapeHtml(item.picp)}</strong><br/><span style="color:#64748B;">Spec: ${escapeHtml(item.spec)}</span></td>
                    <td>${escapeHtml(item.method)}</td>
                    <td><span class="report-badge ${badgeClass}">${st}</span></td>
                    <td>
                        ${escapeHtml(item.remarks || '-')}
                        ${item.photo ? `<div style="margin-top:3px;"><img src="${item.photo}" alt="Photo" style="width:36px;height:36px;object-fit:cover;border-radius:3px;border:1px solid #CBD5E1;display:inline-block;" /></div>` : ''}
                    </td>
                </tr>
            `;
        }
        html += `</tbody></table></div>`;
    }

    // Evidence Gallery
    const itemsWithPhotos = inspectionItems.filter(i => i.photo);
    if (itemsWithPhotos.length > 0) {
        html += `
            <div class="report-section-title" style="page-break-before:always;break-before:page;">Road Test Photo &amp; Diagnostic Evidence</div>
            <div class="report-evidence-grid">
        `;
        for (const item of itemsWithPhotos) {
            const itemStatus = item.status || 'FAIL';
            const badgeClass = itemStatus === 'PASS' ? 'pass' : (itemStatus === 'FAIL' ? 'fail' : 'pending');
            html += `
                <div class="report-evidence-card">
                    <img src="${item.photo}" alt="Evidence for ${escapeHtml(item.picp)}" />
                    <div style="font-size:7.5pt;">
                        <strong>${escapeHtml(item.pdc)}</strong>: ${escapeHtml(item.picp)}
                        <br/>
                        <span class="report-badge ${badgeClass}">${itemStatus}</span>
                        ${item.remarks ? `<br/><em>${escapeHtml(item.remarks)}</em>` : ''}
                    </div>
                </div>
            `;
        }
        html += `</div>`;
    }

    // Session Activity Logs
    const pauseLogs = InspectionEngine.safeGetJSON('rt-pause-logs', []);
    if (pauseLogs.length > 0) {
        html += `<div class="report-section-title">Session Activity &amp; Pause Logs</div>`;
        html += `<table class="report-table" style="width:100%;max-width:500px;margin-bottom:12px;">
                    <thead><tr><th>Time</th><th>Action / Event</th></tr></thead>
                    <tbody>`;
        pauseLogs.forEach(log => {
            html += `<tr><td>${escapeHtml(log.timestamp)}</td><td>${escapeHtml(log.action)}</td></tr>`;
        });
        html += `</tbody></table>`;
    }

    // Electronic Signatures Block
    html += `
        <div class="report-signatures">
            <div class="report-signatures-group">
                <div class="report-signature-block">
                    ${signatures.inspector ? `<img src="${signatures.inspector}" alt="Inspector Signature" />` : '<div style="height:44px;"></div>'}
                    <div><strong>Driver / Inspector Sign-Off:</strong> ${escapeHtml(inspectionMeta.inspector || 'Certified Inspector')}</div>
                    <div style="font-size:7pt;color:#64748B;">I hereby certify that all dynamic checkpoints have been individually evaluated.</div>
                </div>
                <div class="report-signature-block">
                    ${signatures.supervisor ? `<img src="${signatures.supervisor}" alt="Supervisor Signature" />` : '<div style="height:44px;"></div>'}
                    <div><strong>Quality Assurance / Supervisor:</strong> Authorized Signatory</div>
                    <div style="font-size:7pt;color:#64748B;">Road test report verified and archived in quality audit records.</div>
                </div>
            </div>
            <div class="report-signature-brand">
                <img src="../bustech-logo.png" alt="BusTech Engineering" class="report-logo" />
            </div>
        </div>
    `;

    html += `</div>`;
    return html;
}

// Seamless native print hooks (Ctrl+P / Cmd+P)
window.addEventListener('beforeprint', () => {
    saveInspectionMeta();
    const reportContainer = document.getElementById('printReport');
    if (reportContainer) {
        reportContainer.innerHTML = generatePrintReport();
    }
});

// ─── EVENTS ───
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const debouncedRender = InspectionEngine.debounce(renderGroups, 200);
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
            currentFilter = tab.getAttribute('data-filter') || 'all';
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
    setTimeout(() => {
        if (toast.parentElement) toast.remove();
    }, 4500);
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

    confirmBtn.onclick = () => {
        const cb = modalCallback;
        if (cb) cb();
        closeModal();
    };
    cancelBtn.onclick = () => {
        closeModal();
        if (options.onCancel) options.onCancel();
    };
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
    if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
    }
}

// ─── THEME ───
function getStoredTheme() {
    return localStorage.getItem('pdi-theme') || 'light';
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('pdi-theme', theme);
    const icon = document.querySelector('.app-header .header-actions button[title="Theme"] i');
    if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleDarkMode() {
    const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    renderGroups();
    showToast(next === 'dark' ? '🌙 Dark mode enabled' : '☀️ Light mode enabled', 'info');
}

function initTheme() {
    applyTheme(getStoredTheme());
}

// ─── TIMER CONTROLS ───
function updateTimerDisplay(displayMs) {
    const totalSecs = Math.floor(displayMs / 1000);
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    const str = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const displayEl = document.getElementById('timerDisplay');
    if (displayEl) displayEl.textContent = str;
}

function toggleTimer() {
    const state = timer.load();
    const controlBtn = document.getElementById('timerControlBtn');
    if (!state || state.pausedAt) {
        timer.resume();
        if (controlBtn) controlBtn.innerHTML = '<i class="fas fa-pause"></i>';
        showToast('▶️ Road test stopwatch running', 'info');
    } else {
        timer.pause();
        if (controlBtn) controlBtn.innerHTML = '<i class="fas fa-play"></i>';
        showToast('⏸️ Stopwatch paused', 'info');
    }
}

function resetTimer() {
    timer.resetTimer();
    timer.start();
    const controlBtn = document.getElementById('timerControlBtn');
    if (controlBtn) controlBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

window.addEventListener('load', () => {
    if (window.requestIdleCallback) {
        requestIdleCallback(init);
    } else {
        setTimeout(init, 1);
    }
});
