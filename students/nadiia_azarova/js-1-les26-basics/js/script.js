// Мінімум

/* 2. Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані); */

const firstName = 'Nadia';
const lastName = 'Azarova';
const fullName = firstName + ' ' + lastName;

// Неправильные имена
// const 1name;
// const first-name;
// const let;
// const моё_имя; разрешено, но плохо
// const r; разрешено, но плохо, не понятно
// const myVeryLongVariableNameTooHardToRead; разрешено, но слишком длинно


// 3. Вкажи всі можливі способи коментування коду;

        // Это однострочный комментарий
        /* Это
            много
            строчный
            комментарий */


// 4. Які стилі написання імен змінних ти знаєш?
    /* camelCase:
        let variableName; */
    /* snake_case:
        let variable_name; */
    /* Uppercase для констант известных ДО выполнения скрипта:
        const CONST_NAME; */
    /* Все переменные начинаются с одного и того же символа:
        let $variableName;
        let _variableName */

    
// Норма

// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const userName = prompt('Як тебе звати?', '');
const helloUser = 'Привіт,' + ' ' + userName + '!';

console.log(helloUser);

// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const CURRENT_YEAR = 2021;
const userYear = +prompt('В якому році ти народилась?', '');
const userAge = CURRENT_YEAR - userYear;
const userAgeNow = 'Зараз тобі' + ' ' + userAge + ' ' + 'років';

console.logt(userAgeNow);

// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const squareEdge = +prompt('Назови будь-яку довжину сторони квадрата', '');
const squarePerimeter = squareEdge * 4;
const result = 'Периметр цього квадрату дорівнює' + ' ' + squarePerimeter;

console.log(result);


// Максимум

// 1. Запитай у користувача радіус кола і виведи площу такої окружності.
const circleRadius = +prompt('Назови будь-який радіус кола', '');
const circleArea = Math.pow(circleRadius, 2) * Math.PI;
const circleAreaRound = Math.round(circleArea * 100) / 100;
const circleResult = 'Площа цього кола приблизно' + ' ' + circleAreaRound + ' ' + 'квадратних папуг';

console.log(circleResult);

// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const distance = +prompt('Яка відстань між твоїм містом і тим, до якого ти бажаєшь дістатися? Вкажи в кілометрах.', '');
const time = +prompt('За який час ти бажаєшь до туда дістатися?', '');
const velocity = Math.round(distance / time * 100) / 100;
const resultVelocity = 'Тобі потрібно рухатись із швидкістю' + ' ' + velocity + 'км/год, щоб дістатися вчасно';

console.log(resultVelocity);

// 3. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const dollars = +prompt('Назви будь-яку суму у \$');
const CURRENCY = 0.89;
const euro = Math.round(dollars * CURRENCY * 100) / 100;
const resultSum = 'Ця сума дорівнює' + ' ' + euro + ' ' + 'у €.';

console.log(resultSum);
