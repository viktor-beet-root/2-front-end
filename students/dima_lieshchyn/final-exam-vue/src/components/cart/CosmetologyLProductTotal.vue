<template>
    <div class="total">Цена за товар: {{ total }} {{ currencySymbol }}</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "cosmetology-l-product-total",
    emits: ["changeTotal"],
    props: {
        prace: Number,
        specialPrice: Number,
        qty: Number,
    },
    data() {
        return {
            current: 1,
            symbol: this.currencySymbol,
        };
    },
    computed: {
        ...mapGetters([
            "currencySymbol",
            "currencyDollar",
            "currencyEuro",
            "dollar",
            "euro",
        ]),
        total() {
            const total =
                this.prace > this.specialPrice
                    ? this.specialPrice * this.qty
                    : this.prace * this.qty;
            this.$emit("changeTotal", total);
            return total.toLocaleString();
        },
    },
    methods: {
        ...mapActions(["addToTotal"]),
        async dollarChange() {
            this.current = await this.dollar;
            this.symbol = this.currencyDollar;
        },
        async euroChange() {
            this.current = await this.euro;
            this.symbol = this.currencyEuro;
        },
        uahChange() {
            this.current = 1;
            this.symbol = this.currencySymbol;
        },
    },
};
</script>
<style lang="scss" scoped>
.total {
    position: absolute;
    right: 23px;
    bottom: 5px;
    background-color: white;
    border-radius: 4px;
    padding: 0 5px;
    @media (max-width: 500px) {
        right: 15px;
    }
}
</style>
