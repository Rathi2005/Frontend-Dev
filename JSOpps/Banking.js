class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount > this.#balance)
            throw new Error("Insufficient balance!");
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

let acc = new BankAccount();

try {
    acc.deposit(2000);
    console.log("Balance:", acc.getBalance());

    acc.withdraw(500);
    console.log("Balance:", acc.getBalance());

    acc.withdraw(5000); // error
}
catch (err) {
    console.log("Error:", err.message);
}
