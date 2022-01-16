(function () {
    // Мінімум

    //  Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
    const car = {
        madeIn: "Germany",
        model: "Audi A6",
        year: "2021",
        avaregeSpeed: 90,
        gasTank: 60,
        consumption: 10,
        gas: 40,
        carInfo,
        setDriver,
        gasStation,
        travelTime,
    }
    // 1. Висновок на екран з інформацією про автомобіль.
    function carInfo() {
        return `Виробник: ${car.madeIn}\nМодель: ${car.model}\nРік випуску: ${car.year}\nСередня швидкість: ${car.avaregeSpeed} км/год\nОб*єм баку: ${car.gasTank} л\nРозхід палива на 100 км: ${car.consumption} л`
    }
    console.log(carInfo());
    // 2. Додавання водія, який має право керувати автомобілем.
    function setDriver(name) {
        return car.driver = name
    }
    car.setDriver("Roman");
    console.log(car);
    // 3. Заправка автомобіля.
    function gasStation(l) {
        return this.gas = this.gas + l
    }
    car.gasStation(15);
    console.log(car);
    // 4. Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем(ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
    function travelTime(s, driver) {
        let t = null;
        let res = null;
        if (driver !== this.driver) {
            return "Ви немаєте права керувати даним авто"
        }
        if (s > this.gas * this.consumption) {
            return "Для даної поїздик потрібно дозаправити авто"
        }
        t = s / this.avaregeSpeed;
        res = t + parseInt(t / 4);
        return `Для подолання відастанні ${s}км потрібно ${res.toFixed(1)}год`;

    }
    const time = car.travelTime(400, "Roman")
    console.log(time);

    // Норма

    // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    const clock = {
        hour: 9,
        minutes: 35,
        seconds: 20,
        getTime,
        changeSec,
        changeMin,
        changeHour,
        goodClock

    }
    // 1. Для виведення часу на екран.
    function getTime() {
        let h = this.hour;
        let m = this.minutes;
        let s = this.seconds;
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        return `1.Годинник показує ${h}:${m}:${s}`
    }
    console.log(clock.getTime());
    // 2. Зміни часу на передане кількість секунд.
    function changeSec(s) {
        return clock.seconds = clock.seconds + s;
    }
    clock.changeSec(20);
    console.log(clock);
    // 3. Зміни часу на передане кількість хвилин.
    function changeMin(m) {
        return clock.minutes = clock.minutes + m;
    }
    clock.changeMin(15);
    console.log(clock);
    // 4. Зміни часу на передане кількість годин.
    function changeHour(h) {
        return clock.hour = clock.hour + h;
    }
    clock.changeHour(5);
    console.log(clock);
    // 5. Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
    function goodClock(gSec, gMin = 0, gHour = 0) {
        let min = null;
        let god = null;
        if (this.seconds + gSec < 60) {
            return changeSec(gSec);
        } else min = parseInt((gSec + this.seconds) / 60);
        this.minutes = this.minutes + min;
        this.seconds = ((gSec + this.seconds) - min * 60);

        if (this.minutes + gMin < 60) {
            return changeMin(gMin);
        } else god = parseInt((gMin + this.minutes) / 60);
        this.hour = this.hour + god;
        this.minutes = ((gMin + this.minutes) - god * 60);

        if (this.hour + gHour < 24) {
            return changeHour(gHour);
        } else if ((this.hour + gHour === 24)) {
            return this.hour = 0;
        } else god = this.hour + gHour - 24;
        this.hour = god;
    }
    clock.goodClock(23, 15, 4);
    console.log(clock);
})();


