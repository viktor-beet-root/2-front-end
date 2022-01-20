import { cElem, addContent, addClass, addAttr } from "./create-element";

const button = document.createElement('button');
button.classList.add('my-first-button');
button.textContent = 'Click';
document.body.append(button);

// button.addEventListener('click', swapClassText)

// function swapClassText(e) {
//     const classB = button.classList.value;
//     const textB = button.textContent;

//     e.target.classList.replace(classB, textB);
//     e.target.textContent = classB;
//     e.target.style.backgroundColor = e.target.style.backgroundColor === 'gray' ? 'black' : 'gray';
//     e.target.style.color = e.target.style.color === 'black' ? 'black' : 'white';

// }


// const modal = document.querySelector('.modal');
// const overlay = modal.querySelector('.modal__wrapper');
// const openBtn = document.querySelector('.my-first-button');

// // console.log(modal, overlay, openBtn);

// overlay.addEventListener('click', function (e) {
//     console.log(e.target, e.currentTarget);
//     if (e.target === e.currentTarget || e.target.classList.contains('close')) {
//         e.currentTarget.style.display = 'none';
//     }

// });

// openBtn.addEventListener('click', function () {
//     overlay.style.display = '';
// })
class Modal {
    constructor(option) {
        document.body.prepend(cElem({
            tag: 'div',
            class: '.modal',
            content: [
                cElem({
                    tag: 'div',
                    attr: {
                        class: '.modal__wrapper',
                    },
                    styles: {
                        backgroundColor: 'gray',
                        position: 'fixed',
                        top: '0',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    content: [
                        cElem({
                            tag: 'div',
                            attr: {
                                class: '.modal__window',
                            },
                            styles: {
                                bgColor: "white",
                                maxWidth: '400px',
                                width: '100%',
                                padding: '15px',
                            },
                            content: [
                                cElem({
                                    tag: 'p',
                                    content: 'Modal',
                                })
                            ]
                        })
                    ],
                }),
            ],
        }));
        this.modalW = document.querySelector('.modal');
        this.overlay = modal.querySelector('.modal__wrapper');
        this.openBtn = document.querySelector('.my-first-button');


        this.overlay.addEventListener('click', function (e) {
            console.log(e.target, e.currentTarget);
            if (e.target === e.currentTarget || e.target.classList.contains('close')) {
                e.currentTarget.style.display = 'none';
            }

        });

        this.openBtn.addEventListener('click', function () {
            overlay.style.display = '';
        })
        // this.isOpen = option.isOpen;


        // console.log(document.createElement('div').classList.add(this.window));
    }

}

const modals = new Modal();

// modals.cElems();
// console.log(modals.window);
