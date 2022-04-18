import * as Vue from 'vue/dist/vue.esm-browser';

const config = {
    data() {
        return {
            isActive: true,
            isTwo: true,
            classP: ['active', 'test'],
            textColor: 'Choice',
            addClassData: '',
            valueSelect: '',
            colors: ['red', 'black', 'yellow', 'orange'],
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isTypePass: false,
            isValidate: false,
            isShowUserError: false,
            userList: [
                {
                    id: 1,
                    firstName: 'Viktor',
                    lastName: "Dehtiarov",
                    userName: 'vik1234',
                    email: 'test@email.com',
                    pass: 'qwerty'
                },
                {
                    id: 2,
                    firstName: 'Jon',
                    lastName: "Dou",
                    userName: 'jon1234',
                    email: 'testww@email.com',
                    pass: 'qwerty11'
                },
                {
                    id: 3,
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
        hasActive() {
            return this.firstName.length && this.lastName.length;
        },
        viewEmail() {
            return `mailto:${this.email}`;
        },
        isConfirmed() {
            return this.password === this.confirmPassword;
        },
    },
    watch: {
        firstName(value) {
            console.log(value)
        }
    },
    methods: {
        addClass() {
            //const elem = this.$refs.addClass;
            //const newValue = elem.value;

            this.classP.push(this.addClassData);
            this.addClassData = '';
            //elem.value = '';
        },
        validateForm() {
            return !!(this.firstName.length && this.lastName.length && this.userName.length && this.email.length && this.password.length);
        },
        addUser() {
            this.isValidate = true;

            if (this.isConfirmed && this.validateForm() && !this.isUnikUserName(this.userName)) {

                this.userList.push({
                    id: this.getUserId(),
                    firstName: this.firstName,
                    lastName: this.lastName,
                    userName: this.userName,
                    email: this.email,
                    pass: this.password
                });

                this.clearForm();
            }
        },
        getUserId() {
            return this.userList.length ? this.userList[this.userList.length - 1].id + 1 : 1;
        },
        clearForm() {
            this.firstName = '';
            this.lastName = '';
            this.userName = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
            this.isValidate = false;
            this.isShowUserError = false;
        },
        isUnikUserName(userName) {
            const isUser = this.userList.find(user => user.userName === userName);

            if (isUser) {
                this.isShowUserError = true;
            }

            return isUser;
        },
        removeUser(index) {
            this.userList.splice(index, 1);
        }
    },
    beforeCreate() {
        //alert('beforeCreate')
    },
    mounted() {

    }

}

const app = Vue.createApp(config);
const vm = app.mount('#app');

setTimeout(function () {
    vm.disabled = true
}, 5000);
