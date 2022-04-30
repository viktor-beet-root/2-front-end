<template>
    <div class="container">
        <nav class="text-center">
            <router-link to="/">Catalog</router-link> |
            <router-link to="/cart">Cart ({{ countCart }})</router-link>
        </nav>
        <router-view />
        <footer class="p-5">footer</footer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters(["countCart"]),
    },
    methods: {
        ...mapActions(["getProduct", "getCart"]),
    },
    created() {
        this.getProduct();
        this.getCart();
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

footer {
    min-height: 200px;
}
</style>
