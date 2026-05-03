// ===== 写経パート（まずこのコードを読んで理解しよう）=====

interface Coordinates {
  lat: number;
  lng: number;
}

interface RoadReport {
  id: number;
  location: string;
  condition: string;
  coordinates: Coordinates;
  reportedAt: string;
  reporterName: string;
}

const report: RoadReport = {
  id: 1,
  location: "国道1号",
  condition: "良好",
  coordinates: { lat: 35.6895, lng: 139.6917 },
  reportedAt: "2026-04-29",
  reporterName: "田中太郎",
};

console.log(report.location);
console.log(report.coordinates.lat);

// type（type alias）
type ReportSummary = {
  id: number;
  location: string;
  condition: string;
};

const summary: ReportSummary = {
  id: report.id,
  location: report.location,
  condition: report.condition,
};
console.log(summary);

// ===== 練習問題（自分で書いてみよう）=====

// Q1: Reporter interface を定義する
// 必要なプロパティ: id（number）, name（string）, email（string）
// TODO: interface Reporter { ... } を書く
interface Reporter {
  id: number;
  name: string;
  email: string;

}

// Q2: DetailedReport interface を定義する
// RoadReport の全プロパティ + reporter: Reporter を持つ interface
// TODO: interface DetailedReport { ... } を書く
interface DetailedReport extends RoadReport {
  reporter: Reporter;
}

const detailedReport: DetailedReport = {
  id: 1,
  location: "国道1号",
  condition: "危険",
  coordinates: { lat: 35.6895, lng: 139.6917 },
  reportedAt: "2026-05-03",
  reporterName: "田中太郎",
  reporter: {
    id: 101,
    name: "田中太郎",
    email: "tanaka@email.com",
  },
};
console.log(detailedReport);
export {};
