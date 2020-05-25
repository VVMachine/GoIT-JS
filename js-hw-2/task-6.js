let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число");
  if (input === null) {
    break;
  }

  if (!Number(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(+input);
  }
}

for (let num of numbers) {
  total += num;
}

console.log(`Общая сумма чисел равна ${total}`);
