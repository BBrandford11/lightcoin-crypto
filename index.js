
class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}
class Transaction {
  constructor(ammount, account) {
    this.ammount = ammount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.value;
  }
}
class Withdrawal extends Transaction {
  get value() {
    return -this.ammount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.ammount
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("billybob");

console.log("Starting Balance:", myAccount.balance);

const t1 = new Deposit(120.0, myAccount);
t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

console.log("Ending Balance:", myAccount.balance);
