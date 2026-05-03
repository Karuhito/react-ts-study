// ===== 写経パート（まずこのコードを読んで理解しよう）=====

type RoadCondition = "良好" | "悪化" | "危険";

interface RoadReport {
  id: number;
  location: string;
  condition: RoadCondition;
  reportedAt: string;
}

// 引数と戻り値に型を付ける
function formatReport(report: RoadReport): string {
  return `[${report.reportedAt}] ${report.location}: ${report.condition}`;
}

// void: 値を返さない関数
function logReport(report: RoadReport): void {
  console.log(formatReport(report));
}

// 関数を引数として受け取る（高階関数）
function filterReports(
  reports: RoadReport[],
  predicate: (report: RoadReport) => boolean
): RoadReport[] {
  return reports.filter(predicate);
}

const reports: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-04-29" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-04-29" },
  { id: 3, location: "国道3号", condition: "悪化", reportedAt: "2026-04-28" },
];

const dangerous = filterReports(reports, (r) => r.condition === "危険");
console.log(dangerous.map((r) => r.location)); // ["国道2号"]

reports.forEach(logReport);

// ===== 練習問題（自分で書いてみよう）=====

// Q1: reports 配列に新しい報告を追加して新しい配列を返す関数を完成させる
// 戻り値は RoadReport[]
// ヒント: Omit<RoadReport, "id"> は「id を除いた RoadReport の型」という意味
function addReport(reports: RoadReport[], newReport: Omit<RoadReport, "id">): RoadReport[] {
  // TODO: スプレッド構文で新しい配列を返す。id は reports.length + 1 にする
  return [
    ...reports, // 既存の報告をそのまま展開
    { id: reports.length + 1, ...newReport } // 新しい報告  
  ]
  
}

// Q2: 戻り値の型を補完する
// ヒント: find() は見つからないとき undefined を返す
function findById(reports: RoadReport[], id: number): RoadReport | undefined {
  return reports.find((r) => r.id === id);
}

const updated = addReport(reports, {
  location: "国道4号",
  condition: "悪化",
  reportedAt: "2026-05-03",
});
console.log(updated);
console.log(updated.length);

const oldReportId = findById(reports, 4); // 古い配列を引数にしていてid 4が存在しないのでundefinedが帰ってくる
const newReportId = findById(updated, 4); // 新しい配列を引数にしているからid4のreportが帰ってくる


console.log(oldReportId);
console.log(newReportId);

export {};
