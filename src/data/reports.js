/** 
 * Mock reports data for the dashboard. This data is used to simulate the reports that would be displayed in a real application. Each report object contains an id, title, date, and status.
 * @type {Array<{
 *     id: string, 
 *     patient: string,
 *     tests: string[],
 *     date: string,
 *     status: string}>}
 */

export const reports = [
    {
        id: "RPT-1001",
        patient: "Rahul Sharma",
        tests: ["CBC", "Sugar"],
        date: "27 Jul 2026",
        status: "Completed"
    },
    {
        id: "RPT-1002",
        patient: "Priya Singh",
        tests: ["Lipid Profile"],
        date: "27 Jul 2026",
        status: "Pending"
    },
    {
        id: "RPT-1003",
        patient: "Amit Verma",
        tests: ["CBC", "Vitamin D"],
        date: "26 Jul 2026",
        status: "Completed"
    },
    {
        id: "RPT-1004",
        patient: "Sneha Kapoor",
        tests: ["Thyroid Panel"],
        date: "26 Jul 2026",
        status: "Pending"
    }
];