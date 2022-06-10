<template>
    <lottie-animation
        class="icon_phone"
        ref="anim"
        :animationData="require('@/assets/animation/icon_phone.json')"
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
.icon_phone {
    /* width: 50px !important; */
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
        transition: transform 0.4s ease;
        transform: scale(1.8);
        transform-origin: bottom;
    }
}
</style>
