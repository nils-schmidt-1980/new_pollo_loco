class MovableObject extends DrawableObject {
   
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    sounds;
   

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        }else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; 
        return timepassed < 1;
        
    }

    isDeath() {
        return this.energy == 0;
        
    }

    isColliding(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
    }

    playAnimation(images) {
                let i = this.currentImage % images.length; // Modulu
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