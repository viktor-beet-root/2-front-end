<template>
    <header @mouseenter="focusNav = true" @mouseleave="focusNav = false">
        <nav>
            <div class="logo">
                <span
                    @click="showModal = !showModal"
                    style="cursor: pointer"
                    class="neonText"
                    ><i class="logo_icon fa fa-lips"></i
                ></span>
                <va-modal v-model="showModal" title="Вход" hide-default-actions>
                    <va-form
                        style="width: 300px"
                        tag="form"
                        @submit.prevent="handleSubmit"
                    >
                        <va-input v-model="username" label="Логин" />

                        <va-input
                            class="mt-2"
                            v-model="password"
                            type="password"
                            label="Пароль"
                        />
                        <va-button type="submit" class="mt-2"> Вход </va-button>
                    </va-form>
                </va-modal>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li
                    class="navigation__item"
                    href="/"
                    @click="this.$router.push('/')"
                >
                    <router-link class="navigation__link link" to="/">{{
                        navList[0].title
                    }}</router-link>
                </li>
                <li class="navigation__item">
                    <cosmetology-l-dropdown
                        :href="navList[1].link"
                        :title="navList[1].title"
                        :items="education"
                    >
                    </cosmetology-l-dropdown>
                </li>
                <li class="navigation__item">
                    <cosmetology-l-dropdown
                        :href="navList[2].link"
                        :title="navList[2].title"
                        :items="products"
                    ></cosmetology-l-dropdown>
                </li>
                <li class="navigation__item">
                    <cosmetology-l-dropdown
                        :href="navList[3].link"
                        :title="navList[3].title"
                        :items="service"
                    ></cosmetology-l-dropdown>
                </li>
                <li
                    class="navigation__item"
                    @click="this.$router.push('/works')"
                >
                    <router-link class="navigation__link link" to="/works">
                        {{ navList[4].title }}
                    </router-link>
                </li>
            </ul>
            <div class="icon">
                <i
                    @click="toggleMobileNav"
                    v-show="mobile"
                    class="far fa-bars"
                    :class="{ 'icon-active': mobileNav }"
                ></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-navigation">
                    <li
                        @click="toggleMobileNav($event), this.$router.push('/')"
                        class="navigation__item mobile_item"
                    >
                        <router-link class="navigation__link link" to="/">{{
                            navList[0].title
                        }}</router-link>
                    </li>
                    <li
                        :class="{ mobile_item: mobile }"
                        class="navigation__item mobile_item"
                    >
                        <cosmetology-l-dropdown
                            @toggle="toggleMobileNav"
                            :href="navList[1].link"
                            :title="navList[1].title"
                            :items="education"
                        >
                        </cosmetology-l-dropdown>
                    </li>
                    <li
                        :class="{ mobile_item: mobile }"
                        class="navigation__item mobile_item"
                    >
                        <cosmetology-l-dropdown
                            @toggle="toggleMobileNav"
                            :href="navList[2].link"
                            :title="navList[2].title"
                            :items="products"
                        ></cosmetology-l-dropdown>
                    </li>
                    <li
                        :class="{ mobile_item: mobile }"
                        class="navigation__item mobile_item"
                    >
                        <cosmetology-l-dropdown
                            @toggle="toggleMobileNav"
                            :href="navList[3].link"
                            :title="navList[3].title"
                            :items="service"
                        ></cosmetology-l-dropdown>
                    </li>
                    <li
                        class="navigation__item mobile_item"
                        @click="
                            toggleMobileNav($event), this.$router.push('/works')
                        "
                    >
                        <router-link
                            class="navigation__link link"
                            to="/works"
                            >{{ navList[4].title }}</router-link
                        >
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
    <div :class="{ blur: focusNav && !mobile }" v-if="focusNav && !mobile">
        <svg width="0" height="0">
            <defs>
                <filter id="blurFilter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
            </defs>
        </svg>
    </div>
</template>
<script>
import CosmetologyLDropdown from "./CosmetologyLDropdown.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "cosmetology-l-navbar",
    components: {
        CosmetologyLDropdown,
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            focusNav: false,
            showModal: false,
            regFlag: false,
            username: "",
            password: "",
        };
    },
    computed: {
        ...mapGetters([
            "countCart",
            "navList",
            "education",
            "products",
            "service",
        ]),
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
        this.getProduct();
        this.getCart();
    },
    mounted() {},
    methods: {
        ...mapActions(["getProduct", "getCart", "toggleAuth"]),
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }

            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        handleSubmit() {
            if (this.username !== "admin" && this.password !== "admin") {
                alert("-- только для администраторов --");
            } else {
                this.$router.push("/admin");
                this.showModal = !this.showModal;
                this.username = "";
                this.password = "";
                this.toggleAuth();
            }
        },
    },
};
</script>
<style lang="scss">
@import "../../../assets/css/_var.scss";
@import "../../../assets/css/addons.scss";
header {
    font-family: "Alegreya Sans";
    font-weight: 900;
    background-color: $background-nav;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: all 0.5s ease;
    color: #fff;
    &:hover {
        @include transition-8-all;
        background-color: $background-nav-hover;
    }

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding-top: 12px;
        transition: 0.5s ease all;
        width: 100%;
        margin: 0 auto;

        @media (min-width: 1140px) {
            max-width: 1140px;
        }
    }

    ul,
    .link {
        font-weight: 500;
        color: #fff !important;
        list-style: none;
        text-decoration: none;
    }

    li {
        text-transform: uppercase;
        padding: 10px;
        margin-left: 16px;

        @media (max-width: 750px) {
            padding: 5px;
        }
        .link {
            font-size: 14px;
            transition: 0.5s ease all;
            padding-bottom: 4px;

            @media (max-width: 1200px) {
                font-size: 12px;
            }
        }
    }

    .navigation__item {
        position: relative;
        width: 150px;
        border-radius: 5px;
        cursor: pointer;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: $box-shadow;

        &:hover {
            background-color: $background-nav-item-hover;
            & a {
                color: black;
            }
        }

        @media (max-width: 1200px) {
            width: 120px;
        }
    }

    .logo {
        display: flex;
        align-items: center;
        flex-grow: 1;
        padding-bottom: 10px;
        &__img {
            width: 50px;
            height: 50px;
            transition: 0.5s ease all;
        }
        @media (max-width: 1200px) {
            padding-left: 15px;
        }
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;

        i {
            cursor: pointer;
            font-size: 24px;
            transition: 0.8s ease all;
        }
    }

    .icon-active {
        transform: rotate(180deg);
    }

    .dropdown-navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        overflow: auto;
        width: 100%;
        max-width: 320px;
        height: 100%;
        background-color: $background-nav;
        top: 46.5px;
        left: -10px;
        bottom: 0;
        padding: 0;

        ul {
        }

        li {
            margin-left: 0;
        }
        .mobile_item {
            width: 80%;
            margin: 5px 0;
            padding: 15px;

            & .syringe {
                width: 15px;
            }

            & .sub-menu__link {
                width: 100%;
                & a {
                    font-size: 10px;
                }
            }
            & .sub-menu__item {
                width: 120%;
            }
        }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
        transform: translateX(-320px);
    }
    .mobile-nav-enter-to {
        transform: translateX(0);
    }
}

.blur {
    @media (min-width: 750px) {
        transition: all 0.5s ease;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        @include blur;
        z-index: 98;
    }
}
.filter {
    background-color: rgba(255, 255, 255, 0.8);
}
</style>
