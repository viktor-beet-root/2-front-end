"use strict";

// --Мінімум--
//1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
var firstFloat = 0.1;
var secondFloat = 0.2;
var ten = 10;
var resultFloat = parseFloat((firstFloat + secondFloat).toFixed(ten));
console.log(resultFloat); //2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
//добийся математично правильної відповіді.

var firstString = "1";
var secondInt = 2;
var resultStrInt = parseInt(firstString + secondInt);
console.log(resultStrInt); //3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
//let userGB = prompt('Enter capasity of your flash in GB');
// const FileSize = 820;
// const mbAmount = 1024;
// let filesResult = parseInt((userGB * mbAmount) / FileSize);
//alert(filesResult + ' files');
// --Норма--
//1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
//Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
// let userMoneyAmount = prompt('Enter money amount');
// let userChocolatePrice = prompt('Enter price for one chocolate');
// let resultChocolate = parseInt(userMoneyAmount / userChocolatePrice);
// let resultMoneyChange = parseInt(userMoneyAmount % userChocolatePrice);
// alert('You can buy ' + resultChocolate + 'chocolates and your money change is ' + resultMoneyChange + ' griven');
//2. Запитай у користувача тризначне число і виведи його задом наперед.
//Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
// let userNumber = prompt('Enter three-digit number');
// const TEN = 10;
// const Hundred = 100;
// let resultReverse = ((userNumber % TEN) * Hundred) + (userNumber % Hundred - userNumber % TEN) + (userNumber - userNumber % Hundred)/Hundred;
// alert(resultReverse);
// --Максимум--
//1. Користувач вводить суму вкладу в банк на 2 місяці,
//з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// let userMoney = prompt('Enter money amount to deposit');
// const month = 12;
// const currentMonth = 2;
// const percents = 0.05;
// let resultPercents = parseInt((userMoney * percents) / month * currentMonth);
// console.log(resultPercents);  
//Що повернуть вираження:
// 2 && 0 && 3

console.log(2 && 0 || 3); // 2 || 0 || 3
// 2 && 0 || 3