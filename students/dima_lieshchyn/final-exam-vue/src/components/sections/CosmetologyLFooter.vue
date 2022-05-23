<template>
    <div
        class="footer"
        @mouseenter="footerFocus = true"
        @mouseleave="footerFocus = false"
        :class="{ footer_focus: footerFocus }"
    >
        <div class="container">
            <div class="row">
                <div class="footer__wrapper">
                    <!-- <div @click="prev" class="prev">Prev</div> -->
                    <a
                        :href="`https://telegram.me/+380${telegram}`"
                        target="_blank"
                        class="footer__link"
                        ><cosmetology-l-telegram
                    /></a>
                    <a :href="instagram" target="_blank" class="footer__link"
                        ><cosmetology-l-instagram
                    /></a>
                    <a
                        :href="`tel:+38${phone}`"
                        target="_blank"
                        class="footer__link"
                        ><cosmetology-l-phone
                    /></a>
                    <!-- <div @click="next" class="next">Next</div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CosmetologyLInstagram from "../ui/icons/CosmetologyLInstagram.vue";
import CosmetologyLPhone from "../ui/icons/CosmetologyLPhone.vue";
import CosmetologyLTelegram from "../ui/icons/CosmetologyLTelegram.vue";
export default {
    components: {
        CosmetologyLTelegram,
        CosmetologyLInstagram,
        CosmetologyLPhone,
    },
    name: "cosmetology-l-footer",
    data() {
        return {
            footerFocus: false,
        };
    },
    props: {
        telegram: String,
        instagram: String,
        phone: String,
    },
    methods: {
        prev() {
            this.$router.go(-1);
        },
        next() {
            this.$router.go(1);
        },
    },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/style.scss";
.footer {
    position: fixed;
    right: 0;
    left: 0;
    bottom: -2px;
    background-color: $background-nav;
    width: 100%;
    z-index: 99;

    &__wrapper {
        width: 100%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__link {
        display: block;
        width: 80px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.icon_telegram svg,
.icon_instagram svg,
.icon_phone svg {
    /* width: 70px; */
    /* width: 50px;
    height: 50px; */
}
.icon_instagram {
    position: absolute;
    /* left: 215px; */
}
.icon_telegram {
    position: absolute;
}
.icon_phone {
    position: absolute;
}

.svg_icon {
    /* margin: 15px; */
}
.footer_focus {
    transition: transform 1s ease-in-out;
}
.prev,
.next {
    background-color: white;
    cursor: pointer;
}
</style>
