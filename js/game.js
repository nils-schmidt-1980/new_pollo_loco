
let canvas;
let worlds;
let keyboard;

function init () {
    keyboard = new Keyboard(); 

    canvas = document.getElementById('canvas');// Holt Canvas-Tag von der index.html
    world = new World(canvas,keyboard);//Übergabe des Canvas an new World

    console.log('Dein Objekt lautet:',world.character);
}

document.addEventListener('keydown' ,(event) => {
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
});




