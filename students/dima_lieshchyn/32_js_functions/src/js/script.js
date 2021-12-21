(function () {
    // ------------------------------------------------------------------------
    //Help starter-pack
    function timeHelp(timeNum) {
        const zero = '0';
        return (timeNum < 10) ? zero + timeNum : timeNum;

    }
    // ------------------------------------------------------------------------
    // --Мінімум--
    //1.Напиши функцію, яка приймає час (години, хвилини, секунди)
    // і виводить його на екран у форматі «гг: хв: сс» .
    // Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00.

    function timeFunc(hours = 0, minutes = 0, seconds = 0) {
        let timeResult = '';
        const dots = ':';
        const maxMS = 60;
        const maxH = 23;
        if (hours < 0 || minutes < 0 || seconds < 0) return console.error('Время не может быть отрицательным');
        else if (hours > maxH) return console.error('Часы не могут быль больше 23');
        else if (minutes > maxMS || seconds > maxMS) return console.error('Значение не может быть больше 60');
        timeResult = timeHelp(hours) + dots + timeHelp(minutes) + dots + timeHelp(seconds);
        return timeResult;
    }
    console.log(timeFunc(20, 2, 2));
    // ------------------------------------------------------------------------
    // 2.Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах.
    function timeSec(h = 0, min = 0, sec = 0) {
        h = +h;
        min = +min;
        sec = +sec;
        const dayH = 12;
        let secResult = 0;
        if (h < 0 || min < 0 || sec < 0) return console.error('Время не может быть отрицательным');
        else if (h > maxH) return console.error('Часы не могут быль больше 23');
        else if (min > maxMS || sec > maxMS) return console.error('Значение не может быть больше 60');
        if (h > dayH) h = h - dayH;
        secResult = h * (secH) + min * maxMS + sec;
        return secResult;
    }
    console.log(timeSec(14, 3, 4));
    // ------------------------------------------------------------------------
    // 3.Напиши функцію, яка приймає кількість секунд, переводить їх у години,
    // хвилини і секунди і повертає у вигляді рядка «гг: хв: сс».
    function timeSeconds(secnds) {
        const secH = 3600;
        const maxMS = 60;
        const dots = ':';
        let timeResult = '';
        secnds = +secnds;
        if (secnds < 0) return console.error('Время не может быть отрицательным');
        if (secnds % secH == 0) {
            return secnds / secH;
        } else {
            timeResult = timeHelp(Math.floor(secnds / secH)) + dots;
            secnds = secnds % secH;
            if (secnds % maxMS == 0) {
                timeResult = timeResult + timeHelp(secnds / maxMS);
                return timeResult;
            } else {
                timeResult = timeResult + timeHelp(Math.floor(secnds / maxMS)) + dots;
                secnds = secnds % maxMS;
                timeResult = timeResult + timeHelp(secnds);
                return timeResult;
            }
        }
    }
    console.log(timeSeconds(7820))
    // ------------------------------------------------------------------------
    // --Норма--
    // 1.Напиши функцію, яка рахує різницю між датами.Функція приймає 6 параметрів,
    //  які описують 2 дати, і повертає результат у вигляді рядка «гг: хв: сс».
    //  При виконанні завдання використовуй функції з попередніх 2 - х завдань:
    //  спочатку обидві дати переведи в секунди, дізнайся різницю в секундах, а потім різницю переведи назад в «гг: хв: сс».
    function differentTime(h1 = 0, m1 = 0, s1 = 0, h2 = 0, m2 = 0, s2 = 0) {
        const firstT = timeSec(h1, m1, s1);
        const secondT = timeSec(h2, m2, s2);
        let differentResult = '';
        if (firstT > secondT) {
            differentResult = timeSeconds(firstT - secondT);
        } else {
            differentResult = timeSeconds(secondT - firstT);
        }
        return differentResult;
    }
    console.log(differentTime(6, 32, 4, 2, 4, 5));
    // ------------------------------------------------------------------------
    // --Максимум-- 
    // Напиши функцію, яка приймає час(години, хвилини, секунди), повертає функцію,
    // яка замкнута на ці змінні і керує ними.Якщо функції передати, наприклад, 3660 секунд, час має змінитися на 1 г.та 1 хв.
    function timeManager(hr, mn, sc) {
        let currentTime = timeSec(hr, mn, sc);
        return function (secs = 0) {
            currentTime = currentTime + secs;
            return timeSeconds(currentTime);
        }
    }
    let addTime = timeManager(2, 3, 4);
    addTime(1)
    addTime(3600)
    addTime(3601)
    console.log(addTime());
    // ------------------------------------------------------------------------
})();
