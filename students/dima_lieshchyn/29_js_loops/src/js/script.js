// --Мінімум--

//1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-2),
//підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...),
//передбач можливість введення невірних даних.
const userAge = +prompt('Enter your age');
const maxAge = 125;
//http://cgon.rospotrebnadzor.ru/content/62/140 - ссылка на максимальный возраст:)
let ageResult = '';
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
console.log(ageResult);


//2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
//який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
const userNum = +prompt('Введіть число від 0 до 9');
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
}

//3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const userIn = +prompt('Введіть початок діапазону');
const userOut = +prompt('Введіть кінець діапазону');
let summResult = 0;
for (let i = userIn; i <= userOut; i++) {
    summResult = summResult + i;
}
console.log(summResult);
//4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const userFNum = +prompt('Введіть перше число');
const userSNum = +prompt('Введіть друге число');
let tempFirst = userFNum;
let tempSecond = userSNum;
let result = null;
while (tempFirst != 0 && tempSecond != 0) {
    if (tempFirst > tempSecond) {
        tempFirst = tempFirst % tempSecond;
    } else {
        tempSecond = tempSecond % tempFirst;
    }
}
result = tempFirst + tempSecond;
console.log(result);

//5.Запитай у користувача число і виведи всі дільники цього числа.
const userNumber = +prompt('Введіть число');

for (let i = 0; i <= userNumber; i++) {
    if (userNumber % i == 0 && i !== 1) {
        console.log(i);
    }
}


// --Норма--

//1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const fiveDigits = +prompt('Введіть п`ятизначне число');
let firstNum = null;
let secondNum = null;
let fourNum = null;
let fiveNum = null;
if (fiveDigits <= 100000 && fiveDigits > 10001) {
    firstNum = fiveDigits / 10000;
    secondNum = (fiveDigits / 1000) % 10;
    fourNum = (fiveDigits / 10) % 10;
    fiveNum = fiveDigits % 10;
    if (parseInt(firstNum) === parseInt(fiveNum) &&
        parseInt(secondNum) === parseInt(fourNum)) {
        console.log('Число паліндром');
    } else {
        console.log('Число не паліндром');
    }
} else {
    console.log('Число не п`ятизначне');
}
//2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//1. від 200 до 300 - знижка буде 3%;
//2. від 300 до 500 - 5%;
//3. від 500 і вище - 7%.
const userPrice = +prompt('Введіть суму покупки');
const twoH = 200;
const threeH = 300;
const fiveH = 500;
let priceResult = null;
if (userPrice >= twoH) {
    if (userPrice >= twoH && userPrice < threeH + 1) {
        priceResult = userPrice - (userPrice * 3 / 100);
    } else if (userPrice >= threeH && userPrice < fiveH + 1) {
        priceResult = userPrice - (userPrice * 5 / 100);
    } else if (userPrice > fiveH) {
        priceResult = userPrice - (userPrice * 7 / 100);
    }
} else {
    console.log('Ваша сума менша за 200');
}
console.log(priceResult);

//3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
//від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних.
//Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
const maxNumbers = 10;
let tenNumbers = '';
let positiv = 0;
let negativ = 0;
let countZero = 0;
let countPaired = 0;
let countUnpaired = 0;
for (let i = 0; i < maxNumbers; i++) {
    tenNumbers = prompt('Введіть ' + (i + 1) + ' число');
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
const resultat = 'Додатніх: ' + positiv + '\nВід`ємних: ' + negativ +
    '\nНулів: ' + countZero + '\nПарних: ' + countPaired + '\nНепарних: ' + countUnpaired
console.log(resultat);

//4.Зацикли висновок днів тижня таким чином: «День тижня.
//Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
const dayOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя'];
let tempZero = 0;
let userDay = '';
while (true) {
    userDay = confirm(dayOfWeek[tempZero] + ". Хочеш побачити наступний день?");
    tempZero++;
    if (tempZero > 6) {
        tempZero = 0;
    } else if (!userDay) {
        break;
    }
}

// --Максимум--

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
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' x ' + j + ' = ' + (i * j));
    }
    console.log('------------');
}

//3.Запитай дату (день, місяць, рік) і виведи наступну за нею дату.
//Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

//Задание на вывод решеток
const userNumFigure = +prompt('Введите число');
let tempUse = userNumFigure;
let temp = '';
const userSymbol = '#';
const userSpace = ' ';
// #
// ##
// ### 
//   #
//  ##
// ###

for (let i = 0; i < userNumFigure; i++) {
    temp = temp + userSymbol;
    console.log(temp);
}
temp = '';
for (let i = 0; i < userNumFigure; i++) {
    for (let j = tempUse - 1; j > 0; j--) {
        temp = temp + userSpace;
    }
    for (let m = tempUse - 1; m < userNumFigure; m++) {
        temp = temp + userSymbol;
    }
    console.log(temp);
    tempUse--;
    temp = '';
}
temp = '';

//    # #
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

