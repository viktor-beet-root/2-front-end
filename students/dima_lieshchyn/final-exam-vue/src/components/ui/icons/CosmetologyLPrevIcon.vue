<template>
    <lottie-animation
        class="prev_icon"
        ref="anim"
        :animationData="require('@/assets/animation/icon_prev.json')"
        :autoPlay="true"
        :loop="true"
        :href="href"
    />
</template>
<script>
export default {
    name: "cosmetology-l-prev-icon",
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
.prev_icon {
    /* background-color: white; */
    border-radius: 15px;
    width: 45px;
    height: 45px;
    fill: #fff;
    cursor: pointer;
    z-index: 120;
}
</style>
