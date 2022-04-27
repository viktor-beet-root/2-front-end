<template>
    <div class="product col-3">
        <beetroot-image :src="product.img" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <beetroot-description :description="product.characteristics" />
        <beetroot-price
            :price="product.price"
            :specialPrice="product.specialPrice"
        />
        <beetroot-action
            :instock="product.instock"
            @addToCart="$emit('addToCart', product)"
        />
    </div>
</template>

<script>
import BeetrootImage from "../ui/BeetrootImage.vue";
import BeetrootAction from "./BeetrootAction.vue";
import BeetrootDescription from "./BeetrootDescription.vue";
import BeetrootPrice from "./BeetrootPrice.vue";
export default {
    components: {
        BeetrootImage,
        BeetrootDescription,
        BeetrootPrice,
        BeetrootAction,
    },
    name: "beetroot-product",
    emits: ["addToCart"],
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
