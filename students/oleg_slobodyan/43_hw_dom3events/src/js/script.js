(function () {
    // 1. Препесиати Фукнцію модального вікна під клас
    class Modal {
        constructor(options) {
            this.modal = document.querySelector(options.modalSelector);
            this.overlay = this.modal.querySelector(options.overlaySelector);
            this.btn = document.querySelector(options.btnSelector);
            this.modalMod = options.modalMod;


            this.overlay.addEventListener('click', this.modalClose.bind(this));

            this.btn.addEventListener('click', this.openBtn.bind(this));

            this.setModalMod();
        }

        setModalMod() {
            if (this.modalMod === false) {
                this.overlay.style.display = 'none';
            }

            else if (this.modalMod === true) {
                this.overlay.style.display = 'flex';
            }
        }

        modalClose(e) {
            if (e.target === e.currentTarget || e.target.classList.contains('close')) {
                e.currentTarget.style.display = 'none';
            }
        }

        openBtn() {
            this.overlay.style.display = 'flex';
        }

    }

    const modal = new Modal({
        modalSelector: '.modal',
        overlaySelector: '.modal__wrapper',
        btnSelector: '.my-first-button',
        modalMod: false,
    }

    );
    // 2. Створити на сторінці світолофор який переключає світло по натиску на кнопку
    const trafficLights = document.body.querySelector('.traffic-lights');
    const trafficLightsItems = trafficLights.querySelectorAll('.traffic-lights__item');
    const turnLightBtn = document.body.querySelector('.traffic-lights-action');

    turnLightBtn.addEventListener('click', changeLight);

    function changeLight(e) {
        trafficLights.dataset.station = +trafficLights.dataset.station + 1;
        if (+trafficLights.dataset.station === 1) {
            trafficLightsItems[0].classList.add('traffic-lights__item_red');

        }
        if (+trafficLights.dataset.station === 2) {
            trafficLightsItems[0].classList.add('traffic-lights__item_red');
            trafficLightsItems[1].classList.add('traffic-lights__item_yellow');
        }
        if (+trafficLights.dataset.station === 3) {
            trafficLightsItems[0].classList.remove('traffic-lights__item_red');
            trafficLightsItems[1].classList.remove('traffic-lights__item_yellow');
            trafficLightsItems[2].classList.add('traffic-lights__item_green');
        }
        if (+trafficLights.dataset.station === 4) {
            setBlame(trafficLightsItems[2]);

        }
        if (+trafficLights.dataset.station === 5) {
            blameOff();
            trafficLights.dataset.station = 1;
            trafficLightsItems[2].classList.remove('traffic-lights__item_green');
            trafficLightsItems[0].classList.add('traffic-lights__item_red');
        }

    }
    let blame;
    function setBlame(elem) {
        return blame = setInterval(function () {
            elem.classList.toggle('traffic-lights__item_green');
        }, 600);
    }
    function blameOff() {
        clearInterval(blame);
    }
    // 3. Створити на сторінці світолофор який переключає світло автоматично
    const trafficLightsAuto = document.body.querySelector('.traffic-lights-auto');
    const trafficLightsAutoItems = trafficLightsAuto.querySelectorAll('.traffic-lights__item');
    setInterval(() => {
        trafficLightsAuto.dataset.station = +trafficLightsAuto.dataset.station + 1;
        if (+trafficLightsAuto.dataset.station === 1) {
            trafficLightsAutoItems[0].classList.add('traffic-lights__item_red');

        }
        if (+trafficLightsAuto.dataset.station === 2) {
            trafficLightsAutoItems[0].classList.add('traffic-lights__item_red');
            trafficLightsAutoItems[1].classList.add('traffic-lights__item_yellow');
        }
        if (+trafficLightsAuto.dataset.station === 3) {
            trafficLightsAutoItems[0].classList.remove('traffic-lights__item_red');
            trafficLightsAutoItems[1].classList.remove('traffic-lights__item_yellow');
            trafficLightsAutoItems[2].classList.add('traffic-lights__item_green');
        }
        if (+trafficLightsAuto.dataset.station === 4) {
            setBlame(trafficLightsAutoItems[2]);

        }
        if (+trafficLightsAuto.dataset.station === 5) {
            blameOff();
            trafficLightsAuto.dataset.station = 1;
            trafficLightsAutoItems[2].classList.remove('traffic-lights__item_green');
            trafficLightsAutoItems[0].classList.add('traffic-lights__item_red');
        }
    }, 3000);

})();
