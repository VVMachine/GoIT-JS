const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const refIngredients = document.querySelector("#ingredients");

const listElements = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  return item;
});

refIngredients.append(...listElements);
