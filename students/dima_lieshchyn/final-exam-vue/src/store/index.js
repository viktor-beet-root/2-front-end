import { createStore } from "vuex";
import navList from "./modules/nav/navList";
import store from "./modules/store/store";
import currency from "./modules/currency/currency";
export default createStore({
    modules: {
        navList,
        store,
        currency,
    },
});
