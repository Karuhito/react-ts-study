# Phase 2: React + TypeScript 学習プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Vite + React + TypeScript で路面状況報告アプリを段階的に構築し、JSX・Props・useState・useEffect・コンポーネント分割を習得する

**Architecture:** `phase-2-react/` に Vite プロジェクトを作成し、コンポーネントを `src/components/` に分割する。共通型定義は `src/types.ts` に集約。学習の流れ：JSX → Props → useState → useEffect → まとめ課題。

**Tech Stack:** Vite 6, React 19, TypeScript 5, Node.js 22+

---

## ファイル構造

```
phase-2-react/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── types.ts                  ← 共通型定義
    ├── main.tsx                  ← エントリーポイント（自動生成）
    ├── App.tsx                   ← ルートコンポーネント（各タスクで育てる）
    ├── App.css                   ← スタイル
    ├── api/
    │   └── mockApi.ts            ← Task 22 で作成（モックAPIの遅延取得）
    └── components/
        ├── ReportCard.tsx         ← Task 19 で作成（1件の報告カード）
        ├── ReportForm.tsx         ← Task 20 で作成（投稿フォーム）
        └── ReportList.tsx         ← Task 24 で作成（リスト全体）
```

---

## Task 17: セットアップ

**Files:**
- Create: `phase-2-react/`（Vite が生成）

- [ ] **Step 1: Vite でプロジェクト作成**

```bash
cd /Users/kazutoenomoto/workspace/react-study
npm create vite@latest phase-2-react -- --template react-ts
cd phase-2-react
npm install
```

- [ ] **Step 2: 動作確認**

```bash
npm run dev
```

`http://localhost:5173` を開き、Vite のデフォルト画面が表示されることを確認。

- [ ] **Step 3: 不要ファイルを削除してクリーンにする**

```bash
rm src/assets/react.svg public/vite.svg
```

`src/App.tsx` を以下に書き換える：

```tsx
function App() {
  return (
    <div>
      <h1>路面状況報告アプリ</h1>
    </div>
  );
}

export default App;
```

`src/index.css` と `src/App.css` の中身を空にする。

- [ ] **Step 4: コミット**

```bash
cd ..
git add phase-2-react/
git commit -m "phase-2: Vite + React + TSプロジェクト作成"
```

---

## Task 18: Days 1-2 — JSX・コンポーネント基礎

**学ぶこと:** JSX の書き方、`{}` での JS 式の埋め込み、`map` でのリスト表示、`key` の役割

**Files:**
- Create: `phase-2-react/src/types.ts`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: 共通型定義ファイルを作る**

`phase-2-react/src/types.ts`:

```typescript
export type RoadCondition = "良好" | "悪化" | "危険";

export interface RoadReport {
  id: number;
  location: string;
  condition: RoadCondition;
  reportedAt: string;
}

export type CreateReportInput = Omit<RoadReport, "id" | "reportedAt">;
```

- [ ] **Step 2: App.tsx を書く（写経）**

`phase-2-react/src/App.tsx`:

```tsx
import type { RoadReport } from "./types";

const INITIAL_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-04" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-05-04" },
];

function App() {
  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <p>報告件数: {INITIAL_REPORTS.length}件</p>
      <ul>
        {INITIAL_REPORTS.map((report) => (
          <li key={report.id}>
            {report.location}: {report.condition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: ブラウザで確認**

```bash
cd phase-2-react && npm run dev
```

期待: 「路面状況報告アプリ」と2件のリストが表示される。

- [ ] **Step 4: コミット**

```bash
cd ..
git add phase-2-react/src/
git commit -m "phase-2 day1-2: JSX・初期表示"
```

---

## Task 19: Days 3-4 — Props・コンポーネント分割

**学ぶこと:** Props の渡し方・受け取り方、Props の型定義、コンポーネント分割の判断基準

**Files:**
- Create: `phase-2-react/src/components/ReportCard.tsx`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: ReportCard コンポーネントを作る**

`phase-2-react/src/components/ReportCard.tsx`:

```tsx
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
```

- [ ] **Step 2: App.tsx を修正して ReportCard を使う**

`phase-2-react/src/App.tsx`:

```tsx
import type { RoadReport } from "./types";
import { ReportCard } from "./components/ReportCard";

const INITIAL_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-04" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-05-04" },
];

