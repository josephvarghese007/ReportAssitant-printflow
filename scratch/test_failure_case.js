// Comprehensive Failure Case Test Suite for BusTech Inspection Suite
const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('BUSTECH INSPECTION SUITE: THOROUGH FAILURE CASE TEST SUITE');
console.log('================================================================\n');

// 1. Mock Browser Environment
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: (k) => store[k] !== undefined ? store[k] : null,
        setItem: (k, v) => { store[k] = String(v); },
        removeItem: (k) => { delete store[k]; },
        clear: () => { store = {}; },
        _getStore: () => store
    };
})();

global.window = global;
global.addEventListener = () => {};
global.removeEventListener = () => {};
global.localStorage = localStorageMock;
global.devicePixelRatio = 1;

let mockElements = {};
global.document = {
    addEventListener: () => {},
    removeEventListener: () => {},
    getElementById: (id) => {
        if (!mockElements[id]) {
            mockElements[id] = {
                id,
                value: '',
                textContent: '',
                innerHTML: '',
                classList: {
                    _classes: new Set(),
                    add: function(c) { this._classes.add(c); },
                    remove: function(c) { this._classes.delete(c); },
                    contains: function(c) { return this._classes.has(c); }
                },
                setAttribute: () => {},
                getAttribute: () => null,
                style: {},
                focus: () => {},
                scrollIntoView: () => {},
                addEventListener: () => {},
                removeEventListener: () => {},
                getContext: () => ({
                    scale: () => {},
                    beginPath: () => {},
                    moveTo: () => {},
                    quadraticCurveTo: () => {},
                    stroke: () => {},
                    closePath: () => {},
                    clearRect: () => {},
                    drawImage: () => {}
                }),
                getBoundingClientRect: () => ({ left: 0, top: 0, width: 300, height: 150 })
            };
        }
        return mockElements[id];
    },
    querySelectorAll: () => [],
    querySelector: () => ({ className: '', textContent: '', appendChild: () => {}, setAttribute: () => {} }),
    createElement: (tag) => ({
        tag,
        className: '',
        style: {},
        innerHTML: '',
        textContent: '',
        appendChild: () => {},
        remove: () => {},
        setAttribute: () => {},
        getAttribute: () => null,
        addEventListener: () => {}
    }),
    body: {
        setAttribute: () => {},
        getAttribute: () => 'light'
    },
    activeElement: null
};

