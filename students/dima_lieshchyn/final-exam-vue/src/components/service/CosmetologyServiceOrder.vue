<template>
    <va-button
        class="service_btn"
        icon-right="create"
        text-color="#fff"
        @click="showModal = !showModal"
    >
        Записаться
    </va-button>
    <va-modal
        v-model="showModal"
        :message="message"
        title="Запись на процедуры"
        hide-default-actions
    >
        <img
            @click="showModal = !showModal"
            class="icon_exit"
            src="../../assets/icon_exit.png"
            alt="exit"
        />
        <form class="form-order" ref="formS" @submit.prevent="handleSubmit">
            <div class="input-box">
                <va-select
                    v-model="orderTotal"
                    label="Выбрать"
                    :options="options"
                    multiple
                />
                <span class="error" v-if="msg.order">{{ msg.order }}</span>
            </div>
            <div class="flex">
                <p class="form-order__label">Выбери дни когда тебе удобно</p>
                <va-date-input
                    first-weekday="Monday"
                    :weekday-names="weekdayNames"
                    :month-names="monthNames"
                    mode="multiple"
                    v-model="date"
                />
            </div>
            <label class="form-order__label">Имя</label>
            <input
                class="form-order__input input-group-text"
                type="text"
                name="from_name"
                v-model="name"
            />
            <span class="error" v-if="msg.name">{{ msg.name }}</span>
            <label class="form-order__label">Номер телефона</label>
            <input
                class="form-order__input input-group-text"
                type="text"
                name="from_phone"
                v-model="phone"
            />
            <span class="error" v-if="msg.phone">{{ msg.phone }}</span>
            <input class="btn btn-primary" type="submit" value="Заказать" />

            <input
                v-model="getTotalOrder"
                class="form-order__value"
                type="text"
                name="from_order"
            />
            <input
                v-model="getDate"
                class="form-order__value"
                type="text"
                name="from_days"
            />
        </form>
    </va-modal>
</template>
<script>
import emailjs from "emailjs-com";

const datePlusDay = (date, days) => {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
};
const nextWeek = datePlusDay(new Date(), 7);
export default {
    name: "cosmetology-l-service-order",
    props: {
        options: Array,
    },
    data() {
        return {
            orderTotal: [],
            name: "",
            phone: "",
            showModal: false,
            message: "",
            show: false,
            date: [new Date(), nextWeek],
            monthNames: [
                "Янв",
                "Фев",
                "Март",
                "Апр",
                "Май",
                "Июнь",
                "Июль",
                "Авг",
                "Сент",
                "Окт",
                "Ноябрь",
                "Дек",
            ],
            weekdayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            msg: [],
        };
    },
    computed: {
        getTotalOrder() {
            return this.orderTotal.join();
        },
        getDate() {
            return this.dateArray(this.date);
        },
    },
    methods: {
        dateTransform(date) {
            return date.toLocaleString().slice(0, 10);
        },
        dateArray(arr) {
            return arr.map((item) => this.dateTransform(item));
        },
        handleSubmit() {
            this.validateOrder(this.orderTotal);
            this.validateName(this.name);
            this.validatePhone(this.phone);
            if (
                this.getTotalOrder !== "" &&
                this.validEmptyName &&
                this.valideEmptyPhone &&
                this.validPhone(this.phone)
            ) {
                this.sendEmail();
                this.showModal = !this.showModal;
            }
        },
        sendEmail() {
            try {
                emailjs.sendForm(
                    "cosmetology_l",
                    "cosmetology_l_template_s",
                    this.$refs.formS,
                    "nIOnRx7mmATjb0vGn"
                );
            } catch (error) {
                console.log({ error });
            }
            this.name = "";
            this.phone = "";
        },
        validPhone(phone) {
            var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return re.test(phone);
        },
        validEmptyName() {
            if (this.name === "") {
                return false;
            } else {
                return true;
            }
        },
        valideEmptyPhone() {
            if (this.phone !== "") {
                return true;
            } else {
                return false;
            }
        },
        validatePhone(value) {
            if (/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)) {
                this.msg["phone"] = "";
            } else if (value === "") {
                this.msg["phone"] = "Введите номер";
            } else {
                this.msg["phone"] = "Неверный номер";
            }
        },
        validateName(value) {
            if (
                /(-?([А-Я].\s)?([А-Я][а-я]+)\s?)+([А-Я]'([А-Я][а-я]+))?/.test(
                    value
                )
            ) {
                this.msg["name"] = "";
            } else if (value === "") {
                this.msg["name"] = "Введите имя";
            } else {
                this.msg["name"] = "Напишите имя правильно";
            }
        },
        validateOrder(value) {
            if (value.length) {
                this.msg["order"] = "";
            } else {
                this.msg["order"] = "Выберите услуги";
            }
        },
    },
    watch: {
        name(value) {
            this.name = value;
            this.validateName(value);
        },
        phone(value) {
            this.phone = value;
            this.validatePhone(value);
        },
        orderTotal(value) {
            this.orderTotal = value;
            this.validateOrder(value);
        },
    },
};
</script>
<style lang="scss" scoped>
.service_btn {
    position: absolute;
    z-index: 40;
    top: 65px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
.input-box {
    margin-bottom: 20px;
}
input {
    height: 50px;
}
.form-order {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__label {
        font-size: 12px;
    }

    &__input {
        border-radius: 4px;
    }

    &__value {
        display: none;
        visibility: hidden;
    }
    .btn {
        margin-top: 10px;
    }
}
.error {
    font-size: 10px;
    color: rosybrown;
}
.icon_exit {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 5px;
    cursor: pointer;
    @media (min-width: 577px) {
        display: none;
    }
}
</style>
