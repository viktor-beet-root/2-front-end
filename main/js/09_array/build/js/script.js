"use strict";

var a = [1, 2, 3, 4, 5, 0, 6, 0, 7, 8, 9]; // for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     if (a[i] === 5) break;
// }
// for (const item of a) {
//     console.log(item);
// }
// a.forEach(function (item, index, arr) {
//     console.log(item, index, arr)
// });

[1, 2];
['0:1', '1:2'];
var b = a.slice();
b.push(123); // console.log(b, a, a.concat(b, [125, 487]));
// console.log(a.indexOf(1));

var v = [5, 7, 89, 67, 8, 97, 8, 8, 9, 78, 9, 7, 8, 9, 7, 89, 7, 89, 7, 89, 78, 9];
var index,
    i = 0; // while (true) {
//     index = a.indexOf(2, 0);
//     console.log(i++, index)
//     if (index === -1) break;
// } 

console.log(v.slice().sort(function (a, b) {
  return a - b;
}), v);