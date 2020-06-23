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

    field_click(x, y) {
        console.log("field_click", x, y, this.map[x][y]);
        let current_color = 0;

        current_color = this.map[x][y];
        if (current_color == 0) {
            return;
        }
        
        const queue = [];
        let coord = [];

        
        let px = x;
        let py = y;
        queue.push({px, py});
        
        while(queue.length > 0){
            let new_x = queue[0].px;
            let new_y = queue[0].py;
            //cell on the left
            if(new_x > 0) {
                if  (this.map[new_x - 1][new_y] == current_color) {
                    px = new_x - 1;
                    py = new_y;
                    queue.push({ px, py });
                }
            }   
            // cell on the right
            if (new_x < this.columns-1) {
                if (this.map[new_x + 1][new_y] == current_color) {
                    px = new_x + 1;
                    py = new_y;
                    queue.push({ px, py });
                }
            }   
            // cell up
            if (new_y > 0) {
                if (this.map[new_x][new_y - 1] == current_color) {
                    px = new_x;
                    py = new_y - 1;
                    queue.push({ px, py });
                }
            }
            // cell down
            if (new_y < this.rows-1) {
                if (this.map[new_x][new_y + 1] == current_color) {
                    px = new_x;
                    py = new_y + 1;
                    queue.push({ px, py });
                }
            }
            this.map[queue[0].px][queue[0].py] = 0;

            queue.shift();

        }

    }
}