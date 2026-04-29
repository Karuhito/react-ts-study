# React + TypeScript 学習 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** JS → TypeScript → React の順で学習し、路面状況報告・共有Webアプリを完成させる

**Architecture:** フェーズごとに独立したディレクトリで演習を進める。Phase 0 は Vanilla JS、Phase 1 は TypeScript 単体、Phase 2 以降は Vite + React + TS プロジェクトを使用する。各課題はアプリのテーマ（路面状況報告）に沿って設計する。

**Tech Stack:** Node.js 22+, TypeScript 5+, React 19, Vite 6, React Router v6, TanStack Query v5, Leaflet.js（Phase 3）、バックエンドは Phase 4 着手時に選定

---

## ファイル構造

```
react-study/
├── docs/superpowers/specs/ と plans/
├── phase-0-js/
│   ├── day1-arrays/exercise.js
│   ├── day2-objects/exercise.js
│   ├── day3-dom/index.html, script.js
│   ├── day4-events/index.html, script.js
│   ├── day5-fetch/index.html, script.js
│   └── day6-7-mini-app/index.html, script.js
├── phase-1-typescript/
│   ├── package.json, tsconfig.json
│   ├── day1-basics/exercise.ts
│   ├── day2-arrays/exercise.ts
│   ├── day3-interfaces/exercise.ts
│   ├── day4-union/exercise.ts
│   ├── day5-6-functions/exercise.ts
│   ├── day7-assertions/exercise.ts
│   ├── day8-generics/exercise.ts
│   ├── day9-10-utility/exercise.ts
│   └── day11-14-rewrite/index.html, main.ts
└── phase-2-react/   ← Phase 2 Task 1 で Vite が生成
    └── src/
        ├── types.ts
        ├── App.tsx
        └── components/
            ├── ReportCard.tsx
            ├── ReportForm.tsx
            └── ReportList.tsx
```

---

## 事前準備: git の初期化

- [ ] **git を初期化する**

```bash
cd /Users/kazutoenomoto/workspace/react-study
git init
git add docs/
git commit -m "initial: カリキュラム設計ドキュメント追加"
```

---

## Phase 0: JS 実践

### Task 1: Day 1 — 配列・関数・アロー関数

**Files:**
- Create: `phase-0-js/day1-arrays/exercise.js`

- [ ] **Step 1: Node.js のバージョンを確認する**

```bash
node --version
```

期待: `v22.x.x` 以上。入っていなければ https://nodejs.org からインストール。

- [ ] **Step 2: ディレクトリを作成する**

```bash
mkdir -p phase-0-js/day1-arrays
```

- [ ] **Step 3: exercise.js を書く（写経）**

`phase-0-js/day1-arrays/exercise.js`:

```javascript
// アロー関数
const greet = (name) => `こんにちは、${name}さん`;
console.log(greet("太郎")); // こんにちは、太郎さん

// 路面状況データの配列
const reports = [
  { id: 1, location: "国道1号", condition: "良好", date: "2026-04-29" },
  { id: 2, location: "国道2号", condition: "危険", date: "2026-04-29" },
  { id: 3, location: "国道3号", condition: "悪化", date: "2026-04-28" },
  { id: 4, location: "国道4号", condition: "良好", date: "2026-04-28" },
];

// map: 場所名だけ取り出す
const locations = reports.map((r) => r.location);
console.log(locations);

// filter: 危険な報告だけ取り出す
const dangerous = reports.filter((r) => r.condition === "危険");
console.log(dangerous);

// find: ID で検索
const found = reports.find((r) => r.id === 3);
console.log(found);

// forEach: 全件表示
reports.forEach((r) => {
  console.log(`${r.location}: ${r.condition}`);
});
```

- [ ] **Step 4: 動作確認**

```bash
node phase-0-js/day1-arrays/exercise.js
```

期待する出力:
```
こんにちは、太郎さん
[ '国道1号', '国道2号', '国道3号', '国道4号' ]
[ { id: 2, location: '国道2号', condition: '危険', date: '2026-04-29' } ]
{ id: 3, location: '国道3号', condition: '悪化', date: '2026-04-28' }
国道1号: 良好
国道2号: 危険
国道3号: 悪化
国道4号: 良好
```

- [ ] **Step 5: 練習問題を解く（exercise.js に追記）**

```javascript
// Q1: "2026-04-29" に報告されたものだけ取り出す（filter）
const todayReports = /* ここに書く */;
console.log("今日の報告:", todayReports.length, "件"); // 2件

// Q2: 全報告の id を配列にする（map）
const ids = /* ここに書く */;
console.log("ID一覧:", ids); // [1, 2, 3, 4]

// Q3: condition が "良好" の件数を数える（filter + .length）
const goodCount = /* ここに書く */;
console.log("良好な報告:", goodCount, "件"); // 2件
```

