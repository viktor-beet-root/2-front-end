<template>
    <div
        @mouseover="onHover = true && !mobile"
        @mouseleave="onHover = false && !mobile"
        @click="onHoverMobileMain = !onHoverMobileMain && mobile"
    >
        <a class="navigation__link link" :to="`${href}`">
            {{ title }}
            <svg class="arrow" fill="#fff" viewBox="0 0 1030 638" width="10">
                <path
                    d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
                ></path>
            </svg>
        </a>
        <transition name="fade">
            <ul v-if="onHover || onHoverMobileMain" class="sub-menu">
                <li
                    v-for="(item, i) in items"
                    :key="i"
                    class="sub-menu__item nav_item"
                    @mouseover="onHoverSub = true"
                    @mouseleave="onHoverSub = false"
                    @click="
                        (onHoverMobileSub = !onHoverMobileSub && mobile),
                            goTo(item.link),
                            $emit('toggle')
                    "
                >
                    <div>
                        <cosmetology-l-syringe></cosmetology-l-syringe>
                        <a class="sub-menu__link link" :href="item.link">{{
                            item.title
                        }}</a>
                    </div>
                </li>
            </ul>
        </transition>
    </div>
</template>
<script>
import CosmetologyLSyringe from "../icons/CosmetologyLSyringe.vue";
import { mapGetters } from "vuex";

export default {
    components: { CosmetologyLSyringe },
    name: "cosmetology-l-dropdown",
    emits: ["toggle"],
    props: {
        title: String,
        items: Object,
        href: String,
    },
    computed: mapGetters(["navList"]),
    data() {
        return {
            onHover: false,
            onHoverSub: false,
            onHoverMobileMain: false,
            onHoverMobileSub: false,
            mobile: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }

            this.mobile = false;
            return;
        },
        goTo(link) {
            this.$router.push({ path: link });
        },
    },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/_var.scss";
@import "../../../assets/css/addons.scss";
.notSub {
    display: none;
}
.sub-menu {
    z-index: 350;
    border-radius: 5px;
    position: absolute;
    top: 57px;
    left: -32px;
    @media (max-width: 750px) {
        position: relative;
        top: 0;
    }
}
.nav_item {
    z-index: 350;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    font-size: 14px;
    text-transform: none;
    cursor: pointer;
    &:hover {
        transition: all 0.5s ease;
        background-color: $background-nav-item-hover;
        box-shadow: $box-shadow;
        & .sub-menu__link {
            color: black !important;
        }
    }
}
.sub-menu__item {
    z-index: 350;
    display: flex;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    margin: 5px 0;
    width: 260px;
    padding: 10px;

    & > li {
        height: 50%;
    }

    @media (max-width: 750px) {
    }
}
.arrow {
    margin-left: 8px;
}

.sub-menu__link {
    position: relative;
    color: #fff !important;
}

.link {
    text-align: center;
}
.navigation__item {
    &:hover {
        & .arrow {
            transition: all 0.5s ease;
            fill: #000000;
            transform: rotate(360deg);
        }
    }
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
