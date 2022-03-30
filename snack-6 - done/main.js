//      SNACK 6
// stampa il cubo dei primi N numeri,dove N è un numero indicato dall'utente

// numero indicato dall'utente
let numero = Number(prompt('Scegli un numero!'));
console.log('Il numero scelto: ' + numero);

// creare una costante per la potenza
let potenza = Number(3);
console.log('La potenza: ' + potenza)

// dichiaro una variabile per i numeri
let numeri;

// calcolo della potenza impostata del numero selezionato dall'utente
for (let i = 1; i <= numero; i++){
    numeri = Math.pow(i, potenza)
    console.log(numeri)
}

