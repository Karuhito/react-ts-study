// ===== 写経パート（まずこのコードを読んで理解しよう）=====

// any を使わない理由: 型チェックが完全に無効になる
// const data: any = ...; // NG

// unknown: 「型がわからない値」。使う前に型チェックが必要
function processApiResponse(data: unknown): string { // dataの型がわからない状態
  if (typeof data === "string") { // dataのtypeが文字列の時
    return data.toUpperCase();
  }
  if (typeof data === "object" && data !== null && "location" in data) { // データがオブジェクト型でnullではなく locationが入っている時
    return String((data as { location: string }).location);
  }
  return "不明なデータ"; // どれでもない場合は不明なデータと返す
}

console.log(processApiResponse("国道1号"));                    // 国道1号
console.log(processApiResponse({ location: "国道2号" }));      // 国道2号
console.log(processApiResponse(42));                           // 不明なデータ
console.log(processApiResponse("国道123号"));

// 型アサーション（as）: APIレスポンスに型を付ける典型パターン
interface RoadReport {
  id: number;
  location: string;
  condition: string;
}

async function fetchReport(id: number): Promise<RoadReport> {
  const response = await fetch(`https://example.com/api/reports/${id}`);
  const data: unknown = await response.json();
  return data as RoadReport; // APIのレスポンス形状を開発者が保証する
}

// as の乱用は危険（実行時エラーになる可能性がある）
// const wrong = "hello" as RoadReport; // NG

// ===== 確認事項 =====
// any と unknown の違いを説明できるようにしよう:
// - any: 型チェックを完全に無効にする（危険）
// - unknown: 型がわからないことを示す。使う前に typeof などで型を絞り込む必要がある（安全）
// - any は基本使わない。型がわからない場合はunknownを使うこと。
export {};
