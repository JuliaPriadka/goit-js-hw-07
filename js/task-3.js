const inputEl = document.querySelector("#name-input");
const headerTextEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (event.currentTarget.value === "" || event.currentTarget.value.includes(" ")) {
    headerTextEl.textContent = "Anonymous";
    return;
  }
  headerTextEl.textContent = inputValue;
});
