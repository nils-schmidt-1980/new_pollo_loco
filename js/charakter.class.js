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

world;
speed = 10;
y = 190;
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.right) { 
                 //Running animation
                 this.x += this.speed;
                 this.otherDirection = false;
            }

            if (this.world.keyboard.left) { 
                //Running animation
                this.x -= this.speed;
                this.otherDirection = true;
           }

           this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.right || this.world.keyboard.left) {
               
                //Walking animation
                let i = this.currentImage % this.IMAGES_WALKING.length; // Modulu
                this.path = this.IMAGES_WALKING[i];//Hole Pfad aus dem Array
                this.img = this.ImageCache[this.path];//Schreibt den Pfad in die Image Variable
                this.currentImage++; // Erhöhe currentImage
            }
        
        }, 50);
    }
    
 jump() {
    console.log('Springen')
 }
}