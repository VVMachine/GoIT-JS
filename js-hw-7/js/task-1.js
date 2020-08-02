const refCategories = document.querySelectorAll("#categories > li.item");

console.log(`В списке ${refCategories.length} категории`);

refCategories.forEach((el) =>
  console.log(
    `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.querySelectorAll("li").length}`
  )
);
