//CREO UN ARRAY PER CONTENERE I NUMERI DA STAMPARE IN PAGINA

let cinqueNumeri = [];

let numeriUtente = [];

let arrayIndovinati = [];

let arrayNonIndovinati = [];

let altreInfo = document.getElementById('sbagliatindovinati');

let numeriIndovinati = 0;
// PERFETTO SE 5 NUMERI SONO STATI INDOVINATI
let perfetto = "";

// PRENDO H3 PER INSERIRE I NUMERI DA RICORDARE

let h3Numeri = document.getElementById('cinqueNumeri');

// PRENDO UN SECONDO H3 PER GLI ESITI

let esito = document.getElementById('esito');

// PRENDO UN TERZO H3 PER LA SOMMA DEI NUMERI INDOVINATI
let indovinati = document.getElementById('indovinati');

// RIPETO LA GENERAZIONE DEI NUMERI 5 VOLTE
for (let i = 0; i < 5; i++) {
    let numeroRandom = Math.floor(Math.random() * 30 + 1);
    if (cinqueNumeri.includes(numeroRandom)) {
        console.log(numeroRandom)
        i--
    } else {
        cinqueNumeri.push(numeroRandom)
    }

}
console.log(cinqueNumeri)
h3Numeri.innerText = cinqueNumeri;

// TIMEOUT 
setTimeout(function () {
    h3Numeri.innerText = ``
    for (let i = 0; i < 5; i++) {
        // CHIEDO ALL UTENTE DI ISERIRE UN NUMERO 5 VOLTE
        numeriUtente.push(parseInt(prompt('inserisci un numero')));
    }
    // SE I CINQUE NUMERI GENERATI CORRISPONDONO A QUELLI DELL'UTENTE LI METTO IN UNA LISTA ALTRIMENTI UN ALTRA
    for (let i = 0; i < 5; i++) {
        if (cinqueNumeri.includes(numeriUtente[i])) {
            arrayIndovinati.push(numeriUtente[i])
            esito.innerText += ` Hai indovinato ${numeriUtente[i]}!;`
            numeriIndovinati += 1
        } else {
            arrayNonIndovinati.push(numeriUtente[i])
            esito.innerText += ` NON hai indovinato ${numeriUtente[i]}!;`
        }

    }
    // se i numeri indovinati sono tutti complimenti altrimenti mostro quelli sbagliati
    if (numeriIndovinati == 5) {
        perfetto = `LI HAI INDOVINATI TUTTI! BRAVO!`
    } else {
        perfetto = `HAI SBAGLIATO: ${arrayNonIndovinati}, HAI INDOVINATO: ${arrayIndovinati}; i numeri erano: ${cinqueNumeri}. Riprova aggiornando la pagina!`
    }

    altreInfo.innerText += perfetto;

}, 4000)