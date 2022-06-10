<template>
    <div @click="show = !show" class="service-item__info">
        <p
            class="service-item__group"
            style="font-weigth: 900; font-style: italic"
        >
            {{ titleMain }}
        </p>
        <p class="service-item__title">
            {{ title }}
            <svg
                v-if="text"
                class="arrow"
                fill="#fff"
                viewBox="0 0 1030 638"
                width="10"
            >
                <path
                    d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
                ></path>
            </svg>
        </p>
        <transition name="fade">
            <p v-if="show" class="service-item__text">
                {{ text }}
            </p>
        </transition>
        <transition name="fade">
            <p v-if="show" class="service-item__text">
                {{ text1 }}
            </p>
        </transition>
        <transition name="fade">
            <p v-if="show" class="service-item__text">
                {{ text2 }}
            </p>
        </transition>
    </div>
</template>
<script>
export default {
    name: "cosmetology-l-service-card-info",
    props: {
        title: String,
        titleMain: {
            type: String,
            default() {
                return "";
            },
        },
        text: {
            type: String,
            default() {
                return "";
            },
        },
        text1: {
            type: String,
            default() {
                return "";
            },
        },
        text2: {
            type: String,
            default() {
                return "";
            },
        },
    },
    data() {
        return {
            show: false,
        };
    },
};
</script>
<style lang="scss" scoped>
.arrow {
    margin-left: 5px;
}
.service-item {
    &__info {
        font-size: 12px;
        padding: 0;
        margin: 0;
    }

    &__title {
        margin-bottom: 0;
    }
    &__group {
        font-size: 14px;
    }

    &__text {
        padding: 0;
        margin: 0;
        font-size: 10px;
        color: rgba(255, 255, 255, 0.7);
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
</style>
