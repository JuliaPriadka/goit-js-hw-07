function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
createButton.addEventListener("click", createBoxes);

const destroyButton = document.querySelector("button[data-destroy]");
destroyButton.addEventListener("click", destroyBoxes);

const parentElem = document.querySelector("#boxes");

const inputEl = document.querySelector("input");
inputEl.addEventListener("input", getBoxesNumber);

let amount = 0;

function getBoxesNumber(event) {
  amount = event.target.value;
}
let boxWidth = 30;
let boxHeight = 30;

function createBoxes() {
  if (amount < 0 || amount > 100) {
    alert("Введіть число менш ніж 100");
    return;
  }
  createAmountBoxes();
}

function createAmountBoxes() {
  let newBoxes = [];
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxWidth}px`;
    newBox.style.height = `${boxHeight}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxes.push(newBox);
    parentElem.append(...newBoxes);
    boxWidth += 10;
    boxHeight += 10;
  }
}

function destroyBoxes(event) {
  parentElem.innerHTML = "";
  inputEl.value = "";
  boxWidth = 30;
boxHeight = 30;
}
