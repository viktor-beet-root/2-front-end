"use strict";

// --Мінімум--
//1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11),
//підлітком (12-17), дорослим (18-59) або пенсіонером (60 ...),
//передбач можливість введення невірних даних.
var userAge = +prompt('Enter your age');
var ageResult = '';

if (userAge >= 0 && userAge < 3) {
  ageResult = 'Дитина';
} else if (userAge >= 12 && userAge < 18) {
  ageResult = 'Підліток';
} else if (userAge >= 18 && userAge < 60) {
  ageResult = 'Дорослий';
} else if (userAge >= 61) {
  ageResult = 'Пенсіонер';
} else if (userAge < 0) {
  ageResult = 'Неверный ввод';
} else {
  ageResult = 'Введите цифры';
}

console.log(ageResult); //2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
//який розташований на цій клавіші(1!, 2 @, 3 # і т.д).

var userNum = +prompt('Введіть число від 0 до 9');

switch (userNum) {
  case 0:
    console.log(')');
    break;

  case 1:
    console.log('!');
    break;

  case 2:
    console.log('@');
    break;

  case 3:
    console.log('#');
    break;

  case 4:
    console.log('$');
    break;

  case 5:
    console.log('%');
    break;

  case 6:
    console.log('^');
    break;

  case 7:
    console.log('&');
    break;

  case 8:
    console.log('*');
    break;

  case 9:
    console.log('(');
    break;

  default:
    console.error('Невірний ввод');
} //3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.


var userIn = +prompt('Введіть початок діапазону');
var userOut = +prompt('Введіть кінець діапазону');
var summResult = 0;

for (var i = userIn; i <= userOut; i++) {
  summResult = summResult + i;
}

console.log(summResult); //4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.

var userFNum = +prompt('Введіть перше число');
var userSNum = +prompt('Введіть друге число');
var tempFirst = userFNum;
var tempSecond = userSNum;
var result = null;

while (tempFirst !== 0 && tempSecond !== 0) {
  if (tempFirst > tempSecond) {
    tempFirst = tempFirst % tempSecond;
  } else {
    tempSecond = tempSecond % tempFirst;
  }
}

result = tempFirst + tempSecond;
console.log(result); //5.Запитай у користувача число і виведи всі дільники цього числа.

var userNumber = +prompt('Введіть число');

for (var _i = 0; _i <= userNumber; _i++) {
  if (userNumber % _i == 0) {
    console.log(_i);
  }
} // --Норма--
//1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


var fiveDigits = +prompt('Введіть п`ятизначне число');
var firstNum = null;
var secondNum = null;
var fourNum = null;
var fiveNum = null;

if (fiveDigits <= 100000 && fiveDigits > 9999) {
  firstNum = Math.floor(fiveDigits / 10000);
  secondNum = Math.floor(fiveDigits / 1000 % 10);
  fourNum = Math.floor(fiveDigits / 10 % 10);
  fiveNum = Math.floor(fiveDigits % 10);

  if (firstNum === fiveNum && secondNum === fourNum) {
    console.log('Число паліндром');
  } else {
    console.log('Число не паліндром');
  }
} else {
  console.error('Число не п`ятизначне');
} //2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//1. від 200 до 300 - знижка буде 3%;
//2. від 300 до 500 - 5%;
//3. від 500 і вище - 7%.


var userPrice = +prompt('Введіть суму покупки');
var twoH = 200;
var threeH = 300;
var fiveH = 500;
var priceResult = null;
if (userPrice < twoH) priceResult = userPrice;

if (userPrice >= twoH && userPrice < threeH + 1) {
  priceResult = userPrice - userPrice * 3 / 100;
}

if (userPrice >= threeH && userPrice < fiveH + 1) {
  priceResult = userPrice - userPrice * 5 / 100;
}

if (userPrice > fiveH) {
  priceResult = userPrice - userPrice * 7 / 100;
}

console.log(priceResult); //3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
//від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних.
//Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

var maxNumbers = 10;
var tenNumbers = '';
var positiv = 0;
var negativ = 0;
var countZero = 0;
var countPaired = 0;
var countUnpaired = 0;

for (var _i2 = 0; _i2 < maxNumbers; _i2++) {
  tenNumbers = prompt('Введіть ' + (_i2 + 1) + ' число');
  console.log(tenNumbers);
  if (tenNumbers === '0') countZero++;
  if (tenNumbers % 2 === 0 && tenNumbers !== 0) countPaired++;
  if (tenNumbers % 2 !== 0 && tenNumbers !== 0) countUnpaired++;
  if (tenNumbers > 0 && tenNumbers !== 0) positiv++;
  if (tenNumbers < 0 && tenNumbers !== 0) negativ++;
}

var resultat = 'Додатніх: ' + positiv + '\nВід`ємних: ' + negativ + '\nНулів: ' + countZero + '\nПарних: ' + countPaired + '\nНепарних: ' + countUnpaired;
console.log(resultat); //4.Зацикли висновок днів тижня таким чином: «День тижня.
//Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

var dayOfWeek = 'День тижня. Хочеш побачити наступний день?';
var userDay = '';

do {
  userDay = confirm(dayOfWeek);
} while (userDay); // --Максимум--
//2.Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


for (var _i3 = 2; _i3 <= 9; _i3++) {
  for (var j = 1; j <= 10; j++) {
    console.log(_i3 + ' x ' + j + ' = ' + _i3 * j);
  }

  console.log('------------');
}