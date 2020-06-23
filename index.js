const FIELD_WIDTH = 50;
const FIELD_HEIGHT = 30;
const CELL_SIZE = 10;
const COLORS = ['black', 'red', 'green', 'blue', 'yellow'];

const cc = new ColorCubes(FIELD_WIDTH, FIELD_HEIGHT, COLORS);

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.addEventListener("click", onClickCanvas())

drawGameField();




function drawGameField() {
        console.log("draw field");
        for (let x = 0; x < cc.map[x].length; x++) {
            const column = cc.map[x];
            for (let y = 0; y < column.length; y++) {
                context.fillStyle = COLORS[column[y]];
                context.beginPath();
                context.rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                context.fill();
            }

        }
}

function onClickCanvas() {

    console.log('click');

}