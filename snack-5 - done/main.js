//      SNACK 5

//  Crea un array vuoto.
const vuoto = []

//  Chiedi per 6 volte all’utente di inserire un numero,
for(let i = 0; i < 6; i++){

    let numero = parseInt(prompt('Inserisci un numero'));

    // controllo se il dato inserito è un numero
    if(isNaN(numero)){
        console.log('ERRORE: Inserisci un numero!');
        break;
    }

    //  se è dispari inseriscilo nell’array.
    if (numero % 2 != 0){
        vuoto.push(numero);
        console.log(numero)
    }
}




