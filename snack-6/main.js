//      SNACK 6
// stampa il cubo dei primi N numeri,dove N è un numero indicato dall'utente

// numero indicato dall'utente
let numero = Number(prompt('Scegli un numero!'));
console.log('Il numero scelto ' + numero);

// creare una costante per la potenza
let potenza = Number(3);
console.log('La potenza ' + potenza)

// calcolo della potenza impostata del numero selezionato dall'utente
let numeroPotenza = Math.pow(numero, potenza);
console.log(`La potenza di ${potenza} del numero ${numero} é ${numeroPotenza}`);


