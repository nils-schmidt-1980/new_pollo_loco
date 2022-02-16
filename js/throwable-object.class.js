class ThrowableObeject extends MovableObject {
    constructor(x,y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.trow();
}//end constructor

trow() {
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
        this.x += 10;
    }, 25);
}
}