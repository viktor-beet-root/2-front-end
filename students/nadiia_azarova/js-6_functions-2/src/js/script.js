// Мінімум

/* 1. Напиши функцію, яка приймає час (години, хвилини, секунди) і виводить його на екран у форматі «гг: хв: сс» .Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00. */

function addZero(time) {
    (time < 10) ? time = '0' + time: toString(time);
    return time;
    
}

function showCurrentTime(hh, mm = 0, ss = 0) {
    hh = addZero(hh);
    mm = addZero(mm);
    ss = addZero(ss);

    timeStr = hh + ':' + mm + ':' + ss;
    return timeStr;
}

let timeStr = showCurrentTime(4, 35, 5);

console.log(timeStr);

/* 2. Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах. */

function showTimeInSec(timeStr) {
    let hh = timeStr.split(':')[0];
    let mm = timeStr.split(':')[1];
    let ss = timeStr.split(':')[2];

    return +hh * 60 * 60 + +mm * 60 + +ss;
}

let currentTimeInSec = showTimeInSec(timeStr);
console.log(currentTimeInSec);

/* 3. Напиши функцію, яка приймає кількість секунд, переводить їх у години, хвилини і секунди і повертає у вигляді рядка «гг: хв: сс». */

function formatTimeBack(seconds) {
    let hh = Math.floor(seconds / 3600);
    let mm = Math.floor(seconds % 3600 / 60);
    let ss = seconds % 60;

    return addZero(hh) + ':' + addZero(mm) + ':' + addZero(ss);
}

let reformattedTime = formatTimeBack(currentTimeInSec);
console.log(reformattedTime);

// Норма

/* Напиши функцію, яка рахує різницю між датами. Функція приймає 6 параметрів, які описують 2 дати, і повертає результат у вигляді рядка «гг: хв: сс». При виконанні завдання використовуй функції з попередніх 2-х завдань: спочатку обидві дати переведи в секунди, дізнайся різницю в секундах, а потім різницю переведи назад в «гг: хв: сс». */

function getDateDifference(h1, m1, s1, h2, m2, s2) {
    const firstTime = showCurrentTime(h1, m1, s1);
    const firstTimeSec = showTimeInSec(firstTime);
    const secondTime = showCurrentTime(h2, m2, s2);
    const secondTimeSec = showTimeInSec(secondTime);

    let differenceSec;
    if (firstTimeSec > secondTimeSec) {
        differenceSec = +firstTimeSec - +secondTimeSec;
    } else {
        differenceSec = +secondTimeSec - firstTimeSec;
    }

    return formatTimeBack(differenceSec);
}

let timeDifferece = getDateDifference(8,32,5,19,15);
console.log(timeDifferece);

// Максимум

/* Напиши функцію, яка приймає час (години, хвилини, секунди), повертає функцію, яка замкнута на ці змінні і керує ними. Якщо функції передати, наприклад, 3660 секунд, час має змінитися на 1 г. та 1 хв. */

function changeTime(hh, mm, ss) {
    let newH = hh;
    let newM = mm;
    let newS = ss;

    return function(sec) {

        let timeStr = formatTimeBack(sec);

        newH = (+newH + +timeStr.split(':')[0]) % 24;
        newM = (+newM + +timeStr.split(':')[1]) % 60;
        newS = (+newS + +timeStr.split(':')[2]) % 60;

        return showCurrentTime(newH, newM, newS);
    }
}

let changedTime = changeTime(24, 12, 12);
console.log(changedTime(3661));
