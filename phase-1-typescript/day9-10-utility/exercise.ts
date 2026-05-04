// ===== 写経パート（まずこのコードを読んで理解しよう）=====

interface RoadReport {
  id: number;
  location: string;
  condition: "良好" | "悪化" | "危険";
  reportedAt: string;
  reporterName: string;
  photoUrl?: string;
}

// Partial<T>: 全プロパティをオプションにする（フォーム途中状態に使う）
type ReportFormData = Partial<RoadReport>;
const partialForm: ReportFormData = { location: "国道1号" }; // 他が欠けてもOK

// Pick<T, K>: 特定のプロパティだけ取り出す（一覧表示用）
type ReportSummary = Pick<RoadReport, "id" | "location" | "condition">;
const summary: ReportSummary = { id: 1, location: "国道1号", condition: "良好" };

// Omit<T, K>: 特定のプロパティを除く（新規作成時 id・reportedAt は不要）
type CreateReportInput = Omit<RoadReport, "id" | "reportedAt">;
const newReport: CreateReportInput = {
  location: "国道3号",
  condition: "悪化",
  reporterName: "鈴木次郎",
};

// Readonly: 変更不可
interface ImmutableReport {
  readonly id: number;
  readonly location: string;
  condition: string;
}
const locked: ImmutableReport = { id: 1, location: "国道1号", condition: "良好" };
// locked.id = 2; // エラー
locked.condition = "危険"; // OK

console.log(summary);
console.log(newReport);

// ===== 練習問題（自分で書いてみよう）=====

// Q1: id・reportedAt・reporterName を除いた型を作る（Omit を使う）
// TODO: type PublicReportData = ...
type PublicReportData = Omit<RoadReport, "id" | "reportedAt" | "reporterName">;

// Q2: location と condition だけを持つ型を作る（Pick を使う）
// TODO: type MinimalReport = ...
type MinimalReport =  Pick<RoadReport, "location" | "condition">;
// Q3: 全プロパティが readonly な型を作る（Readonly を使う）
// TODO: type FrozenReport = ...
type FrozenReport = Readonly<RoadReport>;


/* テストコード
const publicData: PublicReportData = {
  location: "国道1号",
  condition: "良好",
};

const minimal: MinimalReport = {
  location: "国道2号",
  condition: "危険",
};

const frozen: FrozenReport = {
  id: 1,
  location: "国道3号",
  condition: "悪化",
  reportedAt: "2026-05-04",
  reporterName: "田中太郎",
};
// frozen.id = 2;  Readonlyでプロパティの変更を制限

console.log(publicData);
console.log(minimal);
console.log(frozen);
*/
export {};
