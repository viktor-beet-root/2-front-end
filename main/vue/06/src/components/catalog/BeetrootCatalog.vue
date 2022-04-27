<template>
    <beetroot-h-2 title="Catalog" />
    <div class="catalog-list">
        <div class="row">
            <beetroot-product
                v-for="product in productList"
                :product="product"
                :key="product.id"
                @addToCart="$emit('addToCart', product)"
            />
        </div>
    </div>
</template>

<script>
import BeetrootH2 from "../ui/Beetroot-h2.vue";
import BeetrootProduct from "./BeetrootProduct.vue";
export default {
    components: { BeetrootH2, BeetrootProduct },
    name: "beetroot-catalog",
    emits: ["addToCart"],
    props: {
        productList: {
            type: Array,
            default() {
                return [];
            },
        },
        title: String,
    },
};
</script>
