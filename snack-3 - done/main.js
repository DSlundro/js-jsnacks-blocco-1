//      SNACK 3

/* const numero_1 = Number(prompt('Intesisci il primo numero'));
console.log('Numero 1: '+ numero_1);

const numero_2 = Number(prompt('Intesisci il secondo numero'));
console.log('Numero 2: '+ numero_2);

const numero_3 = Number(prompt('Intesisci il terzo numero'));
console.log('Numero 3: '+ numero_3);

const numero_4 = Number(prompt('Intesisci il quarto numero'));
console.log('Numero 4: '+ numero_4);

const numero_5 = Number(prompt('Intesisci il quinto numero'));
console.log('Numero 5: '+ numero_5);

const numero_6 = Number(prompt('Intesisci il sesto numero'));
console.log('Numero 6: '+ numero_6);

const numero_7 = Number(prompt('Intesisci il settimo numero'));
console.log('Numero 7: '+ numero_7);

const numero_8 = Number(prompt('Intesisci l\'ottavo numero'));
console.log('Numero 8: '+ numero_8);

const numero_9 = Number(prompt('Intesisci il nono numero'));
console.log('Numero 9: '+ numero_9);

const numero_10 = Number(prompt('Intesisci il decimo e l\'ultimo numero'));
console.log('Numero 10: '+ numero_10); 


let somma = numero_1 + numero_2 + numero_3 + numero_4 + numero_5 + numero_6 + numero_7 + numero_8 + numero_9 + numero_10;
console.log('La somma dei numeri: ' + somma);
*/



//  Il software deve chiedere per 10 volte all’utente di inserire un numero.

// creo variabili per raggruppare i numeri scelti e per la somma
let numeri = [];
let somma = 0;

for (let i = 0; i < 10; i++){
    // ogni numero scelto dall'utente lo inserisco in un array
    let numero = Number(prompt('Inserisci un numero!'))
    numeri.push(numero);
    console.log('Il numero scelto: ' + numero);
    
    // aggiungo i numeri inseriti alla somma
    somma += numeri[i]

    // se non sono numeri stampa un messaggio di errore
    if(isNaN(numero)){
        console.log('ERRORE: Inserisci un numero!');
        break;
    }
}

//  Il programma stampa la somma di tutti i numeri inseriti.
console.log('La somma dei numeri: ' + somma);



