// seleziono la griglia
const gridElement = document.querySelector('#grid');

// creo un array per numerare le celle
let gridArray = [];


// collego un bottone per generare la griglia al click
document.querySelector("#start-btn").addEventListener('click', function () {
    console.log('game started!');

    // creo gli elementi che andranno a comporre la griglia con un ciclo for 
    // la griglia sarà composta da 100 celle, ogni riga dovrà contenere 10 celle 

    for (let i = 0; i < 100; i++) {
        // crate 100 celle e disposte in pagina 
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.classList.add('btn');
        cellElement.classList.add('btn-info');

        gridElement.append(cellElement);

        // inserisco il nummero della cella 
        cellElement.textContent = i + 1;


        // inserisco le celle nell'array
        gridArray.push(cellElement);

        // creo un evento click per ogni cella
        cellElement.addEventListener('click', function () {
            console.log('this is the cell number: +' + (i + 1));

            this.classList.toggle('active');

        });

    }

});


