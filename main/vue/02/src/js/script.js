import * as Vue from 'vue/dist/vue.esm-browser';

const config = {
    data() {
        return {
            input: '33',
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isTypePass: false,
            type: 's',
            list: ['dasfdas', 'asdfas', 'asdf', 'edgdgfhdf', 'fgnfgh', 'dasfdas', 'asdfas', 'asdf', 'edgdgfhdf', 'fgnfgh'],
            user: {
                name: 'Viktor',
                email: 'test@sdf.com',
                phone: '134213434'
            },
            userList: [
                {
                    firstName: 'Viktor',
                    lastName: "Dehtiarov",
                    userName: 'vik1234',
                    email: 'test@email.com',
                    pass: 'qwerty'
                },
                {
                    firstName: 'Jon',
                    lastName: "Dou",
                    userName: 'jon1234',
                    email: 'testww@email.com',
                    pass: 'qwerty11'
                },
                {
                    firstName: 'Jon',
                    lastName: "Smit",
                    userName: 'jon4321',
                    email: 'test2ww@email.com',
                    pass: 'qwerty211'
                }
            ],
        }
    },
    computed: {
        isFormShow() {
            return this.firstName || this.lastName || this.userName || this.email || this.password || this.confirmPassword;
        },
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        viewEmail() {
            return `mailto:${this.email}`;
        },
        isConfirmed() {
            const confirmed = this.password === this.confirmPassword;

            if (!this.password || !this.confirmPassword) {
                return '';
            }

            return confirmed ? 'Confirmed' : 'Not Confirmed';
        },
        typePass() {
            return !this.isTypePass ? 'password' : 'text';
        }
    },
    watch: {
        firstName(value) {
            console.log(value)
        }
    },
    methods: {
        setInput(e) {
            this.input = e.target.value;
        },
        numerator(index) {
            return (index + 1) < 10 ? '0' + (index + 1) : (index + 1);
        }
    }
}

const app = Vue.createApp(config);
const vm = app.mount('#app');

setTimeout(function () {
    vm.disabled = true
}, 5000);
