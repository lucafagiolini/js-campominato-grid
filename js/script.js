// seleziono la griglia
const gridElement = document.querySelector('#grid');

// creo un array per numerare le celle
let gridArray = [];



// creo gli elementi che andranno a comporre la griglia con un ciclo for 
// la griglia sarà composta da 100 celle, ogni riga dovrà contenere 10 celle 

for (let i = 0; i < 100; i++) {
    // crate 100 celle e disposte in pagina 
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    gridElement.appendChild(cellElement);

    // inserisco le celle nell'array
    gridArray.push(cellElement);
    console.log(gridArray);
}



