import education from "./education";
import products from "./products";
import service from "./service";

export default {
    state: {
        navList: [
            {
                title: "Главная",
                link: "/home",
            },
            {
                title: "Обучение",
                link: "/education",
            },
            {
                title: "Продукция",
                link: "/products",
            },
            {
                title: "Услуги",
                link: "/service",
            },
            {
                title: "Мои работы",
                link: "/instagram",
            },
        ],
        education,
        products,
        service,
    },
    getters: {
        navList(state) {
            return state.navList;
        },
        education(state) {
            return state.education;
        },
        products(state) {
            return state.products;
        },
        service(state) {
            return state.service;
        },
    },
    mutations: {},
    actions: {},
};
