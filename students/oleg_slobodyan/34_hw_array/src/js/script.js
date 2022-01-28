
(function () {
    // Мінімум
    // Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
    const buyList = [];
    addProduct({
        productName: "Milk",
        quantity: 2,
        isBought: true,
        price: 22,
    });
    addProduct({
        productName: "Eggs",
        quantity: 10,
        isBought: false,
        price: 3.5,
    });
    addProduct({
        productName: "Bread",
        quantity: 2,
        isBought: false,
        price: 18,
    });
    addProduct({
        productName: "Meat",
        quantity: 1,
        isBought: true,
        price: 200,
    });
    addProduct({
        productName: "Chease",
        quantity: 1,
        isBought: false,
        price: 120,
    });
    addProduct({
        productName: "Choclate",
        quantity: 4,
        isBought: false,
        price: 80,
    });
    // 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
    function getBuyList(arr) {
        const productList = JSON.parse(JSON.stringify(buyList));

        return productList.sort((a, b) => {
            if (a.isBought > b.isBought) {
                return 1
            }
            if (a.isBought < b.isBought) {
                return -1
            }
        });
    }

    // 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
    function findProductIndex(productName) {
        return buyList.map(function (item) {
            return item.productName;
        }).indexOf(productName);
    }

    function buyingProduct(productName) {
        const productIndex = findProductIndex(productName);
        return buyList[productIndex].isBought = true;
    }
    buyingProduct("Bread");
    console.log(buyList);

    console.log(getBuyList(buyList));

    // 3. Створення списку (не) придбаних продуктів.
    function needBuyList(arr) {
        const needBuyList = [];

        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].isBought) {
                needBuyList.push(arr[i]);
            }
        }

        return needBuyList;
    }
    console.log(needBuyList(buyList));

    // Норма
    // 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
    function removeProduct(productName) {
        const productIndex = findProductIndex(productName);
        buyList.splice(productIndex, 1);
    }
    console.log(removeProduct("Meat"));

    // 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
    function addProduct(product) {
        const productIndex = findProductIndex(product.productName);
        if (productIndex === -1) {
            product.sumPrice = product.quantity * product.price;
            buyList.push(product);
        } else {
            buyList[productIndex].quantity = buyList[productIndex].quantity + product.quantity;
        }
    }
    addProduct({
        productName: "Beer",
        quantity: 4,
        isBought: false,
        price: 46,
    });
    addProduct({
        productName: "Eggs",
        quantity: 16,
        isBought: false,
        price: 46,
    });

    console.log(buyList);

    // Максимум
    // 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
    function totalQtyAll(arr) {
        const res = arr.reduce(function (acc, curVel) {
            return acc = acc + curVel.quantity;
        }, 0);
        return res;
    }
    console.log(totalQtyAll(buyList));

    // 2. Підрахунок суми всіх (не) придбаних продуктів.
    function totalQtyNeedBuy(arr) {
        const needBuy = arr.filter(function (item) {
            return (!item.isBought);
        });
        return totalQtyAll(needBuy);
    }
    console.log(totalQtyNeedBuy(buyList));

    // 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

    function sortBuyList(arr, param = true) {
        const productList = JSON.parse(JSON.stringify(arr));
        productList.sort((a, b) => {

            if (a.sumPrice > b.sumPrice) {
                return 1
            }
            if (b.sumPrice > a.sumPrice) {
                return -1
            }
            if (b.sumPrice === a.sumPrice) {
                return 0
            }
        });
        if (param) return productList

        if (!param) return productList.reverse();
    }
    console.log(sortBuyList(buyList, false));
})();