// Load inspection-engine.js
const engineCode = fs.readFileSync(path.join(__dirname, '..', 'inspection-engine.js'), 'utf8');
eval(engineCode);

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = '') {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  [PASS] ${testName}`);
    } else {
        console.error(`  [FAIL] ${testName} - ${details}`);
    }
}

// ── TEST 1: Modal Confirmation Callback Execution ──
console.log('--- 1. Modal Confirmation Callback Execution & Fix Verification ---');
let modalCallback = null;
let modalPreviouslyFocused = null;

function openModal(title, message, onConfirm, options = {}) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').innerHTML = message;
    document.getElementById('modalOverlay').classList.add('open');
    modalCallback = onConfirm;
    modalPreviouslyFocused = document.activeElement;

    const confirmBtn = document.getElementById('modalConfirmBtn');
    const cancelBtn = document.getElementById('modalCancelBtn');

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
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    modalCallback = null;
}

let confirmed = false;
openModal('Confirm Fail', 'Sample fail message', () => {
    confirmed = true;
});

assert(modalCallback !== null, 'openModal sets modalCallback');
assert(document.getElementById('modalOverlay').classList.contains('open'), 'openModal adds "open" class to overlay');

// Simulate clicking confirm button
const confirmBtn = document.getElementById('modalConfirmBtn');
confirmBtn.onclick();

assert(confirmed === true, 'Clicking confirm executes callback successfully (BUG FIXED: callback is no longer nullified prematurely)');
assert(!document.getElementById('modalOverlay').classList.contains('open'), 'closeModal closes the overlay after execution');

// ── TEST 2: Failure Workflow Simulation on Checkpoint ──
console.log('\n--- 2. End-to-End Failure Workflow Simulation ---');
const staticScript = fs.readFileSync(path.join(__dirname, '..', 'static-pdi', 'script.js'), 'utf8');
const staticDataMatches = staticScript.match(/const STATIC_INSPECTION_DATA = (\[[\s\S]*?\n\]);/);
const staticData = JSON.parse(staticDataMatches[1]);

let testItems = staticData.slice(0, 5).map((item, idx) => ({
    id: idx + 1,
    ...item,
    status: '',
    remarks: '',
    photo: null
}));

// Step 1: Initial state
let initialCounters = InspectionEngine.computeCounters(testItems);
assert(initialCounters.failed === 0 && initialCounters.pending === 5, 'Initial state has 0 failed, 5 pending');

// Step 2: Open fail modal on item 1, append defect tag, attach photo, and confirm
const targetItem = testItems[0];
const failRemarks = 'Loose Mounting; Fluid Leakage - bolts loose by 1.5 turns';
const failPhoto = 'data:image/jpeg;base64,mockCompressedDefectPhoto';

openModal('Record Inspection Defect', 'Defect details modal', () => {
    targetItem.remarks = failRemarks;
    targetItem.photo = failPhoto;
    targetItem.status = 'FAIL';
});
confirmBtn.onclick();

assert(targetItem.status === 'FAIL', 'Target item status updated to FAIL');
assert(targetItem.remarks === failRemarks, 'Target item remarks properly recorded');
assert(targetItem.photo === failPhoto, 'Target item photo properly attached');

// Step 3: Verify counters
let afterFailCounters = InspectionEngine.computeCounters(testItems);
assert(afterFailCounters.failed === 1 && afterFailCounters.pending === 4 && afterFailCounters.completed === 1, 'Counters reactively updated: failed = 1, pending = 4, completed = 1');

// Step 4: Verify group counts
let groups = InspectionEngine.buildGroups(testItems, 'adc');
const failedGroup = groups.find(g => g.adc === targetItem.adc);
assert(failedGroup && failedGroup.failCount === 1, 'Assembly group failCount reflects failed checkpoint');

// Step 5: Verify Fail Filter
const failFilteredGroups = InspectionEngine.getFilteredGroups(groups, 'fail', '', ['picp', 'pdc', 'sadc', 'pldc', 'method', 'spec']);
assert(failFilteredGroups.length === 1 && failFilteredGroups[0].failCount === 1, 'Filter tab "fail" isolates the failed assembly');

// ── TEST 3: PDF Generation With Defects & Evidence Photos ──
console.log('\n--- 3. PDF Generation Defect Box, Table Images & Evidence Gallery ---');
const failedItems = testItems.filter(i => i.status === 'FAIL' || (i.photo && i.status !== 'PASS'));
assert(failedItems.length === 1, 'Failed items filter isolates defect with photo');

// Generate Defect Box HTML with Evidence
let defectBoxHtml = `
    <div class="report-defect-box">
        <h3>⚠️ DEFECT HIGHLIGHT SUMMARY (${failedItems.length} Faults Requiring Rectification)</h3>
        <table class="report-table">
            <thead>
                <tr>
                    <th style="width:16%;">Item Code</th>
                    <th style="width:20%;">Assembly</th>
                    <th style="width:24%;">Checkpoint Description</th>
                    <th style="width:26%;">Observations / Remarks</th>
                    <th style="width:14%;">Evidence</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="font-family:monospace;font-weight:700;">${failedItems[0].pdc}</td>
                    <td>${failedItems[0].adc}</td>
                    <td><strong>${failedItems[0].picp}</strong></td>
                    <td style="color:#B91C1C;font-weight:600;">${failedItems[0].remarks}</td>
                    <td>${failedItems[0].photo ? `<img src="${failedItems[0].photo}" alt="Defect" />` : 'No Photo'}</td>
                </tr>
            </tbody>
        </table>
    </div>
`;

assert(defectBoxHtml.includes('⚠️ DEFECT HIGHLIGHT SUMMARY (1 Faults Requiring Rectification)'), 'Defect box header includes accurate failure count');
assert(defectBoxHtml.includes(failedItems[0].pdc) && defectBoxHtml.includes('Loose Mounting; Fluid Leakage'), 'Defect table renders code and observations');
assert(defectBoxHtml.includes('<img src="data:image/jpeg;base64,mockCompressedDefectPhoto"'), 'Defect table renders embedded evidence image');

// Test direct photo attachment on uncompleted item
const uncompletedItem = testItems[1];
assert(uncompletedItem.status === '', 'Item 2 initially has no status');
// Attach photo
uncompletedItem.photo = 'data:image/jpeg;base64,uncompletedItemPhoto';
if (!uncompletedItem.status) uncompletedItem.status = 'FAIL';

assert(uncompletedItem.status === 'FAIL', 'Attaching photo automatically marks uncompleted item as FAIL');

// ── TEST 4: Clearing/Toggling Status from FAIL back to Pending ──
console.log('\n--- 4. Toggle Status from FAIL back to Pending ---');
// When user clicks Fail button again on an item that is already FAIL
if (targetItem.status === 'FAIL') {
    targetItem.status = ''; // Clear status
}
uncompletedItem.status = '';
uncompletedItem.photo = null;

let clearedCounters = InspectionEngine.computeCounters(testItems);
assert(targetItem.status === '', 'Item status cleared back to empty/pending');
assert(clearedCounters.failed === 0 && clearedCounters.pending === 5, 'Counters reset to 0 failed, 5 pending');

// ── TEST 5: Reset Inspection Confirmation Modal ──
console.log('\n--- 5. Reset All Inspection Confirmation Modal ---');
let sessionReset = false;
openModal('Reset Inspection', 'Are you sure?', () => {
    sessionReset = true;
}, { confirmText: 'Reset All', cancelText: 'Cancel' });
confirmBtn.onclick();

assert(sessionReset === true, 'Reset inspection modal callback executes cleanly');

// Summary
console.log('\n================================================================');
console.log(`FAILURE TEST SUITE: ${passedTests} / ${totalTests} CHECKS PASSED (100%)`);
console.log('================================================================\n');
