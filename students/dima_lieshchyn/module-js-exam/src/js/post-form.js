import items from "./items";
import formRemoveError from "./formRemoveError";
import formAddError from "./formAddError";
import cancelInfo from "./cancelInfo";

function postForm() {

    items.cancel.addEventListener('click', cancelInfo);
    items.form.addEventListener('submit', commentSend);
    items.inputs.forEach(e => {

        e.addEventListener('blur', isEmpty);


        items.email.addEventListener('input', emailInput);
        items.userName.addEventListener('input', nameInput);
        items.www.addEventListener('input', wwwInput);

        e.addEventListener('focus', function (e) {
            if (e.target.classList.contains(items.errorClassName)) {
                formRemoveError(e.target);
            }
        })
    })

    function commentSend(e) {
        e.preventDefault();
    }

    function isEmpty(e) {
        if (e.currentTarget.value === '') {
            formAddError(e.currentTarget)
            items.errorMsg.forEach(elem => {
                if (e.currentTarget.dataset.type === elem.dataset.type) {
                    elem.textContent = items.msg.empty;
                }
            })
        }
    }

    function isValid(regexp, value) {
        return regexp.test(value);
    }

    function emailInput() {
        if (isValid(items.email_regexp, items.email.value)) {
            items.errorMsg.forEach(elem => {
                formRemoveError(items.email)
                if (elem.dataset.type === 'email') {
                    elem.textContent = items.msg.okEmail;
                    localStorage.setItem("email", items.email.value);
                }
            })
        } else {
            items.errorMsg.forEach(elem => {
                formAddError(items.email)
                if (elem.dataset.type === 'email') {
                    elem.textContent = items.msg.wrongEmail;
                }
            })
        }
    }
    function nameInput() {
        if (isValid(items.name_regexp, items.userName.value)) {
            items.errorMsg.forEach(elem => {
                formRemoveError(items.userName)
                if (elem.dataset.type === 'name') {
                    elem.textContent = items.msg.okName;
                    localStorage.setItem("name", items.userName.value);
                }
            })
        } else {
            items.errorMsg.forEach(elem => {
                formAddError(items.userName)
                if (elem.dataset.type === 'name') {
                    elem.textContent = items.msg.wrongName;
                }
            })
        }
    }
    function wwwInput() {
        if (isValid(items.www_regexp, items.www.value)) {
            items.errorMsg.forEach(elem => {
                formRemoveError(items.www)
                if (elem.dataset.type === 'www') {
                    elem.textContent = items.msg.okSite;
                    localStorage.setItem("www", items.www.value);
                }

            })
        } else {
            items.errorMsg.forEach(elem => {
                formAddError(items.www)
                if (elem.dataset.type === 'www') {
                    elem.textContent = items.msg.wrongSite;
                }
            })
        }
    }

    cancelInfo();
}

export default postForm;
