import Modal from "./modal-window"
import Lights from "./traffic-lights"

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні
//повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається.
//При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
//Також вікно зачиняється при натисканні на overlya вікна.
const modalWindow = new Modal({
    modal: '.modal',
    overlay: '.modal__wrapper',
    openBtn: '.open',
});

// Створити HTML-сторінку зі світлофором. Світлофор перемикається на наступний колір кожні 2с.
const trafficLight = new Lights({
    trafficLights: '.light',
    btnStart: '.trafic-lights__start',
    btnStop: '.trafic-lights__stop',
});
