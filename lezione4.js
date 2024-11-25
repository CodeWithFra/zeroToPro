// Le Promises in JavaScript sono usate per gestire operazioni asincrone,
// come richieste di rete o temporizzazioni. Una Promise rappresenta un valore futuro,
// che potrebbe completarsi con successo o fallire.

// Creazione di una Promise
// Usando il costruttore Promise, accettiamo una funzione "executor" con due parametri, "resolve" e "reject".
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // Cambia a false per testare il rifiuto
        if (success) {
            resolve("Operazione completata!"); // Risolve la Promise con successo
        } else {
            reject("Errore nell'operazione."); // Rifiuta la Promise in caso di errore
        }
    }, 1000);
});

// Uso di .then() e .catch()
// Usiamo .then() per gestire il successo della Promise e .catch() per gli errori.
promise
    .then(result => {
        console.log("Successo:", result); // Esegue se la Promise è risolta
    })
    .catch(error => {
        console.error("Errore:", error); // Esegue se la Promise è rifiutata
    });

// Metodi delle Promise

// Promise.all()
// Aspetta che tutte le promesse siano risolte (o che una sia rifiutata).
// Ritorna un array dei risultati delle promesse se tutte hanno suc cesso.
let promise1 = Promise.resolve(10);
let promise2 = Promise.resolve(20);

Promise.all([promise1, promise2])
    .then(results => console.log("Risultati:", results)) // Output: [10, 20]
    .catch(error => console.error("Errore:", error)); // Si attiva se una promessa viene rifiutata

// Promise.race()
// Ritorna la prima promessa che viene risolta o rifiutata.
// Utile quando vogliamo il risultato più veloce tra le promesse.
let promise3 = new Promise(resolve => setTimeout(() => resolve("P3"), 1000));
let promise4 = new Promise(resolve => setTimeout(() => resolve("P4"), 500));

Promise.race([promise3, promise4])
    .then(result => console.log("Vincitore:", result)); // Output: "P4"

// Promise.allSettled()
// Aspetta che tutte le promesse siano completate, indipendentemente dal fatto che siano risolte o rifiutate.
// Ritorna un array con il risultato di ogni promessa.
let promise5 = Promise.resolve(100);
let promise6 = Promise.reject("Errore!");

Promise.allSettled([promise5, promise6])
    .then(results => console.log(results));

// Output:
// [
//   { status: "fulfilled", value: 100 },
//   { status: "rejected", reason: "Errore!" }
// ]

// Promise.any() (introdotta in ES2021)
// Ritorna la prima promessa risolta. Se tutte vengono rifiutate, lancia un errore AggregateError.
// Promise.race is settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.
// Promise.any is settled as soon as any of the promises you feed it is fulfilled or they are all rejected, 
// in which case it's rejected with an AggregateError.
let promise7 = Promise.reject("Errore!");
let promise8 = Promise.resolve(200);

Promise.any([promise7, promise8])
    .then(result => console.log("Primo successo:", result)) // Output: 200
    .catch(error => console.error("Tutte rifiutate:", error));

// Esempio completo: Utilizzo di Promises con fetch
// Un caso d'uso comune delle Promises è l'API fetch per fare richieste di rete.
fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) throw new Error("Errore nella risposta!");
        return response.json(); // Converte la risposta in JSON se la richiesta ha successo
    })
    .then(data => console.log("Dati:", data)) // Stampa i dati ottenuti
    .catch(error => console.error("Errore:", error)); // Gestisce eventuali errori

// Questo esempio:
// 1. Esegue una richiesta HTTP con fetch.
// 2. Controlla se la risposta è OK.
// 3. Se sì, converte la risposta in JSON.
// 4. Se c'è un errore, lo cattura nel blocco .catch().

// Le Promises in JavaScript offrono un modo leggibile e strutturato per gestire operazioni asincrone,
// semplificando il codice rispetto ai callback e riducendo il rischio di "callback hell".
