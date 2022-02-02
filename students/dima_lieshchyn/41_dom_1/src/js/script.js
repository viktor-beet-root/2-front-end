// 1. Создать переменную со всеми кнопками которые лежат на сайте.
// 2. Переменная с инпутом с сайта.
// 3. Колекция ссылок из футера
// 4. Ссылка на форму с футера
// 5. Переменная на логотип
// 6. Ссылка на мейн
// 7. Масив с секциями.
// 8. Перебирая масив с секциями создать масив с картинками.
// 9. Ссылка на меню
// 10. Коллекция всех лишек из меню.
// 11. Вывести текст конетент заголовка из масива картинок. 
// Функция перебирает картинку и выводит текст заголовка следущей секции если он есть.
// 12. Получить масив всех ссылок и вывести текстовое содержимое.

class Productly {
    constructor(options) {
        this.header = document.querySelector(options.header);
        // 6. Ссылка на мейн
        this.main = this.header.nextElementSibling;
        this.footer = this.main.nextElementSibling;
        // 1. Создать переменную со всеми кнопками которые лежат на сайте.
        this.buttons = document.querySelectorAll(options.buttons);
        // 2. Переменная с инпутом с сайта.
        this.productlyInput = document.querySelector(options.productlyInput);
        // 3. Колекция ссылок из футера
        this.footerLists = this.footer.querySelectorAll(options.footerLists);
        // 4. Ссылка на форму с футера
        this.productlyForm = this.footer.querySelector(options.form);
        // 9. Ссылка на меню
        this.menu = this.header.querySelector(options.menu);
        // 10. Коллекция всех лишек из меню.
        this.menuList = this.menu.querySelectorAll(options.menuList);
        // 5. Переменная на логотип
        this.logo = document.querySelectorAll(options.logo);
        // 7. Масив с секциями.
        this.sections = [...this.main.querySelectorAll(options.sections)];
        this.imgs = this.getImgs();
        this.headignsFromImgs = this.getHeadignsFromImgs();
        this.allLinks = this.getAllLinks();
    }

    // 8. Перебирая масив с секциями создать масив с картинками.
    getImgs() {
        return this.sections
            .filter(elem => elem.querySelector('img') !== null)
            .map(elem => elem.querySelector('img'));
    }
    // 11. Вывести текст конетент заголовка из масива картинок. 
    getHeadignsFromImgs() {
        return this.imgs.map(elem => elem.closest('section')
            .querySelector('h2,h1')
            .textContent);
    }
    // 12. Получить масив всех ссылок и вывести текстовое содержимое.
    getAllLinks() {
        return [...this.header.closest('.page')
            .querySelectorAll('a:not(.logo__link)')]
            .map(elem => elem.textContent);
    }

}
const prod = new Productly({
    header: '.header',
    buttons: '.btn',
    productlyInput: '[type="text"]',
    footerLists: 'ul a',
    productlyForm: '.form',
    menu: 'ul',
    menuList: 'li',
    logo: '.logo',
    sections: 'section',
});
console.log(prod);


