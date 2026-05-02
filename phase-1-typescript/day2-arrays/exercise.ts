// ===== 写経パート（まずこのコードを読んで理解しよう）=====

// 配列の型
const locations: string[] = ["国道1号", "国道2号", "国道3号"];
const ids: number[] = [1, 2, 3];

locations.push("国道4号"); // OK
//locations.push(123);    // エラー

// map/filter も型が伝播する
const upper = locations.map((l) => l.toUpperCase()); // string[]
const long = locations.filter((l) => l.length > 4);  // string[]
console.log(upper);
console.log(long);

// タプル: 長さと型が固定された配列
const coordinate: [number, number] = [35.6895, 139.6917];
const lat = coordinate[0];
const lng = coordinate[1];
console.log(`緯度: ${lat}, 経度: ${lng}`);

// ===== 練習問題（自分で書いてみよう）=====

// Q1: 型を付けて定義する
// TODO: /* ??? */ の部分に適切な型を書く
const reportIds: number[] = [101, 102, 103];
const reportDates: string[] = ["2026-04-29", "2026-04-28"];

// Q2: [場所名, 状況] のタプル配列を定義する
// 期待: [["国道1号", "良好"], ["国道2号", "危険"]] のような構造
const reportTuples: [string, string][] = [["国道1号", "良好"],["国道2号","危険"]];
console.log("Q2 reportTuples:", reportTuples);

export {};
