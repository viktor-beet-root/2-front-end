//Мінімум    
// 2. Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
// const ім'я =  prompt("Введіть ваше Ім'я:"); 
// const 1name =  prompt("Введіть ваше Ім'я:"); 
// const item =  prompt("Введіть ваше Ім'я:"); 
// const name 2 =  prompt("Введіть ваше Ім'я:"); 
// const *name  =  prompt("Введіть ваше Ім'я:");
const personName1 = 'Михайло';
const personSurname = "Пупкін";

// 3. Вкажи всі можливі способи коментування коду
// 1
/* 2 */
/**  3  **/

// 4. Які стилі написання імен змінних ти знаєш?
// 1 camelCase
// 2 person_name - снейк_кейс


// Норма
//  1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const personName = prompt("Введіть ваше Ім'я:");
const personHi = "Привіт " + personName + "!";
console.log(personHi);
// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const personBirthYear = prompt("Введіть рік вашого народження:");
const curentYear = 2021;
const personAge = curentYear - personBirthYear;   /* рахуємо вік користувача */
console.log(personAge);
// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const storonaKvadrata = +prompt("Введіть довжену сторони квадрата:");
const perumetrKvadrata = storonaKvadrata * 4;  /* рахуємо периметр квадрату */
console.log(perumetrKvadrata);


// Максимум
// 1. Запитай у користувача радіус кола і виведи площу такої окружності.
const radiusCircle = +prompt("Введіть радіус кола:");
const squareCircle = 3.14 * Math.pow(radiusCircle, 2);  /* рахуємо площу кола */
console.log(squareCircle);

// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const s = +prompt("Яку відстань потрібно подолати (км)?");
const t = +prompt("За скільки часу?");
const v = s / t;
console.log(v);

// 3. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const dolarСurrency = +prompt("Введіть сумму $:");
const eurosСurrency = 0.8835;
const resultСurrency = dolarСurrency * eurosСurrency; // конвертуєм валюту
console.log(resultСurrency);
