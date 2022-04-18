import items from "./items";
import formRemoveError from "./formRemoveError";
import formAddError from "./formAddError";
import cancelInfo from "./cancelInfo";
import randomId from "./idGen";

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
        if (items.userName.value !== '' && !items.userName.classList.contains('_error') &&
            items.email.value !== '' && !items.email.classList.contains('_error') &&
            !items.www.classList.contains('_error') &&
            items.textarea.value !== '' && !items.textarea.classList.contains('_error')) {


            items.userList.push({
                userId: randomId(),
                username: items.userName.value,
                email: items.email.value,
                www: items.www.value,
                message: items.textarea.value,
                messageId: randomId(),
            });

            if (localStorage.getItem('userList')) {
                let temp = [];
                let temp1 = [];
                items.userListlocal = JSON.parse(localStorage.getItem('userList'));

                items.userListlocal.push(items.userList[0])
                localStorage.setItem('userList', JSON.stringify(items.userListlocal));
            } else {
                localStorage.setItem('userList', JSON.stringify(items.userList));
            }

            function userCheck(arr1, arr2) {

            }

            // var users = [];
            // if (localStorage.getItem('storedUsers'))
            //   users = JSON.parse(localStorage.getItem('storedUsers'));


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
            items.errorMsg.forEach(elem => {
                formRemoveError(items.email)
                if (elem.dataset.type === 'email') {
                    elem.textContent = items.msg.okEmail;
                    // localStorage.setItem("email", items.email.value);
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
                    // localStorage.setItem("name", items.userName.value);
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
                    // localStorage.setItem("www", items.www.value);
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
