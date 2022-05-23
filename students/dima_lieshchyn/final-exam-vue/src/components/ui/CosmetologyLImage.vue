<template>
    <img
        class="image"
        :src="require('@/assets/store_photos/' + src)"
        :alt="alt"
    />
</template>

<script>
export default {
    name: "cosmetology-l-image",
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
