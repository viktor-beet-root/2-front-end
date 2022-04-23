<template>
    <slot> <p>Not data</p> </slot>
    <h2>{{ test }}</h2>
    <p v-for="item in list" :key="item">{{ item }}</p>
    <button @click="setTest">tsdf</button>
</template>

<script>
export default {
    name: "beetroot-test",
    emits: ["setTest"],
    props: {
        test: String,
        list: {
            type: Array,
            required: true,
            default() {
                return [];
            },
            validator(value) {
                return value.length;
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        setTest() {
            const val = prompt("set value test");
            this.$emit("setTest", val);
        },
    },
};
</script>

<style lang="scss"></style>
