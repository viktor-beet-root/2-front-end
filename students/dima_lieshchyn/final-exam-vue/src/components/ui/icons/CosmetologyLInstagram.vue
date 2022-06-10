<template>
    <lottie-animation
        class="icon_instagram"
        ref="anim"
        :animationData="require('@/assets/animation/icon_instagram.json')"
        :autoPlay="true"
        :loop="true"
    />
</template>
<script>
export default {
    name: "cosmetology-l-instagram",
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/style.scss";
.icon_instagram {
    /* width: 100px !important; */
    width: 100px !important;
    height: 100px !important;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
        transition: transform 0.4s ease;
        transform: scale(1.5);
        transform-origin: bottom;
    }
}
</style>
