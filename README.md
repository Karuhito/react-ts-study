# React + TypeScript 学習リポジトリ

路面状況報告アプリを作ることを最終目標に、JS → TypeScript → React の順で学習するリポジトリです。

## 学習の進め方

[PROGRESS.md](PROGRESS.md) にチェックボックス形式で進捗を管理しています。各フェーズを完了したらチェックを入れ、コミットします。

## フェーズ構成

| フェーズ | 内容 | 期間 | 状態 |
|---------|------|------|------|
| Phase 0 | JS 実践（配列・DOM・fetch） | 約1週間 | 学習中 |
| Phase 1 | TypeScript 基礎 | 約2週間 | 未開始 |
| Phase 2 | React + TypeScript 基礎 | 約3週間 | 未開始 |
| Phase 3 | React 中級 | 約3週間 | 未開始 |
| Phase 4 | アプリ開発 | 約4週間〜 | 未開始 |

## ディレクトリ構成

```
react-study/
├── PROGRESS.md              # 学習進捗チェックリスト
├── phase-0-js/              # Phase 0: JS 実践
│   ├── day1-arrays/         # 配列・アロー関数
│   ├── day2-objects/        # オブジェクト・分割代入・スプレッド
│   ├── day3-dom/            # DOM 操作
│   ├── day4-events/         # イベントリスナー
│   ├── day5-fetch/          # fetch・async/await
│   └── day6-7-mini-app/     # まとめ課題（Vanilla JS ミニアプリ）
├── phase-1-typescript/      # Phase 1: TypeScript 基礎（Phase 0 完了後に作成）
├── phase-2-react/           # Phase 2: React + TS（Phase 1 完了後に作成）
└── docs/
    └── superpowers/
        ├── specs/           # カリキュラム設計ドキュメント
        └── plans/           # 実装プラン
```

## 各フェーズの演習ファイルの使い方

各 `exercise.js` / `exercise.ts` は2部構成です。

1. **写経パート** — コードを読んで実際に動かす
2. **練習問題（Q1, Q2...）** — `TODO` コメントの箇所を自分で書く

### Phase 0 の実行方法

```bash
# Day 1, 2（Node.js で実行）
node phase-0-js/day1-arrays/exercise.js
node phase-0-js/day2-objects/exercise.js

# Day 3〜7（ブラウザで開く）
# index.html をブラウザにドラッグ＆ドロップ、または VS Code の Live Server で開く
# ※ Day 5 の fetch は Live Server 必須（file:// だと CORS エラーになる）
```

## 最終目標

路面状況を報告・共有できる Web アプリの開発。
