//      SNACK 2 
//  L’utente inserisce due parole in successione, con due prompt.
//  Il software stampa prima la parola più corta, poi la parola più lunga.


const parola_1 = prompt('Inserisci la prima parola')
console.log('Parola 1: ' + parola_1)

const parola_2 = prompt('Inserisci la seconda parola')
console.log('Parola 2: ' + parola_2)


if (parola_1.length > parola_2.length){
    console.log('Parola più corta: ' + parola_2)
    console.log('Parola più lunga: ' + parola_1)
} 
else if(parola_1.length < parola_2.length){
    console.log('Parola più corta: ' + parola_1)
    console.log('Parola più lunga: ' + parola_2)
}
else if(parola_1.length == parola_2.length){
    console.log('La lunghezza delle parole è uguale')
}
