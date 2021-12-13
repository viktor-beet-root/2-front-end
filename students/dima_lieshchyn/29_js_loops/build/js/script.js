"use strict";

// --Мінімум--
//1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-2),
//підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...),
//передбач можливість введення невірних даних.
var userAge = +prompt('Enter your age');
var maxAge = 125; //http://cgon.rospotrebnadzor.ru/content/62/140 - ссылка на максимальный возраст:)

var ageResult = '';

if (userAge >= 0 && userAge < 3) {
  ageResult = 'Дитина';
} else if (userAge >= 12 && userAge < 19) {
  ageResult = 'Підліток';
} else if (userAge >= 18 && userAge < 61) {
  ageResult = 'Дорослий';
} else if (userAge >= 61 && userAge < maxAge + 1) {
  ageResult = 'Пенсіонер';
} else if (userAge < 0 || userAge > maxAge) {
  ageResult = 'Неверный ввод';
} else if (userAge >= 3 && userAge < 11) {
  ageResult = 'Щось поміж дитиною та підлітком:)';
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
    console.log('Невірний ввод');
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

while (tempFirst != 0 && tempSecond != 0) {
  if (tempFirst > tempSecond) {
    tempFirst = tempFirst % tempSecond;
    console.log(tempFirst);
  } else {
    tempSecond = tempSecond % tempFirst;
    console.log(tempSecond);
  }
}

result = tempFirst + tempSecond;
console.log(result); //5.Запитай у користувача число і виведи всі дільники цього числа.

var userNumber = +prompt('Введіть число');

for (var _i = 0; _i <= userNumber; _i++) {
  if (userNumber % _i == 0 && _i !== 1) {
    console.log(_i);
  }
} // --Норма--
//1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


var fiveDigits = +prompt('Введіть п`ятизначне число');
var firstNum = null;
var secondNum = null;
var fourNum = null;
var fiveNum = null;

if (fiveDigits <= 100000 && fiveDigits > 10001) {
  firstNum = fiveDigits / 10000;
  secondNum = fiveDigits / 1000 % 10;
  fourNum = fiveDigits / 10 % 10;
  fiveNum = fiveDigits % 10;

  if (parseInt(firstNum) === parseInt(fiveNum) && parseInt(secondNum) === parseInt(fourNum)) {
    console.log('Число паліндром');
  } else {
    console.log('Число не паліндром');
  }
} else {
  console.log('Число не п`ятизначне');
} //2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//1. від 200 до 300 - знижка буде 3%;
//2. від 300 до 500 - 5%;
//3. від 500 і вище - 7%.


var userPrice = +prompt('Введіть суму покупки');
var twoH = 200;
var threeH = 300;
var fiveH = 500;
var priceResult = null;

if (userPrice >= twoH) {
  if (userPrice >= twoH && userPrice < threeH + 1) {
    priceResult = userPrice - userPrice * 3 / 100;
  } else if (userPrice >= threeH && userPrice < fiveH + 1) {
    priceResult = userPrice - userPrice * 5 / 100;
  } else if (userPrice > fiveH) {
    priceResult = userPrice - userPrice * 7 / 100;
  }
} else {
  console.log('Ваша сума менша за 200');
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

  if (tenNumbers > 0) {
    if (tenNumbers % 2 == 0) {
      countPaired++;
      positiv++;
    } else if (tenNumbers % 2 !== 0) {
      countUnpaired++;
      positiv++;
    }
  } else if (tenNumbers < 0) {
    if (tenNumbers % 2 == 0) {
      countPaired++;
      negativ++;
    } else if (tenNumbers % 2 !== 0) {
      countUnpaired++;
      negativ++;
    }
  } else {
    countZero++;
  }
}

console.log('Додатніх: ' + positiv + '\nВід`ємних: ' + negativ + '\nНулів: ' + countZero + '\nПарних: ' + countPaired + '\nНепарних: ' + countUnpaired); //4.Зацикли висновок днів тижня таким чином: «День тижня.
//Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

var dayOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя'];
var tempZero = 0;
var userDay = '';

while (true) {
  userDay = confirm(dayOfWeek[temp] + ". Хочеш побачити наступний день?");
  tempZero++;

  if (tempZero > 6) {
    tempZero = 0;
  } else if (!userDay) {
    break;
  }
} // --Максимум--
//1.Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай
//його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл,
//записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
//Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100,
//поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 51 до 100.
//І так до тих пір, поки користувач не вибере == N.
// alert('Загадай число від 0 до 100');
// let temp = 100;
// let res = '';
// while (res) {
//     temp = temp / 2;
//     let userQuestion = confirm('Ваше число більше за ' + temp);
//     if (userQuestion) {
//         res = confirm('Ваше число ' + temp + ' ?');
//         temp = temp + temp / 2;
//         userQuestion = confirm('Ваше число більше за ' + temp);
//         res = confirm('Ваше число ' + temp + ' ?');
//         if (userQuestion) {
//             userQuestion = confirm('Ваше число більше за ' + temp);
//         }
//     }
// }
//2.Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


for (var _i3 = 2; _i3 <= 9; _i3++) {
  for (var j = 1; j <= 10; j++) {
    console.log(_i3 + ' x ' + j + ' = ' + _i3 * j);
  }

  console.log('------------');
} //3.Запитай дату (день, місяць, рік) і виведи наступну за нею дату.
//Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
//Задание на вывод решеток


var userNumFigure = +prompt('Введите число');
var tempUse = userNumFigure;
var temp = '';
var userSymbol = '#';
var userSpace = ' '; // #
// ##
// ### 
//   #
//  ##
// ###

for (var _i4 = 0; _i4 < userNumFigure; _i4++) {
  temp = temp + userSymbol;
  console.log(temp);
}

temp = '';

for (var _i5 = 0; _i5 < userNumFigure; _i5++) {
  for (var _j = tempUse - 1; _j > 0; _j--) {
    temp = temp + userSpace;
  }

  for (var m = tempUse - 1; m < userNumFigure; m++) {
    temp = temp + userSymbol;
  }

  console.log(temp);
  tempUse--;
  temp = '';
}

temp = ''; //    # #
//   ## ##
//  ### ###
// for (let i = 0; i < userNumFigure; i++) {
//     for (let j = tempUse - 1; j > 0; j--) {
//         temp = temp + userSpace;
//     }
//     for (let m = tempUse - 1; m < userNumFigure; m++) {
//         temp = temp + userSymbol;
//     }
//     for (let s = 0; s < 1; s++) {
//         temp = temp + userSpace;
//     }
//     for (let l = tempUse - 1; l < userNumFigure; l++) {
//         temp = temp + userSymbol;
//     }
//     console.log(temp);
//     tempUse--;
//     temp = '';
// }