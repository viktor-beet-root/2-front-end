const elements = document.getElementsByClassName('menu__item');

for (i = 0; i < elements.length; i++) {
	elements[i].addEventListener('mouseover', showMenu);
	elements[i].addEventListener('mouseleave', hideMenu);
}

function showMenu() {
	if (this.children.length > 1) {
		this.children[1].style.height = 'auto';
		this.children[1].style.opacity = '1';
		this.children[1].style.overflow = 'visible';
	}
}

function hideMenu() {
	if (this.children.length > 1) {
		this.children[1].style.height = '0';
		this.children[1].style.opacity = '0';
		this.children[1].style.overflow = 'hidden';
	}
}

function toggleMenu() {
	const button = document.getElementById('btn-menu')
	const menu = document.getElementById('list-menu')

	button.classList.toggle('active')
	button.classList.toggle('active')
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
})




import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

var swiper = new Swiper(".mySwiper", {
	modules: [Navigation, Pagination, Scrollbar],
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


