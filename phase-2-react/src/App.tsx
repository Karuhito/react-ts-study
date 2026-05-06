import type { RoadReport } from "./types";
import { ReportCard } from "./components/ReportCard";

const INITIAL_REPORTS: RoadReport[] = [
  {id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-04" },
  {id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-05-04" },
  {id: 3, location: "国道3号", condition: "悪化", reportedAt: "2026-05-04" },
];


function App() {
  return(
    <div>
      <h1>路面状況報告アプリ</h1>
      <p>報告件数: {INITIAL_REPORTS.length}件</p>
      <ul>
        {INITIAL_REPORTS.map((report) => (
           <ReportCard key={report.id} report={report} />
        ))}
      </ul>
    </div>
  );
}

export default App;