function App() {
  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ul>
        {INITIAL_REPORTS.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </ul>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: ブラウザで確認**

「危険」の報告が赤字・太字で表示されることを確認。

- [ ] **Step 4: コミット**

```bash
git add phase-2-react/src/
git commit -m "phase-2 day3-4: ReportCardコンポーネント（Props）"
```

---

## Task 20: Days 5-7 — useState・フォーム

**学ぶこと:** `useState` の基本、イベントハンドラ、フォームの制御コンポーネントパターン、コールバック Props

**Files:**
- Create: `phase-2-react/src/components/ReportForm.tsx`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: ReportForm コンポーネントを作る**

`phase-2-react/src/components/ReportForm.tsx`:

```tsx
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
        placeholder="場所（例：国道1号）"
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
```

- [ ] **Step 2: App.tsx に useState と投稿機能を追加**

`phase-2-react/src/App.tsx`:

```tsx
import { useState } from "react";
import type { RoadReport, CreateReportInput } from "./types";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportForm";

const INITIAL_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-04" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-05-04" },
];

function App() {
  const [reports, setReports] = useState<RoadReport[]>(INITIAL_REPORTS);

  function handleAddReport(input: CreateReportInput) {
    const newReport: RoadReport = {
      id: reports.length + 1,
      reportedAt: new Date().toISOString().split("T")[0],
      ...input,
    };
    setReports([...reports, newReport]);
  }

  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ReportForm onSubmit={handleAddReport} />
      <ul>
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </ul>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: ブラウザで確認**

- フォームに入力して「報告する」を押すとリストに追加される
- フォームが送信後にリセットされる

- [ ] **Step 4: コミット**

```bash
git add phase-2-react/src/
git commit -m "phase-2 day5-7: useState・ReportFormコンポーネント"
```

---

## Task 21: Days 8-9 — 削除・フィルタ・条件付きレンダリング

**学ぶこと:** コールバック Props でイベントを親に伝える、`filter` による state 操作、`boolean` state でのフィルタ切り替え

**Files:**
- Modify: `phase-2-react/src/components/ReportCard.tsx`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: ReportCard に削除ボタンを追加**

`phase-2-react/src/components/ReportCard.tsx`:

```tsx
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
```

- [ ] **Step 2: App.tsx に削除機能とフィルタを追加**

`phase-2-react/src/App.tsx`:

```tsx
import { useState } from "react";
import type { RoadReport, CreateReportInput } from "./types";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportForm";

const INITIAL_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-04" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-05-04" },
];

