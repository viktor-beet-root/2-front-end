<template>
    <div
        class="
            product
            col-12 col-md-6 col-lg-4 col-xl-3
            mb-5
            p-3
            d-flex
            flex-column
            rounded-3
        "
    >
        <beetroot-image
            class="mb-3 product__image"
            :src="product.img"
            :alt="product.name"
        />
        <p class="h5 mb-3 fw-bold">{{ product.name }}</p>
        <beetroot-price
            :price="product.price"
            :specialPrice="product.specialPrice"
        />
        <beetroot-action
            :instock="product.instock"
            @action="addToCartProduct"
        />
        <beetroot-description
            class="pt-3 pb-3 position-absolute product__description rounded-3"
            :description="product.characteristics"
        />
    </div>
</template>

<script>
import BeetrootImage from "../ui/BeetrootImage.vue";
import BeetrootAction from "./BeetrootAction.vue";
import BeetrootDescription from "./BeetrootDescription.vue";
import BeetrootPrice from "./BeetrootPrice.vue";
import { mapActions } from "vuex";

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
    methods: {
        ...mapActions(["addToCart"]),
        addToCartProduct() {
            this.addToCart({
                id: this.product.id,
                name: this.product.name,
                img: this.product.img,
                price: this.product.price,
                specialPrice: this.product.specialPrice,
                sku: this.product.sku,
                qty: 1,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.product {
    position: relative;

    &__image {
        max-height: 185px;
        object-fit: cover;
        object-position: center;
    }

    &__description {
        background-color: white;
        display: none;
        padding: 5px;
        top: 100%;
        left: 0;
        right: 0;
        padding-left: 25px;
        box-shadow: 0 0 5px 5px lightgray;
        font-size: 0.9rem;

        &::after {
            content: "";
            height: 14px;
            display: block;
            background-color: white;
            position: absolute;
            left: 0;
            right: 0;
            top: -10px;
        }
    }

    &:hover {
        box-shadow: 0 0 5px 5px lightgray;

        .product__description {
            display: block;
            z-index: 10;
        }
    }
}
</style>
