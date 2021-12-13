"use strict";

(function () {
  //if (confirm()) {
  fuc('Viktor'); //}

  function fuc(userName) {
    var znak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '!';
    var d = arguments.length > 2 ? arguments[2] : undefined;
    //znak = znak ?? '!';
    //znak = znak || '!';
    console.log('Hello ' + userName + znak);
  }

  fuc('Viktor', '');
  /**
   * Sum a numebr
   * 
   * @param {number} a 
   * @param {number} b 
   * @return {number}
   */

  function sum() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    //if (typeof a !== 'number') return;
    a = +a;
    b = +b;
    return a + b;
  }

  function miniCalc() {
    var num1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var znak = arguments.length > 1 ? arguments[1] : undefined;
    var num2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    num1 = +num1;
    num2 = +num2;

    if (!znak) {
      console.error("Нет знака");
      return NaN;
    }

    switch (znak) {
      case '+':
        return sum(num1, num2);
    }
  }

  console.log(console.log(0));
  console.log(sum());
  console.log(sum('1'));
  console.log(sum(1, 2));
  console.log(sum(2, 5)); // fuc(
  //     prompt('sdf'),
  //     prompt('sdfdsf'),
  //     prompt('sdf')
  // );

  var d = sum(5, 10);
  console.log(d);

  function a(a, b) {
    for (var _len = arguments.length, othe = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      othe[_key - 2] = arguments[_key];
    }

    console.log(othe);
    baz(sum(4, 4));

    function s() {}
  } //a(1, 2, 3, 4, 5);


  var baz = function baz(a) {
    console.log(a);

    function ee() {}
  };

  a();

  var sum1 = function sum1(a, b) {
    return a + b;
  };

  var sum2 = function sum2(a, b) {
    return a + b;
  };

  var sum3 = function sum3(b) {
    return b * b;
  };

  console.log(sum3(2));

  var sum4 = function sum4() {
    return 50;
  };
})();

(function () {
  var f = 'f';
})();

(function () {
  var f = 'f';
})();

console.log(Math.pow(2, 2));