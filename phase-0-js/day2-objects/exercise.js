// ===== 写経パート（まずこのコードを読んで理解しよう）=====

const report = {
  id: 1,
  location: "国道1号",
  condition: "悪化",
  coordinates: { lat: 35.6895, lng: 139.6917 },
};

// プロパティへのアクセス
console.log(report.location);        // 国道1号
console.log(report.coordinates.lat); // 35.6895

// 分割代入
const { location, condition } = report;
console.log(location, condition); // 国道1号 悪化

// ネストした分割代入
const { coordinates: { lat, lng } } = report;
console.log(lat, lng); // 35.6895 139.6917

// スプレッド構文でオブジェクトを更新（元は変えない）
const updatedReport = { ...report, condition: "良好" };
console.log(report.condition);        // 悪化（元は変わらない）
console.log(updatedReport.condition); // 良好

// 配列のスプレッド
const reports = [
  { id: 1, location: "国道1号", condition: "良好" },
  { id: 2, location: "国道2号", condition: "危険" },
];
const newReport = { id: 3, location: "国道3号", condition: "悪化" };
const allReports = [...reports, newReport];
console.log(allReports.length); // 3

// ===== 練習問題（自分で書いてみよう）=====

// Q1: report の condition を "危険" に更新した新しいオブジェクトを作る（スプレッドを使う）
const dangerReport = { ...report, condition: "危険" };
console.log("Q1 dangerReport.condition（期待: 危険）:", dangerReport?.condition ?? "未完成");
console.log("Q1 report.condition（期待: 悪化・元は変わらない）:", report.condition);

// Q2: reports 配列を forEach で回し、分割代入で location と condition を取り出して表示する
// 期待:
// 国道1号: 良好
// 国道2号: 危険
console.log("Q2（↓期待: 国道1号: 良好 / 国道2号: 危険）:");
reports.forEach(({ location, condition }) => {
  console.log(`${location}: ${condition}`);
});
