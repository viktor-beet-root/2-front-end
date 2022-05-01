"use strict";

// Мінімум

/* 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18-60) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/
var userAge = +prompt('How old are you?', '');

if (userAge >= 0 && userAge < 3) {
  console.log('You are a baby');
} else if (userAge >= 3 && userAge < 12) {
  console.log('You are a child');
} else if (userAge >= 12 && userAge < 18) {
  console.log('You are a teenager');
} else if (userAge >= 18 && userAge < 60) {
  console.log('You are an adult');
} else if (userAge >= 60) {
  console.log('You are an elder');
} else {
  console.log('The number you\'ve entered is incoreect');
}

console.log('==============================================='); // 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

var specialNumber = +prompt('Enter a number form 0 to 9', '');

switch (specialNumber) {
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
    console.log('Your entry is incorrect. Please enter a number from 0 to 9');
}

console.log('===============================================');
/* 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.*/

var number1 = +prompt('Enter first number', '');
var number2 = +prompt('Enter second number', '');
var sumOfNumbers = 0;

if (number1 !== number1 || number2 !== number2) {
  console.log('Your entry is incorrect');
} else if (number2 < number1) {
  for (var i = number2; i <= number1; i++) {
    sumOfNumbers = sumOfNumbers + i;
  }
} else {
  for (var _i = number1; _i <= number2; _i++) {
    sumOfNumbers = sumOfNumbers + _i;
  }
}

var resultSum = 'The sum of all the numbers in the range from ' + number1 + ' to ' + number2 + ' is ' + sumOfNumbers;
console.log(resultSum);
console.log('===============================================');
/* 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/

var userNumber1 = +prompt('Please enter a number', '');
var userNumber2 = +prompt('Please enter another number', '');
var a = userNumber1;
var b = userNumber2;

if (userNumber1 != userNumber1 || userNumber2 != userNumber2) {
  console.log('These are not numbers. Please enter correct numbers!');
} else if (userNumber1 === 0 || userNumber2 === 0) {
  console.log('You cannot divide by zero!');
} else {
  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  ;
  var gcd = a + b;
  var messageDiv = 'The greatest common diviser is ' + gcd;
  console.log(messageDiv);
}

console.log('===============================================');
/* 5. Запитай у користувача число і виведи всі дільники цього числа.*/

var userNumber3 = +prompt('Enter a number', '');
var numberDividers;

if (userNumber3 != userNumber3) {
  console.log('Please enter a correct number!');
} else {
  for (var _i2 = 1; _i2 <= userNumber3; _i2++) {
    if (userNumber3 % _i2 == 0) {
      numberDividers = _i2;
      var messageAllDiv = 'The common dividers of these numbers are: ' + numberDividers;
      console.log(messageAllDiv);
    }
  }
}

console.log('==============================================='); // Норма

/* 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.*/

var userNumber = prompt('Please enter a five-digit number', '');

if (+userNumber != +userNumber) {
  console.log('This is not a number. Please, enter a number!');
} else if (userNumber.length != 5) {
  console.log('Please, enter a FIVE-digit number!');
} else if (userNumber[0] == userNumber[4] && userNumber[1] == userNumber[3]) {
  console.log('Congrats! This number is a palindrome!');
} else {
  console.log('Alas! This number is not a palindrome!');
}

console.log('===============================================');
/* 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
        від 200 до 300 - знижка буде 3%; 
        від 300 до 500 - 5%;
        від 500 і вище - 7%.
*/

var purchaseAmount = +prompt('Enter your purchase amount please', '');
var discoutMessage;
var discountValue;

if (purchaseAmount != purchaseAmount) {
  discoutMessage = 'This is not a correct number. Please enter a correct number!';
} else if (purchaseAmount < 200) {
  discoutMessage = 'Alas, you get no discount. Your sum is ' + purchaseAmount;
} else if (purchaseAmount >= 200 && purchaseAmount < 300) {
  discountValue = purchaseAmount - purchaseAmount * 3 / 100;
  discoutMessage = 'Сongrats! You get 3% discount. Your total sum is ' + discountValue;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
  discountValue = purchaseAmount - purchaseAmount * 5 / 100;
  discoutMessage = 'Сongrats! You get 5% discount. Your total sum is ' + discountValue;
} else if (purchaseAmount >= 500) {
  discountValue = purchaseAmount - purchaseAmount * 7 / 100;
  discoutMessage = 'Сongrats! You get 7% discount. Your total sum is ' + discountValue;
}

