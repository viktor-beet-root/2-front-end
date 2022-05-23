import request from "../../request";
const host = "http://localhost:3000/api/";

export default {
    state: {
        category: false,
        searchValue: "",
        productList: [],
        cart: [],
        total: 0,
        currencySymbol: "₴",
        currencyDollar: "$",
        currencyEuro: "€",
        outOfStockMessage: "Нет в наличии",
    },
    getters: {
        total(state) {
            return state.total;
        },
        searchValue(state) {
            return state.searchValue;
        },
        category(state) {
            return state.category;
        },
        productList(state) {
            return state.productList;
        },
        currencySymbol(state) {
            return state.currencySymbol;
        },
        currencyDollar(state) {
            return state.currencyDollar;
        },
        currencyEuro(state) {
            return state.currencyEuro;
        },
        outOfStockMessage(state) {
            return state.outOfStockMessage;
        },
        cart(state) {
            return state.cart;
        },
        countCart(state) {
            return state.cart.length;
        },
    },
    mutations: {
        addToTotal(state, price) {
            state.total = state.total + price;
        },
        selectRefresh(state) {
            state.category = true;
        },
        selectGroup(state) {
            state.category = false;
        },
        setProduct(state, productList) {
            state.productList = productList;
        },
        productsByChoice(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "choice") {
                    state.productList.push(product);
                }
            });
        },
        productsByGoodFood(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "choice" && product.type === "Добрая еда") {
                    state.productList.push(product);
                }
            });;
        },
        productsByBiox(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "choice" && product.type === "Biox") {
                    state.productList.push(product)
                }
            });;
        },
        productsByFito(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "choice" && product.type === "Фитотерапия") {
                    state.productList.push(product)
                }
            });;
        },
        productsByChemical(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "choice" && product.type === "Бытовая химия") {
                    state.productList.push(product)
                }
            });;
        },
        productsByProHealth(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "choice" && product.type === "ProHealth") {
                    state.productList.push(product)
                }
            });;
        },
        productsByCosmetics(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "choice" && product.type === "Косметика") {
                    state.productList.push(product)
                }
            });;
        },
        productsByHomeCare(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "homeCare") {
                    state.productList.push(product)
                }
            });;
        },
        productsByClean(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "homeCare" && product.type === "Очищающие средства") {
                    state.productList.push(product)
                }
            });;
        },
        productsByTonic(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "homeCare" && product.type === "Тонизирующие средства") {
                    state.productList.push(product)
                }
            });;
        },
        productsByCreams(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "homeCare" && product.type === "Крема/Сыворотки") {
                    state.productList.push(product)
                }
            });;
        },
        productsByOils(state, productList) {
            state.productList = [];
            productList.forEach((product) => {
                if (product.category === "homeCare" && product.type === "Масла/Скрабы") {
                    state.productList.push(product)
                }
            });;
        },
        productsSortByUp(state) {
            state.productList.sort((a, b) => a["price"] - b["price"]);
        },
        productsSortByDown(state) {
            state.productList.sort((a, b) => b["price"] - a["price"]);
        },
        productsSortByStock(state) {
            state.productList.sort((a, b) => b["instock"] - a["instock"]);
        },
        addToCart(state, product) {
            state.cart.push(product);
        },
        changeQty(state, options) {
            state.cart[options.productIndex].qty = options.qty;
        },
        getCart(state, products) {
            state.cart = products;
        },
        removeProductCart(state, productIndex) {
            state.cart.splice(productIndex, 1);
        },
    },
    actions: {
        addToTotal({ commit }, price) {
            commit("addToTotal", price);
        },
        async getCart({ commit }) {
            const url = host + "cart";
            const products = await request(url);
            commit("getCart", products);
        },
        async getProduct({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("setProduct", products);
        },

        //Сортировка по СHoice
        async getProductsByChoice({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByChoice", products);
        },
        // Для селектов
        async getProductsByGoodFood({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByGoodFood", products);
        },
        async getProductsByFito({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByFito", products);
        },
        async getProductsByChemical({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByChemical", products);
        },
        async getProductsByProHealth({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByProHealth", products);
        },
        async getProductsByCosmetics({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByCosmetics", products);
        },
        async getProductsByBiox({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByBiox", products);
        },
        //Сортировка по Домашний уход
        async getProductsByHomeCare({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByHomeCare", products);
        },
        // Для селектов
        async getProductsByClean({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByClean", products);
        },
        async getProductsByTonic({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByTonic", products);
        },
        async getProductsByCreams({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByCreams", products);
        },
        async getProductsByOils({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsByOils", products);
        },
        //По возростанию
        async getProductsBySortUp({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsSortByUp", products);
        },
        //По убыванию
        async getProductsBySortDown({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsSortByDown", products);
        },
        //ПО наличию
        async getProductsBySortStock({ commit }) {
            const url = host + "products";
            const products = await request(url);
            commit("productsSortByStock", products);
        },
        async addToCart({ commit, dispatch, state }, data) {
            let oldQty = null;

            const productIndex = state.cart.findIndex((product) => {
                if (product.id === data.id) {
                    oldQty = product.qty;
                    return true;
                }
            });

            if (productIndex === -1) {
                const url = host + "cart";
                const product = await request(url, "POST", data);
                commit("addToCart", product);
            } else {
                dispatch("changeQty", {
                    productIndex,
                    qty: oldQty + 1,
                });
            }
        },
        async changeQty({ commit, state }, options) {
            commit("changeQty", options);

            const product = state.cart[options.productIndex];
            const url = host + "cart/" + product.id;
            await request(url, "PUT", product);
        },
        async removeProductCart({ commit, state }, productIndex) {
            const product = state.cart[productIndex];
            const url = host + "cart/" + product.id;
            const respose = await request(url, "DELETE", product);

            if (respose.message) {
                console.log(respose.message);
            }

            commit("removeProductCart", productIndex);
        },
    },
}

