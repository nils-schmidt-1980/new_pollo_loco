class World {
character = new character();
level = level1;
ctx; // wird von der game.js mitgeliefert
canvas;
keyboard;
camera_x = 0;
statusbar = new StatusBar();
checkGameOver = false;
throwableObject = [];

    constructor(canvas,keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

setWorld() {
    this.character.world = this;
}

run() {
    setInterval(() => {

        //
       this.checkCollision();
       this.checkThrowObjects();
    }, 200);
}

checkThrowObjects() {
    if (this.keyboard.d) {
        let bottle = new ThrowableObeject(this.character.x +100, this.character.y +100);
        this.throwableObject.push(bottle);
    }
}

checkCollision() {
    this.level.enemies.forEach(enemy => {
        if(this.character.isColliding(enemy))
        this.character.hit();
        this.statusbar.setPercentage(this.character.energy);
    });
}



draw() {
    this.ctx.clearRect(0,0,canvas.width, canvas.height);
    this.ctx.translate(this.camera_x,0);

    //If Game Over
    if(this.checkGameOver == true) {
        this.character.isGameOver();
    }else {
         //Background
    this.addObjectsToMap(this.level.backgroundobject);

       //Clouds
   this.addObjectsToMap(this.level.clouds);

    //Statusbar
    this.ctx.translate(-this.camera_x,0);// back
    // Space for fixed Objects
    this.addToMap(this.statusbar);
    this.ctx.translate(this.camera_x,0);// forward

   //Character
   this.addToMap(this.character);

   //small Schicken
   this.addObjectsToMap(this.level.enemies);

   //Chicken
   this.addObjectsToMap(this.level.enemies);

   //Throwable Object
   this.addObjectsToMap(this.throwableObject);



   this.ctx.translate(-this.camera_x,0);
   

   //Draw Methode wird immer wieder ausgeführt
   let self = this;
   requestAnimationFrame(function() {
       self.draw();
   });
    }

   
}

addObjectsToMap(objects) {
    objects.forEach(o => {
        this.addToMap(o)
    })
}

addToMap(mo) {
    if (mo.otherDirection) {
        this.flipImage(mo);
    }

    mo.draw(this.ctx);
   // mo.drawBorder(this.ctx);

    if (mo.otherDirection) {
        this.flipImageBack(mo);
    }
}

flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;
}

flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
}

}
