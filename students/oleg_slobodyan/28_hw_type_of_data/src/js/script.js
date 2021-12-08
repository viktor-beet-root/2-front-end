//Мінімум
// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const num1 = 0.1;
const num2 = 0.2;
const result = (num1 + num2).toFixed(1);
console.log(result);

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const num = 2;
const str = "1";
const result2 = num + +str;
console.log(result2);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const gb = +prompt("Вкажіть обєм Вашої флешки: ");
const converToMegaBite = gb * 1024;
const result3 = parseInt(converToMegaBite / 820);
console.log(result3);

//Норма
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const personMoney = +prompt("Вкажіть Вашу суму грошей в гаманці: ");
const personPrice = +prompt("Вкажіть ціну шоколадки: ");
const amountChoclade = parseInt(personMoney / personPrice);
const restMoney = personMoney - personPrice * amountChoclade
console.log(amountChoclade); // - кількість шоколадок
console.log(restMoney); //-здача

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
const personNumber = +prompt("Вкажіть тризначне число: ");
const firstPosNum = (personNumber % 10) * 100;
const secondPosNum = (~~(personNumber / 10) % 10) * 10;
const thirdPosNum = (~~(personNumber / 100) % 10);
const result4 = firstPosNum + secondPosNum + thirdPosNum;
console.log(result4);

//Максимум
// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const amountOfMoney = +prompt("Вкажіть сумму вкаладу: ");
const amountAfter = (5 / 100 * amountOfMoney) * 2;
console.log(amountAfter);

// 2. Що повернуть вираження:
// 2 && 0 && 3  -поверне 0
// 2 || 0 || 3  -поверне 2
// 2 && 0 || 3  -поверне 3
