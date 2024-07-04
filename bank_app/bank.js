




    class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
        } else if (amount > 0) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}



// Create two bank account instances
const account1 = new BankAccount(1001, 'John Doe', 700);
const account2 = new BankAccount(1002, 'Jane Smith', 500);

// Display initial account information
console.log('Initial Account Information:');
account1.displayAccountInfo();
account2.displayAccountInfo();
console.log('');

// Perform some transactions on account1
console.log('Transactions for Account 1:');
account1.deposit(300);
account1.withdraw(500);
account1.withdraw(1000);  // This should display "Insufficient funds"
account1.displayAccountInfo();
console.log('');

// Perform some transactions on account2
console.log('Transactions for Account 2:');
account2.deposit(200);
account2.withdraw(100);
account2.getBalance();
account2.displayAccountInfo();



