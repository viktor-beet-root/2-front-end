<template>
    <lottie-animation
        class="cart_icon"
        ref="anim"
        :animationData="require('@/assets/animation/icon_cart.json')"
        :autoPlay="true"
        :loop="true"
        :href="href"
    />
</template>
<script>
export default {
    name: "cosmetology-l-cart-icon",
    props: {
        href: String,
    },
    data() {
        return {
            isCart: true,
        };
    },
};
</script>
<style lang="scss" scoped>
.cart_icon {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 15px;
    width: 50px;
    fill: #fff;
    cursor: pointer;
    z-index: 120;
    position: fixed;
    top: 85px;
    right: 10px;
    @media (max-width: 750px) {
        top: 58px;
    }
}
</style>
