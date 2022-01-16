/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
(function () {
  // Мінімум
  // Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
  // 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
  // 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
  // 3. Створення списку (не) придбаних продуктів.
  var buyList = [{
    productName: "Milk",
    quantity: 2,
    isBought: false,
    price: 27.30,
    sumPrice: sumPrice
  }, {
    productName: "Egg",
    quantity: 10,
    isBought: false,
    price: 3.60,
    sumPrice: sumPrice
  }];
  buyList[0].sumPrice();

  function sumPrice() {
    return this.sumPrices = this.quantity * this.price;
  }

  console.log(buyList);
})();
/******/ })()
;
//# sourceMappingURL=script.js.map