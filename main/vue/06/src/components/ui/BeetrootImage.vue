<template>
    <img :src="require('@/assets/' + src)" :alt="alt" />
</template>

<script>
export default {
    name: "beetroot-image",
    props: {
        src: String,
        alt: String,
    },
};
</script>

<style scoped>
img {
    max-width: 100%;
}
</style>
