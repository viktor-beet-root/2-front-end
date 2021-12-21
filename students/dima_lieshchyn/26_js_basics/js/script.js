// Minimum

//Задание 2 
//Тобі потрібно зберігати ім’я та прізвище в змінній,
//придумай до 4-х імен змінних, що потрібні тобі для даної задачі.
//Також напиши до 5 неправильних імен 
//(неправильні імена повинні бути закоментовані);

// Правильні
//const userName;
// const userSurname;
// const FirstName;
// const last_name;

// Неправильні
// const Name - в переменных использование некоторых слов может вызвать ошибку,
//так как их заведомо использует браузер.

// const First+name; - использование математических операторов запрещаеться.
// const last-Name;

// const SuRnAmE; - не рациональное использование Camel Case.
//Необходимо логически использовать верхний регистр. 
//Чаще всего верхний регистр используют для заглавной
//буквы следущего слова в названиее переменной.

// const first Name; - пробелов в переменной не должно быть.

// const 1name; - переменная не должна начинаться с цифр.

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

/*---------------------------------------*/
//-----Norma-----
/*---------------------------------------*/
//Задание 1
//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const userName = prompt('Enter your name');
const userResult = ('Hello, ' + userName);
console.log(userResult);
/*---------------------------------------*/
//Задание 2
//Запитай рік народження користувача, порахуй його/її вік 
//і виведи результат. Поточний рік вкажи в коді як константу;
const userYearOfBirht = +prompt('Enter year of your birth');
const currentYear = 2021;
const userAge = 'Your age is ' + (currentYear - userYearOfBirht) + ' years.';
console.log(userAge);
/*---------------------------------------*/
//Задание 3
//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const userSquareLength = +prompt('Enter a length of your square');
const sideCount = 4;
const squarePerimetr = 'Perimetr of your sqare is ' + (userSquareLength * sideCount);
console.log(squarePerimetr);
/*---------------------------------------*/
//-----Maximum-----
/*---------------------------------------*/
//Задание 1
//Запитай у користувача радіус кола і виведи площу такої окружності.
const userRadius = +prompt('Enter your radius');
const area = 'Your area is ' + (Math.PI * Math.pow(userRadius, 2));
console.log(area);
/*---------------------------------------*/
//Задание 2
//Запитай у користувача відстань в кілометрах між двома містами і за скільки
//годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const userDistance = +prompt('Enter your distance in kilometres');
const userTime = +prompt('Enter how many hours you have');
const currentSpeed = 'Speed which you need is ' + (userDistance / userTime) + ' km/h';
console.log(currentSpeed);
/*---------------------------------------*/
//Задание 3
//Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро.
//Курс валют зберігається в константі.
const euroLatency = 0.881;
const userDollars = +prompt('Enter dollars amount');
const userEuroResult = userDollars + ' $ ' + ' = ' + (userDollars * euroLatency) + ' €';
console.log(userEuroResult);
/*---------------------------------------*/
