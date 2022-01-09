"use strict";

// --Мінімум--
//1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
var firstFloat = 0.1;
var secondFloat = 0.2;
var tenNum = 10;
var resultFloat = firstFloat * tenNum + secondFloat * tenNum;
console.log(resultFloat); //2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
//добийся математично правильної відповіді.

var firstString = "1";
var secondInt = 2;
var resultStrInt = +firstString + secondInt;
console.log(resultStrInt); //3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

var userGB = prompt('Enter capasity of your flash in GB');
var fileSize = 820;
var mbAmount = 1024;
var filesResult = Math.round(userGB * mbAmount / fileSize) + ' files';
console.log(filesResult); // --Норма--
//1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
//Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

var userMoneyAmount = +prompt('Enter money amount');
var userChocolatePrice = +prompt('Enter price for one chocolate');
var resultChocolate = Math.floor(userMoneyAmount / userChocolatePrice);
var resultMoneyChange = userMoneyAmount % userChocolatePrice;
var buyResult = 'You can buy ' + resultChocolate + ' chocolates and your money change is ' + resultMoneyChange + ' griven';
console.log(buyResult); //2. Запитай у користувача тризначне число і виведи його задом наперед.
//Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).

var userNumber = +prompt('Enter three-digit number');
var ten = 10;
var hundred = 100;
var resultReverse = userNumber % ten * hundred + (userNumber % hundred - userNumber % ten) + (userNumber - userNumber % hundred) / hundred;
console.log(resultReverse); // --Максимум--
//1. Користувач вводить суму вкладу в банк на 2 місяці,
//з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

var userMoney = +prompt('Enter money amount to deposit');
var month = 12;
var currentMonth = 2;
var percents = 0.05;
var resultPercents = Math.round(userMoney * percents / month * currentMonth) + ' griven';
console.log(resultPercents); //Що повернуть вираження:
// 2 && 0 && 3

console.log('Ноль'); // 2 || 0 || 3

console.log('Два'); // 2 && 0 || 3

console.log('Три');