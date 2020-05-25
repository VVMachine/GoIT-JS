const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  let result = true;

  if (login.length < 4 || login.length > 16) {
    result = false;
  }

  return result;
};

const isLoginUnique = function (allLogins, login) {
  let result = true;

  for (let i = 0; i < allLogins.length; i++) {
    if (allLogins[i].toLowerCase() === login.toLowerCase()) {
      result = false;
    }
  }

  return result;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (!isLoginUnique(allLogins, login)) {
    return "Такой логин уже используется!";
  } else {
    logins.push(login);
    return "Логин успешно добавлен!";
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
