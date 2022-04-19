import items from "./items";
import formRemoveError from "./formRemoveError";
import formAddError from "./formAddError";
import addUser from "./addUser";
import addErrorMessage from "./addErrorMessage";

function postForm() {
    items.post.addEventListener('click', commentSend);
    items.inputs.forEach(e => {

        e.addEventListener('blur', isEmpty);

        e.addEventListener('focus', function (e) {
            if (e.target.classList.contains(items.errorClassName)) {
                formRemoveError(e.target);
            }
        });


        items.email.addEventListener('input', emailInput);
        items.userName.addEventListener('input', nameInput);
        items.www.addEventListener('input', wwwInput);


    })

    function commentSend(e) {
        e.preventDefault();
        if (items.userName.value !== '' && !items.userName.classList.contains('_error') &&
            items.email.value !== '' && !items.email.classList.contains('_error') &&
            !items.www.classList.contains('_error') &&
            items.textarea.value !== '' && !items.textarea.classList.contains('_error')) {

            if (localStorage.getItem('userList')) {
                items.userList = JSON.parse(localStorage.getItem('userList'));
                addUser();
                localStorage.setItem('userList', JSON.stringify(items.userList));
            } else {
                addUser();
                localStorage.setItem('userList', JSON.stringify(items.userList));
            }


        } else if (items.userName.value === '' && !items.userName.classList.contains('_error') &&
            items.email.value === '' && !items.email.classList.contains('_error') &&
            !items.www.classList.contains('_error') &&
            items.textarea.value === '' && !items.textarea.classList.contains('_error')) {
            formAddError(items.userName);
            formAddError(items.email);
            formAddError(items.textarea);

            items.errorMsg.forEach(elem => {
                if (elem.dataset.type !== 'www') {
                    elem.textContent = items.msg.empty;
                }
            })

        }
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
            addErrorMessage(items.email, items.msg.okEmail, 0)
        } else {
            addErrorMessage(items.email, items.msg.wrongEmail, 1)
        }
    }
    function nameInput() {
        if (isValid(items.name_regexp, items.userName.value)) {
            addErrorMessage(items.userName, items.msg.okName, 0)
        } else {
            addErrorMessage(items.userName, items.msg.wrongName, 1)
        }
    }
    function wwwInput() {
        if (isValid(items.www_regexp, items.www.value)) {
            addErrorMessage(items.www, items.msg.okSite, 0)
        } else if (items.www.value === '') {
            addErrorMessage(items.www, items.msg.shouldEmpty, 0)
        } else {
            addErrorMessage(items.www, items.msg.wrongSite, 1)
        }
    }
}

export default postForm;
