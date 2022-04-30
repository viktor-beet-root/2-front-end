<template>
    <div class="add-to-cart-wrapper">
        <button
            v-if="instock"
            @click="$emit('action')"
            class="btn btn-primary add-to-cart"
        >
            Add to Cart
        </button>
        <p v-else class="out-of-stock text-center mt-1 mb-2">
            {{ outOfStockMessage }}
        </p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "beetroot-action",
    emits: ["action"],
    props: {
        instock: Boolean,
    },
    computed: {
        ...mapGetters(["outOfStockMessage"]),
    },
};
</script>

<style lang="scss">
.add-to-cart-wrapper,
.out-of-stock {
    margin-top: auto;
}
.add-to-cart {
    width: 100%;
}
</style>
