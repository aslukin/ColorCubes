const FIELD_WIDTH = 50;
const FIELD_HEIGHT = 30;
const CELL_SIZE = 25;
const COLORS = ['black', 'red', 'green', 'blue', 'yellow'];

const cc = new ColorCubes(FIELD_WIDTH, FIELD_HEIGHT, COLORS);

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const mouse_label = document.getElementById("mouselabel");
const action_label = document.getElementById("actionlabel");

canvas.height = FIELD_HEIGHT * CELL_SIZE;
canvas.width = FIELD_WIDTH * CELL_SIZE;


canvas.addEventListener('click', function(e){
    cc.field_click(Math.floor(e.offsetX / CELL_SIZE), Math.floor(e.offsetY / CELL_SIZE));
    mouse_label.textContent = "Button : " + e.button + ", X: " + e.offsetX + ", Y: " + e.offsetY;
    action_label.textContent = "call field_action(" + Math.floor(e.offsetX / CELL_SIZE) + ", " + Math.floor(e.offsetY / CELL_SIZE) + ");"
})

drawGameField();

function drawGameField() {
        // console.log("draw field");
        for (let x = 0; x < FIELD_WIDTH; x++) {
            // const column = cc.map[x];
            for (let y = 0; y < FIELD_HEIGHT; y++) {
                context.fillStyle = COLORS[cc.map[x][y]];
                context.beginPath();
                context.rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                context.fill();
            }

        }
}

