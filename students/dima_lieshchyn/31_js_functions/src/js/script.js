(function () {
    //--Мінімум--
    //1.Напиши всі можливі варіанти створення функцій.
    //function declaration statement
    function func(a) {
        return a;
    }
    //function definition expression
    const a = function (a) {
        return a;
    }
    //arrow function expression
    const b = (a) => {
        return a;
    }
    const c = (a) => a;

    const d = () => d;
    //--------------------------------------------------------------------------------
    //2.Створи функцію, яка буде виводити кількість переданих їй аргументів.
    function argcount() {
        return arguments.length;
    }
    show(argcount(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    //--------------------------------------------------------------------------------
    //3. Напиши функцію, яка приймає 2 числа і повертає :
    //1. -1, якщо перше число менше, ніж друге;
    //2.  1 - якщо перше число більше, ніж друге;
    //3.  0 - якщо числа рівні.
    function foo(a = 0, b = 0) {
        a = +a;
        b = +b;
        if (a < b) {
            return -1;
        } else {
            return (a > b) ? 1 : 0;
        }
    }
    show(foo('3', 2));
    //--------------------------------------------------------------------------------
    //4. Напиши функцію, яка обчислює факторіал переданого їй числа.
    function factorial(c = 1) {
        if (c <= 0) return console.error('Число должно быть положительным\nили больше нуля');
        for (let i = c - 1; i > 0; i--) {
            c = c * i;
        }
        return c;
    }
    show(factorial(5));
    //--------------------------------------------------------------------------------
    //5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
    //Наприклад: цифри 1, 4, 9 перетворяться в число 149.
    function trinum(a = 0, b = 0, c = 0) {
        return a * 100 + b * 10 + c;
    }
    show(trinum(1, 2, 3));
    //--------------------------------------------------------------------------------
    //6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
    //Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
    function flength(...args) {
        return args.length === 1 ? args[0] * args[0] : args[0] * args[1];
    }
    show(flength(2));
    //--------------------------------------------------------------------------------
    //--Максимум--
    //1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
    //Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
    function checkPerfectNum(a) {
        a = +a;
        const err = Error('Need bigger number');
        if (a > 0) {
            let temp = 0;
            let counter = 0;
            for (let i = 1; i < a - 1; i++) {
                counter = a % i;
                if (counter === 0) temp = temp + i;
            }
            return a === temp;
        } else {
            console.log(err);
        }
    }
    show(checkPerfectNum(-1));
    //--------------------------------------------------------------------------------
    //2.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
    // і виводить тільки ті числа з діапазону, які є досконалими.Використовуй написану раніше функцію, щоб дізнатися,
    // чи є це число досконалим.
    function perfectnums(firstNum = 0, secondNum = 0) {
        firstNum = +firstNum;
        secondNum = +secondNum;
        let counter = '';
        if (firstNum < secondNum) {
            for (let i = firstNum; i < secondNum; i++) {
                if (checkPerfectNum(i)) {
                    counter = counter + i + ' | ';
                }
            }
        } else {
            for (let i = secondNum; i < firstNum; i++) {
                if (checkPerfectNum(i)) {
                    counter = counter + i + ' | ';
                }
            }
        }
        return counter;
    }
    show(perfectnums(29, 2));
    // //--------------------------------------------------------------------------------
    function show(a) {
        console.log(a);
    }
})();
