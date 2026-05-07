import { useState } from "react";
import { useReports } from "./hooks/useReports";
import { ReportForm } from "./components/ReportForm";
import { ReportList } from "./components/ReportList";
import "./App.css";



function App() {
  const { reports, isLoading, addReport, deleteReport } = useReports();
  const [ filterDanger, setFilterDanger ] = useState(false);

  const displayReports = filterDanger
    ? reports.filter((r) => r.condition === "危険")
    : reports;

  return (
    <div className="app">
      <h1>路面状況報告アプリ</h1>
      <ReportForm onSubmit={addReport} />
      <label className="filter-label">
        <input 
          type="checkbox"
          checked={filterDanger}
          onChange={(e) => setFilterDanger(e.target.checked)}
        />
        危険のみ表示
      </label>
      <p>{reports.length}件の表示</p>
      <ReportList
        reports={displayReports}
        isLoading={isLoading}
        onDelete={deleteReport}
      />
    </div>
  );
}

export default App;
