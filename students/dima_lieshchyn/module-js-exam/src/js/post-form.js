function postForm() {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const userName = document.getElementById('name');
    const www = document.getElementById('www');
    const inputs = document.querySelectorAll('._required');
    const errorMsg = document.querySelectorAll('.error-msg');
    const msg = {
        empty: 'The field must not be empty',
        wrongName: 'The name is wrong',
        okName: 'Name is ok',
        wrongEmail: 'Email is wrong',
        okEmail: 'Email is ok',
        wrongSite: 'Site url is wrong',
        okSite: 'Site is ok'
    };

    const cancel = document.querySelector('.btn_cancel');
    const switchItem = document.querySelector('.switch__item');


    cancel.addEventListener('click', cancelInfo);



    const name_regexp = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;

    const email_regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const www_regexp = /(((https?: \/\/)|(www\.))[a-zA-Z0-9]{1,256}\.[a-zA-Z0-9]{1,4}\.?[a-zA-Z0-9]?\S+)|((www\.)?[a-zA-Z0-9]{1,256}\.[a-zA-Z0-9]{1,4}\.?[a-zA-Z0-9]?\S+)/;

    form.addEventListener('submit', commentSend);
    inputs.forEach(e => {

        e.addEventListener('blur', isEmpty);


        email.addEventListener('input', emailInput);
        userName.addEventListener('input', nameInput);
        www.addEventListener('input', wwwInput);

        e.addEventListener('focus', function (e) {
            if (e.target.classList.contains('._error')) {
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
            errorMsg.forEach(elem => {
                if (e.currentTarget.dataset.type === elem.dataset.type) {
                    elem.textContent = msg.empty;
                }
            })
        }
    }

    function isValid(regexp, value) {
        return regexp.test(value);
    }

    function emailInput() {
        if (isValid(email_regexp, email.value)) {
            errorMsg.forEach(elem => {
                formRemoveError(email)
                if (elem.dataset.type === 'email') {
                    elem.textContent = msg.okEmail;
                    localStorage.setItem("email", email.value);
                }
            })
        } else {
            errorMsg.forEach(elem => {
                formAddError(email)
                if (elem.dataset.type === 'email') {
                    elem.textContent = msg.wrongEmail;
                }
            })
        }
    }
    function nameInput() {
        if (isValid(name_regexp, userName.value)) {
            errorMsg.forEach(elem => {
                formRemoveError(userName)
                if (elem.dataset.type === 'name') {
                    elem.textContent = msg.okName;
                    localStorage.setItem("name", userName.value);
                }
            })
        } else {
            errorMsg.forEach(elem => {
                formAddError(userName)
                if (elem.dataset.type === 'name') {
                    elem.textContent = msg.wrongName;
                }
            })
        }
    }
    function wwwInput() {
        if (isValid(www_regexp, www.value)) {
            errorMsg.forEach(elem => {
                formRemoveError(www)
                if (elem.dataset.type === 'www') {
                    elem.textContent = msg.okSite;
                    localStorage.setItem("www", www.value);
                }

            })
        } else {
            errorMsg.forEach(elem => {
                formAddError(www)
                if (elem.dataset.type === 'www') {
                    elem.textContent = msg.wrongSite;
                }
            })
        }
    }

    function cancelInfo() {
        const textarea = document.querySelector('.textarea');
        formRemoveError(userName);
        formRemoveError(email);
        formRemoveError(www);
        errorMsg.forEach(elem => {
            elem.textContent = '';
        })
        userName.value = '';
        email.value = '';
        www.value = '';
        textarea.value = '';
        switchItem.checked = false;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

}

export default postForm;
