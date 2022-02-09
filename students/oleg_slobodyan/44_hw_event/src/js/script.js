
const form = document.querySelector('.form');
const errorClassName = 'error';
const errorMessage = 'This feild is required';
const errorMessageSimbols = "Only letters";
const eventChange = new Event('change');
const lettersOnlyClass = 'letters-only';
const errorLimitLetters = 'Limit of letter is over';
const errorFullName = 'Need to write Your name and surname';
const WrongNumberFormat = 'write phone nummer like this examle +38(0xx)xxx-xx-xx';
const WrongMail = 'write email like this examle exapmle@mail.com';

const resetButton = form.querySelector('.reset-btn');
const requiredElemetslist = form.querySelectorAll('input.required,textarea.required');
const maxCountElemnt = form.querySelector('.message-counter');
const phoneElement = form.querySelector('.input-phone');
const mailElement = form.querySelector('.input-mail');
const checkBox = document.getElementById('checkbox-agree');
let isMaxError = false;

requiredElemetslist.forEach(elem => {

    if (elem.getAttribute('data-max-content')) {
        elem.addEventListener('input', checkCountOfSimmbols);
    }
    elem.addEventListener('blur', function () {
        const value = this.value;

        if (value === "") {
            setError(this, errorMessage);
        }

        if (this.classList.contains(lettersOnlyClass)) {
            lettersOnly(this);
        }
        if (this.classList.contains(lettersOnlyClass)) {
            fullNameCheck(this);
        }
    });
    elem.addEventListener('focus', function (e) {
        if (this.classList.contains(errorClassName)) {
            removeError(this);
        }
    });


});
phoneElement.addEventListener('change', function () {
    checkPhoneNumber(this, WrongNumberFormat)
});
phoneElement.addEventListener('focus', function () {
    if (this.classList.contains(errorClassName)) {
        removeError(this);
    }
});
mailElement.addEventListener('change', function () {
    checkMail(this, WrongMail)
});
mailElement.addEventListener('focus', function () {
    if (this.classList.contains(errorClassName)) {
        removeError(this);
    }
});
function fullNameCheck(elemt) {
    if (elemt.value.trim().split(' ').length !== 2 && !elemt.classList.contains(errorClassName)) {
        setError(elemt, errorFullName);
    }
}
function checkPhoneNumber(elemt, errorMessage) {
    const regex = /^\+38\(0\d{2}\)\d{3}\-\d{2}\-\d{2}$/;

    if (!regex.test(elemt.value)) {
        setError(elemt, errorMessage);
    }
}
function checkMail(elemt, errorMessage) {
    const regex = /^\w+\@\w+\.\w+$/;

    if (!regex.test(elemt.value)) {
        setError(elemt, errorMessage);
    }
}
function checkCountOfSimmbols(elemt) {
    const maxCount = +this.dataset.maxContent;
    const valueLength = +this.value.length
    maxCountElemnt.dataset.currentCount = valueLength;
    if (valueLength > maxCount && !isMaxError) {
        setError(this, errorLimitLetters);
        isMaxError = true;
    } else if (valueLength <= maxCount && isMaxError) {
        isMaxError = false;
        removeError(this);
    }
}

function lettersOnly(elemt) {
    const regex = /\d/;   // \d любе число

    if (regex.test(elemt.value)) {
        setError(elemt, errorMessageSimbols);
    }
}

function setError(elemt, errorMessage) {
    elemt.parentElement.classList.add(errorClassName);
    elemt.classList.add(errorClassName);
    elemt.after(createErrorMessage(errorMessage));
}
function removeError(elemt) {
    elemt.nextElementSibling.remove();
    elemt.parentElement.classList.remove(errorClassName);
    elemt.classList.remove(errorClassName);
}

function createErrorMessage(errorMessage) {
    const tag = document.createElement('div');
    tag.classList.add(errorClassName);
    tag.textContent = errorMessage;

    return tag;
}
resetButton.addEventListener('click', function () {
    for (let i = 0; i < form.length; i++) {
        if (form[i].classList.contains(errorClassName)) {
            removeError(form[i]);
        }
    }
});

form.addEventListener('submit', submitForm)


