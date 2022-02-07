class World {
character = new character();
clouds = [
    new Clouds(),
];

backgroundobject = [
    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',0),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',0),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',0),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',0),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',719),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png',719),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png',719),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png',719),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',719*2),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',719*2),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',719*2),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',719*2),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',719*3),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png',719*3),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png',719*3),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png',719*3),
];


enemies = [
    new chicken(),
    new chicken(),
    new chicken(),
];

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
    this.addObjectsToMap(this.backgroundobject);

    //Character
    this.addToMap(this.character);

    //Chicken
    this.addObjectsToMap(this.enemies);

    //Clouds
    this.addObjectsToMap(this.clouds);

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
