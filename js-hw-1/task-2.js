const total = 100;
let ordered = 20;

function checkOffer(total, ordered) {
  console.log(
    ordered > total
      ? "На складе недостаточно твоаров!"
      : "Заказ оформлен, с вами свяжется менеджер"
  );
}

checkOffer(total, 20);
checkOffer(total, 80);
checkOffer(total, 130);
