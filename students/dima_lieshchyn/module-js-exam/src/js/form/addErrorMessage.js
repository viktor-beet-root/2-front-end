import items from "../dev-modules/items";
import formAddError from "./formAddError";
import formRemoveError from "./formRemoveError";

function addErrorMessage(input, errMsg, flag) {
    if (flag) {
        items.errorMsg.forEach(elem => {
            formAddError(input)
            if (elem.dataset.type === input.dataset.type) {
                elem.textContent = errMsg;
            }
        })
    } else {
        items.errorMsg.forEach(elem => {
            formRemoveError(input)
            if (elem.dataset.type === input.dataset.type) {
                elem.textContent = errMsg;
            }
        })
    }


}

export default addErrorMessage;
