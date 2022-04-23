<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <beetroot-test :test="test" :list="list" @setTest="setTest">
        <h3>for slot {{ test }}</h3>
    </beetroot-test>
</template>

<script>
import BeetrootTest from "./components/BeetrootTest.vue";

export default {
    name: "App",
    components: { BeetrootTest },
    data() {
        return {
            test: "sdfd",
            firstName: "",
            lastName: "",
            list: ["sdf", "asdf"],
        };
    },
    methods: {
        setTest(value) {
            this.test = value;
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
