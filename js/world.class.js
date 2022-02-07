class world {
character = new character();
clouds = [
    new Clouds(),
];

backgroundobject = [
    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',0),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',0),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',0),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',0),
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

    //Background
    this.addObjectsToMap(this.backgroundobject);

    //Character
    this.addToMap(this.character);

    //Chicken
    this.addObjectsToMap(this.enemies);

    //Clouds
    this.addObjectsToMap(this.clouds);

    

    

    let self = this;

    //Wird ausgeführt sobald Bilder geladen wurden. 
    // Draw wird immerwieder aufgerufen
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
    this.ctx.drawImage(mo.img,mo.x,mo.y,mo.width,mo.height);
}

}
