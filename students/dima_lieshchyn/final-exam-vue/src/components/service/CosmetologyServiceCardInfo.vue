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
        </p>
        <p v-if="show" class="service-item__text">
            {{ text }}
        </p>
        <p v-if="show" class="service-item__text">
            {{ text1 }}
        </p>
        <p v-if="show" class="service-item__text">
            {{ text2 }}
        </p>
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
</style>
