import { useState } from "react";
import type { RoadReport, CreateReportInput } from "./types";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportFoem";


const INITIAL_REPORTS: RoadReport[] = [
  {id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-04" },
  {id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-05-04" },
  {id: 3, location: "国道3号", condition: "悪化", reportedAt: "2026-05-04" },
];


function App() {
  const [reports, setReports ] = useState<RoadReport[]>(INITIAL_REPORTS);
  
  function handleAddReport(input: CreateReportInput) {
    const newReport: RoadReport = {
      id: reports.length + 1,
      reportedAt: new Date().toISOString().split("T")[0],
      ...input,
    };
    setReports([...reports, newReport]);
  }
  
  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ReportForm onSubmit={handleAddReport} />
      <ul>
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </ul>
    </div>
  );
}

export default App;
