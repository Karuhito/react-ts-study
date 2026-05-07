import { useState, useEffect } from "react";
import type { RoadReport, CreateReportInput } from "./types";
import { fetchReports } from "./api/mockApi";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportForm";


function App() {
  const [reports, setReports] = useState<RoadReport[]>([]);
  const [filterDanger, setFilterDanger] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReports().then((data) => {
      setReports(data);
      setIsLoading(false);
    });
  }, []);

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
      {isLoading ? (
        <p>読み込み中...</p>
      ) : (
        <ul>
          {displayReports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              onDelete={handleDeleteReport}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
