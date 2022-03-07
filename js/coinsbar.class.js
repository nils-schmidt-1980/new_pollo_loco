class Coinsbar extends DrawableObject {
    IMAGES = [
      'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
      'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
      'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
      'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
      'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
      'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
        
    ];



    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.width = 200;
        this.height = 60;
        this.x = 40;
        this.y = 0;
        this.setPercentage(this.percence);

    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 10) {
            return 5;
        } else if (this.percentage > 8) {
            return 4;
        } else if (this.percentage > 6) {
            return 3;
        } else if (this.percentage > 4) {
            return 2;
        } else if (this.percentage > 1) {
            return 1;
        } else {
            return 0;
        }
    }
}