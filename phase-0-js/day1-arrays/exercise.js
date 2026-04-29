// ===== 写経パート（まずこのコードを読んで理解しよう）=====

// アロー関数
const greet = (name) => `こんにちは、${name}さん`;
console.log(greet("太郎")); // こんにちは、太郎さん

// 路面状況データの配列
const reports = [
  { id: 1, location: "国道1号", condition: "良好", date: "2026-04-29" },
  { id: 2, location: "国道2号", condition: "危険", date: "2026-04-29" },
  { id: 3, location: "国道3号", condition: "悪化", date: "2026-04-28" },
  { id: 4, location: "国道4号", condition: "良好", date: "2026-04-28" },
];

// map: 場所名だけ取り出す
const locations = reports.map((r) => r.location);
console.log(locations);

// filter: 危険な報告だけ取り出す
const dangerous = reports.filter((r) => r.condition === "危険");
console.log(dangerous);

// find: ID で検索
const found = reports.find((r) => r.id === 3);
console.log(found);

// forEach: 全件表示
reports.forEach((r) => {
  console.log(`${r.location}: ${r.condition}`);
});

// ===== 練習問題（自分で書いてみよう）=====

// Q1: "2026-04-29" に報告されたものだけ取り出す（filter を使う）
const todayReports = null; // TODO: filter を使ったコードに書き換える
console.log("今日の報告:", todayReports?.length ?? "未完成", "件"); // 期待: 2件

// Q2: 全報告の id を配列にする（map を使う）
const ids = null; // TODO: map を使ったコードに書き換える
console.log("ID一覧（期待: [1, 2, 3, 4]）:", ids ?? "未完成");

// Q3: condition が "良好" の件数を数える（filter + .length を使う）
const goodCount = null; // TODO: filter + .length を使ったコードに書き換える
console.log("良好な報告:", goodCount ?? "未完成", "件"); // 期待: 2件
