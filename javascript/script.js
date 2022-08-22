const dirt = document.querySelectorAll('.dirt');
const mole = document.querySelectorAll('.mole');
const boardScore = document.querySelector('.score-board');
const pop = document.querySelector('#pop')

let dirtBefore;
let end;
let score;

function randomDirt(dirt) {
    const d = Math.floor(Math.random() * dirt.length);
    const dRandom = dirt[d];
    if( dRandom == dirtBefore ) {
        randomDirt(dirt);
    }
    dirtBefore = dRandom;
    return dRandom;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function showedMole() {
    const dRandom = randomDirt(dirt);
    const tRandom = randomTime(500, 700);
    dRandom.classList.add('show');
    
    setTimeout(() => {
        dRandom.classList.remove('show');
        if(!end) {
            showedMole();
        }
    }, tRandom);
}

function play() {
    end = false;
    score = 0;
    boardScore.textContent = 0;
    showedMole();
    setTimeout(() => {
        end = true;
    }, 15000);
}

function hit() {
    score++;
    this.parentNode.classList.remove('showed');
    pop.play();
    boardScore.textContent = score;
}

mole.forEach(m => {
    m.addEventListener('click', hit);
    });