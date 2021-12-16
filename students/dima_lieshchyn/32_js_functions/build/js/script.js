"use strict";

(function () {
  // --Мінімум--
  //1.Напиши функцію, яка приймає час (години, хвилини, секунди)
  // і виводить його на екран у форматі «гг: хв: сс» .
  // Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00.
  var maxMS = 60;
  var maxH = 23;
  var secH = 3600;
  var zero = '0';
  var dots = ':';

  function timeFunc() {
    var hours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var minutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var seconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var timeResult = '';
    if (hours < 0 || minutes < 0 || seconds < 0) return 'Время не может быть отрицательным';else if (hours > maxH) return 'Часы не могут быль больше 23';else if (minutes > maxMS || seconds > maxMS) return 'Значение не может быть больше 60';

    function timeHelp(timeNum) {
      if (timeNum < 10) return zero + timeNum;
      return timeNum;
    }

    timeResult = timeHelp(hours) + dots + timeHelp(minutes) + dots + timeHelp(seconds);
    return timeResult;
  }

  console.log(timeFunc(20)); // ------------------------------------------------------------------------
  // 2.Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах.

  function timeSec() {
    var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var sec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    h = +h;
    min = +min;
    sec = +sec;
    var dayH = 12;
    var secResult = 0;
    if (h < 0 || min < 0 || sec < 0) return 'Время не может быть отрицательным';else if (h > maxH) return 'Часы не могут быль больше 23';else if (min > maxMS || sec > maxMS) return 'Значение не может быть больше 60';
    if (h > dayH) h = h - dayH;
    secResult = h * secH + min * maxMS + sec;
    return secResult;
  }

  console.log(timeSec(14, 3, 4)); // ------------------------------------------------------------------------
  // 3.Напиши функцію, яка приймає кількість секунд, переводить їх у години,
  // хвилини і секунди і повертає у вигляді рядка «гг: хв: сс».

  function timeSeconds(secnds) {
    var timeResult = '';
    secnds = secnds;
    if (secnds < 0) return 'Время не может быть отрицательным';

    if (secnds % secH == 0) {
      return secnds / secH;
    } else {
      timeResult = Math.floor(secnds / secH) + dots;
      secnds = secnds % secH;

      if (secnds % maxMS == 0) {
        timeResult = timeResult + secnds / maxMS;
        return timeResult;
      } else {
        timeResult = Math.floor(secnds / secH) + dots;
        secnds = secnds % secH;
        timeResult = secnds;
      }
    }
  }

  console.log(timeSeconds(3662)); // ------------------------------------------------------------------------
  // --Норма--
  // 1.Напиши функцію, яка рахує різницю між датами.Функція приймає 6 параметрів,
  //  які описують 2 дати, і повертає результат у вигляді рядка «гг: хв: сс».
  //  При виконанні завдання використовуй функції з попередніх 2 - х завдань:
  //  спочатку обидві дати переведи в секунди, дізнайся різницю в секундах, а потім різницю переведи назад в «гг: хв: сс».
  // ------------------------------------------------------------------------
  // --Максимум-- 
  // Напиши функцію, яка приймає час(години, хвилини, секунди), повертає функцію,
  // яка замкнута на ці змінні і керує ними.Якщо функції передати, наприклад, 3660 секунд, час має змінитися на 1 г.та 1 хв.
  // ------------------------------------------------------------------------
})();