- [ ] **Step 6: コミット**

```bash
git add phase-0-js/day1-arrays/exercise.js
git commit -m "phase-0 day1: 配列・アロー関数の練習"
```

---

### Task 2: Day 2 — オブジェクト・分割代入・スプレッド構文

**Files:**
- Create: `phase-0-js/day2-objects/exercise.js`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-0-js/day2-objects
```

- [ ] **Step 2: exercise.js を書く（写経）**

`phase-0-js/day2-objects/exercise.js`:

```javascript
const report = {
  id: 1,
  location: "国道1号",
  condition: "悪化",
  coordinates: { lat: 35.6895, lng: 139.6917 },
};

// プロパティへのアクセス
console.log(report.location);        // 国道1号
console.log(report.coordinates.lat); // 35.6895

// 分割代入
const { location, condition } = report;
console.log(location, condition); // 国道1号 悪化

// ネストした分割代入
const { coordinates: { lat, lng } } = report;
console.log(lat, lng); // 35.6895 139.6917

// スプレッド構文でオブジェクトを更新（元は変えない）
const updatedReport = { ...report, condition: "良好" };
console.log(report.condition);        // 悪化（元は変わらない）
console.log(updatedReport.condition); // 良好

// 配列のスプレッド
const reports = [
  { id: 1, location: "国道1号", condition: "良好" },
  { id: 2, location: "国道2号", condition: "危険" },
];
const newReport = { id: 3, location: "国道3号", condition: "悪化" };
const allReports = [...reports, newReport];
console.log(allReports.length); // 3
```

- [ ] **Step 3: 動作確認**

```bash
node phase-0-js/day2-objects/exercise.js
```

期待:
```
国道1号
35.6895
国道1号 悪化
35.6895 139.6917
悪化
良好
3
```

- [ ] **Step 4: 練習問題を解く（追記）**

```javascript
// Q1: report の condition を "危険" に更新した新しいオブジェクトを作る
const dangerReport = /* ここに書く */;
console.log(dangerReport.condition); // 危険
console.log(report.condition);       // 悪化（元は変わらない）

// Q2: reports 配列を forEach で回し、分割代入で location と condition を取り出して表示
reports.forEach(({ location, condition }) => {
  console.log(`${/* ここ */}: ${/* ここ */}`);
});
// 国道1号: 良好
// 国道2号: 危険
```

- [ ] **Step 5: コミット**

```bash
git add phase-0-js/day2-objects/exercise.js
git commit -m "phase-0 day2: オブジェクト・分割代入・スプレッドの練習"
```

---

### Task 3: Day 3 — DOM 操作

**Files:**
- Create: `phase-0-js/day3-dom/index.html`
- Create: `phase-0-js/day3-dom/script.js`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-0-js/day3-dom
```

- [ ] **Step 2: index.html を書く**

`phase-0-js/day3-dom/index.html`:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>路面状況一覧</title>
</head>
<body>
  <h1>路面状況報告</h1>
  <div id="count"></div>
  <ul id="report-list"></ul>
  <ul id="danger-list"></ul>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: script.js を書く（写経）**

`phase-0-js/day3-dom/script.js`:

```javascript
const reports = [
  { id: 1, location: "国道1号", condition: "良好" },
  { id: 2, location: "国道2号", condition: "危険" },
  { id: 3, location: "国道3号", condition: "悪化" },
];

// 件数表示
const countEl = document.querySelector("#count");
countEl.textContent = `報告件数: ${reports.length}件`;

// リスト表示
const listEl = document.querySelector("#report-list");
reports.forEach((report) => {
  const li = document.createElement("li");
  li.textContent = `${report.location}: ${report.condition}`;
  listEl.appendChild(li);
});
```

- [ ] **Step 4: ブラウザで確認**

`phase-0-js/day3-dom/index.html` をブラウザで直接開く（ファイルをダブルクリック）。

期待: 「報告件数: 3件」と3件のリストが表示される。

- [ ] **Step 5: 練習問題を解く（script.js に追記）**

```javascript
// Q1: condition が "危険" の報告だけ #danger-list に表示する
const dangerListEl = document.querySelector("#danger-list");
const dangerReports = reports.filter(/* ここに書く */);
dangerReports.forEach((report) => {
  const li = document.createElement("li");
  li.textContent = /* ここに書く */;
  dangerListEl.appendChild(li);
});
```

- [ ] **Step 6: コミット**

```bash
git add phase-0-js/day3-dom/
git commit -m "phase-0 day3: DOM操作の練習"
```

---

### Task 4: Day 4 — イベントリスナー

