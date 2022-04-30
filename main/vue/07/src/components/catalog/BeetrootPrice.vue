<template>
    <p class="product__price price-box">
        <span class="price-box__price" :class="{ sale: price > specialPrice }">
            {{ price.toLocaleString() }} {{ currencySymbol }}
        </span>
        <span v-if="price > specialPrice" class="price-box__special-price">
            {{ specialPrice.toLocaleString() }} {{ currencySymbol }}
        </span>
    </p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "beetroot-price",
    props: {
        price: Number,
        specialPrice: Number,
    },
    computed: {
        ...mapGetters(["currencySymbol"]),
    },
};
</script>

<style scoped>
.price-box__price {
    display: block;
}
.sale {
    text-decoration: line-through;
}
.price-box__special-price {
    font-weight: 700;
    color: red;
}
</style>
