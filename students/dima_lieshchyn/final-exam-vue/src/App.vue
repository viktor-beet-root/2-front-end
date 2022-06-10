<template>
    <cosmetology-l-navbar />
    <main>
        <div class="cart">
            <transition name="fade">
                <router-link v-if="countCart" to="/cart"
                    ><cosmetology-l-count-icon
                        :countData="countCart" /><cosmetology-l-cart-icon
                        href="/cart"
                /></router-link>
            </transition>
        </div>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in"
                ><component :is="Component"
            /></transition>
        </router-view>
    </main>
    <footer>
        <cosmetology-l-footer
            :instagram="'https://instagram.com/cosmetology_leschina?igshid=YmMyMTA2M2Y='"
            :phone="'0996798619'"
            :telegram="'0996798619'"
        />
    </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CosmetologyLFooter from "./components/sections/CosmetologyLFooter.vue";
import CosmetologyLCartIcon from "./components/ui/icons/CosmetologyLCartIcon.vue";
import CosmetologyLCountIcon from "./components/ui/icons/CosmetologyLCountIcon.vue";
import CosmetologyLNavbar from "./components/ui/navbar/CosmetologyLNavbar.vue";

export default {
    components: {
        CosmetologyLNavbar,
        CosmetologyLFooter,
        CosmetologyLCartIcon,
        CosmetologyLCountIcon,
    },
    computed: {
        ...mapGetters(["countCart"]),
    },
    methods: {
        ...mapActions([
            "getProduct",
            "getCart",
            "getCurrency",
            "getDollar",
            "getEuro",
        ]),
    },
    created() {
        this.getProduct();
        this.getCart();
        this.getCurrency();
        this.getDollar();
        this.getEuro();
    },
};
</script>

<style lang="scss">
main {
    font-family: "Alegreya Sans";
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
