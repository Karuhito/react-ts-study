# このプロジェクトについて

路面状況を報告・共有できる Web アプリの開発を最終目標に、JS → TypeScript → React の順で学習するリポジトリです。

学習者は JS の概念理解はあるが、コードを書く経験が少ない段階からスタートしています。

## 進捗管理

- 現在の進捗は `PROGRESS.md` を確認する
- 新しいフェーズのスキャフォールドを作るときは `PROGRESS.md` を参照して進捗に合わせて作成する

## ファイルの実行方法

```bash
# Phase 0: JavaScript（Node.js で実行）
node phase-0-js/day1-arrays/exercise.js

# Phase 0: DOM 操作・イベント・fetch（ブラウザで開く）
# ※ Day 5 以降の fetch は Live Server 必須

# Phase 1: TypeScript（tsx で実行）
cd phase-1-typescript
npx tsx day1-basics/exercise.ts
```

## 演習ファイルの構造

各 `exercise.js` / `exercise.ts` は2部構成：

1. **写経パート** — コードを読んで動かす（変更しない）
2. **練習問題（Q1, Q2...）** — `TODO` コメントの箇所を自分で書く

## Claude への指示

- **答えを先に書かない**: 練習問題の `TODO` 箇所にあらかじめ答えを書き込まない
- **段階的に教える**: 概念を説明してから、ユーザーが自分で書けるようにサポートする
- **確認してから進む**: 次の問題・次の Day に進む前に、現在の理解を確認する
- **日本語で教える**: 技術用語は英語のまま使ってよいが、説明は日本語で行う
