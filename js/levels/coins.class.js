class Coins extends MovableObject {
    width = 150;
    height = 150;

    constructor(path,x,y) {
        super().loadImage(path)
        this.x = x;
        this.y = y;

    }
}