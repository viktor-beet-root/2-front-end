//Пузырьковая сортировка класическим способом
function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}
const arrN = getRandomArray(100, 10);

console.log(arrN);
bubbleSort(arrN);
console.log(arrN);


function getRandomArray(maxNum, arrLength) {
    const randomArr = [];
    // let randomNum = ;
    for (let i = 0; i < arrLength; i++) {
        randomArr.push(Math.floor(Math.random() * maxNum));
    }
    return randomArr;
}

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
const academy = [
    {
        name: 'Frontend-123',
        qty: 20,
        facility: 'Frontend',
        isFree: false,
        groups: ['Group 2', 'Group 3']
    },
    {
        name: 'Backend-124',
        qty: 15,
        facility: 'Backend',
        isFree: false,
        groups: ['Group 8', 'Group 9', 'Group 10']
    },
    {
        name: 'Frontend-JS-125',
        qty: 10,
        facility: 'Frontend',
        isFree: false,
        groups: ['Group 1', 'Group 4', 'Group 5']
    },
    {
        name: 'Backend-C#-126',
        qty: 7,
        facility: 'Backend',
        isFree: false,
        groups: ['Group 6', 'Group 7']
    }
];
// Написати кілька функцій для роботи з ним:

function concatStr(arr) {
    let print = '';
    for (let i = 0; i < arr.length; i++) {
        print += arr[i] + ', ';
    }
    const result = print.slice(0, -2);
    return result;
}

// Виводити список всіх аудиторій.
function showAuditoryList(academy) {
    const temp = [];
    academy.forEach(elem => {
        temp.push(elem.name);
    });

    // console.log(concatStr(temp));
    return temp;
}
// showAuditoryList(academy);
// Виводити список аудиторій для зазначеного факультету.
function showAuditoryByFacility(academy, facility) {
    let temp = [];
    academy.forEach(e => {
        if (e.facility === facility) temp.push(...e.groups)
    });
    // console.log(concatStr(temp));
    return concatStr(temp);
}
// showAuditoryByFacility(academy, 'Frontend');
// Максимум

// Виводити тільки ті аудиторії, які підходять для переданої групи. Об'єкт-група складається з назви, кількості студентів і назви факультету.
function showAuditoryByGroup(academy, group) {
    academy.forEach(e => {
        if (group.facilityName === e.facility && group.qtyStudents <= e.qty) {
            console.log(`Auditory for you group -> ${e.name}`);
        }
    })
}
showAuditoryByGroup(academy, {
    groupName: 'Group 10',
    qtyStudents: 10,
    facilityName: 'Backend'
})
// Видалення аудиторії (при видаленні потрібно виконати мутацію поточного списка аудиторій)
function removeAuditory(academy, auditory) {

    const auditoryIndex = showAuditoryList(academy).indexOf(auditory);

    academy.splice(1, auditoryIndex);
}

// removeAuditory(academy, 'Backend-124');

