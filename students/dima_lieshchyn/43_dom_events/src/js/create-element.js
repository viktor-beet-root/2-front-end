function cElem(options = {}) {
    if (!options.tag) return;

    const tag = document.createElement(options.tag);

    if (options.styles) addStyles(tag, options.styles);

    if (options.class) addClass(tag, options.class);

    if (options.attr) addAttr(tag, options.attr);

    if (options.content) addContent(tag, options.content);

    return tag;
}
function addStyles(node, styles) {
    if (!node || !styles) return;

    if (styles.bgColor) node.style.backgroundColor = styles.bgColor;
    if (styles.maxWidth) node.style.maxWidth = styles.maxWidth;
    if (styles.width) node.style.width = styles.width;
    if (styles.padding) node.style.padding = styles.padding;
    if (styles.position) node.style.position = styles.position;
    if (styles.top) node.style.backgroundColor = styles.top;
    if (styles.bottom) node.style.bottom = styles.bottom;
    if (styles.left) node.style.left = styles.left;
    if (styles.right) node.style.right = styles.right;
    if (styles.display) node.style.display = styles.display;
    if (styles.justifyContent) node.style.justifyContent = styles.justifyContent;
    if (styles.alignItems) node.style.alignItems = styles.alignItems;
}

function addContent(node, content) {
    if (!node || !content) return;

    console.log(content[0].nodeType);

    if (typeof content === 'string') {
        node.textContent = content;
    } else if (Array.isArray(content)) {
        content.forEach(elem => {
            node.append(elem);
        })
    } else if (content.nodeType === 1) {
        node.append(content);
    }
}

function addClass(node, nameClass) {
    if (!node || !nameClass) return;

    const classNameList = nameClass.split(' ');
    node.classList.add(...classNameList);

}

function addAttr(node, attr) {
    if (!node || !attr) return;

    for (const key in attr) {
        node.setAttribute(key, attr[key]);
    }
}

// cElem({
//     tag: 'a',
//     class: 'link sss fff',
//     attr: {
//         id: 'myLink',
//         href: '#',
//         title: 'my first link'
//     },
//     content: [
//         cElem({
//             tag: 'span',
//             content: 'text',
//         }),
//         cElem({
//             tag: 'span',
//             content: 'text',
//         }),
//         'asdasd'
//     ],
// });

export { cElem, addContent, addClass, addAttr };
