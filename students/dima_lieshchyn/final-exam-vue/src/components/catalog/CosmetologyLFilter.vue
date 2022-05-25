<template>
    <div class="filter-block filter">
        <div class="filter-block__wrapper">
            <div class="filter__group group">
                <div class="group__items">
                    <cosmetology-l-refresh
                        @click="getProduct($event)"
                        class="filter_btn btn btn-secondary refresh"
                    />
                </div>
            </div>
            <div class="filter__group group">
                <div class="group__items">
                    <cosmetology-l-price-icon
                        @click="getProductsBySortUp"
                        class="filter_btn btn btn-secondary cheaper"
                    />
                    <cosmetology-l-price-icon
                        @click="getProductsBySortDown"
                        class="filter_btn btn btn-secondary"
                    />
                    <cosmetology-l-in-stock
                        @click="getProductsBySortStock"
                        class="filter_btn btn btn-secondary"
                    />
                </div>
            </div>
            <div class="filter__group group">
                <div class="group__items">
                    <button
                        class="filter_btn btn btn-secondary"
                        @click="getProductsByHomeCare"
                    >
                        Домашний уход
                    </button>
                    <cosmetology-l-select-home-care />
                </div>
                <div class="group__items">
                    <button
                        class="filter_btn btn btn-secondary"
                        @click="getProductsByChoice"
                    >
                        CHOICE
                    </button>
                    <cosmetology-l-select-choice />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import CosmetologyLSelectChoice from "../ui/CosmetologyLSelectChoice.vue";
import CosmetologyLSelectHomeCare from "../ui/CosmetologyLSelectHomeCare.vue";
import CosmetologyLInStock from "../ui/icons/CosmetologyLInStock.vue";
import CosmetologyLPriceIcon from "../ui/icons/CosmetologyLPriceIcon.vue";
import CosmetologyLRefresh from "../ui/icons/CosmetologyLRefresh.vue";
export default {
    components: {
        CosmetologyLSelectHomeCare,
        CosmetologyLSelectChoice,
        CosmetologyLRefresh,
        CosmetologyLPriceIcon,
        CosmetologyLInStock,
    },
    name: "cosmetology-l-filter",
    data() {
        return {
            search: "",
            test: "test",
        };
    },
    computed: {
        ...mapGetters(["productList"]),
    },
    methods: {
        ...mapActions([
            "getProductsByChoice",
            "getProductsByHomeCare",
            "getProduct",
            "getProductsBySortUp",
            "getProductsBySortDown",
            "getProductsBySortStock",
        ]),
    },
    mounted() {},
};
</script>
<style lang="scss">
.filter-block {
    /* width: 100%;
    height: 65px; */
    position: fixed;
    /* top: 78px; */
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    z-index: 50;
    @media (max-width: 750px) {
        top: 50px;
    }
    &__wrapper {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        @media (max-width: 1100px) {
            /* justify-content: center; */
        }
    }
}
.filter {
    &_btn {
        margin-right: 15px;
        border-radius: 15px;

        & .btn {
            @media (min-width: 1200px) {
                font-size: 12px;
                padding: 0 !important;
                margin: 0;
            }
        }
    }

    &__group {
        display: flex;
        padding: 10px;
        flex-wrap: wrap;
        @media (max-width: 500px) {
            padding: 9px;
        }
    }
}
.refresh {
    @media (max-width: 750px) {
        width: 45px !important;
        margin: 0;
    }
}
.group {
    margin-right: 30px;
    @media (max-width: 1100px) {
        margin-right: 0;
    }

    &__title {
        display: block;
    }

    &__items {
        display: flex;
        align-items: center;
        margin-right: 15px;
    }
}
.search {
    display: block;
    display: flex;
    align-items: flex-end;
    &__item {
        border-radius: 15px;
    }
}
.cheaper {
    transform: rotate(180deg);
}
</style>
