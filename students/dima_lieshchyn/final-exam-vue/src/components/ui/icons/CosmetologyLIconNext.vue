<template>
    <lottie-animation
        class="next_icon"
        ref="anim"
        :animationData="require('@/assets/animation/icon_next.json')"
        :autoPlay="true"
        :loop="true"
        :href="href"
    />
</template>
<script>
export default {
    name: "cosmetology-l-icon-next",
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
.next_icon {
    border-radius: 15px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 120;
}
</style>
