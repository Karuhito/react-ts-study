// ===== 写経パート（まずこのコードを読んで理解しよう）=====

// リテラル型: 特定の値だけ許可
type RoadCondition = "良好" | "悪化" | "危険";

const condition: RoadCondition = "良好"; // OK
// const bad: RoadCondition = "普通";    // エラー

// Union 型
type Id = number | string;
const id1: Id = 1;
const id2: Id = "report-001";

// Optional プロパティ（?）
interface RoadReport {
  id: number;
  location: string;
  condition: RoadCondition;
  photoUrl?: string;  // あってもなくてもよい
  deletedAt?: string;
}

const report1: RoadReport = {
  id: 1,
  location: "国道1号",
  condition: "危険",
  // photoUrl は省略できる
};

const report2: RoadReport = {
  id: 2,
  location: "国道2号",
  condition: "良好",
  photoUrl: "https://example.com/photo.jpg",
};

function getPhotoUrl(report: RoadReport): string | null {
  return report.photoUrl ?? null;
}

console.log(getPhotoUrl(report1)); // null
console.log(getPhotoUrl(report2)); // "https://..."

// ===== 練習問題（自分で書いてみよう）=====

// Q1: ReportStatus 型を定義する
// 許可する値: "pending" | "verified" | "rejected"
// TODO: type ReportStatus = ...

// Q2: VerifiedReport interface を定義する
// 必要なプロパティ: id（number）, location（string）, status（ReportStatus）, verifiedBy（string、任意）
// TODO: interface VerifiedReport { ... }

export {};
