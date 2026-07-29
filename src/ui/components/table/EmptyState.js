/**
 * Displays an empty state message when there is no data to show in the table.
 * @returns {string} HTML string for the empty state message.
 */

export function EmptyState() {
    return `
        <tr class="empty-state">
            <td colspan="6">
                <div class="empty-state-content">
                    <p>No reports available.</p>
                </div>
            </td>
        </tr>
    `;
}