// Classe per gestire il conto bancario
class BankAccount {
    constructor(accountHolder, initialBalance = 50) {
      console.log({ accountHolder, initialBalance });
    this.accountHolder = accountHolder; // Titolare del conto
    this.balance = initialBalance; // Saldo iniziale
  }

  // Metodo per depositare denaro
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Depositati ${amount}. Saldo attuale: ${this.balance}`);
    } else {
      console.log("L'importo da depositare deve essere positivo.");
    }
  }

  // Metodo per prelevare denaro
    withdraw(amount) {
        if (amount < 0) {
            console.log("Saldo insufficiente");
            return;
        }
        if (amount > this.balance) {
            console.log("Saldo insufficiente");
            return;
        }
        this.balance -= amount;
        console.log(`Prelevati ${amount}. Saldo attuale: ${this.balance}`);
  }

  // Metodo per controllare il saldo
  getBalance() {
    console.log(`Saldo attuale per ${this.accountHolder}: ${this.balance}`);
    return this.balance;
  }
}

const account = new BankAccount("Christian", "1000");
const account2 = new BankAccount("Francesco");
account.deposit(500); // Depositati 500. Saldo attuale: 1500
account.withdraw(200); // Prelevati 200. Saldo attuale: 1300
account.getBalance(); // Saldo attuale per Mario Rossi: 1300
