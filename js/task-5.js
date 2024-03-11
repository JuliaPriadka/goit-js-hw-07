const buttonEl = document.querySelector(".change-color");
buttonEl.addEventListener("click", changeBgdColor);

const textAccent = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBgdColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  textAccent.textContent = document.body.style.backgroundColor;
}