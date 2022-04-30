<template>
    <beetroot-h-2 class="mb-5 fw-bold text-center" title="Catalog" />

    <div class="catalog-list">
        <div class="row">
            <beetroot-product
                v-for="product in productList"
                :product="product"
                :key="product.id"
            />
        </div>
    </div>
</template>

<script>
import BeetrootH2 from "../ui/Beetroot-h2.vue";
import BeetrootProduct from "./BeetrootProduct.vue";
import { mapGetters } from "vuex";

export default {
    components: { BeetrootH2, BeetrootProduct },
    name: "beetroot-catalog",
    emits: ["addToCart"],
    computed: {
        ...mapGetters(["productList"]),
    },
};
</script>
