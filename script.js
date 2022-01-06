let ROWS = 18;
let COLUMNS = 18;
let SIZE = 24;

let canvas = document.getElementById("canvas");

// Function to create the buttons
function createButtons() {
    canvas.style.width = ROWS * SIZE + "px";
    canvas.style.height = COLUMNS * SIZE + "px";
    for (let i=0; i< ROWS; i++) {
        for (let j=0; j<COLUMNS; j++) {
            let btn = document.createElement("button");
            btn.classList.add("btn");
            btn.style.float = "left";
            btn.style.width = SIZE + "px";
            btn.style.height = SIZE + "px";
            canvas.appendChild(btn);

            btn.addEventListener("click", function() {
                btn.disabled = true;
                updateButtons(btn);
            });
        }
    }
}

// Function to update buttons on click to show the value under it
function updateButtons(button) {
    if (button.disabled = true) {
        button.textContent = 1;
    }
}

// main function to execute the game logic
function main() {
    createButtons();
}

main();