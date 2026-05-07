import type { RoadReport } from "../types";
import { ReportCard } from "./ReportCard";

interface ReportListProps {
    reports: RoadReport[];
    isLoading: boolean;
    onDelete: (id: number) => void;
}

export function ReportList({ reports, isLoading, onDelete }: ReportListProps) {
    if (isLoading) return <p>読み込み中...</p>;
    if (reports.length === 0) return <p>報告がありません</p>;

    return  (
        <ul>
            {reports.map((report) => (
                <ReportCard key={report.id} report={report} onDelete={onDelete} />
            ))}
        </ul>
    );
}