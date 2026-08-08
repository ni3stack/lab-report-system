/**
 *  Renders a stats card component with a title and value.
 * 
 * @param {Object} props 
 * @param {string} props.title 
 * @param {number|string} props.value 
 * @returns {string} HTML string representing the stats card component.
 * 
 */

import './StatsCard.css';
export function StatsCard({ title, value}) {
    return `
        <div class="stats-card">
            <div class="stats-title">${title}</div>
            <div class="stats-value">${value}</div>
        </div>
    `;
}