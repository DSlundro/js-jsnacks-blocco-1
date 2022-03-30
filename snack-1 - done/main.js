//      SNACK 1 

//  L’utente inserisce due numeri in successione, con due prompt.
const numberOne = Number(prompt('Inserisci il primo numero'));
console.log(numberOne)

const numberTwo = Number(prompt('Inserisci il secondo numero'));
console.log(numberTwo)


// se non sono numeri stampa un messaggio di errore
if(isNaN(numberOne) && isNaN(numberTwo)){
    console.log('ERRORE: Inserisci un numero!');
}
//  Il software stampa il maggiore.
if (numberOne > numberTwo){
    console.log('Questo è il numero maggiore ' + numberOne);
}  else if (numberOne < numberTwo){
    console.log('Questo è il numero maggiore ' + numberTwo);
}  else if (numberOne == numberTwo){
    console.log('I numeri sono pari');
}  else {console.log}

