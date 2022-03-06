class Coins extends MovableObject {
    y = 100;
    width = 150;
    height = 150;

    constructor(path,x,y) {
        super().loadImage(path)
        this.x = x;
        this.y = y;

    }
}