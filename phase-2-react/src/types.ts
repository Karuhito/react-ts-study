export type RoadCondition = "良好" | "悪化" | "危険";

export interface RoadReport {
    id: number;
    location: string;
    condition: RoadCondition;
    reportedAt: string;
}

export type CreateReportInput = Omit<RoadReport, "id" | "reportedAt">;

