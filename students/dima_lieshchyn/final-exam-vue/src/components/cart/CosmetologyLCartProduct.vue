<template>
    <div class="col-3 cart__product">
        <span class="cart__counter">{{ productIndex + 1 }}</span>
        <div class="cart__image">
            <cosmetology-l-image :src="product.img" :alt="product.name" />
        </div>
        <div class="cart__product-info">
            <span class="title">{{ product.name }}</span>
            <cosmetology-l-price
                :price="product.price"
                :specialPrice="product.specialPrice"
            />
            <cosmetology-l-qty
                @setQty="setQty"
                @removeProduct="removeProduct"
                :qty="product.qty"
            />
            <cosmetology-l-product-total
                :prace="product.price"
                :specialPrice="product.specialPrice"
                :qty="product.qty"
            />
        </div>
    </div>
</template>

<script>
import CosmetologyLPrice from "../catalog/CosmetologyLPrice.vue";
import CosmetologyLImage from "../ui/CosmetologyLImage.vue";
import CosmetologyLQty from "./CosmetologyLQty.vue";
import { mapActions, mapGetters } from "vuex";
import CosmetologyLProductTotal from "./CosmetologyLProductTotal.vue";

export default {
    components: {
        CosmetologyLImage,
        CosmetologyLPrice,
        CosmetologyLQty,
        CosmetologyLProductTotal,
    },
    emits: ["total"],
    name: "cosmetology-l-cart-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
        productIndex: Number,
    },
    computed: {
        ...mapGetters(["countCart"]),
    },
    methods: {
        ...mapActions(["changeQty", "removeProductCart"]),
        removeProduct() {
            this.removeProductCart(this.productIndex);
        },
        setQty(isIncrement) {
            const newQty = isIncrement
                ? this.product.qty + 1
                : this.product.qty > 1
                ? this.product.qty - 1
                : this.product.qty;

            this.changeQty({
                productIndex: this.productIndex,
                qty: newQty,
            });
        },
    },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/_var.scss";
.cart {
    &__product {
        margin-bottom: 20px;
        position: relative;
        display: flex;
        height: 100px;
        width: 100%;
        box-shadow: $box-shadow;
        border-radius: 15px;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: 500px) {
            height: 150px;
        }
    }
    &__counter {
        display: block;
        background-color: white;
        position: absolute;
        top: -15px;
        left: -15px;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 50%;
        margin: 0;
        padding: 0;
        border: 1px solid gray;
        /* padding: 10px; */
        font-size: 18px;
        @media (max-width: 500px) {
            top: 15px;
        }
    }

    &__image {
        margin-right: 20px;
        & > .image {
            object-fit: cover;
            border-radius: 15px;
            width: 100px;
            height: 100px;
        }
        @media (max-width: 350px) {
            margin-right: 5px;
        }
    }
    &__product-info {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: 750px) {
            flex-direction: column;
            /* justify-content: center; */
            align-items: flex-start;
        }
    }
}
.title {
    margin-right: 20px;
    padding: 5px;
    border-radius: 4px;
    background-color: white;
    @media (max-width: 500px) {
        margin-bottom: 10px;
    }
}
.price-box {
    margin-right: 20px;
}
.price-block {
    width: 100%;
    @media (max-width: 750px) {
        display: flex;
        flex-direction: row;
    }
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
    }
}
.currency {
}
</style>