**Files:**
- Create: `phase-0-js/day4-events/index.html`
- Create: `phase-0-js/day4-events/script.js`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-0-js/day4-events
```

- [ ] **Step 2: index.html を書く**

`phase-0-js/day4-events/index.html`:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>路面状況投稿</title>
</head>
<body>
  <h1>路面状況を報告する</h1>
  <form id="report-form">
    <input type="text" id="location-input" placeholder="場所（例：国道1号）" required>
    <select id="condition-select">
      <option value="良好">良好</option>
      <option value="悪化">悪化</option>
      <option value="危険">危険</option>
    </select>
    <button type="submit">報告する</button>
  </form>
  <ul id="report-list"></ul>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: script.js を書く（写経）**

`phase-0-js/day4-events/script.js`:

```javascript
const reports = [];
const form = document.querySelector("#report-form");
const listEl = document.querySelector("#report-list");

function renderList() {
  listEl.innerHTML = "";
  reports.forEach((report, index) => {
    const li = document.createElement("li");
    li.textContent = `${report.location}: ${report.condition}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener("click", () => {
      reports.splice(index, 1);
      renderList();
    });

    li.appendChild(deleteBtn);
    listEl.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.querySelector("#location-input").value;
  const condition = document.querySelector("#condition-select").value;
  reports.push({ id: reports.length + 1, location, condition });
  renderList();
  form.reset();
});
```

- [ ] **Step 4: ブラウザで確認**

`index.html` を開き、フォームに入力して「報告する」を押す。

期待:
- 入力した内容がリストに追加される
- 「削除」ボタンで該当行が消える

- [ ] **Step 5: コミット**

```bash
git add phase-0-js/day4-events/
git commit -m "phase-0 day4: イベントリスナーの練習"
```

---

### Task 5: Day 5 — fetch・async/await

**Files:**
- Create: `phase-0-js/day5-fetch/index.html`
- Create: `phase-0-js/day5-fetch/script.js`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-0-js/day5-fetch
```

- [ ] **Step 2: index.html を書く**

`phase-0-js/day5-fetch/index.html`:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>fetch 練習</title>
</head>
<body>
  <h1>天気取得（fetch 練習）</h1>
  <button id="fetch-btn">天気を取得する</button>
  <div id="result"></div>
  <hr>
  <h2>路面状況モック取得</h2>
  <button id="mock-btn">報告を取得する</button>
  <ul id="mock-list"></ul>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: script.js を書く（写経）**

`phase-0-js/day5-fetch/script.js`:

```javascript
// --- 実際の API を fetch する ---
const fetchBtn = document.querySelector("#fetch-btn");
const resultEl = document.querySelector("#result");

async function fetchWeather() {
  resultEl.textContent = "読み込み中...";
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m";
    const response = await fetch(url);
    const data = await response.json();
    resultEl.textContent = `現在の気温: ${data.current.temperature_2m}°C`;
  } catch (error) {
    resultEl.textContent = `エラー: ${error.message}`;
  }
}

fetchBtn.addEventListener("click", fetchWeather);

// --- モック API（遅延付き）---
async function fetchRoadReports() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [
    { id: 1, location: "国道1号", condition: "良好" },
    { id: 2, location: "国道2号", condition: "危険" },
  ];
}

const mockBtn = document.querySelector("#mock-btn");
const mockList = document.querySelector("#mock-list");

mockBtn.addEventListener("click", async () => {
  mockBtn.disabled = true;
  mockBtn.textContent = "取得中...";
  const reports = await fetchRoadReports();
  mockList.innerHTML = "";
  reports.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = `${r.location}: ${r.condition}`;
    mockList.appendChild(li);
  });
  mockBtn.disabled = false;
  mockBtn.textContent = "報告を取得する";
});
```

> **注意:** `file://` で開くと CORS エラーが出る場合がある。VS Code の「Live Server」拡張機能（Go Live ボタン）を使うか、天気APIの部分をスキップしてモックAPIだけ確認する。

- [ ] **Step 4: ブラウザで確認**

- 「天気を取得する」→ 気温が表示される
- 「報告を取得する」→ 0.5秒後にリストが表示される

- [ ] **Step 5: コミット**

```bash
git add phase-0-js/day5-fetch/
git commit -m "phase-0 day5: fetch・async/awaitの練習"
```

---

### Task 6: Days 6-7 — まとめ課題（Vanilla JS ミニアプリ）

**Files:**
- Create: `phase-0-js/day6-7-mini-app/index.html`
- Create: `phase-0-js/day6-7-mini-app/script.js`

