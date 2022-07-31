const character = document.getElementById('character');
let interval;
let both = 0;

function moveLeft() {
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    if(left>0) {
        character.style.left = left - 2 + 'px';
    }
}

function moveRight() {
    let right = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    if (right<380) {
        character.style.left = right + 2 + 'px';
    }
}

window.addEventListener("keydown", event => {
    if (both==0){
        both++;
    }
    if (event.key === "ArrowLeft") {
        interval = setInterval(moveLeft, 1);
    }
    if (event.key === "ArrowRight"){
        interval = setInterval(moveRight, 1);
    }
});


window.addEventListener('keyup', event => {
    // console.log('oke');
    clearInterval(interval);
    both = 0;
});

