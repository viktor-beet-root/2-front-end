// Minimum

//Задание 2
let name;
let surname;
let firstName;
let lastName;

// let Name;
// let SuRnAmE;
// let first Name;
// let last-Name;
// let 1name;

/*---------------------------------------*/

//Задание 3

//

/**
 * 
 */

/**/

/*---------------------------------------*/
//Задание 4

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
let userName = prompt('Enter your name');
let nameResult = alert('Hello, '+ userName);
/*---------------------------------------*/
//Задание 2
let userYearOfBirht = +prompt('Enter year of your birth');
const currentYear = 2021;
let userAge = currentYear - userYearOfBirht;
let ageResult = alert('Your age is ' + userAge + ' years.');
/*---------------------------------------*/
//Задание 3
let userSquareLength = +prompt('Enter a length of your square');
const sideCount = 4;
let squarePerimetr = userSquareLength * sideCount;
let perimetrResult = alert('Perimetr of your sqare is ' + squarePerimetr);
/*---------------------------------------*/
//-----Maximum-----
/*---------------------------------------*/
//Задание 1
let userRadius = +prompt('Enter your radius');
let area = Math.PI * Math.pow(userRadius,2);
let areaResult = alert('Your area is ' + area);
/*---------------------------------------*/
//Задание 2
let userDistance = +prompt('Enter your distance in kilometres');
let userTime = +prompt('Enter how many hours you have');
let currentSpeed = userDistance / userTime;
let resultUserSpeed = alert('Speed which you need is ' + currentSpeed + ' km/h');
/*---------------------------------------*/
//Задание 3
const euroLatency = 0.881;
let userDollars = +prompt('Enter dollars amount');
let userEuro = userDollars * euroLatency;
let resultEuro = alert(userDollars + ' $ ' + ' = ' + userEuro + ' euro');
/*---------------------------------------*/
