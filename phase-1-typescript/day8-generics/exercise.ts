// ===== 写経パート（まずこのコードを読んで理解しよう）=====

// APIレスポンスの共通ラッパー
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface RoadReport {
  id: number;
  location: string;
  condition: string;
}

interface User {
  id: number;
  name: string;
}

const reportResponse: ApiResponse<RoadReport> = {
  data: { id: 1, location: "国道1号", condition: "良好" },
  status: 200,
  message: "OK",
};

const reportsResponse: ApiResponse<RoadReport[]> = {
  data: [
    { id: 1, location: "国道1号", condition: "良好" },
    { id: 2, location: "国道2号", condition: "危険" },
  ],
  status: 200,
  message: "OK",
};

console.log(reportResponse.data.location);  // "国道1号"
console.log(reportsResponse.data.length);   // 2

// ジェネリック関数
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const first = getFirst(reportsResponse.data); // RoadReport | undefined
console.log(first?.location); // "国道1号"

// ===== 練習問題（自分で書いてみよう）=====

// Q1: PaginatedResponse<T> interface を定義する
// 必要なプロパティ: data（T[]）, total（number）, page（number）, perPage（number）
// TODO: interface PaginatedResponse<T> { ... }

// この型を使って RoadReport のページネーション結果を定義する
// TODO: const paginatedReports: PaginatedResponse<RoadReport> = { ... }
// 期待: data に2件、total: 2、page: 1、perPage: 10
