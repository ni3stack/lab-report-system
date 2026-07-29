import { EmptyState } from "./EmptyState.js";
import { ReportRow } from "./ReportRow.js";
/*
    * renders the table body for the reports table. It takes an array of report objects and generates the corresponding HTML rows. If there are no reports, it displays an empty state message.
    * @param {Object []} reports - Array of report objects.
    * @returns {string} HTML string representing the table body.
*/

export function TableBody(reports) {
    if (reports.length === 0) {
      return `
        <tbody>
          ${EmptyState()}
        </tbody>
      `
    }

    const rows = reports.map(report => ReportRow(report)).join('');

    return `
      <tbody>
        ${rows}
      </tbody>
    `;
}