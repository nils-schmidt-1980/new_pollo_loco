class Icons extends DrawableObject {
    IMAGE = [
        'img/fullscreen-10-64.png',
        
    ]


    constructor() {
        super().loadImage('img/fullscreen-10-64.png');
        this.loadImages(this.IMAGE);
        this.x = 660;
        this.y = 420;  
        this.width = 40;
        this.height = 40; 
        this.click();
       
    }

   
   click() {
       //
   }

  

    
    
}