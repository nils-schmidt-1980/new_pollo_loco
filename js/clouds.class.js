class Clouds extends MovableObject {
    y = 5;
    width = 550;
    height = 400;
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 100 + Math.random() * 500;
        this.animate();
    }

    //Animationen der Woklen
    animate() {
       this.moveLeft();
    }

    
    
}