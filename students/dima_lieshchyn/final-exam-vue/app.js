const express = require("express");
const { v4 } = require("uuid");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const PRODUCTS = [
    {
        id: v4(),
        category: "choice",
        type: "Добрая еда",
        name: "Товар 1",
        price: 500,
        specialPrice: 250,
        labels: {
            new: "Новинка",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: false,
        img: "choice_1.jpg",
        sku: "SDW123",
        qty: "2"
    },
    {
        id: v4(),
        category: "choice",
        type: "Biox",
        name: "Товар 2",
        price: 600,
        specialPrice: 500,
        labels: {
            freeShipping: "Бесплатная доставка",
            new: "Новинка",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_2.jpg",
        sku: "QWE321",
        qty: "4"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Просто",
        name: "Товар 3",
        price: 300,
        specialPrice: 400,
        labels: {
            bestPrice: "Спер цена",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: false,
        img: "choice_3.jpg",
        sku: "CXZ221",
        qty: "8"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Просто",
        name: "Товар 4",
        price: 1200,
        specialPrice: 800,
        labels: {},
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_4.jpg",
        sku: "FGH721",
        qty: "7"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Просто",
        name: "Товар 5",
        price: 2000,
        specialPrice: 1000,
        labels: {},
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_5.jpg",
        sku: "FGH721",
        qty: "6"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Хз",
        name: "Товар 6",
        price: 5500,
        specialPrice: 4500,
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_6.jpg",
        sku: "RFV821",
        qty: "5"
    },
    {
        id: v4(),
        category: "choice",
        type: "Добрая еда",
        name: "Товар 7",
        price: 120,
        specialPrice: 250,
        labels: {
            new: "Новинка",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: false,
        img: "choice_1.jpg",
        sku: "SDW123",
        qty: "2"
    },
    {
        id: v4(),
        category: "choice",
        type: "Biox",
        name: "Товар 8",
        price: 840,
        specialPrice: 900,
        labels: {
            freeShipping: "Бесплатная доставка",
            new: "Новинка",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_2.jpg",
        sku: "QWE321",
        qty: "4"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Крема/Сыворотки",
        name: "Товар 9",
        price: 215,
        specialPrice: 120,
        labels: {
            bestPrice: "Спер цена",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: false,
        img: "choice_3.jpg",
        sku: "CXZ221",
        qty: "8"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Очищающие средства",
        name: "Товар 10",
        price: 480,
        specialPrice: 300,
        labels: {},
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_4.jpg",
        sku: "FGH721",
        qty: "7"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Тонизирующие средства",
        name: "Товар 11",
        price: 229,
        specialPrice: 228,
        labels: {},
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_5.jpg",
        sku: "FGH721",
        qty: "6"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Масла/Скрабы",
        name: "Товар 12",
        price: 6500,
        specialPrice: 8000,
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_6.jpg",
        sku: "RFV821",
        qty: "5"
    },
    {
        id: v4(),
        category: "choice",
        type: "Косметика",
        name: "Товар 12",
        price: 295,
        specialPrice: 294,
        labels: {
            new: "Новинка",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: false,
        img: "choice_1.jpg",
        sku: "SDW123",
        qty: "2"
    },
    {
        id: v4(),
        category: "choice",
        type: "Фитотерапия",
        name: "Товар 13",
        price: 3499,
        specialPrice: 3399,
        labels: {
            freeShipping: "Бесплатная доставка",
            new: "Новинка",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_2.jpg",
        sku: "QWE321",
        qty: "4"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Очищающие средства",
        name: "Товар 14",
        price: 2800,
        specialPrice: 4900,
        labels: {
            bestPrice: "Спер цена",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: false,
        img: "choice_3.jpg",
        sku: "CXZ221",
        qty: "8"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Тонизирующие средства",
        name: "Товар 15",
        price: 6200,
        specialPrice: 6100,
        labels: {},
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_4.jpg",
        sku: "FGH721",
        qty: "7"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Крема/Сыворотки",
        name: "Товар 16",
        price: 10000,
        specialPrice: 4500,
        labels: {},
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_5.jpg",
        sku: "FGH721",
        qty: "6"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Масла/Скрабы",
        name: "Товар 17",
        price: 6800,
        specialPrice: 2114,
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_6.jpg",
        sku: "RFV821",
        qty: "5"
    },
    {
        id: v4(),
        category: "choice",
        type: "Добрая еда",
        name: "Товар 18",
        price: 3255,
        specialPrice: 8455,
        labels: {
            new: "Новинка",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: false,
        img: "choice_1.jpg",
        sku: "SDW123",
        qty: "2"
    },
    {
        id: v4(),
        category: "choice",
        type: "Biox",
        name: "Товар 19",
        price: 12000,
        specialPrice: 11000,
        labels: {
            freeShipping: "Бесплатная доставка",
            new: "Новинка",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_2.jpg",
        sku: "QWE321",
        qty: "4"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Крема/Сыворотки",
        name: "Товар 20",
        price: 14000,
        specialPrice: 150,
        labels: {
            bestPrice: "Спер цена",
        },
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: false,
        img: "choice_3.jpg",
        sku: "CXZ221",
        qty: "8"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Очищающие средства",
        name: "Товар 21",
        price: 282,
        specialPrice: 300,
        labels: {},
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_4.jpg",
        sku: "FGH721",
        qty: "7"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Масла/Скрабы",
        name: "Товар 22",
        price: 455,
        specialPrice: 600,
        labels: {},
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_5.jpg",
        sku: "FGH721",
        qty: "6"
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Тонизирующие средства",
        name: "Товар 23",
        price: 288,
        specialPrice: 750,
        info: "Здесь должен быть текст описания товара. Более подробная информация о нём",
        instock: true,
        img: "choice_6.jpg",
        sku: "RFV821",
        qty: "5"
    },
];

let CART = [];

//GET
app.get("/api/products", (req, res) => {
    res.status(200).json(PRODUCTS);
});

app.get("/api/cart", (req, res) => {
    res.status(200).json(CART);
});

//POST
app.post("/api/cart", (req, res) => {
    console.log(req);
    const product = { ...req.body };
    CART.push(product);
    res.status(201).json(product);
});
app.post("/api/products", (req, res) => {
    console.log(req);
    const product = { ...req.body };
    PRODUCTS.push(product);
    res.status(201).json(product);
});

//PUT
app.put("/api/cart/:id", (req, res) => {
    const index = CART.findIndex(product => product.id === req.params.id);
    CART[index] = req.body;
    res.json(CART[index]);
});
app.put("/api/products/:id", (req, res) => {
    const index = PRODUCTS.findIndex(product => product.id === req.params.id);
    PRODUCTS[index] = req.body;
    res.json(PRODUCTS[index]);
});

//DELETE
app.delete("/api/cart/:id", (req, res) => {
    CART = CART.filter(product => product.id !== req.params.id);
    res.status(200).json({ message: "The product has been removed" });
})
app.delete("/api/products/:id", (req, res) => {
    PRODUCTS = PRODUCTS.filter(product => product.id !== req.params.id);
    res.status(200).json({ message: "The product has been removed" });
})

app.listen(3000, () => {
    console.log("Server has been started on port 3000...");
});
