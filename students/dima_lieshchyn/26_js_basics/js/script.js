// Minimum

//Задание 2 
//Тобі потрібно зберігати ім’я та прізвище в змінній,
//придумай до 4-х імен змінних, що потрібні тобі для даної задачі.
//Також напиши до 5 неправильних імен 
//(неправильні імена повинні бути закоментовані);

// Неправильні
let name;
let surname;
let firstName;
let lastName;

// Правильні
// let Name;
// let SuRnAmE;
// let first Name;
// let last-Name;
// let 1name;

/*---------------------------------------*/

//Задание 3
// Вкажи всі можливі способи коментування коду;
//

/**
 * 
 */

/**/

/*---------------------------------------*/
//Задание 4
//Які стилі написання імен змінних ти знаєш?

//camelCase 
//let = firstName;

// snake_case
// let first_name;

//PascalCase
// let FirstName;
/*---------------------------------------*/
//-----Norma-----
/*---------------------------------------*/
//Задание 1
//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let userName = prompt('Enter your name');
let nameResult = alert('Hello, '+ userName);
/*---------------------------------------*/
//Задание 2
//Запитай рік народження користувача, порахуй його/її вік 
//і виведи результат. Поточний рік вкажи в коді як константу;
let userYearOfBirht = +prompt('Enter year of your birth');
const currentYear = 2021;
let userAge = currentYear - userYearOfBirht;
let ageResult = alert('Your age is ' + userAge + ' years.');
/*---------------------------------------*/
//Задание 3
//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let userSquareLength = +prompt('Enter a length of your square');
const sideCount = 4;
let squarePerimetr = userSquareLength * sideCount;
let perimetrResult = alert('Perimetr of your sqare is ' + squarePerimetr);
/*---------------------------------------*/
//-----Maximum-----
/*---------------------------------------*/
//Задание 1
//Запитай у користувача радіус кола і виведи площу такої окружності.
let userRadius = +prompt('Enter your radius');
let area = Math.PI * Math.pow(userRadius,2);
let areaResult = alert('Your area is ' + area);
/*---------------------------------------*/
//Задание 2
//Запитай у користувача відстань в кілометрах між двома містами і за скільки
//годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let userDistance = +prompt('Enter your distance in kilometres');
let userTime = +prompt('Enter how many hours you have');
let currentSpeed = userDistance / userTime;
let resultUserSpeed = alert('Speed which you need is ' + currentSpeed + ' km/h');
/*---------------------------------------*/
//Задание 3
//Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро.
//Курс валют зберігається в константі.
const euroLatency = 0.881;
let userDollars = +prompt('Enter dollars amount');
let userEuro = userDollars * euroLatency;
let resultEuro = alert(userDollars + ' $ ' + ' = ' + userEuro + ' euro');
/*---------------------------------------*/
