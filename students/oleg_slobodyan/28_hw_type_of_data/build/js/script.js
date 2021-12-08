"use strict";

//Мінімум
// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
var num1 = 0.1;
var num2 = 0.2;
var result = (num1 + num2).toFixed(1);
console.log(result); // 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

var num = 2;
var str = "1";
var result2 = num + +str;
console.log(result2); // 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

var gb = +prompt("Вкажіть обєм Вашої флешки: ");
var converToMegaBite = gb * 1024;
var result3 = parseInt(converToMegaBite / 820);
console.log(result3); //Норма
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

var personMoney = +prompt("Вкажіть Вашу суму грошей в гаманці: ");
var personPrice = +prompt("Вкажіть ціну шоколадки: ");
var amountChoclade = parseInt(personMoney / personPrice);
var restMoney = personMoney - personPrice * amountChoclade;
console.log(amountChoclade); // - кількість шоколадок

console.log(restMoney); //-здача
// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).

var personNumber = +prompt("Вкажіть тризначне число: ");
var firstPosNum = personNumber % 10 * 100;
var secondPosNum = ~~(personNumber / 10) % 10 * 10;
var thirdPosNum = ~~(personNumber / 100) % 10;
var result4 = firstPosNum + secondPosNum + thirdPosNum;
console.log(result4); //Максимум
// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

var amountOfMoney = +prompt("Вкажіть сумму вкаладу: ");
var amountAfter = 5 / 100 * amountOfMoney * 2;
console.log(amountAfter); // 2. Що повернуть вираження:
// 2 && 0 && 3  -поверне 0
// 2 || 0 || 3  -поверне 2
// 2 && 0 || 3  -поверне 3