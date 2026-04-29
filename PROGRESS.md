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
- [ ] `cd phase-1-typescript && npm install` を実行する
- [ ] `npx tsx day1-basics/exercise.ts` が動くことを確認する

### Day 1 — 基本型
- [ ] `phase-1-typescript/day1-basics/exercise.ts` の写経パートを読んで動かす
- [ ] Q1: 変数に型アノテーションを付ける
- [ ] Q2: 関数の引数と戻り値に型を付ける
- [ ] コミット

### Day 2 — 配列の型・タプル
- [ ] `phase-1-typescript/day2-arrays/exercise.ts` の写経パートを動かす
- [ ] Q1: 配列変数に型を付ける
- [ ] Q2: タプル配列を定義する
- [ ] コミット

### Day 3 — interface・type
- [ ] `phase-1-typescript/day3-interfaces/exercise.ts` を動かす
- [ ] Q1: `Reporter` interface を定義する
- [ ] Q2: `DetailedReport` interface を定義する
- [ ] コミット

### Day 4 — Union 型・Optional・リテラル型
- [ ] `phase-1-typescript/day4-union/exercise.ts` を動かす
- [ ] Q1: `ReportStatus` 型を定義する
- [ ] Q2: `VerifiedReport` interface を定義する
- [ ] コミット

### Days 5-6 — 関数の型付け
- [ ] `phase-1-typescript/day5-6-functions/exercise.ts` を動かす
- [ ] Q1: `addReport` 関数に型を付ける
- [ ] Q2: 戻り値が `RoadReport | undefined` の関数を書く
- [ ] コミット

### Day 7 — 型アサーション・unknown
- [ ] `phase-1-typescript/day7-assertions/exercise.ts` を動かす
- [ ] `any` と `unknown` の違いを説明できるようにする
- [ ] コミット

### Day 8 — ジェネリクス
- [ ] `phase-1-typescript/day8-generics/exercise.ts` を動かす
- [ ] Q1: `PaginatedResponse<T>` 型を使ってデータを定義する
- [ ] コミット

### Days 9-10 — Utility Types
- [ ] `phase-1-typescript/day9-10-utility/exercise.ts` を動かす
- [ ] Q1: `Omit` を使った型を定義する
- [ ] Q2: `Pick` を使った型を定義する
- [ ] Q3: `Readonly` を使った型を定義する
- [ ] コミット

### Days 11-14 — まとめ課題（JS アプリを TS で書き直す）
- [ ] `phase-1-typescript/day11-14-rewrite/main.ts` のスケルトンを自力で実装する
- [ ] `addReport` 関数を実装する
- [ ] `deleteReport` 関数を実装する
- [ ] `renderList` 関数を実装する
- [ ] フォームとイベントリスナーを実装する
- [ ] `npx tsc --noEmit` でエラーが出ないことを確認
- [ ] コミット: `git commit -m "phase-1 day11-14: TSまとめ課題完了"`

---

## Phase 2: React + TypeScript 基礎（約3週間）

> Phase 1 完了後に開始。詳細プランは「Phase 2 の計画を作ってください」と伝えると作成します。

- [ ] **Task 17**: Vite プロジェクト作成・動作確認
- [ ] **Task 18**: JSX・コンポーネント基礎（リスト表示）
- [ ] **Task 19**: Props・コンポーネント分割（`ReportCard`）
- [ ] **Task 20**: `useState`・フォーム（`ReportForm`）
- [ ] Days 8-21: リスト操作・`useEffect`・まとめ課題 ← 詳細プランを別途作成

---

## Phase 3 & 4

> Phase 2 完了後に計画を作成します。

---

## メモ欄

<!-- ここに自由にメモを書いてください -->
