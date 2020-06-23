class ColorCubes{
    constructor (columns, rows, colors) {
        this.columns = columns;
        this.rows = rows;
        this.colors = colors;

        this.map = [];

        for (let x = 0; x < this.columns; x++) {
            const column = [];
            for (let y = 0; y < this.rows; y++) {
                column.push(Math.floor(Math.random() * (this.colors.length-1))+1);
   
            }
            this.map.push(column);
     
        }
    }
}