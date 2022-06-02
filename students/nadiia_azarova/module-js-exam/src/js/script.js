import Glide from '@glidejs/glide';

new Glide('.glide', {
    startAt: 0,
    perView: 1,
}).mount();

// add arrow to sub menu

let subMenu = document.querySelectorAll('.menu__sub');
let moreTemplate = `<svg class="more__icon">
<use xlink:href="#menuArrow" />
</svg>`;

subMenu.forEach(element => {
    let linkMore = element.previousElementSibling;
    linkMore.classList.add('more');

    let arrowImg = document.createElement('span');
    arrowImg.classList.add('more__icon-wrap');
    arrowImg.innerHTML = moreTemplate;
    linkMore.appendChild(arrowImg);
});

// open/close submenu

let openSubmenu = document.querySelectorAll('.more');
openSubmenu.forEach(element => {
    element.addEventListener('click', rotateArrow )
});

function rotateArrow(e) {
    e.preventDefault();

    let icon = this.querySelector('.more__icon');
    icon.classList.toggle('rotate-up');

    let menuItem = this.parentElement;
    menuItem.classList.toggle('menu__item_visible')
    let submenu = menuItem.querySelector('.menu__sub');
    submenu.classList.toggle('menu__sub_open');

    let childSubmenus = submenu.querySelectorAll('.menu__sub');
    childSubmenus.forEach(element => {
        if (element.classList.contains('menu__sub_open')) {
            element.classList.remove('menu__sub_open');
            element.parentElement.classList.remove('menu__item_visible');
        }
    });
}

//close mobile menu

const mainMenu = document.querySelector('#mainMenu');

const closeBtn = document.querySelector('#menuCloseBtn');
closeBtn.addEventListener('click', closeMobileMenu);

const openBtn = document.querySelector('#menuOpenBtn');
openBtn.addEventListener('click', closeMobileMenu);

function closeMobileMenu(e) {
    mainMenu.classList.toggle('menu_closed');
}

// scroll to top
document.querySelector('.up-btn').onclick = () => {
    window.scrollTo(scrollY, 0);
}
