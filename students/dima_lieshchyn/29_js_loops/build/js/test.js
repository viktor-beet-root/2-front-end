"use strict";

var userPrice = +prompt('Введіть суму покупки');
var twoH = 200;
var threeH = 300;
var fiveH = 500;
var priceResult = null;

if (userPrice >= twoH) {
  if (userPrice >= twoH && userPrice < threeH + 1) {
    priceResult = userPrice - userPrice * 3 / 100;
  }

  if (userPrice >= threeH && userPrice < fiveH + 1) {
    priceResult = userPrice - userPrice * 5 / 100;
  }

  if (userPrice > fiveH) {
    priceResult = userPrice - userPrice * 7 / 100;
  }
} else {
  priceResult = userPrice;
}

console.log(priceResult);