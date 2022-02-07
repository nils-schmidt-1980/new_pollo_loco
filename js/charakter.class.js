class character extends MovableObject {
height = 250;
IMAGES_WALKING = [
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png',
];

IMAGES_JUMPING = [
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-31.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-32.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-40.png',

]

world;
speed = 10;
walkingAudio = new Audio('audio/walking.mp3')
y = -200;
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walkingAudio.pause();
            if (this.world.keyboard.right && this.x < this.world.level.levelEndX) { 
                 //Running animation
                 this.x += this.speed;
                 this.otherDirection = false;
                 this.walkingAudio.play();
            }

            if (this.world.keyboard.left && this.x > 0) { 
                //Running animation
                this.x -= this.speed;
                this.otherDirection = true;
                this.walkingAudio.play();
           }

           if (this.world.keyboard.up) {
               this.speedY = 20;
           }

           this.world.camera_x = -this.x +100;
        }, 1000 / 60);

        setInterval(() => {
            if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING)
            }else {
                if (this.world.keyboard.right || this.world.keyboard.left) {
               
                    //Walking animation
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }

           
        
        }, 50);
    }
    
 jump() {
    console.log('Springen')
 }
}