console.log(discoutMessage);
console.log('===============================================');
/* 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/

var tenNumbers = prompt('Please enter 10 numbers. Divide them with white spaces', '');
var splitedNumbers = tenNumbers.split(' ');
var positiveNumbers = 0;
var negativeNumbers = 0;
var zeroNumbers = 0;
var evenNumbers = 0;
var oddNumbers = 0;

if (+tenNumbers != +tenNumbers) {
  for (var _i3 = 0; _i3 < 10; _i3++) {
    if (Math.sign(+splitedNumbers[_i3]) == 1) {
      positiveNumbers++;
    } else if (Math.sign(+splitedNumbers[_i3]) == -1) {
      negativeNumbers++;
    } else {
      zeroNumbers++;
    }

    if (+splitedNumbers[_i3] % 2 == 0 && +splitedNumbers[_i3] != 0) {
      evenNumbers++;
    } else if (+splitedNumbers[_i3] % 2 == 1) {
      oddNumbers++;
    }
  }
} else if (tenNumbers.length != 10) {
  console.log('Plese enter TEN numbers!');
} else {
  console.log('Please enter 10 NUMBERS!');
}

console.log('positive numbers — ' + positiveNumbers + '\n' + 'negavive numbers — ' + negativeNumbers + '\n' + 'zeros — ' + zeroNumbers + '\n' + 'even numbers — ' + evenNumbers + '\n' + 'odd numbers — ' + oddNumbers);
console.log('===============================================');
/* 4. Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.*/

var currentDay = new Date();
var currentDayNumber = currentDay.getDay();
var dayName;

switch (currentDayNumber) {
  case 0:
    dayName = 'Sunday';
    break;

  case 1:
    dayName = 'Monday';
    break;

  case 2:
    dayName = 'Tuesday';
    break;

  case 3:
    dayName = 'Wednesday';
    break;

  case 4:
    dayName = 'Thursday';
    break;

  case 5:
    dayName = 'Friday';
    break;

  case 6:
    dayName = 'Saturday';
}

while (confirm('Today is ' + dayName + '. Do you want to see the next day?')) {
  switch ((currentDayNumber + 1) % 7) {
    case 0:
      dayName = 'Sunday';
      break;

    case 1:
      dayName = 'Monday';
      break;

    case 2:
      dayName = 'Tuesday';
      break;

    case 3:
      dayName = 'Wednesday';
      break;

    case 4:
      dayName = 'Thursday';
      break;

    case 5:
      dayName = 'Friday';
      break;

    case 6:
      dayName = 'Saturday';
  }

  currentDayNumber = (currentDayNumber + 1) % 7;
  console.log(dayName);
}

console.log('==============================================='); // Максимум

/* 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 51 до 100. І так до тих пір, поки користувач не вибере == N.*/

console.log('Think of a number between 0 and 100');
var rangeStart = 0;
var rangeEnd = 100;
var rangeMiddle;

do {
  rangeMiddle = Math.trunc((rangeEnd + rangeStart) / 2);

  if (confirm('Your number is greater than ' + rangeMiddle + '?')) {
    rangeStart = rangeMiddle;
  } else if (confirm('Your number is smaller than ' + rangeMiddle + '?')) {
    rangeEnd = rangeMiddle;
  } else if (confirm('Then your number is ' + rangeMiddle + '?')) {
    console.log('Hoorah! I guessed your number. It is ' + rangeMiddle + '!');
    break;
  }
} while (rangeMiddle >= 0 && rangeMiddle <= 100);

console.log('===============================================');
/* 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.*/

for (var n = 1; n < 10; n++) {
  for (var _i4 = 1; _i4 <= 10; _i4++) {
    console.log(n + ' × ' + _i4 + ' = ' + n * _i4);
  }
}

console.log('===============================================');
/* 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.*/

var dateEntry = prompt('Enter any date. Use dd.mm.yy format', '');
var splitDate = dateEntry.split('.');
var d = +splitDate[0];
var m = +splitDate[1];
var y = +splitDate[2];

if (d != d || m != m || y != y || d < 1 || d > 31 || m < 1 || m > 12 || y < 0) {
  console.log('The date is incorrect. Please enter a valid date!');
} else {
  if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
    if (m == 12 && d == 31) {
      y = y + 1;
    }

    if (d == 31) {
      m = (m + 1) % 12;
    }

    d = (d + 1) % 31;
  } else if (m == 4 || m == 6 || m == 9 || m == 11) {
    if (d == 30) {
      m = (m + 1) % 12;
    }

    if (d > 30) {
      console.log('The date is incorrect. Please enter a valid date!');
    } else {
      d = (d + 1) % 30;
    }
  } else if (m == 2 && y % 4 == 0) {
    if (d == 29) {
      m = (m + 1) % 12;
    }

    if (d > 29) {
      console.log('The date is incorrect. Please enter a valid date!');
    } else {
      d = (d + 1) % 29;
    }
  } else {
    if (d == 28) {
      m = (m + 1) % 12;
    }

    if (d > 28) {
      console.log('The date is incorrect. Please enter a valid date!');
    } else {
      d = (d + 1) % 28;
    }
  }

  if (d < 10) {
    d = '0' + d;
  }

  if (m < 10) {
    m = '0' + m;
  }

  if (y < 1000 && y >= 100) {
    y = '0' + y;
  } else if (y < 100 && y >= 10) {
    y = '00' + y;
  } else if (y < 10) {
    y = '000' + y;
  }

  var nextDate = d + '.' + m + '.' + y;
  console.log(nextDate);
}