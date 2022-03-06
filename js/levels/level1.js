
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
    ]
);