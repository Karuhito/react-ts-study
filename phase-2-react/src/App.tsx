import { useState } from "react";
import type { RoadReport, CreateReportInput } from "./types";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportForm";

const INITIAL_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-04" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-05-04" },
  { id: 3, location: "国道3号", condition: "悪化", reportedAt: "2026-05-04" },
];

function App() {
  const [reports, setReports] = useState<RoadReport[]>(INITIAL_REPORTS);
  const [filterDanger, setFilterDanger ] = useState(false);

  function handleAddReport(input: CreateReportInput) {
    const newReport: RoadReport = {
      id: reports.length + 1,
      reportedAt: new Date().toISOString().split("T")[0],
      ...input,
    };
    setReports([...reports, newReport]);
  }

  function handleDeleteReport(id: number) {
    setReports(reports.filter((r) => r.id !== id));
  }

  const displayReports = filterDanger
    ? reports.filter((r) => r.condition === "危険")
    : reports;

  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ReportForm onSubmit={handleAddReport} />
      <label>
        <input
          type="checkbox"
          checked={filterDanger}
          onChange={(e) => setFilterDanger(e.target.checked)}
        />
        危険のみ表示
      </label>
      <ul>
        {displayReports.map((report) => (
          <ReportCard
            key={report.id}
            report={report}
            onDelete={handleDeleteReport}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
