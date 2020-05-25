let input;
let total = 0;

do {
  input = prompt("Введите число");

  if (input === null) {
    break;
  }

  if (!Number(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += +input;
  }
} while (true);

alert(`Общая сумма чисел равна ${total}`);
