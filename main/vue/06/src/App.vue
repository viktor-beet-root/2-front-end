<template>
    <beetroot-h-2 :title="'My Shop'" />
    <beetroot-cart :cart="cart" />
    <beetroot-catalog :productList="products" @addToCart="addToCart" />
</template>

<script>
import products from "./assets/products";
import BeetrootCatalog from "./components/catalog/BeetrootCatalog.vue";
import BeetrootH2 from "./components/ui/Beetroot-h2.vue";
import BeetrootCart from "./components/cart/BeetrootCart.vue";

export default {
    name: "App",
    components: { BeetrootCatalog, BeetrootH2, BeetrootCart },
    data() {
        return {
            products,
            cart: [],
        };
    },
    provide: {
        currencySymbol: "$",
        outOfStockMessage: "Out of Stok",
    },
    methods: {
        addToCart(product) {
            const productInCart = this.isProductInCart(product.id);

            if (productInCart) {
                productInCart.qty += 1;
                return;
            }

            this.cart.push({
                id: product.id,
                sku: product.sku,
                name: product.name,
                img: product.img,
                price: product.price,
                specialPrice: product.specialPrice,
                qty: 1,
            });
        },
        isProductInCart(id) {
            return this.cart.find((product) => product.id === id);
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
