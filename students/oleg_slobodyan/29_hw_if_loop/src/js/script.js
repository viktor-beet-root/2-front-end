// Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const personAge = +prompt('Скільки Вам років');
let res = '';
if (0 < personAge && personAge <= 12) {
    res = "Дитина";
} else if (12 < personAge && personAge < 18) {
    res = "Підліток";
} else if (18 <= personAge && personAge <= 60) {
    res = "Дорослий";
} else if (personAge > 60) {
    res = "Пенсіонер";
} else {
    res = 'Вказано неправельно вік!';
}
console.log(res);

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const personNum = +prompt('Введіть число від 0 до 9');
let personSymbol = '';
switch (personNum) {
    case (0):
        personSymbol = ")";
        break;
    case (1):
        personSymbol = "!";
        break;
    case (2):
        personSymbol = "@";
        break;
    case (3):
        personSymbol = "#";
        break;
    case (4):
        personSymbol = "$";
        break;
    case (5):
        personSymbol = "%";
        break;
    case (6):
        personSymbol = "^";
        break;
    case (7):
        personSymbol = "&";
        break;
    case (8):
        personSymbol = "*";
        break;
    case (9):
        personSymbol = "(";
        break;
}

console.log(personSymbol);

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const startNum = +prompt("Введіть початкове число діапазону");
const endtNum = +prompt("Введіть кінцеве число діапазону");
let i = startNum;
let sumNum = null;
while (i <= endtNum) {
    sumNum = sumNum + i;
    i++;
}
console.log(sumNum);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const personNum1 = +prompt("Вкажіть перше число");
const personNum2 = +prompt("Вкажіть друге число");
let max = (personNum1 > personNum2) ? max = personNum1 : max = personNum2;
let min = (personNum1 < personNum2) ? min = personNum1 : min = personNum2;
let j = min;
let resDiv = null;
while (j > 0) {
    if (!(max % j) && !(min % j)) {
        resDiv = j;
        break;
    } else {
        j--;
    }

}
let resConctM4 = "найбільший спільний дільник чисел " + personNum1 + " i " + personNum2 + " число " + resDiv;
console.log(resConctM4);


// 5. Запитай у користувача число і виведи всі дільники цього числа.
const personNum3 = +prompt("Вкажіть число");
let e = 1;
let resDivision = "";
while (e <= personNum3) {
    if (personNum3 % e === 0) {
        resDivision = resDivision + e + " ";
    }
    e++;
}
console.log(resDivision);

//Норма
// 1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const personNum5 = +prompt('Введіть 5 значне число');
let num5 = personNum5;
let str5 = '';
let resaltNum5 = '';
for (const g = 0; 0 < num5; num5--) {
    str5 = num5 + '';
    if (str5[0] === str5[4] && str5[1] === str5[3]) {
        resaltNum5 = str5;
        break;
    }
}
let resConctN1 = "Ваше число " + personNum5 + " найближче поліндромне число " + resaltNum5;
console.log(resConctN1);

// 2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const personMoney = +prompt("Введіть сумму Вашої покупки");
let discont = null;
let resConctN2 = "";
let resConctN22 = "";
if (personMoney >= 200 && personMoney <= 300) {
    discont = personMoney - ((3 / 100) * personMoney);
} else if (personMoney > 300 && personMoney <= 500) {
    discont = personMoney - ((5 / 100) * personMoney);
} else if (personMoney > 500) {
    discont = personMoney - ((7 / 100) * personMoney);
} else {
    resConctN22 = "замала сумма покупки для знижки";
}
resConctN2 = (personMoney >= 200) ? "Сумма до оплати :" + discont : personMoney + ' ' + resConctN22;
console.log(resConctN2);

// 3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let dotNum = null;
let vidNum = null;
let zeroNum = null;
let parNum = null;
let neparNum = null;
let personTenNum;
let personStr = '';
let resConctN3 = '';
for (let l = 0; l < 10; l++) {
    personTenNum = +prompt("ВВедіть число");
    personStr = personStr + personTenNum + " ";
    if (personTenNum > 0) {
        dotNum = dotNum + 1;
    } else if (personTenNum < 0) {
        vidNum = vidNum + 1;
    } else {
        zeroNum = zeroNum + 1;
    }
    if (!(personTenNum % 2)) {
        parNum = parNum + 1;
    } else {
        neparNum = neparNum + 1;
    }
}
resConctN3 = personStr + "\n" + "Додатніх чисел: " + dotNum + '\n' + "Відємних чисел: " + vidNum + '\n' + "Нулів: " + zeroNum + "\n" + "Парних чисел: " + parNum + "\n" + "Непарних чисел: " + neparNum + "\n";
console.log(resConctN3);


//4.Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let ok = true;
let k = 1;
do {
    ok = confirm(k + " День тижня. Хочеш побачити наступний день?");
    k++;
} while (ok);


// Максимум
// 2.Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
let mult1 = null;
let resConctE2 = '';
for (let x = 2; x <= 9; x++) {
    for (let z = 1; z <= 10; z++) {
        mult1 = x * z;
        resConctE2 = resConctE2 + x + "x" + z + "=" + mult1 + "\n";

    }
}
console.log(resConctE2);

//Піраміда
let piremid = '';
const t = '#';
for (let q = 0; q < 5; q++) {
    piremid = piremid + t;
    console.log(piremid);
}
console.log(piremid);




