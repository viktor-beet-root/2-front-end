"use strict";

(function () {
  // Мінімум
  //  Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
  var car = {
    madeIn: "Germany",
    model: "Audi A6",
    year: "2021",
    avaregeSpeed: 90,
    gasTank: 60,
    consumption: 10,
    gas: 40,
    carInfo: carInfo,
    setDriver: setDriver,
    gasStation: gasStation,
    travelTime: travelTime
  }; // 1. Висновок на екран з інформацією про автомобіль.

  function carInfo() {
    return "\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A: ".concat(this.madeIn, "\n\u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, "\n\u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: ").concat(this.year, "\n\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ").concat(this.avaregeSpeed, " \u043A\u043C/\u0433\u043E\u0434\n\u041E\u0431*\u0454\u043C \u0431\u0430\u043A\u0443: ").concat(this.gasTank, " \u043B\n\u0420\u043E\u0437\u0445\u0456\u0434 \u043F\u0430\u043B\u0438\u0432\u0430 \u043D\u0430 100 \u043A\u043C: ").concat(this.consumption, " \u043B");
  }

  console.log(car.carInfo()); // 2. Додавання водія, який має право керувати автомобілем.

  function setDriver(name) {
    return this.driver = name;
  }

  car.setDriver("Roman");
  console.log(car); // 3. Заправка автомобіля.

  function gasStation(l) {
    return this.gas = this.gas + l;
  }

  car.gasStation(15);
  console.log(car); // 4. Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем(ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.

  function travelTime(s, driver) {
    var t = null;
    var res = null;

    if (driver !== this.driver) {
      return "Ви немаєте права керувати даним авто";
    }

    if (s > this.gas * this.consumption) {
      return "Для даної поїздик потрібно дозаправити авто";
    }

    t = s / this.avaregeSpeed;
    res = t + parseInt(t / 4);
    return "\u0414\u043B\u044F \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u0430\u0441\u0442\u0430\u043D\u043D\u0456 ".concat(s, "\u043A\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E ").concat(res.toFixed(1), "\u0433\u043E\u0434");
  }

  var time = car.travelTime(400, "Roman");
  console.log(time); // Норма
  // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:

  var clock = {
    hour: 9,
    minutes: 35,
    seconds: 20,
    getTime: getTime,
    changeSec: changeSec,
    changeMin: changeMin,
    changeHour: changeHour,
    goodClock: goodClock
  }; // 1. Для виведення часу на екран.

  function getTime() {
    var h = this.hour;
    var m = this.minutes;
    var s = this.seconds;

    if (h < 10) {
      h = "0" + h;
    }

    if (m < 10) {
      m = "0" + m;
    }

    if (s < 10) {
      s = "0" + s;
    }

    return "".concat(h, ":").concat(m, ":").concat(s);
  }

  console.log(clock.getTime()); // 2. Зміни часу на передане кількість секунд.

  function changeSec(s) {
    return this.seconds = this.seconds + s;
  }

  clock.changeSec(20);
  console.log(clock); // 3. Зміни часу на передане кількість хвилин.

  function changeMin(m) {
    return this.minutes = this.minutes + m;
  }

  clock.changeMin(15);
  console.log(clock); // 4. Зміни часу на передане кількість годин.

  function changeHour(h) {
    console.log(this);
    return this.hour = this.hour + h;
  }

  clock.changeHour(5);
  console.log(clock); // 5. Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

  function goodClock(gSec) {
    var gMin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var gHour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var min = null;
    var god = null;

    if (this.seconds + gSec < 60) {
      return this.changeSec(gSec);
    } else min = parseInt((gSec + this.seconds) / 60);

    this.minutes = this.minutes + min;
    this.seconds = gSec + this.seconds - min * 60;

    if (this.minutes + gMin < 60) {
      return this.changeMin(gMin);
    } else god = parseInt((gMin + this.minutes) / 60);

    this.hour = this.hour + god;
    this.minutes = gMin + this.minutes - god * 60;

    if (this.hour + gHour < 24) {
      return this.changeHour(gHour);
    } else if (this.hour + gHour === 24) {
      return this.hour = 0;
    } else god = this.hour + gHour - 24;

    this.hour = god;
  }

  clock.goodClock(23, 15, 4);
  console.log(clock);
})();