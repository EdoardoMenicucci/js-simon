//CREO UN ARRAY PER CONTENERE I NUMERI DA STAMPARE IN PAGINA

let cinqueNumeri = [];

// CREO ALTRE VARIABILI CHE CONTENGONO IL CONTENUTO DA STAMPARE IN PAGINA 
let primo;
let secondo;
let terzo;
let quarto;
let quinto;
// CREO UNA VARIABILE PER LA SOMMA DEI NUMERI INDOVINATI
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
    console.log(cinqueNumeri)
}

h3Numeri.innerText = cinqueNumeri;

setTimeout(function () {
    // SVUOTO I NUMERI
    h3Numeri.innerText = ``
    // CHIEDO ALL UTENTE DI REINSERIRLI 
    let n1 = parseInt(prompt('inserisci uno dei numeri'))
    let n2 = parseInt(prompt('inserisci uno dei numeri'))
    let n3 = parseInt(prompt('inserisci uno dei numeri'))
    let n4 = parseInt(prompt('inserisci uno dei numeri'))
    let n5 = parseInt(prompt('inserisci uno dei numeri'))

    // CONTROLLO IL PRIMO NUMERO SE E INCLUSO TRA QUELLI GENERATI E COSI VIA
    if (cinqueNumeri.includes(n1)) {
        primo = `Primo preso!: ${n1}; `
        numeriIndovinati += 1;
    } else {
        primo = `Primo sbagliato!: ${n1}; `
    }
    if (cinqueNumeri.includes(n2)) {
        secondo = `Secondo preso!: ${n2}; `
        numeriIndovinati += 1;
    } else {
        secondo = `Secondo sbagliato!: ${n2}; `
    }
    if (cinqueNumeri.includes(n3)) {
        terzo = `Terzo preso!: ${n3}; `
        numeriIndovinati += 1;
    } else {
        terzo = `Terzo sbagliato!: ${n3}; `
    }
    if (cinqueNumeri.includes(n4)) {
        quarto = `Quarto preso!: ${n4}; `
        numeriIndovinati += 1;
    } else {
        quarto = `Quarto sbagliato!: ${n4}; `
    }
    if (cinqueNumeri.includes(n5)) {
        quinto = `Quinto preso!: ${n5}; `
        numeriIndovinati += 1;
    } else {
        quinto = `Quinto sbagliato!: ${n5}; `
    }

    if (numeriIndovinati == 5) {
        perfetto = `LI HAI PRESI TUTTI!`
    } else {
        perfetto = `Riprova!`
    }

    esito.innerText = primo + secondo + terzo + quarto + quinto;

    indovinati.innerText = `Hai indovinato ${numeriIndovinati} Numeri! ${perfetto}`

}, 30 * 1000)