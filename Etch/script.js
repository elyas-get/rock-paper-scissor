const input = document.querySelector("input");
const button = document.querySelector("#generate");
const container = document.querySelector("#container");

button.addEventListener("click", () => {
  container.innerHTML = ""; 
  const numberOfSquares = parseInt(input.value);

  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
});
