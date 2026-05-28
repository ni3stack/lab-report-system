window.labTestConfigs = {
    cbc: [
        { key: "hb", label: "Hemoglobin", unit: "g/dL", range: "13-17" },
        { key: "wbc", label: "WBC", unit: "cells/µL", range: "4000-11000" },
        { key: "platelets", label: "Platelets", unit: "lakhs/µL", range: "1.5-4.5" }
    ],

    lft: [
        { key: "sgot", label: "SGOT (AST)", unit: "U/L", range: "5-40" },
        { key: "sgpt", label: "SGPT (ALT)", unit: "U/L", range: "7-56" },
        { key: "bilirubin", label: "Bilirubin", unit: "mg/dL", range: "0.1-1.2" }
    ],

    kft: [
        { key: "urea", label: "Urea", unit: "mg/dL", range: "7-20" },
        { key: "creatinine", label: "Creatinine", unit: "mg/dL", range: "0.6-1.3" }
    ],

    lipid: [
        { key: "cholesterol", label: "Total Cholesterol", unit: "mg/dL", range: "<200" },
        { key: "hdl", label: "HDL", unit: "mg/dL", range: ">40" },
        { key: "ldl", label: "LDL", unit: "mg/dL", range: "<100" },
        { key: "triglycerides", label: "Triglycerides", unit: "mg/dL", range: "<150" }
    ],

    thyroid: [
        { key: "t3", label: "T3", unit: "ng/dL", range: "80-200" },
        { key: "t4", label: "T4", unit: "µg/dL", range: "5-12" },
        { key: "tsh", label: "TSH", unit: "µIU/mL", range: "0.4-4.0" }
    ],

    sugar: [
        { key: "fasting", label: "Fasting Blood Sugar", unit: "mg/dL", range: "70-100" },
        { key: "pp", label: "Postprandial Sugar", unit: "mg/dL", range: "<140" }
    ],

    hba1c: [
        { key: "hba1c", label: "HbA1c", unit: "%", range: "<5.7" }
    ],

    electrolytes: [
        { key: "sodium", label: "Sodium", unit: "mEq/L", range: "135-145" },
        { key: "potassium", label: "Potassium", unit: "mEq/L", range: "3.5-5.0" },
        { key: "chloride", label: "Chloride", unit: "mEq/L", range: "98-107" }
    ],

    calcium: [
        { key: "calcium", label: "Calcium", unit: "mg/dL", range: "8.5-10.5" }
    ],

    iron: [
        { key: "iron", label: "Serum Iron", unit: "µg/dL", range: "60-170" }
    ]
}

function getCustomDate(diff) {
  const d = new Date();
  d.setDate(d.getDate() - diff);
  return d.toLocaleDateString();
}

window.recentReports = [
  { id: "LAB-2681", name: "Rahul Kumar", test: "CBC", date: getCustomDate(2), status: "Completed" },
  { id: "LAB-2682", name: "Meena Singh", test: "LFT", date: getCustomDate(4), status: "Pending" },
  { id: "LAB-2683", name: "Amit Sharma", test: "KFT", date: getCustomDate(6), status: "Completed" },
  { id: "LAB-2684", name: "Pooja Verma", test: "Lipid", date: getCustomDate(1), status: "Pending" }
];