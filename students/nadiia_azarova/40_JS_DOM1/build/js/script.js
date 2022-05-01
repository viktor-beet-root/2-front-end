"use strict";

// Використовуючи макет із першого модуля Producly:
// 1. Створити змінні в яких повинні бути:
// - всі кнопки зі сторінки;
var buttons = document.querySelectorAll('.btn');
console.log(buttons);
console.log('============='); // - всі инпути зі сторінки;

var inputs = document.querySelector('input');
console.log(inputs);
console.log('============='); // - колекція посилань із футтера;

var footerLinks = document.querySelectorAll('footer a');
console.log(footerLinks);
console.log('============='); // - форма із футтера;

var footerForm = document.querySelector('.footer__form');
console.log(footerForm);
console.log('============='); // - логотип;

var logo = document.querySelector('.logo-wrap');
console.log(logo);
console.log('============='); // - main;

var main = document.querySelector('main');
console.log(main); // - масив усіх секцій;

var sectionsInMain = main.querySelectorAll('section');
console.log(sectionsInMain);
console.log('============='); // - меню;

var mainMenu = document.querySelector('.main-menu');
console.log(mainMenu);
console.log('============='); // - колекція всіх тегів li із меню;

var menuLi = mainMenu.querySelectorAll('.main-menu__link');
console.log(menuLi);
console.log('============='); // 2. Перебираючи масив секцій створити масив зображень які в них є.

var images = [];
sectionsInMain.forEach(function (elem) {
  return images.push(elem.querySelector('img'));
});
console.log(images);
console.log('============='); // 3. Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.

images.forEach(function (elem) {
  if (elem !== null) {
    var imageParent = elem.parentElement.parentElement; // console.log(imageParent);

    var headParent;

    if (imageParent.nextElementSibling !== null) {
      headParent = imageParent.nextElementSibling;
    } else {
      headParent = imageParent.previousElementSibling;
    } // console.log(headParent);


    var headTxt = headParent.firstElementChild.innerText;
    console.log(headTxt); // console.log('=============');
  }
});
console.log('============='); // 4. Отримати масив всіх посилань на сторінці і вивести в консоль, текст та значення атрибуту href.

var allTheLinks = document.querySelectorAll('a');
allTheLinks.forEach(function (elem) {
  return console.log(elem.innerText, elem.getAttribute('href'));
});