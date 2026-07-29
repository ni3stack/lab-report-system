import { dashboardStats } from '../../data/dashboardStats.js';
import { reports } from '../../data/reports.js';

import { StatsCard } from '../components/StatsCard.js';
import { ReportTable } from '../components/table/ReportTable.js';

/*
    * Renders the main content of the dashboard, including statistics cards and the reports table.
    * @returns {string} HTML string representing the dashboard content.
*/

export function DashboardContent() {
    const statsCardsHtml = dashboardStats.map(stat => StatsCard(stat)).join('');
    return `
        <section class="dashboard-content">
            <div class="stats-grid">
                ${statsCardsHtml}
            </div>
            ${ReportTable(reports)}
        </section>
    `;
}
