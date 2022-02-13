class SmallChicken extends MovableObject {
    y = 390;
    height = 60;  
    width = 70; 

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b sico/Versi¢n_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_pollito/3.Paso_izquierdo.png'

    ]

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_pollito/1.Paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1200 + Math.random() * 1000;

        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    //Animation
animate() {
    setInterval(() => {
        this.moveLeft();   
    }, 1000 / 60);
    
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING)
    }, 100);
}

 bite() {
     console.log('Beissen')
 }


    


}