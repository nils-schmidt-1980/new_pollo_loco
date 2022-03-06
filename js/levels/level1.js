
const level1 = new Level([
    new chicken(),
    new chicken(),
    new chicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new Endboss(),
],

[
    new Clouds(),
],

[
    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',0),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',0),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',0),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',0),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',719),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png',719),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png',719),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png',719),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',719*2),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',719*2),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',719*2),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',719*2),

    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',719*3),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png',719*3),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png',719*3),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png',719*3),
],

    //Start Screen
    [
        new BackgroundObject('img/9.Intro _ Outro Image/Start Screen/Opciขn 1.png',0)
    ],

    [   
        //Game Over
        new BackgroundObject('img/9.Intro _ Outro Image/_Game over_ screen/1.you lost.png',0)
    ],

    [
        //Coins
        new Coins('img/8.Coin/Moneda1.png',100,100),
        new Coins('img/8.Coin/Moneda1.png',150,100),
        new Coins('img/8.Coin/Moneda1.png',200,100),

        new Coins('img/8.Coin/Moneda1.png',700*2,300),
        new Coins('img/8.Coin/Moneda1.png',750*2,300),
        new Coins('img/8.Coin/Moneda1.png',800*2,300),

        new Coins('img/8.Coin/Moneda1.png',700*3,120),
        new Coins('img/8.Coin/Moneda1.png',750*3,120),
        new Coins('img/8.Coin/Moneda1.png',800*3,120),
    ]
);