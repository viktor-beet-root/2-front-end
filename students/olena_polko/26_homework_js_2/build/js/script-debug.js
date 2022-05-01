"use strict";

// Мінімум
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
var numberFirst = 0.1;
var numberSecond = 0.2;
var result = (numberFirst + numberSecond).toFixed(1);
console.log(result); // Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

var string = "1";
var number = 2;
var result2 = string + number;
console.log(result2); // Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

var fileSize = 820;
var oneGB = 1024;
var userDrive = +prompt("На скільки Гб Ваша флешка?");
var fileAmount = Math.floor(userDrive * oneGB / fileSize);
console.log(fileAmount); // Норма
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

var moneyAmount = +prompt("Скільки гривень у Вас в гаманці?");
var chocolatePrice = +prompt("Скільки гривень коштує шоколадка?");
var chocoAmount = Math.floor(moneyAmount / chocolatePrice);
var userChange = Math.floor(moneyAmount % chocolatePrice);
console.log(chocoAmount, userChange); // Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).

var userNumber = +prompt("Введіть будь-яке тризначне число");
var lastNumber = Math.floor(userNumber / 1 % 10);
var secondNumber = Math.floor(userNumber / 10 % 10);
var firstNumber = Math.floor(userNumber / 100 % 10);
console.log(lastNumber, secondNumber, firstNumber); // Максимум
// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

var initialAmount = +prompt("Яку суму Ви бажаєте покласти в наш банк?");
var percentPerYear = 5;
var wholePeriod = 2;
var finalAmount = Math.floor(percentPerYear / 100 * initialAmount / 12 * 2);
console.log(finalAmount); // Що повернуть вираження:
//  2 && 0 && 3
// Відповідь: 0
//  2 || 0 || 3
// Відповідь: 2
// 2 && 0 || 3
// Відповідь: 3