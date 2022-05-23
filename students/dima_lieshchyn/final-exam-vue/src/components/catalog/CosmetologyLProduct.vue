<template>
    <div
        class="
            product
            col-12 col-md-6 col-lg-4 col-xl-3
            p-3
            d-flex
            flex-column
            rounded-3
        "
    >
        <div class="product__img-wrapper show">
            <cosmetology-l-image
                class="mb-3 product__image"
                :src="product.img"
                :alt="product.name"
            />
        </div>
        <div class="anim_block">
            <cosmetology-l-info @click="show = !show" />
            <div class="product__inner" :class="{ show: show }">
                <div class="product__elements product__front">
                    <p class="h5 mb-1 fw-bold product__title">
                        {{ product.name }}
                    </p>

                    <cosmetology-l-price
                        :price="product.price"
                        :specialPrice="product.specialPrice"
                    />

                    <cosmetology-l-action
                        :instock="product.instock"
                        @action="addToCartProduct"
                    />
                </div>
                <div class="product__back">
                    <cosmetology-l-description
                        class="
                            pt-3
                            pb-3
                            position-absolute
                            product__description
                            rounded-3
                        "
                        :info="product.info"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CosmetologyLImage from "../ui/CosmetologyLImage.vue";
import CosmetologyLAction from "./CosmetologyLAction.vue";
import CosmetologyLDescription from "./CosmetologyLDescription.vue";
import CosmetologyLPrice from "./CosmetologyLPrice.vue";
import CosmetologyLInfo from "../ui/icons/CosmetologyLInfo.vue";
import { mapActions } from "vuex";

export default {
    components: {
        CosmetologyLImage,
        CosmetologyLDescription,
        CosmetologyLPrice,
        CosmetologyLAction,
        CosmetologyLInfo,
    },
    name: "cosmetology-l-product",
    emits: ["addToCart"],
    data() {
        return {
            show: false,
        };
    },
    props: {
        product: {
            type: Object,
            default() {
                return {
                    show: false,
                };
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
                info: this.product.info,
                qty: 1,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/_var.scss";
.product {
    &:hover {
        transition: box-shadow 0.8s ease;
        box-shadow: $box-shadow;
        & .product__image {
            transition: transform 0.5s ease;
            transform: scale(1.1);
        }
    }
    &__img-wrapper {
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__image {
        border-radius: 25px;
        max-height: 185px;
        object-fit: cover;
        object-position: center;
        z-index: 20;
    }
    &__title {
        position: relative;
        padding: 5px;
        color: white;
        text-align: center;
        &::after {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            bottom: 0;

            background-color: $background-nav-item-hover;
        }
    }
    &__elements {
        background-image: linear-gradient(
            to right top,
            #17091f,
            #2b1333,
            #461644,
            #651552,
            #860c5c
        );
        border-radius: 15px;
    }

    &__description {
        color: black;
        left: 0;
        right: 0;
        border-radius: 15px;
        padding: 20px;
        font-size: 0.9rem;
    }

    .icon_info {
        position: absolute;
        bottom: 45px;
        right: 10px;
        z-index: 200;
    }

    .anim_block {
        position: relative;
    }
    .icon_info:hover {
        & ~ .show {
            transform: rotateY(180deg);
        }
    }
    &__inner {
        transition: transform 0.8s;
        transform-style: preserve-3d;
        border-radius: 15px;
        &::before {
            content: "";
            transform: rotate3d(0, 1, 0.5, 3.142rad);
            position: absolute;
            border-bottom-left-radius: 50%;
            border-bottom-right-radius: 50%;
            box-shadow: $box-shadow;
            top: -49px;
            left: 0;
            right: 0;
            width: 100%;
            height: 60px;
            background-color: $background-nav-item-hover;
        }
    }

    &__back {
        border-radius: 15px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }
    &__back {
        background-color: white;
        color: white;
        transform: rotateY(180deg);
    }
    &__front {
        position: relative;
    }
}
.btn {
    border-radius: 15px !important;
}
.price-box__price {
    @media (max-width: 750px) {
        margin-bottom: 10px !important;
    }
}
</style>
