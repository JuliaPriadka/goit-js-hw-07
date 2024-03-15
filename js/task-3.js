const inputEl = document.querySelector("#name-input");
const headerTextEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
   headerTextEl.textContent = inputEl.value.trim() || "Anonymous";
});
