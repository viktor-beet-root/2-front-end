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
            <va-form
                tag="form"
                @submit.prevent="handleSubmit"
                style="width: 300px"
            >
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
                <va-input class="mb-4" label="Ваше имя" v-model="name" />
                <va-input
                    class="mb-4"
                    label="Номер телефона"
                    v-model="phone"
                    :rules="[
                        (value) =>
                            (value && value.length > 0) ||
                            'Поле не должно быть пустым',
                    ]"
                />
                <va-button @click="show = !show" type="submit" class="mt-2"
                    >Заказать</va-button
                >
            </va-form>
        </va-modal>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: "cosmetology-l-order",
    data() {
        return {
            value: "Выбрать",
            name: "",
            phone: "",
            options: [
                "Косметолог с нуля",
                "Мезотерапия лица/тела",
                "Ботулинотерапия",
                "Контурная пластика губ",
            ],
            showModal: false,
            message: "",
            show: false,
        };
    },
    computed: {
        ...mapGetters(["cart", "currencySymbol"]),
        getTotal() {
            return this.getTotalPrice(this.cart);
        },
    },
    methods: {
        handleSubmit() {
            alert("-- form submit --");
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
    },
};
</script>
<style lang="scss" scoped>
.order-block {
    display: flex;
    justify-content: center;
    &__button {
        /* position: fixed;
        top: 85px;
        left: 200px; */

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
</style>
