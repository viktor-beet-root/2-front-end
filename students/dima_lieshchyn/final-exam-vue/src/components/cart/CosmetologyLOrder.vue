<template>
    <div class="order-block">
        <va-button
            style="background-color: #f171ab"
            class="order-block__button mb-3"
            text-color="#fff"
            @click="showModal = !showModal"
        >
            Заказать
        </va-button>
        <va-modal
            v-model="showModal"
            :message="message"
            title="Заказать товар"
            hide-default-actions
        >
            <img
                @click="showModal = !showModal"
                class="icon_exit"
                src="../../assets/icon_exit.png"
                alt="exit"
            />
            <div class="va-table-responsive">
                <p class="va-table__text">
                    Общая стоимость покупки:
                    <span>
                        {{ getTotal }}
                        {{ currencySymbol }}
                    </span>
                </p>
                <table class="va-table va-table--hoverable">
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Кол-во</th>
                            <th>Цена за 1 товар</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in cart" :key="product.id">
                            <td>{{ product.name }}</td>
                            <td style="text-align: center">
                                {{ product.qty }}
                            </td>
                            <td style="text-align: center">
                                {{
                                    product.price > product.specialPrice
                                        ? product.specialPrice
                                        : product.price
                                }}
                                {{ currencySymbol }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form class="form-order" ref="form" @submit.prevent="handleSubmit">
                <label class="form-order__label">Имя</label>
                <input
                    class="form-order__input input-group-text"
                    type="text"
                    name="from_name"
                    v-model="name"
                    placeholder="Ваше имя"
                />
                <span class="error" v-if="msg.name">{{ msg.name }}</span>
                <label class="form-order__label">Номер телефона</label>
                <input
                    class="form-order__input input-group-text"
                    type="text"
                    name="from_phone"
                    v-model="phone"
                    placeholder="+3801234567"
                />
                <span class="error" v-if="msg.phone">{{ msg.phone }}</span>
                <input class="btn btn-primary" type="submit" value="Заказать" />
                <input
                    v-for="product in cart"
                    :key="product.id"
                    class="form-order__value"
                    type="text"
                    name="from_order"
                    :value="`${product.name} - ${product.qty} шт. - ${
                        product.price > product.specialPrice
                            ? product.specialPrice
                            : product.price
                    }`"
                />
                <input
                    class="form-order__value"
                    type="text"
                    name="from_total"
                    :value="getTotal"
                />
            </form>
        </va-modal>
    </div>
</template>
<script>
import emailjs from "emailjs-com";
import { mapGetters } from "vuex";

export default {
    name: "cosmetology-l-order",
    data() {
        return {
            value: "Выбрать",
            name: "",
            phone: "",
            message: "",
            options: [
                "Косметолог с нуля",
                "Мезотерапия лица/тела",
                "Ботулинотерапия",
                "Контурная пластика губ",
            ],
            showModal: false,
            show: false,
            msg: [],
        };
    },
    computed: {
        ...mapGetters(["cart", "currencySymbol"]),
        getTotal() {
            return this.getTotalPrice(this.cart);
        },
        cartToSend() {
            return JSON.stringify(this.cart);
        },
    },
    methods: {
        handleSubmit() {
            this.validateName(this.name);
            this.validatePhone(this.phone);
            if (
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
                    "cosmetology_l_template",
                    this.$refs.form,
                    "nIOnRx7mmATjb0vGn"
                );
            } catch (error) {
                console.log({ error });
            }
            this.name = "";
            this.phone = "";
            this.message = "";
        },
        getTotalPrice(obj) {
            let sum = 0;
            const prices = [];
            obj.forEach((product) => {
                if (product.price > product.specialPrice) {
                    prices.push(product.specialPrice * product.qty);
                } else {
                    prices.push(product.price * product.qty);
                }
            });
            for (let i = 0; i < prices.length; i++) {
                sum = sum + prices[i];
            }

            return sum;
        },
        validPhone(phone) {
            var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return re.test(phone);
        },
        validEmptyName() {
            if (this.name === "") {
                this.nameError = "Введите имя";
                return false;
            } else {
                this.nameError = "";
                return true;
            }
        },
        valideEmptyPhone() {
            if (this.phone !== "") {
                this.phoneError = "";
                return true;
            } else {
                this.phoneError = "Введите номер телефона";
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
    },
};
</script>
<style lang="scss" scoped>
.order-block {
    display: flex;
    justify-content: center;
    &__button {
        border: 1px solid transparent;
        &:hover {
            transition: all 0.5s ease;
            border: 1px solid white;
        }
    }
}
.va-table {
    width: 100%;
    &__text {
        color: rgb(44, 130, 224);
        & span {
            font-weight: bold;
            text-decoration: underline;
        }
    }
}
.va-table-responsive {
    width: 100%;
    overflow: auto;
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
.prev_icon {
    position: absolute;
    top: 0;
    right: 0;
    @media (min-width: 577px) {
        display: none;
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
