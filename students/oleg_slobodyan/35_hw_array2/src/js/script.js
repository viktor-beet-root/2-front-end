(function () {
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
                    this.icrecQty(product, indexProductSku);
                }
            },
            findIndexProductBySku(sku) {
                return cart.map(item => item.sku).indexOf(sku);
            },
            icrecQty(product, indexProductSku) {
                cart[indexProductSku].qty = cart[indexProductSku].qty + product.qty;
            },
            getCart() {
                return cart.map(function (product) {
                    return Object.assign({}, product);
                });
            },
            // 1. Виадалення продукту по sku
            removeProductbySku(sku) {
                if (typeof sku !== "number") return;
                const indxRemoveProd = this.findIndexProductBySku(sku);

                if (~indxRemoveProd) {
                    cart.splice(indxRemoveProd, 1);
                }
            },
            // 2. Метод рахує заалтну сума карзини
            totalPriceCart() {
                return cart.reduce(function (acc, currVal) {
                    return acc = acc + (currVal.qty * currVal.price);
                }, 0);
            },
            // 3. Метод рахує заалтну кількість товарів у корзині 
            totalProductQty() {
                return cart.reduce(function (acc, currVal) {
                    return acc = acc + currVal.qty;
                }, 0);
            },
            // 4. Метод сортує товари в корзині по ціні (метод приймає параметр сортування true/false)
            sortProductByPrice(param = true) {

                const res = JSON.parse(JSON.stringify(cart));

                res.sort((a, b) => {

                    if (a.price > b.price) {
                        return 1
                    }
                    if (b.price > a.price) {
                        return -1
                    }
                    if (a.price === b.price) {
                        return 0
                    }
                });
                if (param) {
                    return res;
                } else return res.reverse();
            }

        };
    }

    const pageCart = cart();

    pageCart.addCart({
        productName: "Product-1",
        sku: 1234,
        qty: 1,
        price: 50
    });
    pageCart.addCart({
        productName: "Product-1",
        sku: 1234,
        qty: 2,
        price: 50
    });
    pageCart.addCart({
        productName: "Product-2",
        sku: 3442,
        qty: 2,
        price: 150
    });
    pageCart.addCart({
        productName: "Product-3",
        sku: 3872,
        qty: 5,
        price: 125
    });
    pageCart.addCart({
        productName: "Product-4",
        sku: 3093,
        qty: 2,
        price: 12
    });

    pageCart.removeProductbySku(3872);
    const viewCart = pageCart.getCart();
    console.log(pageCart.totalPriceCart());
    console.log(pageCart.totalProductQty());
    console.log(pageCart.sortProductByPrice(false), "sort price");
    console.log(viewCart);

})();
