"use strict";

// Мінімум
// 1. Напиши всі можливі варіанти створення функцій.
// Function declaration
// function name(params) {
//     // тело функции
// }
// function expression
// let functionName = function(params) {
//      // тело функции
// }
// anonymous function
// console.log(function() { 
//     // тело функции
// })
// arrow function
// let multiplyN = n => n * 10;
// let sayHi = () => console.log('Hi!');
// let diff = (a, b) => {
//     let result = a - b;
//     return result;
// }
console.log('==============================================='); // 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function showAgrumentsNumber() {
  console.log(arguments.length);
}

showAgrumentsNumber(1, 5, 8);
/* 3. Напиши функцію, яка приймає 2 числа і повертає :
    1. -1, якщо перше число менше, ніж друге; 
    2. 1 - якщо перше число більше, ніж друге; 
    3. 0 - якщо числа рівні.
*/

var firstNumber = +prompt('Enter first number', '');
var secondNumber = +prompt('Enter second number', '');

function showNumber(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(showNumber(firstNumber, secondNumber));
console.log('==============================================='); // 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

var f;
var factorialNumber = +prompt('Enter a number', '');

function calcFactorial(n) {
  if (n != n) {
    console.log('This is not a number! Please enter a number');
    f = undefined;
  } else if (n < 0) {
    f = 0;
  } else if (n === 0) {
    f = 1;
  } else {
    f = 1;

    for (var i = 1; i <= n; i++) {
      f = f * i;
    }
  }

  return f;
}

var factorialMessage = factorialNumber + '! = ' + calcFactorial(factorialNumber);
console.log(factorialMessage);
console.log('==============================================='); // 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

var concatResult;

function concatThreeNumbers(a, b, c) {
  concatResult = String(a) + b + c;
}

concatThreeNumbers(1, 4, 9);
console.log(concatResult);
console.log('==============================================='); // 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcSquare(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  return a * b;
}

console.log(calcSquare(16, 12));
console.log(calcSquare(18));
console.log('==============================================='); // Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

var perfectNumber = +prompt('Enter a number you want to check', '');

function isPerfectNumber(n) {
  var sumOfDividers = 0;

  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      sumOfDividers = sumOfDividers + i;
    }
  }

  if (n == sumOfDividers) {
    return true;
  } else {
    return false;
  }
}

if (perfectNumber != perfectNumber) {
  console.log('Please enter a correct number!');
} else {
  var perfectResult = isPerfectNumber(perfectNumber);

  if (perfectResult) {
    console.log('Congrats! This is a perfect number');
  } else {
    console.log('Alas! This is not  perfect number');
  }
}

console.log('==============================================='); // 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

var perfectNumbersList = '';

function perfectFromRange(a, b) {
  var maxN;
  var minN;

  if (a > b) {
    maxN = a;
    minN = b;
  } else {
    maxN = b;
    minN = a;
  }

  for (var i = 0; i < maxN; i++) {
    var perfectNumbers = isPerfectNumber(i);

    if (perfectNumbers) {
      perfectNumbersList = perfectNumbersList + i + ', ';
    }
  }

  return perfectNumbersList;
}

console.log(perfectFromRange(1, 29));