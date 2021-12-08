//1.2
const firstName = "Anastasiia";
const secondName = "Hryniv";
const age = 20;
const placeOfBirth = "Ukraine";
// const 1name;
// const second-name;
// const const;
// const moeImya
// const цена;
//1.3
// single line comment
/*
multy-line comment
*/
/**
 * 
 * 
 * **/
//1.4
var number;
let date;
const example = 1;
//2.1
const name = prompt('What is Your Name');
const result = "Hello, " + name;
console.log(result);
const year = 2021;
//2.2
const birthYear = +prompt('Enter Your Birth Year');
console.log(year - birthYear);
//2.3
const squareSide = +prompt('Enter Square Side');
console.log(squareSide * 4);
//3.1
const radius = +prompt('Enter Radius');
console.log(Math.PI * Math.pow(radius, 2));
//3.2
const distance = +prompt('Enter distance between towns in km');
const estimatedTime = +prompt('Enter stimated time in hours');
const speed = distance / estimatedTime;
console.log("You have to move with speed " + speed + " km/hour");
//3.3
const euro = 0.88;
const amountDol = +prompt('Enter your amount of dollars');
console.log(amountDol * euro + " eur");
