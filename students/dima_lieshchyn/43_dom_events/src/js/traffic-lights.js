class Lights {
    constructor(options) {
        this.trafficLights = document.querySelectorAll(options.trafficLights);
        this.btnStart = document.querySelector(options.btnStart);
        this.btnStop = document.querySelector(options.btnStop);
        this.timer = 0;
        this.counter = 0;


        this.btnStart.addEventListener('click', this.startLight);
        this.btnStop.addEventListener('click', this.stopLight);
    }

    startLight = () => {
        this.btnStart.disabled = true;
        this.btnStop.disabled = false;
        let currentLight = this.trafficLights[(this.counter++) % 3];

        this.trafficLights.forEach(e => e.classList[e === currentLight ? 'add' : 'remove'](e.dataset.light));

        this.timer = setTimeout(this.startLight, 2000);
    }
    stopLight = () => {
        clearTimeout(this.timer);

        this.trafficLights.forEach(elem => elem.classList.remove(elem.dataset.light));

        this.btnStart.disabled = false;
        this.btnStop.disabled = true;
    }
}

export default Lights;
