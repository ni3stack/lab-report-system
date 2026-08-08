import './ReportTable.css';
import { TableHeader } from './TableHeader.js';
import { TableBody } from './TableBody.js';

/*
    * Renders the complete reports table including the header and body.
    * @param {Object []} reports - Array of report objects.
    * @returns {string} HTML string representing the complete table.
*/

export function ReportTable(reports) {
  return `
    <section class="reports-section">
      <h2 class="section-title">Recent Reports</h2>
      <div class="table-container">
        <table class="reports-table">
          ${TableHeader()}
          ${TableBody(reports)} 
        </table>
      </div>
    </section>
  `;
}