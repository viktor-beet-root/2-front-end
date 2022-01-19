// function fo(e) {
//     console.log(e.target, e.currentTarget)
// }

// function bar(e) {
//     e.preventDefault();
//     //e.stopPropagation();
//     console.log(e.target, e.currentTarget)
// }

// document.body.addEventListener('click', fo);

// const link = document.querySelectorAll('.menu__link');

// link.forEach(item => {
//     item.addEventListener('click', bar);
// });

const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.modal__wrapper');
const openBtn = document.querySelector('.my-first-button');

console.log(modal, overlay);

overlay.addEventListener('click', function (e) {
    const target = e.target;
    const currentTarget = e.currentTarget;

    if (target === currentTarget || target.classList.contains('close')) {
        currentTarget.style.display = 'none';
    }
});

openBtn.addEventListener('click', function () {
    overlay.style.display = '';
});
