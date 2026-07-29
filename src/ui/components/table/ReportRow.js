/*
    Renders a single report row for the reports table.
    @param {Object} report - The report object.
    @param {string} report.id - The unique identifier for the report.
    @param {string} report.patient - The name of the patient associated with the report.
    @param {Array<string>} report.tests - An array of test names included in the report.
    @param {string} report.date - The date when the report was created.
    @param {string} report.status - The current status of the report (e.g., "Pending", "Completed").
    @returns {string} HTML string representing the report row.
*/

export function ReportRow(report) {
    return `
        <tr>
            <td>${report.id}</td>
            <td>${report.patient}</td>
            <td>${report.tests.join(', ')}</td>
            <td>${report.date}</td>
            <td>${report.status}</td>
            <td class="actions-cell"></td>
        </tr>
    `;
}