**目標:** Day 1〜5 で学んだすべてを組み合わせて動くアプリを自力で作る。

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-0-js/day6-7-mini-app
```

- [ ] **Step 2: index.html を書く**

`phase-0-js/day6-7-mini-app/index.html`:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>路面状況報告アプリ</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; padding: 0 1rem; }
    .report-item { display: flex; justify-content: space-between; padding: 0.5rem; border-bottom: 1px solid #eee; }
    .danger { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <h1>路面状況報告</h1>
  <form id="report-form">
    <input type="text" id="location-input" placeholder="場所" required>
    <select id="condition-select">
      <option value="良好">良好</option>
      <option value="悪化">悪化</option>
      <option value="危険">危険</option>
    </select>
    <button type="submit">報告する</button>
  </form>
  <label>
    <input type="checkbox" id="danger-filter"> 危険のみ表示
  </label>
  <div id="report-list"></div>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: script.js を自分で書く**

以下のヒントをもとに自力でコードを書く（答えはない、これまでの演習の組み合わせ）:

```javascript
// ヒント:
// - let reports = [...] で初期データを持つ
// - renderList(filterDanger) 関数を作り、reports を元に #report-list を更新する
// - filterDanger が true のとき condition === "危険" のものだけ表示する
// - "危険" の項目には .danger クラスを付ける
// - form の submit で reports に追加して renderList() を呼ぶ
// - 削除ボタンで reports から filter して renderList() を呼ぶ
// - #danger-filter の change イベントでフィルタを切り替える

let reports = [
  { id: 1, location: "国道1号", condition: "良好" },
  { id: 2, location: "国道2号", condition: "危険" },
];
let nextId = 3;

// ここに renderList・addReport・イベントリスナーを書く
```

- [ ] **Step 4: 動作確認チェックリスト**

- [ ] 起動時に2件の初期データが表示される
- [ ] フォームから新規報告を追加できる
- [ ] 削除ボタンで報告が消える
- [ ] 「危険のみ表示」チェックで絞り込みが動く
- [ ] 「危険」の報告が赤字・太字で表示される

- [ ] **Step 5: コミット**

```bash
git add phase-0-js/day6-7-mini-app/
git commit -m "phase-0 day6-7: まとめ課題（Vanilla JSミニアプリ）完成"
```

---

## Phase 1: TypeScript 基礎

### Task 7: Phase 1 セットアップ

**Files:**
- Create: `phase-1-typescript/package.json`
- Create: `phase-1-typescript/tsconfig.json`

- [ ] **Step 1: ディレクトリ作成と npm 初期化**

```bash
mkdir -p phase-1-typescript
cd phase-1-typescript
npm init -y
npm install --save-dev typescript tsx
cd ..
```

- [ ] **Step 2: tsconfig.json を作成**

`phase-1-typescript/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "outDir": "dist"
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

> `strict: true` は必須。これがないと型チェックが甘くなる。

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript
echo 'console.log("TS動作確認");' > test.ts
npx tsx test.ts
rm test.ts
cd ..
```

期待: `TS動作確認` と表示される。

- [ ] **Step 4: コミット**

```bash
git add phase-1-typescript/
git commit -m "phase-1: TypeScriptセットアップ"
```

---

### Task 8: Day 1 — 基本型

**Files:**
- Create: `phase-1-typescript/day1-basics/exercise.ts`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day1-basics
```

- [ ] **Step 2: exercise.ts を書く（写経）**

`phase-1-typescript/day1-basics/exercise.ts`:

```typescript
// 基本型
const reporterName: string = "田中太郎";
const reportId: number = 1;
const isVerified: boolean = false;

console.log(reporterName, reportId, isVerified);

// 型推論（型を書かなくても TypeScript が自動で推論する）
const location = "国道1号"; // string と推論される
const count = 42;            // number と推論される

// 型エラーを体験する（コメントを外してエラーを確認 → 戻す）
// const wrongType: string = 123;

// 関数に型を付ける
function formatReport(location: string, condition: string): string {
  return `${location}: ${condition}`;
}

console.log(formatReport("国道2号", "危険"));
// console.log(formatReport(123, "危険")); // エラーになることを確認
```

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript && npx tsx day1-basics/exercise.ts && cd ..
```

期待:
```
田中太郎 1 false
国道2号: 危険
```

- [ ] **Step 4: 練習問題を解く（追記）**

```typescript
// Q1: 以下の変数に適切な型アノテーションを付ける
const latitude = 35.6895;
const longitude = 139.6917;
const roadName = "東名高速";
const hasPhoto = true;

// Q2: 引数と戻り値に型を付ける
function calculateDistance(lat1, lng1, lat2, lng2) {
  return Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lng2 - lng1, 2));
}
```

- [ ] **Step 5: コミット**

```bash
git add phase-1-typescript/day1-basics/exercise.ts
git commit -m "phase-1 day1: 基本型の練習"
```

---

### Task 9: Day 2 — 配列の型・タプル

**Files:**
- Create: `phase-1-typescript/day2-arrays/exercise.ts`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day2-arrays
```

- [ ] **Step 2: exercise.ts を書く（写経）**

`phase-1-typescript/day2-arrays/exercise.ts`:

