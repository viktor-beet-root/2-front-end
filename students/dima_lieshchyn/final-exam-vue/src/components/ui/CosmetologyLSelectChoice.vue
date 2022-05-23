<template>
    <div class="aselect">
        <div class="selector" @click="toggle()">
            <div class="label">
                <span>{{ value }}</span>
            </div>
            <div class="arrow" :class="{ expanded: visible }"></div>
            <div :class="{ hidden: !visible, visible }">
                <ul>
                    <li @click="getProductsByGoodFood($event), select(list[0])">
                        {{ list[0] }}
                    </li>
                    <li @click="getProductsByBiox($event), select(list[1])">
                        {{ list[1] }}
                    </li>
                    <li @click="getProductsByFito($event), select(list[2])">
                        {{ list[2] }}
                    </li>
                    <li @click="getProductsByChemical($event), select(list[3])">
                        {{ list[3] }}
                    </li>
                    <li
                        @click="getProductsByProHealth($event), select(list[4])"
                    >
                        {{ list[4] }}
                    </li>
                    <li
                        @click="getProductsByCosmetics($event), select(list[5])"
                    >
                        {{ list[5] }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "cosmetology-l-select-choice",
    data() {
        return {
            visible: false,
            value: "Категории",
            list: [
                "Добрая еда",

                "Biox",

                "Фитотерапия",

                "Бытовая химия",

                "ProHealth",

                "Косметика",
            ],
        };
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        select(option) {
            this.value = option;
        },
        ...mapActions([
            "getProductsByBiox",
            "getProductsByGoodFood",
            "getProductsByFito",
            "getProductsByChemical",
            "getProductsByProHealth",
            "getProductsByCosmetics",
        ]),
    },
};
</script>
<style lang="scss">
.aselect {
    z-index: 1500;
    max-width: 200px;
    min-width: 100px;
    @media (max-width: 500px) {
        display: none;
    }
    .selector {
        border-radius: 15px;
        border: 1px solid gainsboro;
        background: #f8f8f8;
        position: relative;
        /* z-index: 1; */
        .arrow {
            position: absolute;
            right: 10px;
            top: 40%;
            width: 0;
            height: 0;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid #888;
            transform: rotateZ(0deg) translateY(0px);
            transition-duration: 0.3s;
            transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
        }
        .expanded {
            transform: rotateZ(180deg) translateY(2px);
        }
        .label {
            height: 39px;
            border-radius: 15px;
            display: block;
            padding: 8px;
            font-size: 16px;
            color: #888;
        }
    }
    ul {
        z-index: 1500;
        border-radius: 15px;
        width: 150%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: 16px;
        border: 1px solid gainsboro;
        position: absolute;
        /* z-index: 1; */
        background: #fff;
    }
    li {
        border-radius: 15px;
        padding: 12px;
        color: #666;
        &:hover {
            color: white;
            background: seagreen;
        }
    }
    .current {
        background: #eaeaea;
    }
    .hidden {
        visibility: hidden;
    }
    .visible {
        visibility: visible;
    }
}
</style>
