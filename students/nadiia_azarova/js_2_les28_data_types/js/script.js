// Мінімум

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const sum = (0.1 * 10 + 0.2 * 10) / 10;

console.log (sum);

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const one = '1';
const two = 2;

console.log(+one + two);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const fleshka = +prompt('Вкажи обсяг флешки в Гб', '') * 1024;
const fileSize = 820;
const fileQty = Math.floor(fleshka / fileSize);

console.log('На твою флешку поміститься' + ' ' + fileQty + ' ' + 'файлів');


// Норма

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const userMoney = +prompt('Яка сума грошей у тебе в гаманці?', '');
const oneChocolate = +prompt('Скільки коштує одна шоколадка?', '');
const chocolateQty = Math.floor(userMoney / oneChocolate);
const changeMoney = userMoney % oneChocolate;

console.log('Ти зможешь купити' + ' ' + chocolateQty + ' ' + 'шоколадок' + ' ' + 'і в тебе залишиться ще' + ' ' + changeMoney + ' ' + 'грошей.')

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const userNuber = +prompt('Введи будь-яке трьохзначне число', '');

const thirdDigit =  userNuber % 10;
const secondDigit = Math.floor((userNuber % 100) / 10);
const firstDigit = Math.floor(userNuber / 100);

const thirdDigitString = String(thirdDigit);
const secondDigitString = String(secondDigit);
const firstDigitString = String(firstDigit);

const invertedNumber = thirdDigitString + secondDigitString + firstDigitString;

console.log(invertedNumber);


// Максимум

// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const deposit = +prompt('Сума вкладу в банк', '');
const rate = 5;
const term = 2;
const interest = (Math.round(deposit / 100 * rate / 12 * term * 100)) / 100;

console.log ('Сума нарахованих відсотків -' + ' ' + interest + ' ' + 'грошей');

// 2. Що повернуть вираження:
//    2 && 0 && 3  -> 0
//    2 || 0 || 3  -> 2
//    2 && 0 || 3  -> 3
