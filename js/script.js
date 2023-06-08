console.log('JS OK') 

// ! OPERAZIONI INIZIALI

// Recupero elementi 
const gridField = document.getElementById('grid');
const playButton = document.querySelector('button');
const difficultySelector = document.getElementById('difficulty');
const scoreField = document.getElementById('score');

// Dichiaro dati griglia
const hardGame = 49;
const mediumGame= 81;
const easyGame = 100;
let score = 0;
const totalBombs = 16;
const maxScore = easyGame - totalBombs;

const bombs = [];

function generateBombs(totalBombs, easyGame){
let bombs = [];

while (bombs.length < totalBombs) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * easyGame) + 1;
    } while (bombs.includes(randomNumber));
    bombs.push(randomNumber);
}

return bombs;

}

//funzione arrow per creare cell
const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell';

    return cell;
}
// Costruiamo la griglia in DOM al click del bottone
playButton.addEventListener('click', function() {
        gridField.innerHTML = '';
        for (let i = 0; i < easyGame; i++){
            const cell = createCell();

            cell.innerText = i + 1;

        cell.addEventListener('click', () => {
            
            if (cell.classList.contains('clicked')) return;

            scoreField.innerText = ++score;
            
            cell.classList.add('clicked');
            console.log(cell.innerText);
            
        });

        gridField.appendChild(cell);
        }

    })







