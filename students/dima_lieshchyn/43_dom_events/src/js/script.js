import Modal from "./modal-window"
import Lights from "./traffic-lights"

const modalWindow = new Modal({
    modal: '.modal',
    overlay: '.modal__wrapper',
    openBtn: '.open',
});

const trafficLight = new Lights({
    trafficLights: '.light',
    btnStart: '.trafic-lights__start',
    btnStop: '.trafic-lights__stop',
});
