const button = document.querySelector("button");
const container = document.querySelector("#container");
let clicked = 0

function makesquare(size) {
  container.innerHTML = "";
  const squareSize = (960/size) - 4;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
  clicked ++
}

function setSquare() {
  let n = prompt("Enter number of squares per side (1–100):");
  n = parseInt(n);
  if (!n || n < 1 || n > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  if (clicked === 1){
  button.innerText = ""
  button.innerText = "Regenerate squares"
}
  makesquare(n);
}

button.addEventListener("click", setSquare);

makesquare(16)

