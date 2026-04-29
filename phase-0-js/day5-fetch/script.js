// ===== 写経パート（まずこのコードを読んで理解しよう）=====

// --- 実際の API を fetch する ---
const fetchBtn = document.querySelector("#fetch-btn");
const resultEl = document.querySelector("#result");

async function fetchWeather() {
  resultEl.textContent = "読み込み中...";
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m";
    const response = await fetch(url);       // HTTPリクエスト送信
    const data = await response.json();      // レスポンスを JSON に変換
    resultEl.textContent = `現在の気温: ${data.current.temperature_2m}°C`;
  } catch (error) {
    resultEl.textContent = `エラー: ${error.message}`;
  }
}

fetchBtn.addEventListener("click", fetchWeather);

// --- モック API（0.5秒の遅延付き）---
// 実際の API がないので、setTimeout で遅延させてデータを返す関数
async function fetchRoadReports() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5秒待つ
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
  const reports = await fetchRoadReports(); // await で結果を待つ
  mockList.innerHTML = "";
  reports.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = `${r.location}: ${r.condition}`;
    mockList.appendChild(li);
  });
  mockBtn.disabled = false;
  mockBtn.textContent = "報告を取得する";
});

// ===== 確認事項 =====
// VS Code の Live Server（Go Live ボタン）で開いて確認しよう:
// 1. 「天気を取得する」→ 気温が表示される（CORSエラーが出る場合はスキップでOK）
// 2. 「報告を取得する」→ 0.5秒後にリストが表示される
