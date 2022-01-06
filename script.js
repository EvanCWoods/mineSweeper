let ROWS = 2;
let COLUMNS = 2;
let SIZE = 30;

let tileAttributes = [];

let canvas = document.getElementById("canvas");

// Function to create the buttons
function createTiles() {
  canvas.style.width = ROWS * SIZE + "px";
  canvas.style.height = COLUMNS * SIZE + "px";
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      let tile = document.createElement("button");
      let attributes = {
        row: i,
        column: j,
        id: "btn" + i + "-" + j,
      };
      tileAttributes.push(attributes);
      tile.classList.add("btn");
      tile.setAttribute("id", attributes.id);
      tile.style.float = "left";
      tile.style.width = SIZE + "px";
      tile.style.height = SIZE + "px";
      canvas.appendChild(tile);

      tile.addEventListener("click", function () {
        tile.disabled = true;
        updateTiles(tile);
      });
    }
  }
}

// Function to update buttons on click to show the value under it
function updateTiles(tile) {
  if (tile.disabled = true) {
    tile.textContent = 1;
  }
}

// main function to execute the game logic
function main() {
  createTiles();
  console.log(tileAttributes);
}

main();