```typescript
// 配列の型
const locations: string[] = ["国道1号", "国道2号", "国道3号"];
const ids: number[] = [1, 2, 3];

locations.push("国道4号"); // OK
// locations.push(123);    // エラー

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
```

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript && npx tsx day2-arrays/exercise.ts && cd ..
```

- [ ] **Step 4: 練習問題を解く（追記）**

```typescript
// Q1: 型を付けて定義する
const reportIds: /* ??? */ = [101, 102, 103];
const reportDates: /* ??? */ = ["2026-04-29", "2026-04-28"];

// Q2: [場所名, 状況] のタプル配列を定義する
const reportTuples: [string, string][] = /* ここに書く */;
```

- [ ] **Step 5: コミット**

```bash
git add phase-1-typescript/day2-arrays/exercise.ts
git commit -m "phase-1 day2: 配列の型・タプルの練習"
```

---

### Task 10: Day 3 — interface・type

**Files:**
- Create: `phase-1-typescript/day3-interfaces/exercise.ts`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day3-interfaces
```

- [ ] **Step 2: exercise.ts を書く（写経）**

`phase-1-typescript/day3-interfaces/exercise.ts`:

```typescript
interface Coordinates {
  lat: number;
  lng: number;
}

interface RoadReport {
  id: number;
  location: string;
  condition: string;
  coordinates: Coordinates;
  reportedAt: string;
  reporterName: string;
}

const report: RoadReport = {
  id: 1,
  location: "国道1号",
  condition: "良好",
  coordinates: { lat: 35.6895, lng: 139.6917 },
  reportedAt: "2026-04-29",
  reporterName: "田中太郎",
};

console.log(report.location);
console.log(report.coordinates.lat);

// type（type alias）
type ReportSummary = {
  id: number;
  location: string;
  condition: string;
};

const summary: ReportSummary = {
  id: report.id,
  location: report.location,
  condition: report.condition,
};
console.log(summary);
```

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript && npx tsx day3-interfaces/exercise.ts && cd ..
```

- [ ] **Step 4: 練習問題を解く（追記）**

```typescript
// Q1: Reporter interface を定義する（id: number, name: string, email: string）
interface Reporter {
  /* ここに書く */
}

// Q2: RoadReport の全プロパティ + reporter: Reporter を持つ DetailedReport を定義する
interface DetailedReport {
  /* ここに書く */
}
```

- [ ] **Step 5: コミット**

```bash
git add phase-1-typescript/day3-interfaces/exercise.ts
git commit -m "phase-1 day3: interface・typeの練習"
```

---

### Task 11: Day 4 — Union 型・Optional・リテラル型

**Files:**
- Create: `phase-1-typescript/day4-union/exercise.ts`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day4-union
```

- [ ] **Step 2: exercise.ts を書く（写経）**

`phase-1-typescript/day4-union/exercise.ts`:

```typescript
// リテラル型: 特定の値だけ許可
type RoadCondition = "良好" | "悪化" | "危険";

const condition: RoadCondition = "良好"; // OK
// const bad: RoadCondition = "普通";    // エラー

// Union 型
type Id = number | string;
const id1: Id = 1;
const id2: Id = "report-001";

// Optional プロパティ（?）
interface RoadReport {
  id: number;
  location: string;
  condition: RoadCondition;
  photoUrl?: string;  // あってもなくてもよい
  deletedAt?: string;
}

const report1: RoadReport = {
  id: 1,
  location: "国道1号",
  condition: "危険",
  // photoUrl は省略できる
};

const report2: RoadReport = {
  id: 2,
  location: "国道2号",
  condition: "良好",
  photoUrl: "https://example.com/photo.jpg",
};

function getPhotoUrl(report: RoadReport): string | null {
  return report.photoUrl ?? null;
}

console.log(getPhotoUrl(report1)); // null
console.log(getPhotoUrl(report2)); // "https://..."
```

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript && npx tsx day4-union/exercise.ts && cd ..
```

- [ ] **Step 4: 練習問題を解く（追記）**

```typescript
// Q1: ReportStatus 型を定義する（"pending" | "verified" | "rejected"）
type ReportStatus = /* ここに書く */;

// Q2: status（ReportStatus）と verifiedBy（string、任意）を持つ interface を定義する
interface VerifiedReport {
  /* ここに書く */
}
```

- [ ] **Step 5: コミット**

```bash
git add phase-1-typescript/day4-union/exercise.ts
git commit -m "phase-1 day4: Union型・Optional・リテラル型の練習"
```

---

### Task 12: Days 5-6 — 関数の型付け

**Files:**
- Create: `phase-1-typescript/day5-6-functions/exercise.ts`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day5-6-functions
```

- [ ] **Step 2: exercise.ts を書く（写経）**

`phase-1-typescript/day5-6-functions/exercise.ts`:

