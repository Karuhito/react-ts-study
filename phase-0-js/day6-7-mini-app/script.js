// ===== まとめ課題: 路面状況報告ミニアプリ =====
// Day 1〜5 で学んだことを組み合わせて自力で実装しよう。
// ヒントを参考にしながら、コメントの箇所を埋めていこう。

// ----- データ -----
let reports = [
  { id: 1, location: "国道1号", condition: "良好" },
  { id: 2, location: "国道2号", condition: "危険" },
];
let nextId = 3;

// ----- 画面への表示 -----
// renderList(filterDanger) 関数を実装しよう
// filterDanger が true のときは condition === "危険" のものだけ表示する
// "危険" の項目には className に "danger" を追加する
function renderList(filterDanger) {
  const listEl = document.querySelector("#report-list");
  listEl.innerHTML = ""; // 一旦クリア

  // TODO: ①表示するデータを決める（filterDanger が true のときは危険のみ）
  // ヒント: filterDanger ? reports.filter(...) : reports
  const displayReports = filterDanger
    ? reports.filter((r) => r.condition === "危険")
    : reports;

  // TODO: ②displayReports を forEach でループして li 要素を作り listEl に追加する
  //       各 li に「削除」ボタンも追加する
  //       削除ボタンを押したら reports から該当の id を除外して renderList を呼ぶ
  //       condition === "危険" の場合は li.classList.add("danger") をする
  displayReports.forEach((report) => {
    const li = document.createElement("li");
    li.textContent = `${report.location}: ${report.condition}`;

    if (report.condition === "危険") {
      li.classList.add("danger");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener("click", () => {
      reports = reports.filter((r) => r.id !== report.id);
      renderList(dangerFilter.checked);
    });
    li.appendChild(deleteBtn);
    listEl.appendChild(li);
  });
}

// ----- フォーム送信 -----
const form = document.querySelector("#report-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // TODO: フォームの値を取得して reports に追加し、renderList を呼ぶ
  // location-input の値と condition-select の値を使う
  // nextId を id として使い、追加後は nextId++ する
  const location = document.querySelector("#location-input").value;
  const condition = document.querySelector("#condition-select").value;
  reports.push({ id: nextId, location, condition});
  nextId++;
  renderList(dangerFilter.checked);
  form.reset();
});

// ----- フィルタ切り替え -----
const dangerFilter = document.querySelector("#danger-filter");
dangerFilter.addEventListener("change", () => {
  // TODO: dangerFilter.checked を使って renderList を呼ぶ
  renderList(dangerFilter.checked);

});

// ----- 初期表示 -----
renderList(false);
