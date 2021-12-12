// --Мінімум--
//1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let firstFloat = 0.1;
let secondFloat = 0.2;
const ten = 10;
let resultFloat = parseFloat((firstFloat + secondFloat).toFixed(ten));
console.log(resultFloat);

//2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
//добийся математично правильної відповіді.
let firstString = "1";
let secondInt = 2;
let resultStrInt = Number(firstString) + secondInt;
console.log(resultStrInt);

//3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const userGB = prompt('Enter capasity of your flash in GB');
const FileSize = 820;
const mbAmount = 1024;
let filesResult = parseInt((userGB * mbAmount) / FileSize);
console.log(filesResult + ' files');

// --Норма--
//1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
//Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const userMoneyAmount = +prompt('Enter money amount');
const userChocolatePrice = +prompt('Enter price for one chocolate');
let resultChocolate = parseInt(userMoneyAmount / userChocolatePrice);
let resultMoneyChange = parseInt(userMoneyAmount % userChocolatePrice);
console.log('You can buy ' + resultChocolate + ' chocolates and your money change is ' + resultMoneyChange + ' griven');

//2. Запитай у користувача тризначне число і виведи його задом наперед.
//Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
const userNumber = +prompt('Enter three-digit number');
const TEN = 10;
const Hundred = 100;
let resultReverse = ((userNumber % TEN) * Hundred) + (userNumber % Hundred - userNumber % TEN) + (userNumber - userNumber % Hundred) / Hundred;
console.log(resultReverse);
// --Максимум--

//1. Користувач вводить суму вкладу в банк на 2 місяці,
//з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const userMoney = +prompt('Enter money amount to deposit');
const month = 12;
const currentMonth = 2;
const percents = 0.05;
let resultPercents = parseInt((userMoney * percents) / month * currentMonth);
console.log(resultPercents + ' griven');

//Що повернуть вираження:
// 2 && 0 && 3
console.log('Ноль');
// 2 || 0 || 3
console.log('Два');
// 2 && 0 || 3
console.log('Три');
