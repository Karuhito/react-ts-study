import type { RoadReport } from "../types";

interface ReportCardProps {
  report: RoadReport;
}

export function ReportCard({ report }: ReportCardProps) {
  const isAlert = report.condition === "危険";

  return (
    <li
      style={{
        color: isAlert ? "red" : "inherit",
        fontWeight: isAlert ? "bold" : "normal",
      }}
    >
      [{report.reportedAt}] {report.location}: {report.condition}
    </li>
  );
}


