// Global variables for game variables
let ROWS = 18;
let COLUMNS = 18;
let SIZE = 30;
let tileAttributes = [];

// Global variables for query selectors
let canvas = document.getElementById("canvas");
let time = document.getElementById("timer");

// Function to handle the timer
function timer() {
  let seconds = 0;
  let minutes = 0;

  let secondsInterval = setInterval(function() {
    seconds += 1;
    if (seconds == 60) {
      seconds = 0;
    }
    if (minutes == 0) {
      time.textContent = seconds;
    } else {
      time.textContent = minutes + " : " + seconds;
    }
  }, 1000);

  let minutesInterval = setInterval(function() {
    minutes += 1;
    time.textContent = minutes + " : " + seconds;
  }, 60000);
}


//  Function to set whether the tile has a bomb or not (10% chance of being true)
function hasBomb() {
  let bomb = false;
  let value = Math.floor(Math.random() * 7);
  if (value == 0) {
    bomb = true;
  }
  return bomb;
}

// Function to create the buttons
function createTiles() {
  canvas.style.width = ROWS * SIZE + "px";
  canvas.style.height = COLUMNS * SIZE + "px";
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      let tile = document.createElement("button");
      let bomb = hasBomb();
      let attributes = {
        row: i,
        column: j,
        id: "btn" + i + "-" + j,
        bomb: bomb,
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
  displayNumber = 0;

  if ((tile.disabled = true)) {
    for (let i = 0; i < tileAttributes.length; i++) {
      // Logic for checking what value a tile has (bomb, 0-5)
      if (tile.id === tileAttributes[i].id) {
        console.log(tileAttributes[i]);
        if (tileAttributes[i-COLUMNS].row >= 0) {
          if (tileAttributes[i].bomb == true) { 
            tile.textContent = "💣";
            alert("Game Over");
          }
        }
        // Add logic for checking surrounding tiles to set the text content of clicked
        if (tileAttributes[i - COLUMNS].bomb == true) {
          displayNumber += 1;
        } 
        if (tileAttributes[i - 1].bomb == true) {
          displayNumber += 1;
        } 
        if (tileAttributes[i - (COLUMNS - 1)].bomb == true) {
          displayNumber += 1;
        } 
        if (tileAttributes[i - (COLUMNS + 1)].bomb == true) {
          displayNumber += 1;
        } 
        if (tileAttributes[i + 1].bomb == true) {
          displayNumber += 1;
        }
        if (tileAttributes[i + (COLUMNS - 1)].bomb == true) {
          displayNumber += 1;
        } 
        if (tileAttributes[i + (COLUMNS + 1)].bomb == true) {
          displayNumber += 1;
        } 
        if (tileAttributes[i + COLUMNS].bomb == true) {
          displayNumber += 1;
        }
      }
    }
    if (displayNumber == 0) {
      tile.textContent = "";
    } else {
      tile.textContent = displayNumber;
    } 
    tile.style.color = "black";
  }
}

// main function to execute the game logic
function main() {
  createTiles();
  timer();
}

main();
