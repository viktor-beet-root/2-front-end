import items from "./items";
import formRemoveError from "./formRemoveError";
import formAddError from "./formAddError";

function message() {
    items.textarea.addEventListener("input", countKeyUp);

    items.smiles.forEach(elem => {
        elem.addEventListener('click', pasteSmile);
    });

    items.textarea.addEventListener('input', function () {
        items.textarea.addEventListener('blur', function () {
            localStorage.setItem('text', items.textarea.value)
        })
    });

    function pasteSmile(e) {
        items.textarea.value = `${items.textarea.value} [::${e.currentTarget.dataset.smile}::] `;
        items.textarea.focus();
    }

    function countKeyUp(e) {
        const target = e.currentTarget;
        const maxLength = e.target.getAttribute("maxlength");
        const currentLength = target.value.length;

        const counter = document.querySelector('.counter__item');

        counter.textContent = currentLength;
        if (currentLength === +maxLength) {
            formAddError(items.textarea);

        } else {
            formRemoveError(items.textarea);
        }
    }

}

export default message;
