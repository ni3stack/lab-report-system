/*
  Renders the table header row for the reports table.
  @returns {string} HTML string representing the table header.  
*/
export function TableHeader() {
    return `
        <thead>
            <tr>
                <th>Report ID</th>
                <th>Patient</th>
                <th>Tests</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
    `;
}