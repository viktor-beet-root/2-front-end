// console.dir(document);
// console.log(document.documentElement); // Tag HTML
// console.log(document.head);
// console.log(document.body);
//document.body.style.backgroundColor = 'red';

const nav = document.getElementById('menu');

//const navByTag = document.getElementsByTagName('li');

//console.log(nav);

// for (let i = 0; i < navByTag.length; i++) {
//     console.log(navByTag[i].style.color = 'red');
// }

const menu = nav.querySelector('.menu');
const menuItems = menu.querySelectorAll('.menu__item');

// console.log(menu);
// console.log(menuItem);

// menuItem.forEach(elem => {
//     console.log(elem);
// });

//console.log(Array.prototype.slice.call(menuItem));
//console.log([...menuItem]);

console.log(menu.parentElement);
console.log(menu.closest('body'));

console.log(menu.firstChild);
console.log(menu.firstElementChild);
console.log(menu.lastChild);
console.log(menu.lastElementChild);

console.log(menu.previousElementSibling);
console.log(menu.nextElementSibling);

console.log(menu.tagName);

function foo(elem) {
    console.log(elem)
    if (!confirm('sdf')) return;

}

///foo(menu.lastElementChild);

//console.log(menu.innerHTML = '');

console.log(menu.outerHTML);

console.log(menuItems.forEach(elem => {
    console.log(elem.innerText, elem.outerText)
    console.log(elem.querySelector('span').textContent = 'sadf')
}));
