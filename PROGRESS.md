# 学習進捗チェックリスト

## Phase 0: JS 実践（約1週間）

### Day 1 — 配列・関数・アロー関数
- [ ] `phase-0-js/day1-arrays/exercise.js` の写経パートを読んで動かす
- [ ] Q1: `filter` で今日の報告を取り出す
- [ ] Q2: `map` で id の配列を作る
- [ ] Q3: `filter + .length` で良好な件数を数える
- [ ] コミット: `git add phase-0-js/day1-arrays/exercise.js && git commit -m "phase-0 day1: 練習問題完了"`

### Day 2 — オブジェクト・分割代入・スプレッド構文
- [ ] `phase-0-js/day2-objects/exercise.js` の写経パートを読んで動かす
- [ ] Q1: スプレッド構文で condition を更新したオブジェクトを作る
- [ ] Q2: `forEach` + 分割代入でリスト表示する
- [ ] コミット: `git add phase-0-js/day2-objects/exercise.js && git commit -m "phase-0 day2: 練習問題完了"`

### Day 3 — DOM 操作
- [ ] `phase-0-js/day3-dom/index.html` をブラウザで開いて写経パートの動作確認
- [ ] Q1: `filter` で危険な報告だけ `#danger-list` に表示する
- [ ] コミット: `git add phase-0-js/day3-dom/ && git commit -m "phase-0 day3: 練習問題完了"`

### Day 4 — イベントリスナー
- [ ] `phase-0-js/day4-events/index.html` をブラウザで開く
- [ ] フォーム送信 → リストに追加される動作を確認
- [ ] 削除ボタン → 該当行が消える動作を確認
- [ ] コミット: `git add phase-0-js/day4-events/ && git commit -m "phase-0 day4: 動作確認完了"`

### Day 5 — fetch・async/await
- [ ] `phase-0-js/day5-fetch/index.html` を Live Server で開く
- [ ] 「天気を取得する」ボタンで気温が表示されることを確認
- [ ] 「報告を取得する」ボタンで 0.5 秒後にリストが表示されることを確認
- [ ] コミット: `git add phase-0-js/day5-fetch/ && git commit -m "phase-0 day5: 動作確認完了"`

### Days 6-7 — まとめ課題（Vanilla JS ミニアプリ）
- [ ] `phase-0-js/day6-7-mini-app/script.js` の TODO を自分でコードに書き換える
- [ ] ① `renderList` 関数を実装する（フィルタリング・削除ボタン・.danger クラス付与）
- [ ] ② フォーム送信イベントを実装する（追加 → renderList 呼び出し）
- [ ] ③ フィルタチェックボックスの change イベントを実装する
- [ ] 動作確認チェック:
  - [ ] 起動時に2件の初期データが表示される
  - [ ] フォームから新規報告を追加できる
  - [ ] 削除ボタンで報告が消える
  - [ ] 「危険のみ表示」チェックで絞り込みが動く
  - [ ] 「危険」の報告が赤字・太字で表示される
- [ ] コミット: `git add phase-0-js/day6-7-mini-app/ && git commit -m "phase-0 day6-7: まとめ課題完了"`

---

## Phase 1: TypeScript 基礎（約2週間）

> Phase 0 完了後に開始

### セットアップ
- [x] `cd phase-1-typescript && npm install` を実行する
- [x] `npx tsx day1-basics/exercise.ts` が動くことを確認する

### Day 1 — 基本型
- [x] `phase-1-typescript/day1-basics/exercise.ts` の写経パートを読んで動かす
- [x] Q1: 変数に型アノテーションを付ける
- [x] Q2: 関数の引数と戻り値に型を付ける
- [x] コミット

### Day 2 — 配列の型・タプル
- [x] `phase-1-typescript/day2-arrays/exercise.ts` の写経パートを動かす
- [x] Q1: 配列変数に型を付ける
- [x] Q2: タプル配列を定義する
- [x] コミット

### Day 3 — interface・type
- [x] `phase-1-typescript/day3-interfaces/exercise.ts` を動かす
- [x] Q1: `Reporter` interface を定義する
- [x] Q2: `DetailedReport` interface を定義する
- [x] コミット

### Day 4 — Union 型・Optional・リテラル型
- [x] `phase-1-typescript/day4-union/exercise.ts` を動かす
- [x] Q1: `ReportStatus` 型を定義する
- [x] Q2: `VerifiedReport` interface を定義する
- [x] コミット

