<template>
    <beetroot-image :src="product.img" :alt="product.name" />
    {{ product.name }}
    <beetroot-price
        :price="product.price"
        :specialPrice="product.specialPrice"
    />
</template>

<script>
import BeetrootPrice from "../catalog/BeetrootPrice.vue";
import BeetrootImage from "../ui/BeetrootImage.vue";
export default {
    components: { BeetrootImage, BeetrootPrice },
    name: "beetroot-cart-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>
