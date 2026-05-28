// ==========================
// 1. CONFIG (DATA LAYER)
// ==========================

const testConfigs = window.labTestConfigs;
const recentReports = window.recentReports;

// const value.
const TestType = {
    CBC: "cbc",
    LFT: "lft",
    KFT: "kft"
}

// ==========================
// 2. DOM REFERENCES
// ==========================

const form = document.getElementById('labForm');
const testSelect = document.getElementById('testId');
const fieldsDiv = document.getElementById('fields');


// ==========================
// 3. EVENT LISTENERS
// ==========================


// load test input dynamically
testSelect.addEventListener("change", handleTestChange);

// Handle form submit
form.addEventListener("submit", handleSubmit);


// Format name input
document.getElementById("patientName").addEventListener("input", formatName);


// =========================
// 4. FUNCTIONS
// =========================

function handleTestChange() {
    const selectedTestConfig = testConfigs[testSelect.value];
    fieldsDiv.innerHTML = "";

    if (!selectedTestConfig) return;

    selectedTestConfig.forEach(config => {
        const div = document.createElement('div');
        div.className = "form-group";
        div.innerHTML = `
            <label for=${config.key}>${config.label} ${config.unit}</label>
            <input type="number" required id=${config.key}>
        `
        fieldsDiv.appendChild(div);
    });

}

// format name, upper case and letter only.

function formatName(e) {
    e.target.value = e.target.value
        .replace(/[^A-Za-z\s]/g, '')
        .toUpperCase();
}

// handle submit

function handleSubmit(e) {
    e.preventDefault();
    if(!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = getFormData();
    createReport(data);
}

// build form data;

function getFormData() {
    const selectedTest = testConfigs[testSelect.value];
    const testResult = selectedTest.map(test => {
        const value = document.getElementById(test.key).value;
        return {
            ...test,
            value
        };
    });
    const { reportId, reportDate } = getMetaData()
    return {
        reportId,
        reportDate,
        name: document.getElementById('patientName').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        testName: document.getElementById('testId').value,
        results: testResult
    }

}

function getMetaData() {
    const reportId = "LAB - " + Math.floor(Math.random() * 100000);
    const reportDate = new Date().toLocaleDateString();
    return { reportId, reportDate }
}

function resetForm() {
  document.getElementById("labForm").reset();
  document.getElementById("fields").innerHTML = "";
}

function createReport() {
    table = document.getElementById("reportTableBody");
    const {reportId, reportDate } = getMetaData();
    const newReport = {
        id: reportId,
        date: reportDate,
        name: document.getElementById('patientName').value,
        test: document.getElementById('testId').value,
        status: 'COMPLETED'
    }

    recentReports.unshift(newReport);

    table.innerHTML = "";

    recentReports.forEach(report => {
        const statusClass = report.status?.toUpperCase() === "COMPLETED"
            ? "status-done": "";
        table.innerHTML += 
            `
            <tr>
                <td>${report.id}</td>
                <td>${report.name}</td>
                <td>${report.test?.toUpperCase()}</td>
                <td>${report.date}</td>
                <td class="${statusClass}">${report.status?.toUpperCase()}</td>
                <td>${getRowAction(report)}</td>
            </tr>
            `
    });
    resetForm();
}

function renderReport(data) {
    printMetaData();
    document.getElementById('pName').innerText = data.name;
    document.getElementById('pAgeGender').innerText = data.age + " / " + data.gender;

    table = document.getElementById("reportTable");

    table.innerHTML = `
        <tr>
            <th>Test</th>
            <th>Result</th>
            <th>Unit</th>
            <th>Normal Range</th>
        </tr>
    `;
    data.results.forEach(item => {
        table.innerHTML += `
            <tr>
                <td>${item.label}</td>
                <td>${highlight(item.value,item.range)}</td>
                <td>${item.unit}</td>
                <td>${item.range}</td>
            </tr>
        `;
    });
}

function getRowAction(report) {
    if (report.status?.toUpperCase() === 'COMPLETED') {
        return `<button class="button link">View</button>`;
    }
    return `<button class="button secondary">Edit</button>`;
}

function loadReports() {
    const tbody = document.getElementById('reportTableBody');
    tbody.innerHTML = "";
    recentReports.forEach(report => {
        const statusClass = report.status?.toUpperCase() === "COMPLETED"
            ? "status-done": "";
        tbody.innerHTML += 
            `
                <tr>
                    <td>${report.id}</td>
                    <td>${report.name}</td>
                    <td>${report.test}</td>
                    <td>${report.date}</td>
                    <td class="${statusClass}">${report.status}</td>
                    <td>${getRowAction(report)}</td>
                </tr>
            `
    });
    
}

// 🔹 Print
function printReport() {
  document.getElementById("printArea").style.display = "block";
  window.print();
}

function highlight(value, range) {
    const [min, max] = range?.split('-')
    if (Number(value) < Number(min) || Number(value) > Number(max)) {
        return `<span style="color: red; font-weight:bold">${value}<span>`
    }
    return value;
}


loadReports();