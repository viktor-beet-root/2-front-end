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
        price: 4999,
        specialPrice: 134999,
        labels: {
            new: "Новинка",
        },
        info: "Ajsdhjas dajs dhas fha sfha sfh ashf ha shf ahs fhas f",
        instock: false,
        img: "choice_1.jpg",
        sku: "SDW123",
    },
    {
        id: v4(),
        category: "choice",
        type: "Biox",
        name: "Товар 2",
        price: 96999,
        specialPrice: 90999,
        labels: {
            freeShipping: "Бесплатная доставка",
            new: "Новинка",
        },
        info: "Ajsdhjas dajs dhas fha sfha sfh ashf ha shf ahs fhas f",
        instock: true,
        img: "choice_2.jpg",
        sku: "QWE321",
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Просто",
        name: "Товар 3",
        price: 89999,
        specialPrice: 89999,
        labels: {
            bestPrice: "Спер цена",
        },
        info: "Ajsdhjas dajs dhas fha sfha sfh ashf ha shf ahs fhas f",
        instock: false,
        img: "choice_3.jpg",
        sku: "CXZ221",
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Просто",
        name: "Товар 4",
        price: 86599,
        specialPrice: 76599,
        labels: {},
        info: "Ajsdhjas dajs dhas fha sfha sfh ashf ha shf ahs fhas f",
        instock: true,
        img: "choice_4.jpg",
        sku: "FGH721",
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Просто",
        name: "Товар 5",
        price: 86599,
        specialPrice: 86599,
        labels: {},
        info: "Ajsdhjas dajs dhas fha sfha sfh ashf ha shf ahs fhas f",
        instock: true,
        img: "choice_5.jpg",
        sku: "FGH721",
    },
    {
        id: v4(),
        category: "homeCare",
        type: "Хз",
        name: "Товар 6",
        price: 79999,
        specialPrice: 49999,
        labels: {
            new: "Новинка",
        },
        info: "Ajsdhjas dajs dhas fha sfha sfh ashf ha shf ahs fhas f",
        instock: true,
        img: "choice_6.jpg",
        sku: "RFV821",
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
    const product = { ...req.body };
    CART.push(product);
    res.status(201).json(product);
});

//PUT
app.put("/api/cart/:id", (req, res) => {
    const index = CART.findIndex(product => product.id === req.params.id);
    CART[index] = req.body;
    res.json(CART[index]);
});

//DELETE
app.delete("/api/cart/:id", (req, res) => {
    CART = CART.filter(product => product.id !== req.params.id);
    res.status(200).json({ message: "The product has been removed" });
})

app.listen(3000, () => {
    console.log("Server has been started on port 3000...");
});
