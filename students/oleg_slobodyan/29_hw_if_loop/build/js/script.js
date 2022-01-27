"use strict";

// Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), передбач можливість введення невірних даних.
var personAge = +prompt('Скільки Вам років');
var res = '';

if (0 < personAge && personAge < 12) {
  res = "Дитина";
} else if (12 <= personAge && personAge < 18) {
  res = "Підліток";
} else if (18 <= personAge && personAge < 60) {
  res = "Дорослий";
} else if (personAge >= 60) {
  res = "Пенсіонер";
} else {
  res = 'Вказано неправельно вік!';
}

console.log(res); // 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

var personNum = +prompt('Введіть число від 0 до 9');
var personSymbol = '';

switch (personNum) {
  case 0:
    personSymbol = ")";
    break;

  case 1:
    personSymbol = "!";
    break;

  case 2:
    personSymbol = "@";
    break;

  case 3:
    personSymbol = "#";
    break;

  case 4:
    personSymbol = "$";
    break;

  case 5:
    personSymbol = "%";
    break;

  case 6:
    personSymbol = "^";
    break;

  case 7:
    personSymbol = "&";
    break;

  case 8:
    personSymbol = "*";
    break;

  case 9:
    personSymbol = "(";
    break;
}

console.log(personSymbol); // 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

var firstNum = +prompt("Введіть початкове число діапазону");
var secondNum = +prompt("Введіть кінцеве число діапазону");
var startNum = firstNum < secondNum ? firstNum : secondNum;
var endtNum = firstNum < secondNum ? secondNum : firstNum;
var i = startNum;
var sumNum = 0;

while (i <= endtNum) {
  sumNum = sumNum + i;
  i++;
}

console.log(sumNum); // 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

var personNum1 = +prompt("Вкажіть перше число");
var personNum2 = +prompt("Вкажіть друге число");
var max = personNum1 > personNum2 ? personNum1 : personNum2;
var min = personNum1 < personNum2 ? personNum1 : personNum2;
var j = min;
var resDiv = null;

while (j > 0) {
  if (!(max % j) && !(min % j)) {
    resDiv = j;
    break;
  } else {
    j--;
  }
}

var resConctM4 = "найбільший спільний дільник чисел " + personNum1 + " i " + personNum2 + " число " + resDiv;
console.log(resConctM4); // 5. Запитай у користувача число і виведи всі дільники цього числа.

var personNum3 = +prompt("Вкажіть число");
var e = 1;
var resDivision = "";

while (e <= personNum3) {
  if (personNum3 % e === 0) {
    resDivision = resDivision + e + " ";
  }

  e++;
}

console.log(resDivision); //Норма
// 1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// const personNum5 = +prompt('Введіть 5 значне число'); 
// let num5 = personNum5;
// let str5 = '';
// let resaltNum5 = '';
// for (const g = 0; 0 < num5; num5--) {
//     str5 = num5 + '';
//     if (str5[0] === str5[4] && str5[1] === str5[3]) {
//         resaltNum5 = str5;
//         break;
//     }
// }
// let resConctN1 = "Ваше число " + personNum5 + " найближче поліндромне число " + resaltNum5;
// console.log(resConctN1);

var personNum5 = +prompt('Введіть 5 значне число');
var firstPosNum = personNum5 % 10;
var secondtPosNum = ~~(personNum5 / 10) % 10;
var forthPosNum = ~~(personNum5 / 1000) % 10;
var fivthtPosNum = ~~(personNum5 / 10000) % 10;
var resConctN1 = '';

if (firstPosNum === fivthtPosNum && secondtPosNum === forthPosNum) {
  resConctN1 = 'Ваше чило: ' + personNum5 + ' є поліндромом';
} else resConctN1 = 'Ваше чило: ' + personNum5 + ' не є поліндромом';

console.log(resConctN1); // 2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

var personMoney = +prompt("Введіть сумму Вашої покупки");
var discont = null;
var resConctN2 = "";
var resConctN22 = "";

if (personMoney >= 200 && personMoney <= 300) {
  discont = personMoney - 3 / 100 * personMoney;
} else if (personMoney > 300 && personMoney <= 500) {
  discont = personMoney - 5 / 100 * personMoney;
} else if (personMoney > 500) {
  discont = personMoney - 7 / 100 * personMoney;
} else {
  resConctN22 = "замала сумма покупки для знижки";
}

resConctN2 = personMoney >= 200 ? "Сумма до оплати :" + discont : personMoney + ' ' + resConctN22;
console.log(resConctN2); // 3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

var dotNum = 0;
var vidNum = 0;
var zeroNum = 0;
var parNum = 0;
var neparNum = 0;
var personTenNum;
var personStr = '';
var resConctN3 = '';

for (var l = 0; l < 10; l++) {
  personTenNum = +prompt("ВВедіть число");
  personStr = personStr + personTenNum + " ";

  if (personTenNum > 0) {
    dotNum = dotNum + 1;
  } else if (personTenNum < 0) {
    vidNum = vidNum + 1;
  } else {
    zeroNum = zeroNum + 1;
  }

  if (!(personTenNum % 2)) {
    parNum = parNum + 1;
  } else {
    neparNum = neparNum + 1;
  }
}

resConctN3 = personStr + "\n" + "Додатніх чисел: " + dotNum + '\n' + "Відємних чисел: " + vidNum + '\n' + "Нулів: " + zeroNum + "\n" + "Парних чисел: " + parNum + "\n" + "Непарних чисел: " + neparNum + "\n";
console.log(resConctN3); //4.Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

var ok = true;
var k = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П*ятниця', 'Субота', 'Неділя'];
var z = 0;

do {
  if (z > 6) {
    z = 0;
  }

  ok = confirm(k[z] + ". Хочеш побачити наступний день?");
  z++;
} while (ok); // Максимум
// 2.Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


var mult1 = null;
var resConctE2 = '';

for (var x = 2; x <= 9; x++) {
  for (var _z = 1; _z <= 10; _z++) {
    mult1 = x * _z;
    resConctE2 = resConctE2 + x + "x" + _z + "=" + mult1 + "\n";
  }
}

console.log(resConctE2); //Піраміда

var piremid = '';
var t = '#';

for (var q = 0; q < 6; q++) {
  for (var o = 0; o <= q; o++) {
    if (o === q) {
      piremid = piremid + t + '\n';
    } else piremid = piremid + t;
  }
}

console.log(piremid);