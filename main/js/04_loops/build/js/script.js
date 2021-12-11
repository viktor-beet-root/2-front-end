"use strict";

// const num = +prompt();
// let i = num;
// let r = '';
// console.log(num, i);
// while (num > i++) {
//     r = r + '#';
//     if (i !== num) {
//         r = r + '-';
//     }
//     console.log('i:' + i, 'num:' + num, r);
//}
// console.log(r);
// 543210
// 43210
// 3210
// 210
// 10
// 0
// "#-#-#"
var z = 50; // while (z > 50) {
//     if (!(z-- % 2) && z !== 0) continue;
//     console.log(z);
//     if (z < 0) {
//         break;
//     }
// }
// 2 + 2 * 2
// let d = '';
// do {
//     d = 'ee';
//     if (z-- < 0) {
//         break;
//     }
//     // if (r !== 6) l = confirm();
// } while (d && l);
// //console.log();
// const ttt = "sdfsdfsdfsdfsdfsdfsdf"; // => "sDfSdFsDfSdFsDfSdFsDf"
// let eee = '';
// for (let i = 0; i < ttt.length; i++) {
//     if (i % 2 !== 0) {
//         eee = eee + ttt[i].toLocaleUpperCase();
//         continue;
//     }
//     eee = eee + ttt[i];
//     console.log(ttt[i].toLocaleUpperCase(), i);
//     if (z-- < 0) break;
// }
// console.log(eee);

var ggg = +prompt();
var res = '';

qwer: for (var i = 1; i <= ggg; i++) {
  for (var y = 1; y <= ggg; y++) {
    res = res + i + '.' + y + '\n';
    if (y === 1) break qwer;
  }
}

console.log(res); // #
// ##
// ###
// ####
// #####
//     #
//    ##
//   ###
//  ####
// #####
//     #   #
//    ##   ##
//   ###   ###
//  ####   ####
// #####   #####