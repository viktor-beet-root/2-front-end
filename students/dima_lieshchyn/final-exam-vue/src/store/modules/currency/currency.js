// import axios from "axios";
import request from "@/store/request";

export default {
    state: {
        current: {},
        dollar: 0,
        euro: 0,
    },
    getters: {
        current(state) {
            return state.current;
        },
        dollar(state) {
            return state.dollar;
        },
        euro(state) {
            return state.euro;
        },
    },
    mutations: {
        setCurrent(state, current) {
            state.current = current;
        },
        setDollar(state, dollar) {
            state.dollar = dollar;
        },
        setEuro(state, euro) {
            state.euro = euro;
        },
    },
    actions: {
        async getCurrency({ commit }) {
            const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
            const current = await request(url);
            commit("setCurrent", current);
        },
        async getDollar({ commit }) {
            const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
            const current = await request(url);
            const dollar = current[0].sale;

            commit("setDollar", dollar);
        },
        async getEuro({ commit }) {
            const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
            const current = await request(url);
            const euro = current[1].sale;

            commit("setEuro", euro);
        },
    },

};
