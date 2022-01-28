(function () {
    // Мінімум
    // Створи масив, що описує чек в магазині. Кожен елемент масиву складається з назви товару, кількості і ціни за одиницю товару. Написати наступні функції.
    const receipt = [
        {
            productName: "Milk",
            qty: 2,
            price: 22,
        },
        {
            productName: "Meat",
            qty: 2,
            price: 200,
        },
        {
            productName: "Bread",
            qty: 2,
            price: 18,
        },
        {
            productName: "Eggs",
            qty: 20,
            price: 3.5,
        },
        {
            productName: "Beer",
            qty: 12,
            price: 27,
        },

    ];

    // 1. Роздруківка чека на екран.
    function printReceip(arr) {
        let res = ' ';

        arr.forEach(function (item, index) {
            res = `${res}${item.productName}--------кл.${item.qty}---ц/од ${item.price}грн \n `;
            if (arr.length - 1 === index) {
                res = `${res}Сумма до оплати----------${totalPriceReceip(arr)}грн`
            }
        });

        return res;
    }
    console.log(printReceip(receipt));

    // 2. Підрахунок загальної суми покупки.
    function totalPriceReceip(arr) {
        return arr.reduce(function (acc, currVel) {
            return acc = acc + (currVel.price * currVel.qty);
        }, 0);
    }
    console.log("Загальна сума покупки", totalPriceReceip(receipt));

    // 3. Отримання найдорожчої покупки в чеку.
    function getSumProduct(arr) {
        arr.forEach(function (item, index) {
            arr[index].totalProductPrice = arr[index].price * arr[index].qty;
        });
    }
    getSumProduct(receipt);

    function getMaxSumPrice(arr) {
        const prodTotalPriceList = arr.map(item => item.totalProductPrice);
        let res = prodTotalPriceList[0];
        prodTotalPriceList.forEach(function (item, index) {

            if (item > res) {
                res = item;
            }
        });

        return res;
    }
    console.log("Найдорожча покупка в чеку", getMaxSumPrice(receipt));

    //    4. Підрахунок середньої вартості одного товару в чеку.
    function averageProdPrice(arr) {
        const prodPriceList = arr.map(item => item.price);
        let res = null;
        const sumPrice = prodPriceList.reduce(function (acc, currVal) {
            return acc + currVal;
        }, 0);
        return sumPrice / arr.length;
    }
    console.log("Середня вартість одного товару", averageProdPrice(receipt));

    // Норма
    // Створити масив аудиторій академії. Об'єкт-аудиторія складається з
    // 1. назви 
    // 2. кількості місць для посадки (від 10 до 20)
    // 3. назви факультету, для якого вона призначена
    // 4. вільна аудиторія чи ні
    // 5. список з назвами груп, які можуть займатися в даній аудиторії.
    const classroomList = [
        {
            classroomNum: "101",
            amountOfSeats: 12,
            availableForFacultet: ["математики", "фізики", "інформатики"],
            isEmpty: true,
            availableForGroup: ["ki-21", "pi-20", "d-19"],
        },
        {
            classroomNum: "205",
            amountOfSeats: 15,
            availableForFacultet: ["історії", "фізики"],
            isEmpty: true,
            availableForGroup: ["ki-21", "pi-20", "d-19"],
        },
        {
            classroomNum: "312",
            amountOfSeats: 20,
            availableForFacultet: ["інформатики"],
            isEmpty: true,
            availableForGroup: ["pi-20", "d-19"],
        },
    ];
    // 1. Виводити список всіх аудиторій.
    function audutoriList(arr) {
        console.log(arr.map(item => item.classroomNum));
    }
    console.log(audutoriList(classroomList));

    // 2. Виводити список аудиторій для зазначеного факультету.
    function audutorForFacultet(arr, facultet) {

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].availableForFacultet.length; j++) {
                if (~arr[i].availableForFacultet[j].indexOf(facultet))
                    console.log(classroomList[i]);
            }
        }

    }
    console.log(audutorForFacultet(classroomList, "інформатики"));

    // Максимум
    // Виводити тільки ті аудиторії, які підходять для переданої групи. Об'єкт-група складається з назви, кількості студентів і назви факультету.
    function audutoriaAvailable(arr, obj) {
        for (let i = 0; i < arr.length; i++) {
            const group = arr[i].availableForGroup.indexOf(obj.group);
            const facultet = arr[i].availableForFacultet.indexOf(obj.facultet);
            const amountSeats = arr[i].amountOfSeats;

            if (~facultet && ~group && amountSeats >= obj.amountOfStudents) {
                console.log(arr[i]);
            }
        }
    }
    console.log(audutoriaAvailable(classroomList, {
        amountOfStudents: 16,
        group: "d-19",
        facultet: "інформатики"
    }));

})();
