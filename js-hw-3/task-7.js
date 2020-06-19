/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return { id: this.transactions.length + 1, amount, type };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (!Number(amount)) {
      return "Введено не число. Введите корректные данные";
    } else {
      this.balance += +amount;

      this.transactions.push(
        this.createTransaction(+amount, Transaction.DEPOSIT)
      );

      return `Баланс пополнен на ${amount} условных единиц. Сумма на счету: ${this.balance} условных единиц`;
    }
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance === 0) {
      return "На балансе 0 условных единиц. Пополните счет!!!";
    } else if (amount > this.balance) {
      return "Cнятие такой суммы не возможно, недостаточно средств";
    } else if (!Number(amount)) {
      return "Введено не число. Введите корректные данные";
    } else {
      this.balance -= +amount;
      this.transactions.push(
        this.createTransaction(+amount, Transaction.WITHDRAW)
      );
      return `С баланса списано ${amount} условных единиц. Сумма на счету: ${this.balance} условных единиц`;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let result = "Транзакции с таким ID не существует";

    for (const transaction of this.transactions) {
      if (transaction.id === +id) {
        return transaction;
      }
    }

    return result;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let result = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        result += transaction.amount;
      }
    }

    return result;
  },
};

console.log(account.withdraw(25));

console.log(account.deposit(25));

console.log(account.withdraw("One hundred"));

console.log(account.withdraw(100));

console.log(account.withdraw("20"));

console.log(account.deposit(50));

console.log(account.deposit("75"));

console.log(account.deposit("skldfjskdlfjkl"));

console.log(account.deposit(100));

console.log(account.withdraw(50));

console.log(account.getBalance());

console.log(account.getTransactionDetails("sdfkjhskjdfhk"));

console.log(account.getTransactionDetails(99));

console.log(account.getTransactionDetails(2));

console.log(account.getTransactionDetails("3"));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account.transactions);
