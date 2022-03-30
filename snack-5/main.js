//      SNACK 5
//  Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero,
//  se è dispari inseriscilo nell’array.



const vuoto = []

for(let i = 0; i < 6; i++){

    let numero = parseInt(prompt('Inserisci un numero'));

    if(isNaN(numero)){
        console.log('ERRORE: Inserisci un numero!');
        break;
    }

    if (numero % 2 != 0){
        vuoto.push(numero);
        console.log(numero)
    }
}




