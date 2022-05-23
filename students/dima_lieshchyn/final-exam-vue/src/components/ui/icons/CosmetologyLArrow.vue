<template>
    <lottie-animation
        class="arrow_icon"
        ref="anim"
        :animationData="require('@/assets/animation/icon_arrow.json')"
        :autoPlay="true"
        :loop="true"
        :href="href"
    />
</template>
<script>
export default {
    name: "cosmetology-l-arrow",
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
.arrow_icon {
    border-radius: 15px;
    width: 45px;
    height: 45px;
    cursor: pointer;
    z-index: 120;
}
</style>
