import items from "./items";
import formRemoveError from "./formRemoveError";

function cancelInfo() {
    formRemoveError(items.userName);
    formRemoveError(items.email);
    formRemoveError(items.www);
    formRemoveError(items.textarea);

    items.errorMsg.forEach(elem => {
        elem.textContent = '';
    })
    items.userName.value = '';
    items.email.value = '';
    items.www.value = '';
    items.textarea.value = '';
    items.textCounter.textContent = '0';
    items.switchItem.checked = false;
}

export default cancelInfo;
