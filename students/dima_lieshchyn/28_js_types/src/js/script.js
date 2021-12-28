// --Мінімум--
//1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const firstFloat = 0.1;
const secondFloat = 0.2;
const tenNum = 10;
const resultFloat = firstFloat * tenNum + secondFloat * tenNum;
console.log(resultFloat);

//2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
//добийся математично правильної відповіді.
let firstString = "1";
let secondInt = 2;
let resultStrInt = +firstString + secondInt;
console.log(resultStrInt);

//3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const userGB = prompt('Enter capasity of your flash in GB');
const fileSize = 820;
const mbAmount = 1024;
const filesResult = Math.round((userGB * mbAmount) / fileSize) + ' files';
console.log(filesResult);

// --Норма--
//1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
//Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const userMoneyAmount = +prompt('Enter money amount');
const userChocolatePrice = +prompt('Enter price for one chocolate');
const resultChocolate = Math.floor(userMoneyAmount / userChocolatePrice);
const resultMoneyChange = userMoneyAmount % userChocolatePrice;
const buyResult = 'You can buy ' + resultChocolate
    + ' chocolates and your money change is ' + resultMoneyChange + ' griven';
console.log(buyResult);

//2. Запитай у користувача тризначне число і виведи його задом наперед.
//Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
const userNumber = +prompt('Enter three-digit number');
const ten = 10;
const hundred = 100;
const resultReverse = ((userNumber % ten) * hundred)
    + (userNumber % hundred - userNumber % ten)
    + (userNumber - userNumber % hundred) / hundred;
console.log(resultReverse);
// --Максимум--

//1. Користувач вводить суму вкладу в банк на 2 місяці,
//з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const userMoney = +prompt('Enter money amount to deposit');
const month = 12;
const currentMonth = 2;
const percents = 0.05;
const resultPercents = Math.round((userMoney * percents)
    / month * currentMonth) + ' griven';
console.log(resultPercents);

//Що повернуть вираження:
// 2 && 0 && 3
console.log('Ноль');
// 2 || 0 || 3
console.log('Два');
// 2 && 0 || 3
console.log('Три');
