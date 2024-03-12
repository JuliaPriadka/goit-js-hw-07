const button = document.querySelector(".change-color");

const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
  
function changeBgdColor(event) {
    const randomColor = getRandomHexColor()
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
}
  
  button.addEventListener("click", changeBgdColor);