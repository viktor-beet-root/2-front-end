<template>
    <div class="order-block">
        <va-button
            class="order-block__button"
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
                    <p>
                        Общая стоимость покупки: {{ getTotal }}
                        {{ currencySymbol }}
                    </p>
                    <table class="va-table va-table--hoverable">
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Колличество</th>
                                <th>Цена</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in cart" :key="product.id">
                                <td>{{ product.name }}</td>
                                <td>{{ product.qty }}</td>
                                <td>{{ product.price }}</td>
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
    &__button {
        position: absolute;
        top: 85px;
        left: 200px;
    }
}
.va-table-responsive {
    width: 100%;
    overflow: auto;
}
</style>
