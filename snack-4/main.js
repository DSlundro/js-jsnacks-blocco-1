//      SNACK 4
//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



let lista = ['Mario', 'Carlo', 'Martina', 'Gianluca', 'Alessandro', 'Riccardo', 'Alessia', 'Arianna']

let nomeUtente = prompt('Inserisci il tuo nome')

for(let i = 0; i < lista.length; i++){

    if (lista[i].includes(nomeUtente)){
        console.log(`Ciao ${lista[i]}! Benvenuto/a alla festa del grande Gatsby!`)
        break;
    } 
    else{
        console.log(`Mi dispiace ${nomeUtente}, ma il grande Gatsby non ti ha invitato alla festa!`)
        break;
    }
}