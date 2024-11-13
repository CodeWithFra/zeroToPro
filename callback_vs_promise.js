// 1. Sintassi e leggibilità

// Callback: Con le callback, una funzione asincrona accetta un'altra funzione (callback) da eseguire al termine dell’operazione.
// L’uso di callback annidate può portare a una struttura di codice disordinata e difficile da leggere, nota come "callback hell".
setTimeout(() => {
    console.log("Operazione completata con callback");
}, 1000);

// Promise: Le Promise offrono una sintassi più lineare e leggibile grazie ai metodi .then() e .catch(),
// aiutando a evitare l'annidamento profondo. Inoltre, con la sintassi async/await, il codice asincrono può sembrare quasi sincrono.
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operazione completata con Promise");
    }, 1000);
}).then(result => console.log(result));

// 2. Gestione degli errori

// Callback: La gestione degli errori con le callback può essere complessa perché richiede di passare manualmente un parametro di errore.
// Inoltre, non esiste un modo centralizzato per catturare tutti gli errori.
function operazione(callback) {
    setTimeout(() => {
        const errore = true;
        if (errore) callback("Errore", null);
        else callback(null, "Successo");
    }, 1000);
}

operazione((errore, risultato) => {
    if (errore) console.error(errore);
    else console.log(risultato);
});

// Promise: Le Promise gestiscono gli errori in modo più elegante.
// Se qualcosa va storto, si può usare .catch() per catturare tutti gli errori in una catena di Promise.
// Questo approccio centralizzato rende il codice più chiaro.
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Errore nella Promise");
    }, 1000);
})
.then(result => console.log(result))
.catch(error => console.error(error)); // Cattura l'errore

// 3. Stati e controllabilità

// Callback: Una callback non ha uno stato di "completamento".
// Quando una funzione chiama la callback, non è possibile controllare direttamente se l'operazione è stata eseguita con successo o è ancora in corso.

// Promise: Le Promise hanno tre stati ben definiti: pending (in corso), fulfilled (completata) e rejected (fallita).
// Questo stato integrato rende più semplice monitorare e controllare l'avanzamento di un'operazione asincrona.

// 4. Composizione e flusso di operazioni asincrone

// Callback: Quando più operazioni asincrone devono essere eseguite in sequenza, le callback spesso portano a un codice annidato e difficile da seguire.
// Ciò rende il flusso di esecuzione complesso da gestire.
function operazione1(callback) {
    setTimeout(() => callback(null, "Risultato 1"), 1000);
}

function operazione2(callback) {
    setTimeout(() => callback(null, "Risultato 2"), 1000);
}

operazione1((errore1, risultato1) => {
    if (errore1) return console.error(errore1);
    operazione2((errore2, risultato2) => {
        if (errore2) return console.error(errore2);
        // Altre operazioni...
    });
});

// Promise: Le Promise semplificano la composizione di più operazioni asincrone grazie alla catena .then().
// Metodi come Promise.all() permettono di gestire operazioni parallele e sincronizzare i risultati.
operazione1()
    .then(risultato1 => operazione2())
    .then(risultato2 => {
        // Altre operazioni...
    })
    .catch(error => console.error(error));

// 5. Async/Await

// Callback: Non esiste una sintassi simile ad async/await per le callback,
// e quindi il codice asincrono può sembrare disordinato.

// Promise: Le Promise si integrano con async/await, permettendo di scrivere codice asincrono in modo lineare e pulito,
// come se fosse sincrono. Questo facilita la leggibilità e la gestione degli errori.
async function operazioneAsincrona() {
    try {
        const risultato = await operazione();
        console.log(risultato);
    } catch (error) {
        console.error(error);
    }
}

// Conclusione:
// In sintesi, le callback sono una soluzione di base per la gestione dell'asincronia in JavaScript, ma sono limitate nella gestione degli errori e della leggibilità in caso di flussi complessi.
// Le Promise, specialmente con async/await, offrono una sintassi più moderna e gestibile, rendendo il codice asincrono più leggibile, facile da mantenere e da controllare.
