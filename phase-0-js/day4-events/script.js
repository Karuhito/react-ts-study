// ===== 写経パート（まずこのコードを読んで理解しよう）=====

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
  event.preventDefault(); // ページリロードを防ぐ
  const location = document.querySelector("#location-input").value;
  const condition = document.querySelector("#condition-select").value;
  reports.push({ id: reports.length + 1, location, condition });
  renderList();
  form.reset();
});

// ===== 確認事項 =====
// ブラウザで開いて以下を確認しよう:
// 1. フォームに入力して「報告する」を押すとリストに追加される
// 2. 「削除」ボタンで該当行が消える
