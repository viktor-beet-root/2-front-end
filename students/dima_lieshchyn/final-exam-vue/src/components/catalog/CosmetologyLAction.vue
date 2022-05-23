<template>
    <div class="add-to-cart-wrapper">
        <button
            v-if="instock"
            @click="$emit('action')"
            class="btn btn-success add-to-cart"
        >
            Добавить в корзину
        </button>
        <p v-else class="out-of-stock text-center mt-1 mb-2">
            {{ outOfStockMessage }}
        </p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "cosmetology-l-action",
    emits: ["action"],
    props: {
        instock: Boolean,
    },
    computed: {
        ...mapGetters(["outOfStockMessage"]),
    },
    methods: {},
};
</script>

<style lang="scss">
@import "../../assets/css/_var.scss";
.add-to-cart-wrapper,
.out-of-stock {
    margin-top: auto;
}
.out-of-stock {
    color: white;
    padding: 15px;
}
.add-to-cart {
    background-color: white;
    width: 100%;
}
</style>