```typescript
type RoadCondition = "良好" | "悪化" | "危険";

interface RoadReport {
  id: number;
  location: string;
  condition: RoadCondition;
  reportedAt: string;
}

// 引数と戻り値に型を付ける
function formatReport(report: RoadReport): string {
  return `[${report.reportedAt}] ${report.location}: ${report.condition}`;
}

// void: 値を返さない関数
function logReport(report: RoadReport): void {
  console.log(formatReport(report));
}

// 関数を引数として受け取る（高階関数）
function filterReports(
  reports: RoadReport[],
  predicate: (report: RoadReport) => boolean
): RoadReport[] {
  return reports.filter(predicate);
}

const reports: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-04-29" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-04-29" },
  { id: 3, location: "国道3号", condition: "悪化", reportedAt: "2026-04-28" },
];

const dangerous = filterReports(reports, (r) => r.condition === "危険");
console.log(dangerous.map((r) => r.location)); // ["国道2号"]

reports.forEach(logReport);
```

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript && npx tsx day5-6-functions/exercise.ts && cd ..
```

- [ ] **Step 4: 練習問題を解く（追記）**

```typescript
// Q1: 引数と戻り値に型を付ける
function addReport(reports: RoadReport[], newReport: Omit<RoadReport, "id">): RoadReport[] {
  return [...reports, { ...newReport, id: reports.length + 1 }];
}

// Q2: 戻り値の型が RoadReport | undefined になる関数を書く
function findById(reports: RoadReport[], id: number): /* ??? */ {
  return reports.find((r) => r.id === id);
}
```

- [ ] **Step 5: コミット**

```bash
git add phase-1-typescript/day5-6-functions/exercise.ts
git commit -m "phase-1 day5-6: 関数の型付けの練習"
```

---

### Task 13: Day 7 — 型アサーション・unknown・any を避ける

**Files:**
- Create: `phase-1-typescript/day7-assertions/exercise.ts`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day7-assertions
```

- [ ] **Step 2: exercise.ts を書く（写経）**

`phase-1-typescript/day7-assertions/exercise.ts`:

```typescript
// any を使わない理由: 型チェックが完全に無効になる
// const data: any = ...; // NG

// unknown: 「型がわからない値」。使う前に型チェックが必要
function processApiResponse(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  if (typeof data === "object" && data !== null && "location" in data) {
    return String((data as { location: string }).location);
  }
  return "不明なデータ";
}

console.log(processApiResponse("国道1号"));        // 国道1号
console.log(processApiResponse({ location: "国道2号" })); // 国道2号
console.log(processApiResponse(42));               // 不明なデータ

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
```

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript && npx tsx day7-assertions/exercise.ts && cd ..
```

- [ ] **Step 4: コミット**

```bash
git add phase-1-typescript/day7-assertions/exercise.ts
git commit -m "phase-1 day7: 型アサーション・unknownの練習"
```

---

### Task 14: Day 8 — ジェネリクス入門

**Files:**
- Create: `phase-1-typescript/day8-generics/exercise.ts`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day8-generics
```

- [ ] **Step 2: exercise.ts を書く（写経）**

`phase-1-typescript/day8-generics/exercise.ts`:

```typescript
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
```

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript && npx tsx day8-generics/exercise.ts && cd ..
```

- [ ] **Step 4: 練習問題を解く（追記）**

```typescript
// Q1: ページネーション付きレスポンス型を定義する
interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
}

// この型を使って RoadReport のページネーション結果を定義する
const paginatedReports: PaginatedResponse<RoadReport> = {
  /* ここに書く */
};
```

- [ ] **Step 5: コミット**

```bash
git add phase-1-typescript/day8-generics/exercise.ts
git commit -m "phase-1 day8: ジェネリクスの練習"
```

---

### Task 15: Days 9-10 — Utility Types

**Files:**
- Create: `phase-1-typescript/day9-10-utility/exercise.ts`

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day9-10-utility
```

- [ ] **Step 2: exercise.ts を書く（写経）**

`phase-1-typescript/day9-10-utility/exercise.ts`:

```typescript
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

// readonly: 変更不可
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
```

- [ ] **Step 3: 動作確認**

```bash
cd phase-1-typescript && npx tsx day9-10-utility/exercise.ts && cd ..
```

- [ ] **Step 4: 練習問題を解く（追記）**

```typescript
// Q1: id・reportedAt・reporterName を除いた型を作る
type PublicReportData = /* Omit を使う */;

// Q2: location と condition だけを持つ型を作る
type MinimalReport = /* Pick を使う */;

// Q3: 全プロパティが readonly な型を作る
type FrozenReport = /* Readonly を使う */;
```

- [ ] **Step 5: コミット**

```bash
git add phase-1-typescript/day9-10-utility/exercise.ts
git commit -m "phase-1 day9-10: Utility Typesの練習"
```

---

### Task 16: Days 11-14 — まとめ課題（Vanilla JS アプリを TS で書き直す）

