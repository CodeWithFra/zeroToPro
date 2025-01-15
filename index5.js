let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false; // Cambia a false per testare il rifiuto
        if (success) {
            resolve("Operazione completata!"); // Risolve la Promise con successo
        } else {
            reject("Errore nell'operazione."); // Rifiuta la Promise in caso di errore
        }
    }, 1000);
});
console.log(promise)