### Days 5-6 — 関数の型付け
- [x] `phase-1-typescript/day5-6-functions/exercise.ts` を動かす
- [x] Q1: `addReport` 関数に型を付ける
- [x] Q2: 戻り値が `RoadReport | undefined` の関数を書く
- [x] コミット

### Day 7 — 型アサーション・unknown
- [x] `phase-1-typescript/day7-assertions/exercise.ts` を動かす
- [x] `any` と `unknown` の違いを説明できるようにする
- [x] コミット

### Day 8 — ジェネリクス
- [x] `phase-1-typescript/day8-generics/exercise.ts` を動かす
- [x] Q1: `PaginatedResponse<T>` 型を使ってデータを定義する
- [x] コミット

### Days 9-10 — Utility Types
- [x] `phase-1-typescript/day9-10-utility/exercise.ts` を動かす
- [x] Q1: `Omit` を使った型を定義する
- [x] Q2: `Pick` を使った型を定義する
- [x] Q3: `Readonly` を使った型を定義する
- [x] コミット

### Days 11-14 — まとめ課題（JS アプリを TS で書き直す）
- [x] `phase-1-typescript/day11-14-rewrite/main.ts` のスケルトンを自力で実装する
- [x] `addReport` 関数を実装する
- [x] `deleteReport` 関数を実装する
- [x] `renderList` 関数を実装する
- [x] フォームとイベントリスナーを実装する
- [x] `npx tsc --noEmit` でエラーが出ないことを確認
- [x] コミット: `git commit -m "phase-1 day11-14: TSまとめ課題完了"`

---

## Phase 2: React + TypeScript 基礎（約3週間）

> Phase 1 完了後に開始。詳細プランは `docs/superpowers/plans/2026-05-04-phase2-react-plan.md` を参照。

### Task 17 — Vite セットアップ
- [x] `npm create vite@latest phase-2-react -- --template react-ts` を実行する
- [x] `npm install` を実行する
- [x] `npm run dev` で `http://localhost:5173` が表示されることを確認する
- [x] 不要ファイルを削除・`App.tsx` をクリーンにする
- [x] コミット

### Task 18 — Days 1-2: JSX・コンポーネント基礎
- [ ] `phase-2-react/src/types.ts` を作成する
- [ ] `App.tsx` に `INITIAL_REPORTS` と `map` を使ったリスト表示を書く
- [ ] ブラウザで2件のリストが表示されることを確認する
- [ ] コミット

### Task 19 — Days 3-4: Props・コンポーネント分割
- [ ] `src/components/ReportCard.tsx` を作成する
- [ ] `App.tsx` を修正して `ReportCard` を使う
- [ ] 「危険」の報告が赤字・太字で表示されることを確認する
- [ ] コミット

### Task 20 — Days 5-7: useState・フォーム
- [ ] `src/components/ReportForm.tsx` を作成する
- [ ] `App.tsx` に `useState` と投稿機能を追加する
- [ ] フォームから報告を追加できることを確認する
- [ ] コミット

### Task 21 — Days 8-9: 削除・フィルタ
- [ ] `ReportCard` に削除ボタン（`onDelete` Props）を追加する
- [ ] `App.tsx` に削除機能とフィルタ用 `useState` を追加する
- [ ] 削除・フィルタが動くことを確認する
- [ ] コミット

### Task 22 — Days 10-12: useEffect・データフェッチ
- [ ] `src/api/mockApi.ts` を作成する（遅延付きモック API）
- [ ] `App.tsx` に `useEffect` でデータ取得を追加する
- [ ] 起動時に「読み込み中...」→リスト表示の流れを確認する
- [ ] コミット

### Task 23 — Days 13-15: カスタムフック
- [ ] `src/hooks/useReports.ts` を作成する
- [ ] `App.tsx` をカスタムフックを使うように書き直す
- [ ] 動作が変わらないことを確認する
- [ ] コミット

### Task 24 — Days 16-21: まとめ課題
- [ ] `src/components/ReportList.tsx` を作成する
- [ ] `App.tsx` を最終形に整える
- [ ] `App.css` でスタイルを追加する
- [ ] 動作確認チェック:
  - [ ] 起動時に「読み込み中...」→リスト表示
  - [ ] フォームから新規報告を追加できる
  - [ ] 削除ボタンで報告が消える
  - [ ] 「危険のみ表示」チェックで絞り込みが動く
  - [ ] 「危険」の報告が赤字・太字で表示される
  - [ ] 報告が0件のとき「報告がありません」と表示される
- [ ] コミット

---

## Phase 3 & 4

> Phase 2 完了後に計画を作成します。

---

## メモ欄

<!-- ここに自由にメモを書いてください -->
