const userPrice = +prompt('Введіть суму покупки');
const twoH = 200;
const threeH = 300;
const fiveH = 500;
let priceResult = null;
if (userPrice >= twoH) {
    if (userPrice >= twoH && userPrice < threeH + 1) {
        priceResult = userPrice - (userPrice * 3 / 100);
    }
    if (userPrice >= threeH && userPrice < fiveH + 1) {
        priceResult = userPrice - (userPrice * 5 / 100);
    }
    if (userPrice > fiveH) {
        priceResult = userPrice - (userPrice * 7 / 100);
    }
} else {
    priceResult = userPrice;
}
console.log(priceResult);
