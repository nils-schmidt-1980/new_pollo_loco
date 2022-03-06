class Level {
    enemies;
    clouds;
    backgroundobject;
    levelEndX = 2250;
    gameOver;
    startScreen;

    constructor(enemies,clouds,backgroundobject, startScreen, gameOver) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobject = backgroundobject;
        this.startScreen = startScreen;
        this.gameOver = gameOver;

    }
}