class Renderer {
    constructor(scale) {
        this.cols = 64;
        this.rows = 32;

        this.scale = scale

        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = this.cols * this.scale
        this.canvas.height = this.rows * this.scale

        this.display = new Array(this.cols * this.rows);
    }
    setPixel(x, y){
        if( x > this.cols ) {
            x -= this.cols
        } else if (x < 0) {
            x += this.cols
        }
        
        if( y > this.rows) {
            y -= this.rows
        } else if (y < 0) {
            y += this.rows;
        }

        let pixelLoc = x + (y * this.cols);

        this.display[pixelLoc] ^= 1;

        return !this.display[pixelLoc];
    }

    clear() {
        this.display = new Array(this.cols * this.rows)
    }
    render() {
        // Clears the display every render cycle
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // loop through our display array
        for(let i = 0; i < this.cols * this.rows; i++) {
            let x = (i % this.cols) * this.scale;
            let y = Math.floor(i/ this.cols) * this.scale

            // if there is a value at display[i], lets draw a pixel
            if(this.display[i]) {
                // set the pixel color to black
                this.ctx.fillStyle = '#000';
                // place a pixel at position x , y
                this.ctx.fillRect(x, y, this.scale, this.scale);
                }
            }
        }

        testRender() {
            this.setPixel(65, 31)
            this.setPixel(64, 23)
        }

    }

export default Renderer;