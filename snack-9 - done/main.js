//      SNACK 9
// calcolare la somma e la media dei primi 10 numeri

// imposto la variabili
let numeri = [];
let somma = 0;

// inizializzo il ciclo per selezionare i primi 10 numeri
for (let i = 0; i < 10; i++){
    // aggiungo i numeri ottenuti alla Array
    numeri.push(i);
    somma += numeri[i];
}

console.log('Numeri: ' + numeri);
console.log('Questa è la somma dei numeri: ' + somma);

// calcolo media
let media = somma / numeri.length;
console.log('Questa è la media dei numeri: ' + media);
