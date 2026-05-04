// ===== まとめ課題: 路面状況報告アプリ（TypeScript版）=====
// Phase 0 の Vanilla JS ミニアプリを TypeScript で書き直す。
// 型を付けながら同じ動作を実装しよう。

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

// TODO: addReport 関数を実装する
// 引数: input（CreateReportInput）
// 処理: reports に { id: nextId, ...input } を追加し、nextId++ する
function addReport(input: CreateReportInput): void {
  reports.push({id: nextId, ...input});
  nextId++ 
}

// TODO: deleteReport 関数を実装する
// 引数: id（number）
// 処理: reports から該当 id を除外する（filter を使う）
function deleteReport(id: number): void {
  reports = reports.filter((r) => r.id !== id);
}

// TODO: renderList 関数を実装する
// 引数: filterDanger（boolean）
// 処理: Phase 0 の renderList と同じ動作。型が付いている点が違い。
function renderList(filterDanger: boolean): void {
  const listEl: Element | null = document.querySelector("#report-list");
  if (!listEl) return; // null なら早期リターン これでエラー回避&nullではないか確認を行う。
  listEl.innerHTML = "";

  const displayReports: RoadReport[] = filterDanger
    ? reports.filter((r) => r.condition === "危険")
    : reports;
  
  displayReports.forEach((report) => {
    const li: Element = document.createElement("li");
    li.textContent = `${report.location}: ${report.condition}`;

    if (report.condition === "危険") {
      li.classList.add("danger");
    }
    
    const deleteBtn: Element = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener("click", () => {
      deleteReport(report.id);
      renderList(dangerFilter?.checked ?? false);
    });
    li.appendChild(deleteBtn);
    listEl.appendChild(li);
  });
}

// フォームとイベントリスナーの設定
// ヒント: document.querySelector<HTMLFormElement>("#report-form") のように型引数を付ける
const form = document.querySelector<HTMLFormElement>("#report-form");
const locationInput = document.querySelector<HTMLInputElement>("#location-input");
const condition = document.querySelector<HTMLSelectElement>("#condition-select");


const dangerFilter = document.querySelector<HTMLInputElement>("#danger-filter");

// TODO: form の submit イベントを設定する
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!locationInput || !condition) return;
  addReport({
    location: locationInput.value,
    condition: condition.value as RoadCondition
  });
  locationInput.value = "";
  renderList(dangerFilter?.checked ?? false);
});

// TODO: dangerFilter の change イベントを設定する
dangerFilter?.addEventListener("change", () => {
  renderList(dangerFilter.checked);
})

renderList(false);
