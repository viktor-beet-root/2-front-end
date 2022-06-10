<template>
    <p>{{ info }}</p>
</template>

<script>
export default {
    name: "cosmetology-l-description",
    props: {
        info: {
            type: String,
            default() {
                return "";
            },
        },
    },
};
</script>
