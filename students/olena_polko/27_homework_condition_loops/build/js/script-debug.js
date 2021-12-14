"use strict";

// Мінімум
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), передбач можливість введення невірних даних.
var userAge = +prompt("Скільки Вам років?");

if (userAge >= 0 && userAge <= 12) {
  console.log("Ви дитина");
} else if (userAge > 12 && userAge <= 18) {
  console.log("Ви підліток");
} else if (userAge > 18 && userAge <= 60) {
  console.log("Ви дорослий");
} else if (userAge > 60 && userAge <= 130) {
  console.log("Ви пенсіонер");
} else {
  console.log("Невірні дані");
} // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


var userNumber = +prompt("Введіть число від 0 до 9");
var userSymbol;

switch (userNumber) {
  case 0:
    userSymbol = ")";
    break;

  case 1:
    userSymbol = "!";
    break;

  case 2:
    userSymbol = "@";
    break;

  case 3:
    userSymbol = "#";
    break;

  case 4:
    userSymbol = "$";
    break;

  case 5:
    userSymbol = "%";
    break;

  case 6:
    userSymbol = "^";
    break;

  case 7:
    userSymbol = "&";
    break;

  case 8:
    userSymbol = "*";
    break;

  case 9:
    userSymbol = "(";
    break;
}

console.log(userSymbol); // Підрахуй суму всіх чисел в заданому користувачем діапазоні.

var rangeStart = +prompt("Введіть початкове число");
var rangeEnd = +prompt("Введіть кінцеве число");
var sum = 0;

while (rangeStart <= rangeEnd) {
  sum += rangeStart;
  rangeStart++;
}

console.log(sum); // Запитай у користувача 2 числа і знайди найбільший спільний дільник.

var numberOne = +prompt("Введіть перше число");
var numberTwo = +prompt("Введіть друге число");
var numberMin = numberOne < numberTwo ? numberOne : numberTwo;
var numberMax;

while (numberMin > 0) {
  if (!(numberOne % numberMin) && !(numberTwo % numberMin)) {
    numberMax = numberMin;
    break;
  }

  numberMin--;
}

var resultNumberMax = "Найбільший спільний дільник: " + numberMax;
console.log(resultNumberMax); // Запитай у користувача число і виведи всі дільники цього числа.

var userNum = +prompt("Введіть число");
var numDivisor = "";

for (var i = userNum; i > 0; i--) {
  if (userNum % i == 0) {
    numDivisor = numDivisor + " " + i;
    continue;
  }
}

console.log("Усі дільники числа " + userNum + ":" + numDivisor); // Норма
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

var productPrice = +prompt("Введіть суму Вашої покупки в гривнях");
var userDiscount = 0;
var finalPrice;

if (productPrice >= 200 && productPrice < 300) {
  userDiscount = productPrice / 100 * 3;
  finalPrice = productPrice - userDiscount;
} else if (productPrice >= 300 && productPrice < 500) {
  userDiscount = productPrice / 100 * 5;
  finalPrice = productPrice - userDiscount;
} else if (productPrice >= 500) {
  userDiscount = productPrice / 100 * 7;
  finalPrice = productPrice - userDiscount;
} else {
  finalPrice = productPrice;
}

console.log("Ціна зі знижкою: " + finalPrice + " " + "UAH"); // Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

var positiveNumbers = 0;
var negativeNumbers = 0;
var zeroNumbers = 0;
var oddNumbers = 0;
var evenNumbers = 0;

for (var _i = 0; _i < 10; _i++) {
  var tenNumbers = +prompt("Введіть число");

  if (tenNumbers > 0) {
    positiveNumbers++;
  } else if (tenNumbers < 0) {
    negativeNumbers++;
  } else {
    zeroNumbers++;
  }

  if (tenNumbers % 2 == 0) {
    evenNumbers++;
  } else {
    oddNumbers++;
  }
}

console.log("Ви ввели: " + positiveNumbers + " додатніх чисел,", +" " + negativeNumbers + " від'ємних,", +" " + zeroNumbers + " нулів." + " " + "З них " + oddNumbers + " непарних", "та " + evenNumbers + " парних."); // Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// Максимум
// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 51 до 100. І так до тих пір, поки користувач не вибере == N.
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.