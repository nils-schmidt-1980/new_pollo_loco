class Level {
    enemies;
    clouds;
    backgroundobject;
    levelEndX = 2250;
    gameOver;
    startScreen;
    coin;

    constructor(enemies,clouds,backgroundobject, startScreen, gameOver,coin) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobject = backgroundobject;
        this.startScreen = startScreen;
        this.gameOver = gameOver;
        this.coin = coin;

    }
}