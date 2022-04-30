<template>
    <div class="total">Total: {{ total }} {{ currencySymbol }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "beetroot-product-total",
    props: {
        prace: Number,
        specialPrice: Number,
        qty: Number,
    },
    computed: {
        ...mapGetters(["currencySymbol"]),
        total() {
            const total =
                this.prace > this.specialPrice
                    ? this.specialPrice * this.qty
                    : this.prace * this.qty;

            return total.toLocaleString();
        },
    },
};
</script>