**Files:**
- Create: `phase-1-typescript/day11-14-rewrite/index.html`
- Create: `phase-1-typescript/day11-14-rewrite/main.ts`

**目標:** Phase 0 の Vanilla JS ミニアプリを TypeScript で書き直す。

- [ ] **Step 1: ディレクトリを作成**

```bash
mkdir -p phase-1-typescript/day11-14-rewrite
```

- [ ] **Step 2: index.html を書く**

`phase-1-typescript/day11-14-rewrite/index.html`:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>路面状況報告アプリ（TypeScript版）</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; padding: 0 1rem; }
    .danger { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <h1>路面状況報告（TS版）</h1>
  <form id="report-form">
    <input type="text" id="location-input" placeholder="場所" required>
    <select id="condition-select">
      <option value="良好">良好</option>
      <option value="悪化">悪化</option>
      <option value="危険">危険</option>
    </select>
    <button type="submit">報告する</button>
  </form>
  <label><input type="checkbox" id="danger-filter"> 危険のみ表示</label>
  <div id="report-list"></div>
  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 3: main.ts のスケルトンをもとに自力で書く**

`phase-1-typescript/day11-14-rewrite/main.ts`:

```typescript
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

function addReport(input: CreateReportInput): void {
  // ここに書く
}

function deleteReport(id: number): void {
  // ここに書く
}

function renderList(filterDanger: boolean): void {
  // ここに書く
}

// フォームとイベントリスナーの設定
const form = document.querySelector<HTMLFormElement>("#report-form");
const dangerFilter = document.querySelector<HTMLInputElement>("#danger-filter");

// ここに続きを書く

renderList(false);
```

- [ ] **Step 4: コンパイルして動作確認**

```bash
cd phase-1-typescript
npx tsc --noEmit   # 型エラーがないことを確認
npx tsc            # コンパイルして dist/ に .js を出力
cd ..
```

`dist/day11-14-rewrite/main.js` が生成されたら `index.html` の `src` を `dist/day11-14-rewrite/main.js` に変更してブラウザで開く。

動作確認チェックリスト:
- [ ] 初期データが表示される
- [ ] 追加・削除が動く
- [ ] フィルタリングが動く
- [ ] `npx tsc --noEmit` でエラーが出ない

- [ ] **Step 5: コミット**

```bash
git add phase-1-typescript/day11-14-rewrite/
git commit -m "phase-1 day11-14: TSまとめ課題（JSアプリ書き直し）完成"
```

---

## Phase 2: React + TypeScript 基礎

### Task 17: セットアップ

**Files:**
- Create: `phase-2-react/` （Vite が生成）

- [ ] **Step 1: Vite でプロジェクト作成**

```bash
npm create vite@latest phase-2-react -- --template react-ts
cd phase-2-react
npm install
```

- [ ] **Step 2: 動作確認**

```bash
npm run dev
```

`http://localhost:5173` を開き、Vite のデフォルト画面が表示されることを確認。

- [ ] **Step 3: 不要ファイルを削除してクリーンに**

```bash
rm src/assets/react.svg public/vite.svg
```

`src/App.tsx` を以下に書き換える:

```tsx
function App() {
  return (
    <div>
      <h1>路面状況報告アプリ</h1>
    </div>
  );
}

export default App;
```

`src/index.css` と `src/App.css` の中身を空にする。

- [ ] **Step 4: コミット**

```bash
cd ..
git add phase-2-react/
git commit -m "phase-2: Vite + React + TSプロジェクト作成"
```

---

### Task 18: Days 1-2 — JSX・コンポーネント基礎

**Files:**
- Create: `phase-2-react/src/types.ts`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: 共通型定義ファイルを作る**

`phase-2-react/src/types.ts`:

```typescript
export type RoadCondition = "良好" | "悪化" | "危険";

export interface RoadReport {
  id: number;
  location: string;
  condition: RoadCondition;
  reportedAt: string;
}

export type CreateReportInput = Omit<RoadReport, "id" | "reportedAt">;
```

- [ ] **Step 2: App.tsx を書く（写経）**

`phase-2-react/src/App.tsx`:

```tsx
import type { RoadReport } from "./types";

const INITIAL_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-04-29" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-04-29" },
];

function App() {
  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <p>報告件数: {INITIAL_REPORTS.length}件</p>
      <ul>
        {INITIAL_REPORTS.map((report) => (
          <li key={report.id}>
            {report.location}: {report.condition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: ブラウザで確認**

```bash
cd phase-2-react && npm run dev
```

期待: 「路面状況報告アプリ」と2件のリストが表示される。

- [ ] **Step 4: コミット**

```bash
cd ..
git add phase-2-react/src/
git commit -m "phase-2 day1-2: JSX・初期表示"
```

---

### Task 19: Days 3-4 — Props・コンポーネント分割

**Files:**
- Create: `phase-2-react/src/components/ReportCard.tsx`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: ReportCard コンポーネントを作る**

`phase-2-react/src/components/ReportCard.tsx`:

```tsx
import type { RoadReport } from "../types";

interface ReportCardProps {
  report: RoadReport;
}

export function ReportCard({ report }: ReportCardProps) {
  const isAlert = report.condition === "危険";

  return (
    <li
      style={{
        color: isAlert ? "red" : "inherit",
        fontWeight: isAlert ? "bold" : "normal",
      }}
    >
      [{report.reportedAt}] {report.location}: {report.condition}
    </li>
  );
}
```

- [ ] **Step 2: App.tsx を修正して ReportCard を使う**

`phase-2-react/src/App.tsx`:

```tsx
import type { RoadReport } from "./types";
import { ReportCard } from "./components/ReportCard";

const INITIAL_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-04-29" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-04-29" },
];

