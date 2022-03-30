//      SNACK 1 
//  L’utente inserisce due numeri in successione, con due prompt.
//  Il software stampa il maggiore.



const numberOne = prompt('Inserisci il primo numero');
console.log(numberOne)

const numberTwo = prompt('Inserisci il secondo numero');
console.log(numberTwo)


if (numberOne > numberTwo){
    console.log('Questo è il numero maggiore ' + numberOne)
}  else if (numberTwo > numberOne){
    console.log('Questo è il numero maggiore ' + numberTwo)
}  else if (numberOne == numberTwo){
    console.log('I numeri sono pari')
}