function App() {
  const [reports, setReports] = useState<RoadReport[]>(INITIAL_REPORTS);
  const [filterDanger, setFilterDanger] = useState(false);

  function handleAddReport(input: CreateReportInput) {
    const newReport: RoadReport = {
      id: reports.length + 1,
      reportedAt: new Date().toISOString().split("T")[0],
      ...input,
    };
    setReports([...reports, newReport]);
  }

  function handleDeleteReport(id: number) {
    setReports(reports.filter((r) => r.id !== id));
  }

  const displayReports = filterDanger
    ? reports.filter((r) => r.condition === "危険")
    : reports;

  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ReportForm onSubmit={handleAddReport} />
      <label>
        <input
          type="checkbox"
          checked={filterDanger}
          onChange={(e) => setFilterDanger(e.target.checked)}
        />
        危険のみ表示
      </label>
      <ul>
        {displayReports.map((report) => (
          <ReportCard
            key={report.id}
            report={report}
            onDelete={handleDeleteReport}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: ブラウザで確認**

- 削除ボタンで報告が消える
- 「危険のみ表示」チェックで絞り込みが動く
- 危険な報告が赤字で表示される

- [ ] **Step 4: コミット**

```bash
git add phase-2-react/src/
git commit -m "phase-2 day8-9: 削除機能・フィルタ"
```

---

## Task 22: Days 10-12 — useEffect・データフェッチ

**学ぶこと:** `useEffect` の基本（マウント時に1回実行）、非同期処理と state、ローディング表示

**Files:**
- Create: `phase-2-react/src/api/mockApi.ts`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: モック API 関数を作る**

```bash
mkdir -p phase-2-react/src/api
```

`phase-2-react/src/api/mockApi.ts`:

```typescript
import type { RoadReport } from "../types";

const MOCK_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-05-04" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-05-04" },
  { id: 3, location: "国道3号", condition: "悪化", reportedAt: "2026-05-03" },
];

export async function fetchReports(): Promise<RoadReport[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return MOCK_REPORTS;
}
```

- [ ] **Step 2: App.tsx を useEffect でデータ取得するように変更**

`phase-2-react/src/App.tsx`:

```tsx
import { useState, useEffect } from "react";
import type { RoadReport, CreateReportInput } from "./types";
import { fetchReports } from "./api/mockApi";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportForm";

function App() {
  const [reports, setReports] = useState<RoadReport[]>([]);
  const [filterDanger, setFilterDanger] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReports().then((data) => {
      setReports(data);
      setIsLoading(false);
    });
  }, []);

  function handleAddReport(input: CreateReportInput) {
    const newReport: RoadReport = {
      id: reports.length + 1,
      reportedAt: new Date().toISOString().split("T")[0],
      ...input,
    };
    setReports([...reports, newReport]);
  }

  function handleDeleteReport(id: number) {
    setReports(reports.filter((r) => r.id !== id));
  }

  const displayReports = filterDanger
    ? reports.filter((r) => r.condition === "危険")
    : reports;

  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ReportForm onSubmit={handleAddReport} />
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
              onDelete={handleDeleteReport}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
```

- [ ] **Step 3: ブラウザで確認**

- 起動直後に「読み込み中...」が表示される
- 0.8秒後にリストが表示される
- 投稿・削除・フィルタが引き続き動く

- [ ] **Step 4: コミット**

```bash
git add phase-2-react/src/
git commit -m "phase-2 day10-12: useEffect・モックAPIフェッチ"
```

---

## Task 23: Days 13-15 — カスタムフック・型の整理

**学ぶこと:** カスタムフックでロジックを分離する、`useState` + `useEffect` を 1 つの関数にまとめる

**Files:**
- Create: `phase-2-react/src/hooks/useReports.ts`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: カスタムフックを作る**

```bash
mkdir -p phase-2-react/src/hooks
```

`phase-2-react/src/hooks/useReports.ts`:

```typescript
import { useState, useEffect } from "react";
import type { RoadReport, CreateReportInput } from "../types";
import { fetchReports } from "../api/mockApi";

export function useReports() {
  const [reports, setReports] = useState<RoadReport[]>([]);
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
    setReports([...reports, newReport]);
  }

  function deleteReport(id: number) {
    setReports(reports.filter((r) => r.id !== id));
  }

  return { reports, isLoading, addReport, deleteReport };
}
```

- [ ] **Step 2: App.tsx をカスタムフックを使うように書き直す**

`phase-2-react/src/App.tsx`:

```tsx
import { useState } from "react";
import { useReports } from "./hooks/useReports";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportForm";

function App() {
  const { reports, isLoading, addReport, deleteReport } = useReports();
  const [filterDanger, setFilterDanger] = useState(false);

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
```

- [ ] **Step 3: ブラウザで確認**

動作が Task 22 と同じであることを確認。

- [ ] **Step 4: コミット**

```bash
git add phase-2-react/src/
git commit -m "phase-2 day13-15: カスタムフック（useReports）"
```

---

## Task 24: Days 16-21 — まとめ課題（スタイリング・ReportList 分割）

**学ぶこと:** 最終的なコンポーネント分割、CSS スタイリング、Phase 2 の総まとめ

**Files:**
- Create: `phase-2-react/src/components/ReportList.tsx`
- Modify: `phase-2-react/src/App.tsx`
- Modify: `phase-2-react/src/App.css`

- [ ] **Step 1: ReportList コンポーネントを作る**

`phase-2-react/src/components/ReportList.tsx`:

```tsx
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

  return (
    <ul>
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} onDelete={onDelete} />
      ))}
    </ul>
  );
}
```

- [ ] **Step 2: App.tsx を最終形に整える**

`phase-2-react/src/App.tsx`:

```tsx
import { useState } from "react";
import { useReports } from "./hooks/useReports";
import { ReportForm } from "./components/ReportForm";
import { ReportList } from "./components/ReportList";
import "./App.css";

function App() {
  const { reports, isLoading, addReport, deleteReport } = useReports();
  const [filterDanger, setFilterDanger] = useState(false);

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
      <p>{reports.length}件の報告</p>
      <ReportList
        reports={displayReports}
        isLoading={isLoading}
        onDelete={deleteReport}
      />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: App.css でスタイルを追加**

`phase-2-react/src/App.css`:

```css
.app {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: sans-serif;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

button {
  margin-left: 0.5rem;
}
```

- [ ] **Step 4: 動作確認チェックリスト**

- [ ] 起動時に「読み込み中...」が表示され、0.8秒後にリストが出る
- [ ] フォームから新規報告を追加できる
- [ ] 削除ボタンで報告が消える
- [ ] 「危険のみ表示」チェックで絞り込みが動く
- [ ] 「危険」の報告が赤字・太字で表示される
- [ ] 報告が0件のとき「報告がありません」と表示される

- [ ] **Step 5: コミット**

```bash
git add phase-2-react/src/
git commit -m "phase-2 day16-21: まとめ課題完成"
```

---

## Phase 2 完了後

Phase 3（React 中級）の計画を作成します。アシスタントに「Phase 3 の計画を作ってください」と伝えてください。

**Phase 3 の主な学習項目:**
- React Router v6（ページ遷移）
- TanStack Query（サーバー状態管理）
- Leaflet.js（地図表示）
- Context API または Zustand（グローバル状態管理）
