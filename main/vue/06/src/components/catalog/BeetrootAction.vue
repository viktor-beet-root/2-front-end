<template>
    <div class="product__add-to-cart-wrapper">
        <button
            v-if="instock"
            @click="$emit('addToCart')"
            class="product__add-to-cart"
        >
            Add to Cart
        </button>
        <p v-else class="product__out-of-stock">
            {{ outOfStockMessage }}
        </p>
    </div>
</template>

<script>
export default {
    name: "beetroot-action",
    inject: ["outOfStockMessage"],
    emits: ["addToCart"],
    props: {
        instock: Boolean,
    },
};
</script>
