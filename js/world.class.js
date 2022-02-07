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
    }

setWorld() {
    this.character.world = this;
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
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.img,mo.x,mo.y,mo.width,mo.height);
    if (mo.otherDirection) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}

}
