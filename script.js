let character = document.getElementById('character');
let interval;

function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    character.style.left = left + 2 + 'px';
}

function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    character.style.left = left - 2 + 'px';
}

document.addEventListener('keydown', event => {
    if (event.key === 'arrowLeft') {
        interval = setInterval(moveLeft, 1);
    }
    if (event.key === 'arrowRight'){
        interval = setInterval(moveRight, 1);
    }
});
