<template>
    <div class="products">
        <cosmetology-l-product
            v-for="product in productList"
            :product="product"
            :key="product.id"
        />
    </div>
</template>

<script>
import CosmetologyLProduct from "./CosmetologyLProduct.vue";
import { mapGetters } from "vuex";

export default {
    components: { CosmetologyLProduct },
    name: "cosmetology-l-catalog",
    emits: ["addToCart"],
    computed: {
        ...mapGetters(["productList"]),
    },
};
</script>
<style lang="scss" scoped>
.products {
    display: flex;
    flex-wrap: wrap;
}
</style>
