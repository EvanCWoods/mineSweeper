let ROWS = 18;
let COLUMNS = 18;
let SIZE = 24;

let canvas = document.getElementById("canvas");

function createButtons() {
    canvas.style.width = ROWS * SIZE + "px";
    canvas.style.height = COLUMNS * SIZE + "px";
    for (let i=0; i< ROWS; i++) {
        for (let j=0; j<COLUMNS; j++) {
            let btn = document.createElement("button");
            btn.classList.add("btn");
            btn.style.width = SIZE + "px";
            btn.style.height = SIZE + "px";
            canvas.appendChild(btn);
        }
    }
}

function updateButtons() {
    let btn = document.querySelectorAll(".btn");
}

function main() {
    createButtons();
    updateButtons();
}

main();