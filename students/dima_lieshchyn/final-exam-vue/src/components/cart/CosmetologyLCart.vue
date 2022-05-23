<template>
    <div class="cart">
        <div class="container">
            <div class="row">
                <div class="cart__wrapper">
                    <cosmetology-l-prev-icon @click="previous" />
                    <cosmetology-lh-2
                        class="mb-3 cart__title fw-bold text-center"
                        title="Корзина"
                    />
                    <cosmetology-l-order />
                    <div class="cart__products-wrapper">
                        <cosmetology-l-cart-product
                            @total="getTotal"
                            v-for="(product, index) in cart"
                            :product="product"
                            :key="product.id"
                            :productIndex="index"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CosmetologyLCartProduct from "./CosmetologyLCartProduct.vue";
import { mapActions, mapGetters } from "vuex";
import CosmetologyLh2 from "../ui/CosmetologyLh2.vue";
import CosmetologyLPrevIcon from "../ui/icons/CosmetologyLPrevIcon.vue";
import CosmetologyLOrder from "./CosmetologyLOrder.vue";

export default {
    name: "cosmetology-l-cart",
    data() {
        return {
            total: [],
        };
    },
    components: {
        CosmetologyLCartProduct,
        CosmetologyLh2,
        CosmetologyLPrevIcon,
        CosmetologyLOrder,
    },
    computed: {
        ...mapGetters(["cart"]),
    },
    methods: {
        ...mapActions(["addToTotal"]),
        previous() {
            this.$router.go(-1);
        },
        getTotal(value) {
            // this.total.push(value);
            console.log(value);
            this.addToTotal(value);
            // console.log(temp);
        },
    },
};
</script>
<style lang="scss" scoped>
.cart {
    padding-bottom: 50px;
    overflow-x: hidden;
    height: 100vh;
    background-image: linear-gradient(
        to right top,
        #250537,
        #4a0e62,
        #76158f,
        #a618bd,
        #db12eb
    );

    &__wrapper {
        padding-top: 80px;
        @media (max-width: 750px) {
            padding-top: 45px;
        }
    }
    &__title {
        color: white;
    }
    &__products-wrapper {
    }
}
</style>
