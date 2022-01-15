const header = document.querySelector('.header');
const main = header.nextElementSibling;
const footer = main.nextElementSibling;

const buttons = document.querySelectorAll('.btn');

const productlyInput = document.querySelector('[type="text"]');

const footerLists = footer.querySelectorAll('ul a');

const productlyForm = productlyInput.closest('.form');

const menu = header.querySelector('ul');
const menuList = menu.querySelectorAll('li');

const logo = document.querySelectorAll('.logo');

const sections = [...main.querySelectorAll('section')];
const imgs = sections
    .filter(elem => elem.querySelector('img') !== null)
    .map(elem => elem.querySelector('img'));

const headignsFromImgs = imgs.map(elem => elem.closest('section')
    .querySelector('h2,h1')
    .textContent);

const allLinks = [...header.closest('.page')
    .querySelectorAll('a:not(.logo__link)')]
    .map(elem => elem.textContent);


