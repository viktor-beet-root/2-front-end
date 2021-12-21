"use strict";

var numFigure = +prompt("Введите число");
var tempSpace = "*";
var tempSymbol = "#";
var temp = "";
var result = "";

for (var i = 0; i < numFigure; i++) {
  temp = temp + tempSymbol;
  result = result + '\n' + temp;
} // console.log(result);


var temp1 = "";
var temp2 = numFigure;
var temp3 = numFigure;

for (var k = numFigure; k > 0; k--) {
  for (var l = temp2; l > 0; l--) {
    temp1 = temp1 + tempSpace;
  }

  for (var _i = temp3; _i >= 0; _i++) {
    temp1 = temp1 + tempSymbol; // result = result + '\n' + temp;
  }

  temp1 = temp1 + '\n';
  temp2--;
  temp3++;
}

console.log(temp1);