import { useState } from "react";
import { useReports } from "./hooks/useReports";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportForm";

function App() {
  const { reports, isLoading, addReport, deleteReport } = useReports();
  const [ filterDanger, setFilterDanger ] = useState(false);

  const displayReports = filterDanger
    ? reports.filter((r) => r.condition === "危険")
    : reports;

  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ReportForm onSubmit={addReport} />
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
              onDelete={deleteReport}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
