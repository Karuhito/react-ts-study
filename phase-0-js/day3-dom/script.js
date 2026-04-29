// ===== 写経パート（まずこのコードを読んで理解しよう）=====

const reports = [
  { id: 1, location: "国道1号", condition: "良好" },
  { id: 2, location: "国道2号", condition: "危険" },
  { id: 3, location: "国道3号", condition: "悪化" },
];

// 件数表示
const countEl = document.querySelector("#count");
countEl.textContent = `報告件数: ${reports.length}件`;

// リスト表示
const listEl = document.querySelector("#report-list");
reports.forEach((report) => {
  const li = document.createElement("li");
  li.textContent = `${report.location}: ${report.condition}`;
  listEl.appendChild(li);
});

// ===== 練習問題（自分で書いてみよう）=====

// Q1: condition が "危険" の報告だけ #danger-list に表示する
const dangerListEl = document.querySelector("#danger-list");
const dangerReports = reports.filter((report) => report.condition === "危険");
dangerReports.forEach((report) => {
  const li = document.createElement("li");
  li.textContent = `${report.location}: ${report.condition}`;
  dangerListEl.appendChild(li);
});
// 期待: "国道2号: 危険" が danger-list に表示される
