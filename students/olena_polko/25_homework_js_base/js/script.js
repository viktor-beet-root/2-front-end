//Мінімум


//Завдання 2
//Правильні:

let name;
let surname;
let firstname;
let secondname;
let fullname;
let $name;
let _name;

//Неправильні:

//let NAME;
//let first-name;
//let full name;
//let 2name;


//Завдання 3
//Спосіб 1 (одностроковий):
//Це коментар
//Спосіб 2 (багатостроковий):
/*
Це багатостроковий
коментар
*/

//Спосіб 3:
/**
 * 
 * 
 */


//Завдання 4
//camelCase
let userProfile;
//PascalCase
let UserProfile;
//snake_case
let user_profile;
//kebab-case
//let user-profile;





//Норма


//Завдання 1
const userName = prompt("Enter your name");
alert("Привіт," + " " + userName + "!");

//Завдання 2
const userBirthYear = prompt("Enter your year of birth");
const currentYear = 2021;
const userAge = currentYear - userBirthYear;
alert("Your age is" + " " + userAge + " " + "years old.");

//Завдання 3
const squareSide = prompt("Enter the side length of your square");
const squarePerimeter = 4 * squareSide;
alert("The perimeter of your square is" + " " + squarePerimeter);




//Максимум
const circleRadius = prompt("Enter the radius of your circle in centimeters");
const circleArea = circleRadius * circleRadius * Math.PI;
alert("The Area of your circle is" + " " + circleArea);
