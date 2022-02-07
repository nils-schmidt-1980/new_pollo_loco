class MovableObject {
    x = 120;
    y = 280;
    img;
    width = 150;
    height = 150;
    ImageCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){

        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        });
       
    }

    moveRight() {
        console.log('Laufe rechts');
    }

   //Links Bewugenung
   moveLeft() {
    setInterval(() => {
        this.x -= this.speed
    }, 1000 / 60);
}
}