function submitForm(e) {
    e.preventDefault();

    for (let i = 0; i < this.length; i++) {
        if (this[i].classList.contains(errorClassName)) {
            removeError(this[i]);
        }

        if (this[i].classList.contains('required') && this[i].value === '') {
            setError(this[i], errorMessage);
        }
        if (this[i].classList.contains(lettersOnlyClass)) {
            lettersOnly(this[i]);
        }
        if (this[i].classList.contains(lettersOnlyClass)) {
            fullNameCheck(this[i]);
        }
        if (this[i].classList.contains('input-phone') && this[i].value !== '') {
            checkPhoneNumber(this[i], WrongNumberFormat);
        }
        if (this[i].classList.contains('input-mail') && this[i].value !== '') {
            checkPhoneNumber(this[i], WrongMail);
        }

        if (this[i].classList.contains('checkbox-agree') && !this[i].checked) {
            setError(this[i], 'You need to agtree with evetything');

            // this[i].nextElementSibling.style.border = '1px solid red';
            this[i].nextElementSibling.style.color = 'red';

        }
    }
}




// class Form {
//     constructor(option) {
//         this.form = document.querySelector(option.formClassName);
//         this.errorClassName = option.errorClassName;
//         this.errorMessageSimbols = option.errorMessageSimbols;
//         this.lettersOnlyClass = option.lettersOnlyClass;

//         this.form.addEventListener('submit', this.submitForm);
//         this.requiredElemetslist = this.form.querySelectorAll('input.required,textarea.required');
//         this.maxCountElemnt = this.form.querySelector('.message-counter');
//         this.isMaxError = false;
//     }
//     checkValidForm() {
//         const thisIS = this;
//         this.requiredElemetslist.forEach(elem => {
//             if (elem.getAttribute('data-max-content')) {
//                 elem.addEventListener('input', function (e) {

//                     const maxCount = +elem.dataset.maxContent;
//                     const valueLength = +elem.value.length
//                     thisIS.maxCountElemnt.dataset.currentCount = valueLength;

//                     if (valueLength > maxCount && !thisIS.isMaxError) {
//                         thisIS.setError(elem, 'Limit of letter is over');

//                         thisIS.isMaxError = true;
//                     } else if (valueLength <= maxCount && thisIS.isMaxError) {
//                         thisIS.isMaxError = false;
//                         thisIS.removeError(elem);
//                     }

//                 });
//             }
//             elem.addEventListener('blur', function () {
//                 const value = elem.value;
//                 if (value === "") {
//                     thisIS.setError(elem, thisIS.errorMessage);
//                 }

//                 if (elem.classList.contains(thisIS.lettersOnlyClass)) {
//                     thisIS.lettersOnly(elem);
//                 }
//             });
//             elem.addEventListener('focus', function (e) {
//                 if (elem.classList.contains(thisIS.errorClassName)) {
//                     thisIS.removeError(elem);
//                 }
//             });
//         });
//     }

//     lettersOnly(elemt) {
//         const regex = /\d/;   // \d любе число
//         const thisIS = this;
//         if (regex.test(elemt.value)) {
//             thisIS.setError(elemt, thisIS.errorMessageSimbols);
//         }
//     }

//     setError(elemt, errorMessage) {
//         const thisIS = this;
//         elemt.parentElement.classList.add(thisIS.errorClassName);
//         elemt.classList.add(thisIS.errorClassName);
//         elemt.after(createErrorMessage(thisIS.errorMessage));
//     }
//     removeError(elemt) {
//         elemt.nextElementSibling.remove();
//         elemt.parentElement.classList.remove(this.errorClassName);
//         elemt.classList.remove(this.errorClassName);
//     }

//     createErrorMessage(errorMessage) {
//         const thisIS = this;
//         const tag = document.createElement('div');
//         tag.classList.add(thisIS.errorClassName);
//         tag.textContent = thisIS.errorMessage;

//         return tag;
//     }

//     submitForm(e) {
//         e.preventDefault();

//         for (let i = 0; i < this.length; i++) {
//             console.log(thisIS[i]);
//         }
//     }
// }

// const form = new Form({
//     formClassName: '.form',
//     errorClassName: 'error',
//     errorMessage: 'This feild is required',
//     errorMessageSimbols: "Only letters",
//     lettersOnlyClass: 'letters-only',
// });
// form.checkValidForm();

