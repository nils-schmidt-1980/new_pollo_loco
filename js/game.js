let startGamingSound = new Audio('audio/start_gaming.mp3');
let canvas;
let worlds;
let keyboard;
let gameSound = new Audio('audio/chickenplay.mp3');


function init () {
  startGamingSound.play();
}

function gameStart() {
    keyboard = new Keyboard(); 
    canvas = document.getElementById('canvas');// Holt Canvas-Tag von der index.html
    world = new World(canvas,keyboard);//Übergabe des Canvas an new World
    console.log('Dein Objekt lautet:',world.character);
    

    document.getElementById('fulscreen-icon').classList.remove ('d-none')
    document.getElementById('canvas').classList.remove ('d-none');
    document.getElementById('start-game').classList.add ('d-none');
    document.getElementById('menu').classList.add ('d-none');
    startGamingSound.pause();

}

function infoClose() {
    document.getElementById('overlay').classList.toggle ('d-none');
}



document.addEventListener('keydown' ,(event) => {

    if (event.keyCode == 83) {
        keyboard.s = false;
    }

    if (event.keyCode == 37) {
        keyboard.left = true;
    }

    if (event.keyCode == 39) {
        keyboard.right = true;
    }

    if (event.keyCode == 32) {
        keyboard.space = true;
    }

    if (event.keyCode == 40) {
        keyboard.down = true;
    }

    if (event.keyCode == 38) {
        keyboard.up = true;
    }

    if (event.keyCode == 68) {
        keyboard.d = true;
    }

    if (event.keyCode == 78) {
        location.reload();
    }

    if (event.keyCode == 70) {
        fullScreen();
    }

    if (event.keyCode == 73) {
        infoClose();
    }
    //  console.log(event);
});

document.addEventListener('keyup' ,(event) => {
    if (event.keyCode == 37) {
        keyboard.left = false;
    }

    if (event.keyCode == 39) {
        keyboard.right = false;
    }

    if (event.keyCode == 32) {
        keyboard.space = false;
    }

    if (event.keyCode == 40) {
        keyboard.down = false;
    }

    if (event.keyCode == 38) {
        keyboard.up = false;
    }

    if (event.keyCode == 68) {
        keyboard.d = false;
    }

    
});



function fullScreen() {
    
    canvas.requestFullscreen();  
}







