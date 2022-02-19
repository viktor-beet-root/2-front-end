import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

const swiper = new Swiper('.swiper-demo', {
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

new AnimOnScroll(document.getElementById('grid'), {
    minDuration: 0.4,
    maxDuration: 0.7,
    viewportFactor: 0.7
});
