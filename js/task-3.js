const inputEl = document.querySelector("#name-input");
const headerTextEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    inputValue = "Anonymous";
  }
  headerTextEl.textContent = inputValue;
});
