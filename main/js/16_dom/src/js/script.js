// const menu = document.querySelector('.menu');

// //menu.innerHTML = '';

// //menu.textContent;

// menu.setAttribute('title', 'sdfsdf');

// console.log(menu.getAttribute('title'));

// console.log(menu.hasAttribute('title'));

// console.log(menu.dataset)

// // function modifHref(cssSelector) {
// //     const a = [...document.querySelectorAll(cssSelector)];

// //     a.forEach((lem, i) => {
// //         const number = lem.getAttribute('href').slice(1) * 2;
// //         lem.setAttribute('href', '#' + number);
// //     });
// // }

// // modifHref('.menu__link');

// menu.classList.add('qqqq', 'sdfsdf', 'eeee');

// menu.classList.remove('qqqq');

// menu.classList.toggle('aaaa');
// menu.classList.toggle('aaaa');

// console.log(menu.classList.contains('menu'));

// menu.style.backgroundColor = 'red';
// menu.style['background-color'] = 'black';
// menu.style.backgroundColor = '';

// console.log(window.getComputedStyle(menu).display);

// const link = document.createElement('a');

// link.setAttribute('href', '#22');
// link.classList.add('active');
// link.textContent = 'active';

// //document.body.append(link.cloneNode(true));
// //document.body.prepend(link);

// menu.before(link);
// menu.after(link);

// menu.replaceWith(link);

// link.remove();

// console.log(link);

// Устаревшие методы:
// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)

function cElem(options = {}) {
    if (!options.tag) return;

    const tag = document.createElement(options.tag);

    if (options.class) addClass(tag, options.class);

    if (options.attr) addAttr(tag, options.attr);

    if (options.content) addContent(tag, options.content);

    return tag;
}

function addContent(node, content) {
    if (!node || !content) return;

    if (typeof content === 'string') {
        node.textContent = content;
    } else if (Array.isArray(content)) {
        content.forEach(elem => {
            node.append(elem, ' ');
        });
    } else if (content.nodeType === 1) {
        node.append(content);
    }
}

function addAttr(node, attr) {
    if (!node || !attr) return;

    for (const key in attr) {
        node.setAttribute(key, attr[key]);
    }
}

function addClass(node, nameClass) {
    if (!node || !nameClass) return;

    const classNameList = nameClass.split(' ');

    node.classList.add(...classNameList);
}


document.body.append(cElem({
    tag: 'a',
    class: 'link sss fff',
    attr: {
        id: 'myLink',
        href: '#',
        title: 'my first link'
    },
    content: [
        cElem({
            tag: 'span',
            content: 'text'
        }),
        cElem({
            tag: 'span',
            content: 'text'
        }),
        "dsfsdfdfs"
    ],
}));

function stingToHtml(stingHtml) {
    const tag = document.createElement('div');
    tag.innerHTML = stingHtml;

    return tag;
}

document.body.append(stingToHtml('<p>text</p>'));

