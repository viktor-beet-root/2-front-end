"use strict";

// Мінімум

/* 1. Напиши функцію, яка приймає час (години, хвилини, секунди) і виводить його на екран у форматі «гг: хв: сс» .Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00. */
function addZero(time) {
  time < 10 ? time = '0' + time : toString(time);
  return time;
}

function showCurrentTime(hh) {
  var mm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ss = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  hh = addZero(hh);
  mm = addZero(mm);
  ss = addZero(ss);
  timeStr = hh + ':' + mm + ':' + ss;
  return timeStr;
}

var timeStr = showCurrentTime(4, 35, 5);
console.log(timeStr);
/* 2. Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах. */

function showTimeInSec(timeStr) {
  var hh = timeStr.split(':')[0];
  var mm = timeStr.split(':')[1];
  var ss = timeStr.split(':')[2];
  return +hh * 60 * 60 + +mm * 60 + +ss;
}

var currentTimeInSec = showTimeInSec(timeStr);
console.log(currentTimeInSec);
/* 3. Напиши функцію, яка приймає кількість секунд, переводить їх у години, хвилини і секунди і повертає у вигляді рядка «гг: хв: сс». */

function formatTimeBack(seconds) {
  var hh = Math.floor(seconds / 3600);
  var mm = Math.floor(seconds % 3600 / 60);
  var ss = seconds % 60;
  return addZero(hh) + ':' + addZero(mm) + ':' + addZero(ss);
}

var reformattedTime = formatTimeBack(currentTimeInSec);
console.log(reformattedTime); // Норма

/* Напиши функцію, яка рахує різницю між датами. Функція приймає 6 параметрів, які описують 2 дати, і повертає результат у вигляді рядка «гг: хв: сс». При виконанні завдання використовуй функції з попередніх 2-х завдань: спочатку обидві дати переведи в секунди, дізнайся різницю в секундах, а потім різницю переведи назад в «гг: хв: сс». */

function getDateDifference(h1, m1, s1, h2, m2, s2) {
  var firstTime = showCurrentTime(h1, m1, s1);
  var firstTimeSec = showTimeInSec(firstTime);
  var secondTime = showCurrentTime(h2, m2, s2);
  var secondTimeSec = showTimeInSec(secondTime);
  var differenceSec;

  if (firstTimeSec > secondTimeSec) {
    differenceSec = +firstTimeSec - +secondTimeSec;
  } else {
    differenceSec = +secondTimeSec - firstTimeSec;
  }

  return formatTimeBack(differenceSec);
}

var timeDifferece = getDateDifference(8, 32, 5, 19, 15);
console.log(timeDifferece); // Максимум

/* Напиши функцію, яка приймає час (години, хвилини, секунди), повертає функцію, яка замкнута на ці змінні і керує ними. Якщо функції передати, наприклад, 3660 секунд, час має змінитися на 1 г. та 1 хв. */

function changeTime(hh, mm, ss) {
  var newH = hh;
  var newM = mm;
  var newS = ss;
  return function (sec) {
    var timeStr = formatTimeBack(sec);
    newH = (+newH + +timeStr.split(':')[0]) % 24;
    newM = (+newM + +timeStr.split(':')[1]) % 60;
    newS = (+newS + +timeStr.split(':')[2]) % 60;
    return showCurrentTime(newH, newM, newS);
  };
}

var changedTime = changeTime(24, 12, 12);
console.log(changedTime(3661));