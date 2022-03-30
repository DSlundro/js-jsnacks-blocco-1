//      SNACK 4

//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
let lista = ['Mario', 'Carlo', 'Martina', 'Gianluca', 'Alessandro', 'Riccardo', 'Alessia', 'Arianna'];
console.log(lista);

//  chiedi all’utente il suo nome e 
let nomeUtente = prompt('Inserisci il tuo nome');

// autentificatore per vedere se il nome è presente nelal lista
let auth = false;

// inizializzo un ciclo per vedere se il nome inserito è nella lista
for(let i = 0; i < lista.length; i++){
    
    if (lista[i] == nomeUtente){
        auth = true;
    }
}    

// comunicagli se può partecipare o no alla festa.
if (auth == true){
    console.log(`Ciao ${nomeUtente}! Benvenuto/a alla festa del grande Gatsby!`);
} 
else if (auth == false){
    console.log(`Mi dispiace ${nomeUtente}, ma il grande Gatsby non ti ha invitato alla festa!`);
}


