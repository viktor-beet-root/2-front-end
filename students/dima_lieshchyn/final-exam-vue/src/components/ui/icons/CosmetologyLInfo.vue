<template>
    <lottie-animation
        class="icon_info"
        ref="anim"
        :animationData="require('@/assets/animation/icon_info.json')"
        :autoPlay="true"
        :loop="true"
    />
</template>
<script>
export default {
    name: "cosmetology-l-info",
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/_var.scss";
.icon_info {
    width: 30px;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
        box-shadow: $box-shadow;
    }
}
</style>
