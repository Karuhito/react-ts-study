import type { RoadReport } from "../types";;

const MOCK_REPORTS: RoadReport[] = [
    { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-06" },
    { id: 2, location: "国道2号", condition: "悪化", reportedAt: "2026-05-06" },
    { id: 3, location: "国道3号", condition: "危険", reportedAt: "2026-05-06" },
    { id: 4, location: "国道4号", condition: "危険", reportedAt: "2026-05-06" },
];

export async function fetchReports(): Promise<RoadReport[]> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return MOCK_REPORTS;
}

