
const app = new Vue({
    el: '#app',
    data: {
        message: 'Home Work 57',
        firstName: 'Oleg',
        lastName: 'Slobodyan',
        city: 'Ivano-Frankivsk',
        birthday: '5.10.1990',
        currentData: new Date(),
        email: 'mailti:slobodyanoleg@gmail.com',
        emailText: 'slobodyanoleg@gmail.com',
        url: 'https://google.com',
        age: null,
    },
    computed: {

        fullName() {
            return `${this.firstName} ${this.lastName}`
        },

    },
    methods: {
        getAge() {

            const date = (this.currentData.getDate() + '.' + (this.currentData.getMonth() + 1) + '.' + this.currentData.getFullYear()).split('.').map(function (item) {
                return parseInt(item, 10)
            });
            const birthday = this.birthday.split('.').map(function (item) {
                return parseInt(item, 10)
            });
            let age = date[2] - birthday[2];
            if (date[1] < birthday[1]) {
                age = age - 1;
            }
            if (date[1] === birthday[1] && date[0] < birthday[0]) {
                age = age - 1;
            }
            this.age = age;
        },
        showCard() {
            this.$refs.info.style.color = 'rgb(37 57 212)';
            this.$refs.info.style.padding = '20px';
            this.$refs.info.style.border = '1px solid #000';
            this.$refs.info.style.display = 'inline-block';
            this.$refs.info.style.marginTop = '20px';
            this.$refs.info.style.fontStyle = 'italic';
        }

    },
});

