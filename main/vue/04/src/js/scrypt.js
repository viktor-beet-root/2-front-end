import * as Vue from 'vue/dist/vue.esm-browser';
import products from "./products";

const currencySymbol = '$';

const productListData = {
    data() {
        return {
            products,
            currencySymbol,
            outOfStockMessage: 'Out of Stock',
            sortValueList: ['price', 'name', 'stock'],
            sortValue: '',
            isDirect: true
        }
    },
    computed: {
        productList() {
            return this.products.slice().reverse();
        },
    },
    methods: {
        addToCart(product) {
            const productIndex = cartVm.isProductInCart(product.id);

            if (productIndex === -1) {
                cartVm.cartList.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    specialPrice: product.specialPrice,
                    qty: 1,
                    img: product.img,
                    sku: product.sku
                });
            } else {
                cartVm.cartList[productIndex].qty++;
            }

            cartVm.seveLocalStorage();
        }
    }
};

const productListVm = Vue.createApp(productListData).mount('#productList');

const cartData = {
    data() {
        return {
            cartList: [],
            currencySymbol,
            total: 0
        }
    },
    methods: {
        setQty(isDecr, product) {
            if (!isDecr && product.qty === 1) return;

            product.qty = !isDecr ? product.qty - 1 : product.qty + 1;

            this.seveLocalStorage();
        },
        getTotalProcutPrice(product) {
            let price = product.price > product.specialPrice ? product.specialPrice : product.price;

            return price * product.qty;
        },
        isProductInCart(productId) {
            return this.cartList.map(product => product.id).indexOf(productId);
        },
        getTotal() {
            if (!this.cartList.length) return 0;

            const piceList = this.cartList.map(product => this.getTotalProcutPrice(product));

            return piceList.reduce((previousValue, currentValue) => previousValue + currentValue);
        },
        removeProduct(index) {
            this.cartList.splice(index, 1);
            this.seveLocalStorage();
        },
        seveLocalStorage() {
            localStorage.setItem('cartList', JSON.stringify(this.cartList));
        }
    },
    mounted() {
        this.cartList = JSON.parse(localStorage.getItem('cartList'));
    }
};

const cartVm = Vue.createApp(cartData).mount('#cart');

