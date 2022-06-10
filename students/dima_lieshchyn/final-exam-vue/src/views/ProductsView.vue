<template>
    <section class="products-block blur">
        <div class="container">
            <div class="row">
                <div class="products__wrapper">
                    <cosmetology-l-filter />
                    <div class="products"><cosmetology-l-catalog /></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CosmetologyLCatalog from "../components/catalog/CosmetologyLCatalog.vue";
import { mapGetters, mapActions } from "vuex";
import CosmetologyLFilter from "../components/catalog/CosmetologyLFilter.vue";
export default {
    name: "ProductsView",
    components: { CosmetologyLCatalog, CosmetologyLFilter },
    computed: {
        ...mapGetters(["countCart"]),
    },
    methods: {
        ...mapActions(["getProduct", "getCart"]),
    },
    created() {
        this.getProduct();
        this.getCart();
    },
};
</script>
<style lang="scss" scoped>
.products-block {
    overflow-x: hidden;
    background-image: url("../assets/photos/store-bg.jpg");
    background-repeat: no-repeat;
    background-position: top top;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    /* position: relative; */
}
.products {
    width: 100%;

    padding-top: 35px;
    padding-bottom: 30px;
    @media (max-width: 795px) {
        padding-top: 60px;
    }
    @media (max-width: 750px) {
        padding-top: 45px;
    }
    &__wrapper {
        padding-top: 80px;
    }
}
</style>
