// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,

//   transactions: [],

//   getTransactions() {
//     return this.transactions;
//   },

//   createTransaction(amount, type) {
//     const Transaction = {};
//     Transaction.type = type;
//     Transaction.amount = amount;

//     if (type === 'withdraw') {
//       Transaction.id = '#' + 'w' + String(amount)[0] + String(amount)[1];
//     } else if (type === 'deposit') {
//       Transaction.id = '#' + 'd' + String(amount)[0] + String(amount)[1];
//     }

//     return Transaction;
//   },

//   deposit(amount) {
//     // console.log(this.createTransaction(amount, 'deposit'));
//     this.transactions.push(this.createTransaction(amount, 'deposit'));
//     let item;
//     if (amount > 0) {
//       for (item of this.transactions) {
//       }
//       this.balance += item.amount;
//       //   console.log(this.balance);
//     }
//   },

//   withdraw(amount) {
//     // console.log(this.createTransaction(amount, 'deposit'));
//     this.transactions.push(this.createTransaction(amount, 'withdraw'));
//     let item;
//     if (amount > 0) {
//       for (item of this.transactions) {
//       }
//       this.balance = this.balance - item.amount;
//       //   console.log(this.balance);
//     }
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (item of this.transactions) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//   },

//   getTransactionTotal(type) {
//     let total = 0;

//     for (item of this.transactions) {
//       if (item.type === type) {
//         total += item.amount;
//       }
//     }
//     return total;
//   },
// };

// console.table(account.getTransactions());

// console.table(account.createTransaction(1000, 'deposit'));
// console.table(account.createTransaction(100, 'withdraw'));
// console.table(account.createTransaction(50, 'withdraw'));

// account.deposit(50);
// account.deposit(800);
// account.deposit(150);
// account.withdraw(50);
// account.withdraw(100);
// console.table(account.getTransactions());

// console.log(account.getBalance());

// console.log(account.getTransactionDetails('#d50'));

// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal('withdraw'));
