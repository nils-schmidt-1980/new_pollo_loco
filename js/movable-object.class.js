class MovableObject {
    x = 120;
    y = 280;
    img;
    width = 150;
    height = 150;
    ImageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;

    sounds;
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

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        }
        console.log(this.energy);
    }

    isDeath() {
        return this.energy == 0;
    }

    drawBorder(ctx) {
        if(this instanceof character || this instanceof chicken) {
          // Blue rectangle Rahmen
          ctx.beginPath();
          ctx.lineWidth = '5';
          ctx.strokeStyle = 'blue';
          ctx.rect(this.x,this.y,this.width,this.height);
          ctx.stroke();
        }
        
    }

    isColliding(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
    }

    playAnimation(images) {
                let i = this.currentImage % this.IMAGES_WALKING.length; // Modulu
                this.path = images[i];//Hole Pfad aus dem Array
                this.img = this.ImageCache[this.path];//Schreibt den Pfad in die Image Variable
                this.currentImage++; // Erhöhe currentImage
    }

    moveRight() {
        //Running animation
        this.x += this.speed;
        this.otherDirection = false;
    }

    //Springen oder Fallen Berrechnung
    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround()|| this.speedY > 0) { // Check wie weit Pepe fallen soll
                this.y -= this.speedY;
                this.speedY -=this.acceleration;
            }
           
        }, 1000 / 25);
    }

    isAboveGround() { // Check ob Pepe am Boden ist.
        return this.y < 180
    }

   //Links Bewugenung
   moveLeft() {
    this.x -= this.speed;
    if(this instanceof character) {
        this.otherDirection = true;
    }
    
    
    
}
}