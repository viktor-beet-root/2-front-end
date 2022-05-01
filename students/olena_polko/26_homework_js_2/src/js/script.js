// Мінімум

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const numberFirst = 0.1;
const numberSecond = 0.2;
const result = (numberFirst + numberSecond).toFixed(1);
console.log(result);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const string = "1";
const number = 2;
const result2 = (string + number);
console.log(result2);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const fileSize = 820;
const oneGB = 1024;
const userDrive = +prompt("На скільки Гб Ваша флешка?");
const fileAmount = Math.floor(userDrive * oneGB / fileSize);
console.log(fileAmount);


// Норма

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const moneyAmount = +prompt("Скільки гривень у Вас в гаманці?");
const chocolatePrice = +prompt("Скільки гривень коштує шоколадка?");
const chocoAmount = Math.floor(moneyAmount / chocolatePrice);
const userChange = Math.floor(moneyAmount % chocolatePrice);
console.log(chocoAmount, userChange);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
const userNumber = +prompt("Введіть будь-яке тризначне число");
const lastNumber = Math.floor((userNumber / 1) % 10);
const secondNumber = Math.floor((userNumber / 10) % 10);
const firstNumber = Math.floor((userNumber / 100) % 10);
console.log(lastNumber, secondNumber, firstNumber);


// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const initialAmount = +prompt("Яку суму Ви бажаєте покласти в наш банк?");
const percentPerYear = 5;
const wholePeriod = 2;
const finalAmount = Math.floor((percentPerYear / 100 * initialAmount) / 12 * 2);
console.log(finalAmount);

// Що повернуть вираження:

//  2 && 0 && 3
// Відповідь: 0

//  2 || 0 || 3
// Відповідь: 2

// 2 && 0 || 3
// Відповідь: 3

