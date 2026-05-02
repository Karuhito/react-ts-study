// ===== 写経パート（まずこのコードを読んで理解しよう）=====

// 基本型
const reporterName: string = "田中太郎";
const reportId: number = 1;
const isVerified: boolean = false;

console.log(reporterName, reportId, isVerified);

// 型推論（型を書かなくても TypeScript が自動で推論する）
const locationName: string = "国道1号"; // string と推論される（location はグローバル変数と衝突するため別名にしている）
const count = 42;            // number と推論される

// 型エラーを体験する（コメントを外してエラーを確認 → 戻す）
// const wrongType: string = 123;


// 関数に型を付ける
function formatReport(location: string, condition: string): string {
  return `${location}: ${condition}`;
}

console.log(formatReport("国道2号", "危険"));
// console.log(formatReport(123, "危険")); // エラーになることを確認

// ===== 練習問題（自分で書いてみよう）=====

// Q1: 以下の変数に適切な型アノテーションを付ける
// TODO: 各変数の右側に ": 型名" を追加する
const latitude: number = 35.6895;
const longitude: number = 139.6917;
const roadName: string = "東名高速";
const hasPhoto: boolean = true;

// Q2: 引数と戻り値に型を付ける
// TODO: 引数4つ（lat1, lng1, lat2, lng2）と戻り値に number 型を付ける
function calculateDistance(lat1:number, lng1:number, lat2:number, lng2:number) :number{
  return Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lng2 - lng1, 2));
}

export {};
