import items from "./items";
import formAddError from "./formAddError";
import formRemoveError from "./formRemoveError";

function addErrorMessage(input, errMsg, flag) {
    if (flag) {
        console.log(input.dataset.type);
        items.errorMsg.forEach(elem => {
            formAddError(input)
            if (elem.dataset.type === input.dataset.type) {
                elem.textContent = errMsg;
            }
        })
    } else {
        console.log(input.dataset.type);
        items.errorMsg.forEach(elem => {
            formRemoveError(input)
            if (elem.dataset.type === input.dataset.type) {
                elem.textContent = errMsg;
            }
        })
    }


}

export default addErrorMessage;
