class DrawableObject {
    x = 120;
    y = 280;
    img;
    width = 150;
    height = 150;
    ImageCache = {};
    currentImage = 0;

    constructor () {

    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){

        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        });
       
    }

    draw(ctx) {
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }

    /*
    drawBorder(ctx) {
        if(this instanceof character || this instanceof chicken || this instanceof SmallChicken) {
          // Blue rectangle Rahmen
          ctx.beginPath();
          ctx.lineWidth = '5';
          ctx.strokeStyle = 'blue';
          ctx.rect(this.x,this.y,this.width,this.height);
          ctx.stroke();
        }
        
    }*/

    
}