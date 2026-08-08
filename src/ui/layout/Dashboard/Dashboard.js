/**
 * Dashboard.js
 * This file defines the Dashboard component, which serves as the main layout for the dashboard page. It includes the sidebar, header, and main content area.
 * The Dashboard component is responsible for rendering the overall structure of the dashboard, including navigation and content display.
 * @returns {string} HTML string representing the complete dashboard layout.
 */

import './Dashboard.css';
import { Header } from '../Header/Header.js';
import { Sidebar } from '../Sidebar/Sidebar.js';
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