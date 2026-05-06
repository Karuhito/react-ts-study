import type { RoadReport } from "../types";

interface ReportCardProps {
  report: RoadReport;
  onDelete: (id: number) => void;
}

export function ReportCard({ report, onDelete }: ReportCardProps) {
  const isAlert = report.condition === "危険";

  return (
    <li
      style={{
        color: isAlert ? "red" : "inherit",
        fontWeight: isAlert ? "bold" : "normal",
      }}
    >
      [{report.reportedAt}] {report.location}: {report.condition}
      <button onClick={() => onDelete(report.id)}>削除</button>
    </li>
  );
}


