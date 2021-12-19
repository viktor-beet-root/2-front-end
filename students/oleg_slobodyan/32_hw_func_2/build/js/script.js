"use strict";

(function () {
  // Мінімум
  // 1. Напиши функцію, яка приймає час (години, хвилини, секунди) і виводить його на екран у форматі «гг: хв: сс» .Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00.
  function dispTime(h, m, s) {
    var _m, _s;

    m = (_m = m) !== null && _m !== void 0 ? _m : 0;
    s = (_s = s) !== null && _s !== void 0 ? _s : 0;

    if (h >= 0 && h < 10) {
      h = "0" + h;
    } else if (h >= 10 && h <= 24) {
      h = h;
    } else h = "Error";

    if (m >= 0 && m < 10) {
      m = "0" + m;
    } else if (m >= 10 && m <= 60) {
      m = m;
    } else m = "Error";

    if (s >= 0 && s < 10) {
      s = "0" + s;
    } else if (s >= 10 && s <= 60) {
      s = s;
    } else s = "Error";

    return h + ":" + m + ":" + s;
  }

  console.log(dispTime(24, 9)); // 2. Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах.

  function timeConToSec(h, m, s) {
    return h * 3600 + m * 60 + s;
  }

  console.log(timeConToSec(1, 1, 0)); // 3. Напиши функцію, яка приймає кількість секунд, переводить їх у години, хвилини і секунди і повертає у вигляді рядка «гг: хв: сс».

  function h(sec) {
    var h = parseInt(sec / 3600);

    if (h >= 0 && h < 10) {
      return "0" + h;
    }

    return h;
  }

  function m(sec) {
    var m = parseInt((sec - h(sec) * 3600) / 60);

    if (m >= 0 && m < 10) {
      return "0" + m;
    }

    return m;
  }

  function s(sec) {
    var s = sec - h(sec) * 3600 - m(sec) * 60;

    if (s >= 0 && s < 10) {
      return "0" + s;
    }

    return s;
  }

  function secConToTime(sec) {
    return h(sec) + ":" + m(sec) + ":" + s(sec);
  }

  console.log(secConToTime(3609)); // Норма
  // Напиши функцію, яка рахує різницю між датами. Функція приймає 6 параметрів, які описують 2 дати, і повертає результат у вигляді рядка «гг: хв: сс». При виконанні завдання використовуй функції з попередніх 2-х завдань: спочатку обидві дати переведи в секунди, дізнайся різницю в секундах, а потім різницю переведи назад в «гг: хв: сс».

  function diffTime(h1, m1, s1, h2, m2, s2) {
    var sec1 = timeConToSec(h1, m1, s1);
    var sec2 = timeConToSec(h2, m2, s2);

    if (sec1 > sec2) {
      return secConToTime(sec1 - sec2);
    } else return secConToTime(sec2 - sec1);
  }

  console.log(diffTime(2, 30, 2, 4, 26, 30)); // Максимум
  // Напиши функцію, яка приймає час (години, хвилини, секунди), повертає функцію, яка замкнута на ці змінні і керує ними. Якщо функції передати, наприклад, 3660 секунд, час має змінитися на 1 г. та 1 хв.

  function incTime(h, m, s) {
    return function (sec) {
      var res = timeConToSec(h, m, s) + sec;
      return secConToTime(res);
    };
  }

  var resM = incTime(1, 20, 15);
  console.log(resM(4666));
})();