<template>
    <div
        class="service-card flex md6 lg3 xs12"
        v-for="(service, i) in services"
        :key="i"
    >
        <cosmetology-l-info @click="show = !show" />
        <cosmetology-service-order v-if="!show" :options="service.drop" />
        <va-card
            class="service-card__front"
            :ref="service.refer"
            :id="service.refer"
            color="#71148A"
            gradient
        >
            <va-card-title
                style="
                    text-transform: none;
                    font-size: 13px;
                    font-weigth: bold;
                    justify-content: center;
                    text-align: center;
                    margin-bottom: 20px;
                    width: 100%;
                "
                >{{ service.title }}</va-card-title
            >
            <div>
                <va-card-content>
                    <p class="service-card__info">
                        {{ service.description }}
                    </p>
                    <template v-for="(item, j) in service.category" :key="j">
                        <ul class="service-card__list">
                            <li class="service-card__item service-item">
                                <transition name="fade">
                                    <cosmetology-service-card-info
                                        :title="item.title"
                                        :text="item.text"
                                        :text1="item.text1"
                                        :text2="item.text2"
                                        :titleMain="item.titleMain"
                                    />
                                </transition>
                                <span class="service-item__price"
                                    >{{ item.price }} {{ currencySymbol }}</span
                                >
                            </li>
                        </ul>
                    </template>
                    <transition name="fade">
                        <div
                            v-if="show"
                            class="service-card__back back"
                            :class="{ showBack: show }"
                        >
                            <p class="back__info">{{ service.info }}</p>
                        </div>
                    </transition>
                </va-card-content>
            </div>
        </va-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CosmetologyLInfo from "../ui/icons/CosmetologyLInfo.vue";
import CosmetologyServiceCardInfo from "./CosmetologyServiceCardInfo.vue";
import CosmetologyServiceOrder from "./CosmetologyServiceOrder.vue";
export default {
    components: {
        CosmetologyServiceCardInfo,
        CosmetologyLInfo,
        CosmetologyServiceOrder,
    },
    name: "cosmetology-l-service-card",
    props: {
        services: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            show: false,
        };
    },
    computed: {
        ...mapGetters(["currencySymbol", "currencyDollar", "currencyEuro"]),
    },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/_var.scss";
.icon_info {
    position: absolute;
    top: -5px;
    left: -5px;
    z-index: 40;
    width: 40px;
}
.service-card {
    transition: all 0.5s ease;
    position: relative;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    &:hover {
        transition: all 0.5s ease;
        box-shadow: $box-shadow;
    }
}

.service-card {
    &__info {
        font-size: 12px;
    }

    &__list {
        padding-inline-start: 0;
    }

    &__item {
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__back {
        background-color: #71148a;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        color: white;
        /* z-index: 200; */
    }
}
.back {
    overflow-x: hidden;
    padding: 15px;
    &__info {
    }
}
.service-item {
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    padding-bottom: 5px;
    &__title {
    }

    &__info {
        &:hover {
            & > .service-item__text {
                box-shadow: $box-shadow;
            }
        }
    }

    &__text {
    }

    &__price {
        align-self: flex-end;
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
