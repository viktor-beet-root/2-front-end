import items from "../dev-modules/items";
import formRemoveError from "./formRemoveError";
import formAddError from "./formAddError";

function message() {
    items.textarea.addEventListener("input", countKeyUp);

    items.smiles.forEach(elem => {
        elem.addEventListener('click', pasteSmile);
    });



    function pasteSmile(e) {
        items.textarea.value = `${items.textarea.value} ::${e.currentTarget.dataset.smile}:: `;
        items.textarea.focus();
        items.textarea.dispatchEvent(new Event('input', { 'bubbles': true }));
    }

    function countKeyUp(e) {
        const target = e.currentTarget;
        const maxLength = e.target.getAttribute("maxlength");
        const currentLength = target.value.length;
        const errorMess = document.querySelector('textarea~.counter~.error-msg')
        const counter = document.querySelector('.counter__item');

        counter.textContent = currentLength;
        if (currentLength < 16 && target.dataset.type === 'message') {
            errorMess.textContent = items.msg.minSymbols;
            formAddError(items.textarea);
        } else {
            errorMess.textContent = '';
            formRemoveError(items.textarea);
        }
    }

}

export default message;
