//  -------------Виконані Завдання--------------------------
// Додати :hover, :focus ефекти для інтерактивних елементів
// Плавний скрол вгору при натисканні відповідної кнопки.
// На місці зображення зробити слайдер (одне фото змінює інше, із трьома-чотирма зображеннями)
// Меню на мобільному пристрої має справно працювати. 

// Форма додання коментарів:
// Поля: Name, Email, Message – обов’язкові, website – опційне.
// Валідація:
// Перевірка полів форми:
//      Name – Тільки букви (латиниця) і цифри
//      Email – Перевірка на правильний формат адреси
//      Website – Дозволенні символи A-Za-z0-9 . : -
//      Message – не менше 15 і не більше 500 символів.

// Реалізувати можливість додавати до повідомлення смайли.
// Кожному зі смайликів призначити унікальний код. Якщо користувач тисне на відповідний смайлик, його код додається у повідомлення у вигляді [::code::] (код додається в кінець повідомлення)
// Після того, як користувач натисне кнопку Post, всі коди мають бути замінені на відповідні смайлики у тексті повідомлення.
// При натисканні на кнопку Cancel форма очищується. Якщо був вибраний пункт Save my name, email, and website in this browser for the next time I comment, він також має набути значення “вимкнений”.
// Save my name, email, and website in this browser for the next time I comment.
// Якщо користувач вибере цей пункт, дані, введені в поля Name, Email, Website, мають підтягуватися після перезавантаження сторінки, за умови, що користувач, додав хоча б один коментар.

// Коментарі:
//      Реалізувати можливість лайкати повідомлення. Цей функціонал має бути тільки у головних повідомлень. Користувач може натиснути на сердечко, після цього сердечко змінює колір і цифра збільшується на 1.
//      Реалізувати можливість відповідати на коментар. Після натискання кнопки Reply користувач заповнює форму. Коли натисне кнопку Post, створюється не новий коментар, а відповідь під тим, на який натиснуто Reply, згідно з макетом. До відповіді додається ім’я користувача, на чиє повідомлення дається відповідь. Ієрархія відповідей не створюється, тобто є тільки головне повідомлення і всі відповіді під ним. Коли користувач відповідає на іншу відповідь, його повідомлення з’являється просто нижче, і у цій відповіді відмічене лише ім’я користувача, на чиє повідомлення відповіли.
//      *** Реалізувати можливість редагувати головний коментар. При натисканні на відповідну кнопку коментар завантажується у форму, всі поля заповнюються. Якщо в коментарі присутні смайли, вони перетворюються на відповідні коди. При натисканні кнопки Post змінюється той коментар, який редагували.
//      Реалізувати видалення головних коментарів.
//      При натисканні на відповідну кнопку головний коментар і всі відповіді на нього видаляються.

import Comments from "./comments";
(function () {
    /* ========== Swiper ==========*/
    const swiper = new Swiper(".article-slider", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

    /* ========== Menu ==========*/
    const menuMoreBtns = document.querySelectorAll('.menu__link-more');

    menuMoreBtns.forEach((elem, i) => {
        elem.addEventListener('click', function (e) {

            elem.nextElementSibling.classList.toggle('show-submenu');
            elem.classList.toggle('sub-link__active');
        })
    });

    /* ========== Menu Scrolling ==========*/
    function scrollHeader() {
        const header = document.querySelector('.header');
        if (this.scrollY >= 76) {
            header.classList.add('header-fixed');
        } else if (this.scrollY < 76 && header.classList.contains('header-fixed')) {
            header.classList.remove('header-fixed');
        }
    }
    window.addEventListener('scroll', scrollHeader);

    /*=========== Smooth Skroll ===========*/
    const anchors = document.querySelectorAll('a[href^="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href');
            if (blockID.length > 1) {
                document.getElementById(blockID.substr(1)).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    /*=========== Humbeurger ===========*/
    const humbeurger = document.querySelector('.humbeurger');
    humbeurger.addEventListener('click', () => humbeurger.classList.toggle('humbeurger-active'));


    /*=========== Form ===========*/
    const comments = new Comments({
        form: '.comment-form',
        allInputs: '.data-form',
        resetBtn: '[type="reset"]',
        postBtn: '[type="submit"]',
        inputName: 'input-name',
        inputEmail: 'input-email',
        inputWebsite: 'input-website',
        checkboxBtn: 'save-agree',
        textarea: '.comment-form__textarea',
        counter: '.message-counter',
        smilesList: '.smile__btn',
        commentsWrapper: '.users-comments',
        commentDelClassName: '.user-comment__delete',
        hartClassName: '.user-comment__hart',
        commentLikeClassName: '.user-comment__like',
        dislikeClassName: '.user-comment__dislike',
        replyLikeClassName: '.user-answer__like',
        replyDislikeClassName: '.user-answer__dislike'
    });
    comments.renderComments();
})();

