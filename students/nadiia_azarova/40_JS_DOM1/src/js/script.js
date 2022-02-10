// Використовуючи макет із першого модуля Producly:

// 1. Створити змінні в яких повинні бути:
// - всі кнопки зі сторінки;

const buttons = document.querySelectorAll('.btn');
console.log(buttons);

console.log('=============');

// - всі инпути зі сторінки;

const inputs = document.querySelector('input');
console.log(inputs);

console.log('=============');

// - колекція посилань із футтера;

const footerLinks = document.querySelectorAll('footer a');
console.log(footerLinks);

console.log('=============');

// - форма із футтера;

const footerForm = document.querySelector('.footer__form');
console.log(footerForm);

console.log('=============');

// - логотип;

const logo = document.querySelector('.logo-wrap');
console.log(logo);

console.log('=============');

// - main;

const main = document.querySelector('main');
console.log(main);

// - масив усіх секцій;

const sectionsInMain = main.querySelectorAll('section');
console.log(sectionsInMain);

console.log('=============');

// - меню;

const mainMenu = document.querySelector('.main-menu');
console.log(mainMenu);

console.log('=============');

// - колекція всіх тегів li із меню;

const menuLi = mainMenu.querySelectorAll('.main-menu__link');
console.log(menuLi);

console.log('=============');

// 2. Перебираючи масив секцій створити масив зображень які в них є.

const images = [];

sectionsInMain.forEach(elem => images.push(elem.querySelector('img')));
console.log(images);

console.log('=============');

// 3. Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.

images.forEach(function(elem) {
    if (elem !== null) {
        const imageParent = elem.parentElement.parentElement;
        // console.log(imageParent);

        let headParent;

        if (imageParent.nextElementSibling !== null) {
            headParent = imageParent.nextElementSibling;
        } else {
            headParent = imageParent.previousElementSibling;
        }
        
        // console.log(headParent);

        const headTxt = headParent.firstElementChild.innerText;
        console.log(headTxt);
        // console.log('=============');

    }
});

console.log('=============');

// 4. Отримати масив всіх посилань на сторінці і вивести в консоль, текст та значення атрибуту href.

const allTheLinks = document.querySelectorAll('a');

allTheLinks.forEach(elem => console.log(elem.innerText, elem.getAttribute('href')));
