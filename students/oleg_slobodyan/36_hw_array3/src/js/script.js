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
            removeProductbySku(sku) {
                if (typeof sku !== "number") return;
                const indxRemoveProd = this.findIndexProductBySku(sku);

                if (~indxRemoveProd) {
                    cart.splice(indxRemoveProd, 1);
                }
            },
            totalPriceCart() {
                return cart.reduce(function (acc, currVal) {
                    return acc = acc + (currVal.qty * currVal.price);
                }, 0);
            },
            totalProductQty() {
                return cart.reduce(function (acc, currVal) {
                    return acc = acc + currVal.qty;
                }, 0);
            },
            sortProductByPrice(param) {
                const sortPriceList = cart.map(item => item.price).sort((a, b) => a - b);
                const res = [];

                for (let i = 0; i < sortPriceList.length; i++) {
                    const elem = cart.find(item => item.price === sortPriceList[i]);
                    if (param === "up" || param === "+") {
                        res.push(elem);

                    } else if (param === "down" || param === "-") {
                        res.unshift(elem);
                    }
                }

                return res;
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
    console.log(pageCart.sortProductByPrice("up"));
    console.log(viewCart);

})();
