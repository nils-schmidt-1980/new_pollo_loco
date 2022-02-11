class World {
character = new character();
level = level1;

//Variablen
ctx; // wird von der game.js mitgeliefert
canvas;
keyboard;
camera_x = 0;
    constructor(canvas,keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkColliding();
    }

setWorld() {
    this.character.world = this;
}

checkColliding() {
    setInterval(() => {
        this.level.enemies.forEach(enemy => {
            if(this.character.isColliding(enemy))
            this.character.hit();
        });
    }, 200);
}



draw() {
    this.ctx.clearRect(0,0,canvas.width, canvas.height);
    this.ctx.translate(this.camera_x,0);

    //Background
    this.addObjectsToMap(this.level.backgroundobject);

    //Character
    this.addToMap(this.character);

    //Chicken
    this.addObjectsToMap(this.level.enemies);

    //Clouds
    this.addObjectsToMap(this.level.clouds);

    this.ctx.translate(-this.camera_x,0);

    //Draw Methode wird immer wieder ausgeführt
    let self = this;
    requestAnimationFrame(function() {
        self.draw();
    });
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
    mo.drawBorder(this.ctx);

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