function App() {
  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ul>
        {INITIAL_REPORTS.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </ul>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: ブラウザで確認**

「危険」の報告が赤字・太字で表示されることを確認。

- [ ] **Step 4: コミット**

```bash
git add phase-2-react/src/
git commit -m "phase-2 day3-4: ReportCardコンポーネント（Props）"
```

---

### Task 20: Days 5-7 — useState・フォーム

**Files:**
- Create: `phase-2-react/src/components/ReportForm.tsx`
- Modify: `phase-2-react/src/App.tsx`

- [ ] **Step 1: ReportForm コンポーネントを作る**

`phase-2-react/src/components/ReportForm.tsx`:

```tsx
import { useState } from "react";
import type { CreateReportInput, RoadCondition } from "../types";

interface ReportFormProps {
  onSubmit: (input: CreateReportInput) => void;
}

export function ReportForm({ onSubmit }: ReportFormProps) {
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState<RoadCondition>("良好");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!location.trim()) return;
    onSubmit({ location, condition });
    setLocation("");
    setCondition("良好");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="場所（例：国道1号）"
        required
      />
      <select
        value={condition}
        onChange={(e) => setCondition(e.target.value as RoadCondition)}
      >
        <option value="良好">良好</option>
        <option value="悪化">悪化</option>
        <option value="危険">危険</option>
      </select>
      <button type="submit">報告する</button>
    </form>
  );
}
```

- [ ] **Step 2: App.tsx に useState と投稿機能を追加**

`phase-2-react/src/App.tsx`:

```tsx
import { useState } from "react";
import type { RoadReport, CreateReportInput } from "./types";
import { ReportCard } from "./components/ReportCard";
import { ReportForm } from "./components/ReportForm";

const INITIAL_REPORTS: RoadReport[] = [
  { id: 1, location: "国道1号", condition: "良好", reportedAt: "2026-04-29" },
  { id: 2, location: "国道2号", condition: "危険", reportedAt: "2026-04-29" },
];

function App() {
  const [reports, setReports] = useState<RoadReport[]>(INITIAL_REPORTS);

  function handleAddReport(input: CreateReportInput) {
    const newReport: RoadReport = {
      id: reports.length + 1,
      reportedAt: new Date().toISOString().split("T")[0],
      ...input,
    };
    setReports([...reports, newReport]);
  }

  return (
    <div>
      <h1>路面状況報告アプリ</h1>
      <ReportForm onSubmit={handleAddReport} />
      <ul>
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </ul>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: ブラウザで確認**

- フォームに入力して「報告する」を押すとリストに追加される
- フォームが送信後にリセットされる

- [ ] **Step 4: コミット**

```bash
git add phase-2-react/src/
git commit -m "phase-2 day5-7: useState・ReportFormコンポーネント"
```

---

### Tasks 21 以降（Days 8〜21 および Phase 3）

Phase 2 の Task 20 完了後に、以下を続けて学習する。詳細な実装プランは Task 20 完了時点でアシスタントに「Phase 2 の続きの計画を作ってください」と伝えること。

**Phase 2 残り（Days 8〜21）の学習項目:**
- Days 8-9: リスト表示・`key`・条件付きレンダリング（削除機能・フィルタリング追加）
- Days 10-12: `useEffect`・データフェッチ（モック API から取得して表示）
- Days 13-15: イベント型・フォームの完全な型付け
- Days 16-21: まとめ課題（投稿・一覧・削除・フィルタ付き React アプリ）

**Phase 3 の学習項目:**
- React Router v6（ページ遷移・URL パラメータ）
- Context API（グローバル状態管理）
- カスタムフック（`useRoadReports()`）
- TanStack Query v5（非同期データ管理・キャッシュ）
- Leaflet.js（地図・ピン表示）

---

## Phase 4: アプリ開発

技術スタックは Phase 4 着手時に選定・確定する。着手の際にアシスタントに相談すること。
