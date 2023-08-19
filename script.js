let color = "blue";
let gridSize = 100;
let inputHTML = document.querySelector("input");
const grid = document.querySelector(".grid");

function createGrid(size) {
  const squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", colorDiv);
    cell.style.backgroundColor = "white";

    grid.appendChild(cell);
  }
}

createGrid(16);

function colorDiv() {
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function setSize(newSize) {
  if (newSize >= 2 && newSize <= 100) {
    createGrid(newSize);
  } else {
    return alert("the number must be between 2 and 100!!!");
  }
}

function changeColor(choice) {
  color = choice;
}

function resetGrid() {
  const squares = grid.querySelectorAll("div");
  squares.forEach((square) => (square.style.backgroundColor = "white"));
}

const validateButton = document.querySelector("#validateInput");
validateButton.addEventListener("click", function () {
  const inputValue = parseInt(inputHTML.value);
  setSize(inputValue);
});
