let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let userInput = prompt("Сколько дроидов хотите купить?");

if (userInput === null) {
  console.log("Отменено пользователем");
} else if (!Number(userInput)) {
  console.log("Данные введены не корректно");
} else {
  totalPrice = +userInput * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    credits = credits - totalPrice;
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`
    );
  }
}
