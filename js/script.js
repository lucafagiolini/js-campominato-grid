// seleziono la griglia
const gridElement = document.querySelector('#grid');
console.log(gridElement);


// creo gli elementi che andranno a comporre la griglia con un ciclo for 
// la griglia sarà composta da 100 celle, ogni riga dovrà contenere 10 celle 

for (let i = 0; i < 100; i++) {
    const cellElement = document.createElement('div');
    console.log(cellElement);
    cellElement.classList.add('cell');
    gridElement.appendChild(cellElement);
}

