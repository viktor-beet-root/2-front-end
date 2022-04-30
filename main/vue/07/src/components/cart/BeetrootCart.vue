<template>
    <div class="cart">
        <div class="row">
            <beetroot-h-2 class="mb-5 fw-bold text-center" title="Cart" />
            <beetroot-cart-product
                v-for="(product, index) in cart"
                :product="product"
                :key="product.id"
                :productIndex="index"
            />
        </div>
    </div>
</template>

<script>
import BeetrootH2 from "../ui/Beetroot-h2.vue";
import BeetrootCartProduct from "./BeetrootCartProduct.vue";
import { mapGetters } from "vuex";

export default {
    name: "beetroot-cart",
    components: { BeetrootH2, BeetrootCartProduct },
    computed: {
        ...mapGetters(["cart"]),
    },
};
</script>
