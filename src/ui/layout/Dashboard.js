import { Header } from './Header.js';
import { Sidebar } from './Sidebar.js';
import { DashboardContent } from './DashboardContent.js';

export function Dashboard() {
  return `
    <div class="app-layout">
      ${Sidebar()}
      <main class="content">
        ${Header()}
        ${DashboardContent()}
      </main>
    </div>
  `;
}