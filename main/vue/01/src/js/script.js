import * as Vue from 'vue/dist/vue.esm-browser';

const config = {
    data() {
        return {
            message: 'Hello World',
            firstName: 'Viktor',
            lastName: 'Dehtiarov',
            age: 42,
            url: 'https://google.com',
            disabled: false
        }
    },
    computed: {
        textBtn() {
            return this.disabled ? "+" : "-";
        },
        userInfo() {
            console.log(2222)
            return `
            <b>User Name:</b> 
            ${this.firstName}`;
        }
    },
    methods: {
        getUserInfo() {
            console.log(1111)
            return `
            <b>User Name:</b> 
            ${this.firstName}`;
        },
        setAge(number, e) {
            console.log(number, e)
            this.age = this.age + number;
        },
        setLog() {
            console.log(this.age);
        },
        setGo(e) {
            console.log()
        },
        enter() {
            this.age++;
        },
        setColor() {
            let color = '';

            if (!this.$refs.title.style.color) {
                color = 'red';
            }

            this.$refs.title.style.color = color;
        }
    }
}

const app = Vue.createApp(config);
const vm = app.mount('#app');

setTimeout(function () {
    vm.disabled = true
}, 5000);
