//      SNACK 4

// chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero

// chiedo all'utente di inserire un numero a 4 cifre
let numeroUtente = (prompt('Inserisci un numero a 4 cifre'));
console.log(numeroUtente);

// imposto una variabile per la somma
let somma = 0;

// verifico se è un numero
if (isNaN(numeroUtente)){
    console.log("Inserisci solo numeri!")
}

// verifico che l'utente abbia inserito un numero a 4 cifre
if(numeroUtente.length != 4){
    alert('Se inserisci un numero diverso non è un problema mio ^_^');
}

// imposto un ciclo
for(let i = 0; i < numeroUtente.length; i++){
    somma += Number(numeroUtente[i]);
}

console.log(somma);




