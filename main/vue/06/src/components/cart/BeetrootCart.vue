<template>
    <beetroot-h-2 title="Cart" />
    <div class="cart">
        <div class="row">
            <beetroot-cart-product
                v-for="product in cart"
                :product="product"
                :key="product.id"
            />
        </div>
    </div>
</template>

<script>
import BeetrootH2 from "../ui/Beetroot-h2.vue";
import BeetrootCartProduct from "./BeetrootCartProduct.vue";
export default {
    name: "beetroot-cart",
    components: { BeetrootH2, BeetrootCartProduct },
    props: {
        cart: {
            type: Array,
            default() {
                return [];
            },
        },
    },
};
</script>
