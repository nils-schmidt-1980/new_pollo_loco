class chicken extends MovableObject {
    y = 350; 
    height = 80;  
    width = 90; 
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ]

constructor() {
    super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
    this.loadImages(this.IMAGES_WALKING);
    this.x = 1000 + Math.random() * 1000;

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