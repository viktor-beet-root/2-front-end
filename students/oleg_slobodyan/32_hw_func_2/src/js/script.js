(function () {
    // Мінімум
    // 1. Напиши функцію, яка приймає час (години, хвилини, секунди) і виводить його на екран у форматі «гг: хв: сс» .Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00.
    function dispTime(h, m = 0, s = 0) {
        const hour = checkTime(h) > 23 ? "00" : checkTime(h);
        const min = checkTime(m);
        const sec = checkTime(s);
        const res = hour + ":" + min + ":" + sec
        return res;
    }
    function checkTime(num) {
        if (num >= 0 && num < 10) {
            num = "0" + num;
        } else if (num >= 10 && num < 60) {
            num = num;
        } else num = "00"
        return num
    }
    console.log(dispTime(23, 9, 1));

    // 2. Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах.
    function timeConToSec(h, m, s) {
        return h * 3600 + m * 60 + s;
    }
    console.log(timeConToSec(1, 1, 0));

    // 3. Напиши функцію, яка приймає кількість секунд, переводить їх у години, хвилини і секунди і повертає у вигляді рядка «гг: хв: сс».
    function h(sec) {
        let h = parseInt(sec / 3600);
        h = (h >= 0 && h < 10) ? "0" + h : h;
        return h;
    }
    function m(sec) {
        let m = parseInt((sec - (h(sec) * 3600)) / 60);
        m = (m >= 0 && m < 10) ? "0" + m : m;
        return m;
    }
    function s(sec) {
        let s = sec % ((h(sec) * 3600) + (m(sec) * 60));
        s = (s >= 0 && s < 10) ? "0" + s : s;
        return s;
    }
    function secConToTime(sec) {
        return h(sec) + ":" + m(sec) + ":" + s(sec)
    }
    console.log(secConToTime(3660));

    // Норма
    // Напиши функцію, яка рахує різницю між датами. Функція приймає 6 параметрів, які описують 2 дати, і повертає результат у вигляді рядка «гг: хв: сс». При виконанні завдання використовуй функції з попередніх 2-х завдань: спочатку обидві дати переведи в секунди, дізнайся різницю в секундах, а потім різницю переведи назад в «гг: хв: сс».
    function diffTime(h1, m1, s1, h2, m2, s2) {
        const sec1 = timeConToSec(h1, m1, s1);
        const sec2 = timeConToSec(h2, m2, s2);
        if (sec1 > sec2) {
            return secConToTime(sec1 - sec2);
        } else
            return secConToTime(sec2 - sec1);

    }
    console.log(diffTime(2, 30, 2, 4, 26, 30));

    // Максимум
    // Напиши функцію, яка приймає час (години, хвилини, секунди), повертає функцію, яка замкнута на ці змінні і керує ними. Якщо функції передати, наприклад, 3660 секунд, час має змінитися на 1 г. та 1 хв.
    function incTime(h, m, s) {
        return function (sec) {
            const res = timeConToSec(h, m, s) + sec;
            return secConToTime(res);
        }
    }
    const resM = incTime(1, 20, 15);
    console.log(resM(4666));
})();
