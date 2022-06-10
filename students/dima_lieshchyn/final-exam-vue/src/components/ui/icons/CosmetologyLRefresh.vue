<template>
    <lottie-animation
        class="refresh_icon"
        ref="anim"
        :animationData="require('@/assets/animation/icon_refresh.json')"
        :autoPlay="true"
        :loop="true"
        :href="href"
    />
</template>
<script>
export default {
    name: "cosmetology-l-refresh",
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
.refresh_icon {
    background-color: white;
    border-radius: 15px;
    width: 45px;
    height: 45px;
    fill: #fff;
    cursor: pointer;
    z-index: 120;
}
</style>
