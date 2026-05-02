// ===== まとめ課題: 路面状況報告アプリ（TypeScript版）=====
// Phase 0 の Vanilla JS ミニアプリを TypeScript で書き直す。
// 型を付けながら同じ動作を実装しよう。

type RoadCondition = "良好" | "悪化" | "危険";

interface RoadReport {
  id: number;
  location: string;
  condition: RoadCondition;
}

type CreateReportInput = Omit<RoadReport, "id">;

let reports: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好" },
  { id: 2, location: "国道2号", condition: "危険" },
];
let nextId = 3;

// TODO: addReport 関数を実装する
// 引数: input（CreateReportInput）
// 処理: reports に { id: nextId, ...input } を追加し、nextId++ する
function addReport(input: CreateReportInput): void {
  // ここに書く
}

// TODO: deleteReport 関数を実装する
// 引数: id（number）
// 処理: reports から該当 id を除外する（filter を使う）
function deleteReport(id: number): void {
  // ここに書く
}

// TODO: renderList 関数を実装する
// 引数: filterDanger（boolean）
// 処理: Phase 0 の renderList と同じ動作。型が付いている点が違い。
function renderList(filterDanger: boolean): void {
  // ここに書く
}

// フォームとイベントリスナーの設定
// ヒント: document.querySelector<HTMLFormElement>("#report-form") のように型引数を付ける
const form = document.querySelector<HTMLFormElement>("#report-form");
const dangerFilter = document.querySelector<HTMLInputElement>("#danger-filter");

// TODO: form の submit イベントを設定する
// TODO: dangerFilter の change イベントを設定する

renderList(false);
