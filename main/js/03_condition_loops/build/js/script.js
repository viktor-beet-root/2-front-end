"use strict";

if (2 > 1) console.log('asdfsdfdfs');else console.log('else');

if (2 < 5) {
  console.log('1111111111');
} else {
  console.log('else');
}

var n = 0;

if (n === 1) {} else if (n === 2) {} else if (n === 3) {} else {} //0-6 ночь, 7-11 утро, 12-17 день, 18-23 вечер


if (n > 0 && n < 100 && n % 5) {}

var m = 5;

if (!(n < 0 || n > 59) && !(m < 0 || m > 59)) {} // switch (+prompt()) {
//     case 3:
//         console.log(3);
//         break;
//     case 4:
//     case 5:
//         console.log(5);
//         break;
//     default:
//         console.log('sdfdsf');
// }


var ss = !(prompt() % 2) ? "Even" : "Odd";
console.log(ss); //09:10:01

var ff = h < 10 ? "0" + h : h;