// Мінімум

// Створи масив, що описує чек в магазині. Кожен елемент масиву складається з назви товару, кількості і ціни за одиницю товару.
// Написати наступні функції.
const receipt = [
    {
        productName: 'Хлеб',
        qty: 2,
        price: 10,
    },
    {
        productName: 'Молоко',
        qty: 5,
        price: 15,
    },
    {
        productName: 'Пиво',
        qty: 100,
        price: 20,
    },
    {
        productName: 'Вода',
        qty: 70,
        price: 13,
    }
];
function getPriceList(arr) {
    const temp = arr.map((elem) => elem.price);
    return temp;
}
// Роздруківка чека на екран.
function printReceipt(arr) {
    arr.forEach(elem => {
        console.log(`Название продукта -> ${elem.productName};
Количество -> ${elem.qty};
Цена за один товар -> ${elem.price}.`);
    });
}
// printReceipt(receipt)
// Підрахунок загальної суми покупки.
function salePrice(arr) {
    const sum = 0;
    const temp = getPriceList(arr);

    const newArr = temp.reduce((sum, current) => {
        return sum + current;
    }, sum);

    return newArr;
}
// salePrice(receipt)

// Отримання найдорожчої покупки в чеку.
function highPrice(arr) {
    const temp = getPriceList(arr);

    const res = temp.reduce((a, b) => a > b ? a : b);

    return res;
}
// console.log(highPrice(receipt));
// Підрахунок середньої вартості одного товару в чеку.

function averagePrice(arr) {
    return salePrice(arr) / arr.length;

}
// console.log(averagePrice(receipt));
// Норма

// Створити масив аудиторій академії. Об'єкт-аудиторія складається з
// назви
// кількості місць для посадки (від 10 до 20)
// назви факультету, для якого вона призначена
// вільна аудиторія чи ні
// список з назвами груп, які можуть займатися в даній аудиторії.
// Написати кілька функцій для роботи з ним:
// Виводити список всіх аудиторій.
// Виводити список аудиторій для зазначеного факультету.


// Максимум

// Виводити тільки ті аудиторії, які підходять для переданої групи. Об'єкт-група складається з назви, кількості студентів і назви факультету.
// Видалення аудиторії (при видаленні потрібно виконати мутацію поточного списка аудиторій)
