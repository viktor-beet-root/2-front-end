<template>
    <div class="col-3">
        <beetroot-image :src="product.img" :alt="product.name" />
        {{ product.name }}
        <beetroot-price
            :price="product.price"
            :specialPrice="product.specialPrice"
        />
        <beetroot-qty
            @setQty="setQty"
            @removeProduct="removeProduct"
            :qty="product.qty"
        />
        <beetroot-product-total
            :prace="product.price"
            :specialPrice="product.specialPrice"
            :qty="product.qty"
        />
    </div>
</template>

<script>
import BeetrootPrice from "../catalog/BeetrootPrice.vue";
import BeetrootImage from "../ui/BeetrootImage.vue";
import BeetrootQty from "./BeetrootQty.vue";
import { mapActions } from "vuex";
import BeetrootProductTotal from "./BeetrootProductTotal.vue";

export default {
    components: {
        BeetrootImage,
        BeetrootPrice,
        BeetrootQty,
        BeetrootProductTotal,
    },
    name: "beetroot-cart-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
        productIndex: Number,
    },
    methods: {
        ...mapActions(["changeQty", "removeProductCart"]),
        removeProduct() {
            this.removeProductCart(this.productIndex);
        },
        setQty(isIncrement) {
            const newQty = isIncrement
                ? this.product.qty + 1
                : this.product.qty - 1;

            this.changeQty({
                productIndex: this.productIndex,
                qty: newQty,
            });
        },
    },
};
</script>
