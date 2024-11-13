// Primitivi
let name = "Alice";
let age = 30;
let isStudent = true;
let value = null;
let count;
let uniqueId = Symbol("id");
let largeNumber = BigInt(12345678901234567890);

// Oggetti
let person = {
    name: "Bob",
    age: 25,
    isStudent: false,
};
console.log(person.name);

// Operatori Aritmetici
let x = 10;
x += 5; // x = x + 5
x++; // x += 1 

// Operatori di Assegnazione
let a = 5;
a += 3;

// Operatori di Confronto
console.log("Caso1", 5 == "5"); // true
console.log("Caso2", 5 === "5"); // false

// Operatori Logici
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin);

// Operatori di Tipo
console.log(typeof 5);
console.log([1, 2] instanceof Array);

// Array
let colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors.length);

// Oggetti
let book = {
    title: "1984",
    author: "George Orwell",
};
book.year = 1949;

// Map e Set
let map = new Map();
map.set("name", "Alice");

let set = new Set();
set.add("apple");

// Funzioni
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Alice"));

// Promises
let promise = new Promise((resolve, reject) => {
    resolve("Ciao Chri");
});
promise.then(result => console.log(result));

let promise2 = new Promise((resolve, reject) => {
    resolve("Ciao Chri2");
});
promise2.then(result => console.log(result));

// Metodi Promise
Promise.all([promise, promise2]).then(results => console.log(results));

// Fetch API
fetch("https://www.google.it")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Errore:", error))
    .finally(() => console.log("Finito!"));

// Async/Await
async function fetchData() {
    try {
        let response = await fetch("https://www.google.it");
        let response2 = await fetch("https://www.google.it");
        let data = await response.text();
        let data2 = await response2.text();
        console.log(data);
    } catch (error) {
        console.error("Errore:", error);
    }
}
