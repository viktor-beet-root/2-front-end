(function () {
    // Мінімум
    // 1.Напиши всі можливі варіанти створення функцій.
    // 1. Function Declaration
    // function func(){}
    // 2. Function Expression
    // const a=function(){}
    // 3. Function arrow
    // let func = (a,b) => a+b;

    // 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
    function amountArg() {
        let resM2 = null;
        for (let i = 0; i <= arguments.length; i++) {
            resM2 = resM2 + 1;
        }
        return resM2;
    }
    console.log(amountArg(1, 2, 4, 5, 6, 7, 90));

    // 3. Напиши функцію, яка приймає 2 числа і повертає :
    // -1, якщо перше число менше, ніж друге;
    // 1 - якщо перше число більше, ніж друге;
    // 0 - якщо числа рівні.
    function checkNum(a, b) {
        a = +a;
        b = +b;
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1
        } else if (a === b) {
            return 0;
        } else {
            return "It's not a number"
        }
    }
    console.log(checkNum(4, 5));

    // 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
    let fact = null;
    function factorial(a) {
        while (a > 0) {
            fact = fact * a;
            a--;
        } return fact;
    }
    console.log(factorial(5));
    // 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
    let resM5 = (a, b, c) => a * 100 + b * 10 + c;
    console.log(resM5(4, 8, 7));

    // 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
    function square(a, b = a) {
        a = +a;
        b = +b;
        if (typeof a === "number" && typeof b === "number") {
            return a * b;
        } else {
            console.log(typeof b);
            return NaN
        }
    }
    // console.log(square(4, '5'));

    // Норма
    // 1.Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
    function perfectNum(num) {
        let i = num;
        let res = null;
        while (i > 0) {
            if (!(num % i) && num !== i) {
                res = res + i;
            }
            i--;
        }
        if (res === num) {
            return "Число " + num + " є ідеальним";
        } else return false; "Число " + num + " не ідеальне";
    }
    const resN1 = perfectNum(28);
    console.log(resN1);

    //2.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
    function perfectNum2(num1, num2) {
        num1 = +num1;
        num2 = +num2;
        let min = (num1 < num2) ? min = num1 : min = num2;
        let max = (num1 > num2) ? max = num1 : max = num2;
        while (min <= max) {
            if (perfectNum(min)) {
                console.log(min + " ідельне число");
            }
            min++;
        }
    }
    const resN2 = perfectNum2(1028, 6);
    console.log(resN2);
})();
