console.log('JS OK') 

// ! OPERAZIONI INIZIALI

// Recupero elementi 
const gridField = document.getElementById('grid');
const playButton = document.querySelector('button');
const difficultySelector = document.getElementById('difficulty');

// Dichiaro dati griglia
const hardGame = 49;
const mediumGame= 81;
const easyGame = 100;


//funzione arrow per creare cell
const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cellEasy';

    return cell;
}
// Costruiamo la griglia in DOM al click del bottone
playButton.addEventListener('click', function() {
        gridField.innerHTML = '';
        for (let i = 0; i < easyGame; i++){
            const cell = createCell();

            cell.innerText = i + 1;
            
            cell.addEventListener('click', () => {
                cell.classList.toggle('clicked');
                console.log(i + 1);
            });

            gridField.appendChild(cell);
        }
    })


