<template>
    <ul>
        <li v-for="(value, key) in description" :key="key">
            <strong>{{ key }}:</strong> {{ value }};
        </li>
    </ul>
</template>

<script>
export default {
    name: "beetroot-description",
    props: {
        description: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>
