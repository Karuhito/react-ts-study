import { useState, useEffect } from "react";
import type { RoadReport, CreateReportInput } from "../types";
import { fetchReports } from "../api/mockApi";

export function useReports() {
    const [reports, setReports ] = useState<RoadReport[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchReports().then((data) => {
            setReports(data);
            setIsLoading(false);
        });
    }, []);

    function addReport(input: CreateReportInput) {
        const newReport: RoadReport = {
            id: reports.length + 1,
            reportedAt: new Date().toISOString().split("T")[0],
            ...input,
        };
        setReports([...reports,newReport]);
    }

    function deleteReport(id: number) {
        setReports(reports.filter((r) => r.id !== id));
    }

    return { reports, isLoading, addReport, deleteReport };
};