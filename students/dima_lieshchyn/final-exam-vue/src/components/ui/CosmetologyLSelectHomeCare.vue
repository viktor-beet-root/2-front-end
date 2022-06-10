<template>
    <div class="aselect">
        <div class="selector" @click="toggle()">
            <div class="label">
                <span>{{ value }}</span>
            </div>
            <div class="arrow" :class="{ expanded: visible }"></div>
            <div :class="{ hidden: !visible, visible }">
                <ul>
                    <li @click="getProductsByClean($event), select(list[0])">
                        {{ list[0] }}
                    </li>
                    <li @click="getProductsByTonic($event), select(list[1])">
                        {{ list[1] }}
                    </li>
                    <li @click="getProductsByCreams($event), select(list[2])">
                        {{ list[2] }}
                    </li>
                    <li @click="getProductsByOils($event), select(list[3])">
                        {{ list[3] }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "cosmetology-l-select-home-care",
    data() {
        return {
            visible: false,
            value: "Категории",
            list: [
                "Очищающие средства",

                "Тонизирующие средства",

                "Крема/Сыворотки",

                "Масла/Скрабы",
            ],
        };
    },
    computed: {},
    methods: {
        toggle() {
            this.visible = !this.visible;
        },

        select(option) {
            this.value = option;
        },
        ...mapActions([
            "getProductsByClean",
            "getProductsByTonic",
            "getProductsByCreams",
            "getProductsByOils",
        ]),
    },
};
</script>
<style lang="scss" scoped>
.aselect {
    z-index: 1500;
    /* width: 280px; */
    /* margin: 20px auto; */
    .selector {
        border: 1px solid gainsboro;
        background: #f8f8f8;
        position: relative;
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
            display: block;
            padding: 7px;
            font-size: 16px;
            color: #888;
        }
    }
    ul {
        z-index: 1500;
        width: 150%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: 16px;
        border: 1px solid gainsboro;
        position: absolute;
        background: #fff;
    }
    li {
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
