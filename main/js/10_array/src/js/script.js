const users = [
    {
        user: "Kolya",
        id: 0
    },
    {
        user: "Vasya",
        id: 1
    },
    {
        user: "Viktor",
        id: 2
    },
    {
        user: "Kolya",
        id: 3
    },
    {
        user: "Vasya",
        id: 4
    },
];

const s = users.find(function (item, index, arr) {
    return item.user === "Vasya";
});

console.log(s);

const a = users.filter(function (item, index, arr) {
    console.log(item.user === "Vasya", item.user.toLowerCase());
    return item.user === "Vasya";
});

console.log(a);

const z = users.map(function (item, index, arr) {
    return item.user;
});

console.log(users);
console.log(z);

// const cart = [
//     {
//         id: 0,
//         name: 'Product 1',
//         qty: 2,
//         price: 150,
//     },
//     {
//         id: 1,
//         name: 'Product 2',
//         qty: 1,
//         price: 50,
//     },
//     {
//         id: 2,
//         name: 'Product 3',
//         qty: 5,
//         price: 10,
//     }
// ];

// const e = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const dd = e.reduce(function (accumulator, currentValue) {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// });

// console.log(dd);

// const total = cart.reduce(function (accumulator, currentValue) {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue.qty * currentValue.price;
// }, 0);

// console.log(total);


function cart() {
    const cart = [];
    let productId = 1;

    return {
        addCart(product) {
            if (!product) return;

            const indexProductSku = this.findIndexProductBySku(product.sku);

            if (indexProductSku === -1) {
                product.id = productId++;
                cart.push(product);
            } else {
                this.inctemQty(product, indexProductSku);
            }
        },
        findIndexProductBySku(sku) {
            return cart.map(function (item) {
                return item.sku;
            }).indexOf(sku);
        },
        inctemQty(product, indexProductSku) {
            cart[indexProductSku].qty = cart[indexProductSku].qty + product.qty;
        },
        getCart() {
            return cart.map(function (product) {
                return Object.assign({}, product);
            });
        },
    };
}

const pageCart = cart();

pageCart.addCart({
    productName: "Product 1",
    sku: 1234,
    qty: 1,
    price: 50
});

pageCart.addCart({
    productName: "Product 1",
    sku: 1234,
    qty: 2,
    price: 50
});

pageCart.addCart({
    productName: "Product 2",
    sku: 12,
    qty: 2,
    price: 50
});

const viewCart = pageCart.getCart();

