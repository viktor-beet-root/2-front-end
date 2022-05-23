<template>
    <div class="product__price price-box">
        <div class="currency">
            <button @click="uahChange" id="uah" class="btn btn-primary">
                {{ currencySymbol }}
            </button>
            <button @click="dollarChange" class="btn btn-primary">
                {{ currencyDollar }}
            </button>
            <button @click="euroChange" class="btn btn-primary">
                {{ currencyEuro }}
            </button>
        </div>
        <div class="price-block">
            <span
                class="price-box__price"
                :class="{ sale: price > specialPrice }"
            >
                {{ (price * current).toLocaleString() }}
                {{ symbol ? symbol : currencySymbol }}
            </span>
            <span v-if="price > specialPrice" class="price-box__special-price">
                {{ (specialPrice * current).toLocaleString() }}
                {{ symbol ? symbol : currencySymbol }}
            </span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "cosmetology-l-price",
    props: {
        price: Number,
        specialPrice: Number,
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
    },
    methods: {
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
.price-box__price {
    display: flex;
    align-items: center;
    display: block;
    color: white;
    width: 100%;
    text-align: center;
}
.sale {
    text-decoration: line-through;
}
.price-box__special-price {
    display: block;
    text-align: center;
    font-weight: 700;
    color: red;
}
.currency {
    display: flex;
    justify-content: center;
    & .btn {
        margin: 5px;
    }
}
.cart__product-info {
    & .currency {
        @media (max-width: 400px) {
            position: absolute;
            top: 15px;
            right: 20px;
        }
    }
}
.price-block {
    width: 100%;
    @media (max-width: 750px) {
        display: flex;
        flex-direction: row;
        & span {
            width: 100%;
        }
    }
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        & span {
            width: 100%;
        }
    }
}
</style>
