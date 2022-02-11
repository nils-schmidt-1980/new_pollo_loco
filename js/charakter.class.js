class character extends MovableObject {
height = 250;
IMAGES_WALKING = [
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
    'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
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
    'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-40.png'

];

IMAGES_DEAD = [
   'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-51.png',
   'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-52.png',
   'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-53.png',
   'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-54.png',
   'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-55.png',
   'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-56.png'
];

world;
speed = 10;
walkingAudio = new Audio('audio/walking.mp3')
y = -200;
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImage(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walkingAudio.pause();
            if (this.world.keyboard.right && this.x < this.world.level.levelEndX) { 
                 this.moveRight();
                 this.walkingAudio.play();
            }

            if (this.world.keyboard.left && this.x > 0) { 
                this.moveLeft();
                this.walkingAudio.play();
           }

           // Jumping animation
           this.jump();
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDeath()) {
                //Death animation
                this.playAnimation(this.IMAGES_DEAD)
            } else if(this.isAboveGround()) {
                //Jumping animation
                this.playAnimation(this.IMAGES_JUMPING)
            }else  {
               if (this.world.keyboard.right || this.world.keyboard.left) {
                    //Walking animation
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
     }, 50);
    }
    
 jump() {
    if (this.world.keyboard.space && !this.isAboveGround()) {
        this.speedY = 30;
    }

    this.world.camera_x = -this.x +100;
 }
}