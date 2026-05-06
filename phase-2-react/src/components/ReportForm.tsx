import { useState } from "react";
import type { CreateReportInput, RoadCondition } from "../types";

interface ReportFormProps {
  onSubmit: (input: CreateReportInput) => void;
}

export function ReportForm({ onSubmit }: ReportFormProps) {
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState<RoadCondition>("良好"); 

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!location.trim()) return;
    onSubmit({ location, condition });
    setLocation("");
    setCondition("良好");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="場所 (例:国道1号) "
        required
      />
      <select
        value={condition}
        onChange={(e) => setCondition(e.target.value as RoadCondition)}
      >
        <option value="良好">良好</option>
        <option value="悪化">悪化</option>
        <option value="危険">危険</option>
      </select>
      <button type="submit">報告する</button>
    </form>
  );
}
