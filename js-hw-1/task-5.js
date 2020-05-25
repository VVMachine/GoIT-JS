let deliveryPrice;
let deliveryCounrtyInput = prompt("Укажите страну доставки");
let deliveryCounrty;
let isAvailable = true;

switch (deliveryCounrtyInput) {
  case null:
    console.log(`Отменено пользователем`);
    break;
  default:
    deliveryCounrty = deliveryCounrtyInput.toLowerCase();
    switch (deliveryCounrty) {
      case "китай":
        deliveryPrice = 100;
        break;

      case "чили":
        deliveryPrice = 250;
        break;

      case "австралия":
        deliveryPrice = 170;
        break;

      case "индия":
        deliveryPrice = 80;
        break;

      case "ямайка":
        deliveryPrice = 120;
        break;

      default:
        isAvailable = false;
    }

    switch (isAvailable) {
      case true:
        console.log(
          `Доставка в ${deliveryCounrty} будет стоить ${deliveryPrice} кредитов`
        );
        break;
      default:
        console.log("В вашей стране доставка не доступна");
    }
}
