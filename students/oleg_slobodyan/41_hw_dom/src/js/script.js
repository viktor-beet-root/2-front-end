(function () {
    // 1. Змінна в якій всі кнопки на сторінці
    const allButtons = document.body.querySelectorAll('.btn, .hero__link');

    // 2. Змінна в якій всі input на стрінці
    const allInputs = document.body.getElementsByTagName('input');

    // 3. Колекція зсилок у футері
    const footer = document.getElementsByClassName('footer');
    const colectionOfLinksFooter = document.body.querySelectorAll('.footer-menu__link,.footer-privecy__link');

    // 4. Змінна на форму subscribe
    const formSubscribe = document.body.getElementsByClassName('footer__form')

    // 5. Змінна для лого
    const allLogos = document.body.getElementsByClassName('logo__img');

    // 6. Змінна для main
    const main = document.body.getElementsByClassName('main');

    // 7. Масив секцій
    const sectionArr = Array.prototype.slice.call(document.body.getElementsByTagName('section'));
    console.log(sectionArr);

    // 8. Преребираючи масив секцій створити масив картинок з секцій
    let imagesArr = [];
    sectionArr.forEach(elem => {
        imagesArr = imagesArr.concat(elem.querySelector('img'));
    });
    // console.log(imagesArr);

    // 9. Змінна меню
    const menu = document.body.querySelector('.menu');

    // 10. колекція всіх лішок у меню
    const allMenuLi = menu.getElementsByClassName('menu__item');
    console.log(allMenuLi);

    // 11. Вивести контент загловків з масиву картинок
    const h2fromImgArr = [];
    imagesArr.forEach(elem => {
        const nextElement = elem.closest('section').nextElementSibling
        if (nextElement) {
            h2fromImgArr.push(nextElement.querySelector('.title').textContent.trim());

        }

    });
    console.log(h2fromImgArr);

    // 12. Отриамти масив усіх зсилок і вивести їх контент
    const allLinks = Array.prototype.slice.call(document.body.querySelectorAll('a'));
    allLinks.forEach(elem => {
        console.log(elem.textContent)
    })
})();
