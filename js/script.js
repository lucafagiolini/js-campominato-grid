// seleziono la griglia
const gridElement = document.querySelector('#grid');

// creo un array per numerare le celle
let gridArray = [];

// dichiaro una variabile per la grandezza della griglia dal bottone "#diffculty selection"
const grideSizeSelection = document.querySelector('#difficulty-selection');


document.querySelector('#easy-diff').addEventListener('click', function () {
    this.classList.toggle('active');
    console.log('easy selected');

    if (this.classList.contains('active')) {
        document.querySelector('#medium-diff').classList.remove('active');
        document.querySelector('#hard-diff').classList.remove('active');
    }

});

document.querySelector('#medium-diff').addEventListener('click', function () {
    this.classList.toggle('active');
    console.log('medium selected');

    if (this.classList.contains('active')) {
        document.querySelector('#easy-diff').classList.remove('active');
        document.querySelector('#hard-diff').classList.remove('active');
    }
});

document.querySelector('#hard-diff').addEventListener('click', function () {
    this.classList.toggle('active');
    console.log('hard selected');

    if (this.classList.contains('active')) {
        document.querySelector('#easy-diff').classList.remove('active');
        document.querySelector('#medium-diff').classList.remove('active');
    }
});



function gridSize() {
    if (document.querySelector('#easy-diff').classList.contains('active')) {
        return 100

    } else if (document.querySelector('#medium-diff').classList.contains('active')) {
        return 81;

    } else if (document.querySelector('#hard-diff').classList.contains('active')) {
        return 49;
    }

}
console.log(gridSize());





// collego un bottone per generare la griglia al click
document.querySelector("#start-btn").addEventListener('click', function () {
    console.log('game started!');



    // creo gli elementi che andranno a comporre la griglia con un ciclo for 
    // la griglia sarà composta da 100 celle, ogni riga dovrà contenere 10 celle 
    for (let i = 0; i < gridSize; i++) {
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


