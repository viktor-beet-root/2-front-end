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
                    <cosmetology-l-icon-next class="prev" @click="prev" />
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
                    <cosmetology-l-icon-next class="next" @click="next" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CosmetologyLIconNext from "../ui/icons/CosmetologyLIconNext.vue";
import CosmetologyLInstagram from "../ui/icons/CosmetologyLInstagram.vue";
import CosmetologyLPhone from "../ui/icons/CosmetologyLPhone.vue";
import CosmetologyLTelegram from "../ui/icons/CosmetologyLTelegram.vue";
export default {
    components: {
        CosmetologyLTelegram,
        CosmetologyLInstagram,
        CosmetologyLPhone,
        CosmetologyLIconNext,
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
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
    },
    methods: {
        prev() {
            switch (this.currentRouteName) {
                case "education":
                    this.$router.push("/");
                    break;
                case "Home":
                    console.log(this.currentRouteName);
                    this.$router.push("/works");
                    break;
                case "works":
                    this.$router.push("/service");
                    break;
                case "service":
                    this.$router.push("/products");
                    break;
                case "products":
                    this.$router.push("/education");
                    break;
            }
        },
        next() {
            switch (this.currentRouteName) {
                case "education":
                    this.$router.push("/products");
                    break;
                case "products":
                    console.log(this.currentRouteName);
                    this.$router.push("/service");
                    break;
                case "service":
                    this.$router.push("/works");
                    break;
                case "works":
                    this.$router.push("/");
                    break;
                case "Home":
                    this.$router.push("/education");
                    break;
            }
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

.icon_instagram {
    position: absolute;
}
.icon_telegram {
    position: absolute;
}
.icon_phone {
    position: absolute;
}

.footer_focus {
    transition: transform 1s ease-in-out;
}
.prev {
    transform: rotate(180deg);
    margin-right: 100px;
    @media (max-width: 576px) {
        margin-right: 15px;
    }
}
.next {
    margin-left: 100px;
    @media (max-width: 576px) {
        margin-left: 15px;
    }
}
</style>
