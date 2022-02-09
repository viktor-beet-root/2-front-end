const form = document.querySelector('.form');

const errorClassName = 'error';

const errorMessageList = {
    default: 'This field is required',
    empty: 'Field is empty',
    limit: 'Limit is over',
};

const requiredElementList = form.querySelectorAll('.required:not(div)');
const formElements = form.querySelectorAll('input,textarea');
console.log(formElements);

const notRequiredElementList = form.querySelectorAll('.email-only,.phone-only,.site-only');

const errorMessageSymbols = {
    letters: 'Only letters',
    email: 'Only email',
    phone: 'Only phone number',
};

const specialClasses = {
    letters: 'letters-only',
    emails: 'email-only',
    phones: 'phone-only',
}
const additionalFields = {
    email: form.querySelector('input[name="email"]'),
    phone: form.querySelector('input[name="phone"]'),
    site: form.querySelector('input[name="site"]'),
}
const regexList = {
    name: /\d\.[a-zA-Z]\S(.+)/,
    phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,

}

const maxCountElem = form.querySelector('.message-counter');

let isMaxError = false;

function validateItem(item, vType) {
    const value = item.value;
    if (value === '') {
        setError(item, errorMessageList.default);
    }
    if (item.classList.contains(vType)) {
        checkField(item, regexList.email, errorMessageSymbols.email);
    }
}

formElements.forEach(elem => {

    elem.addEventListener('blur', function (e) {
        validateItem(elem, regexList.email);
    });

    elem.addEventListener('focus', function (e) {
        if (this.classList.contains(errorClassName)) {
            removeError(this);
        }
    });
});

function checkField(elemt, regex, type) {
    const tempRegex = regex;
    if (!tempRegex.test(elemt.value)) {
        setError(elemt, type);
    }
}

// requiredElementList.forEach(elem => {
//     if (elem.getAttribute('data-max-content')) {
//         elem.addEventListener('input', function (e) {
//             const maxCount = +this.dataset.maxContent;
//             const valueLength = +this.value.length;
//             maxCountElem.dataset.currentCount = valueLength;

//             if (valueLength > maxCount && !isMaxError) {
//                 setError(this, errorMessageList.limit);
//                 isMaxError = true;
//             } else if (valueLength <= maxCount && isMaxError) {
//                 isMaxError = false;
//                 removeError(this);
//             }
//         });
//     }

//     //тригнуть событие!!
//     elem.addEventListener('blur', function (e) {
//         const value = this.value;

//         if (value === '') {
//             setError(this, errorMessageList.default);
//         }
//         if (this.classList.contains(specialClasses.letters)) {
//             lettersOnly(this);
//         }
//     });

//     elem.addEventListener('focus', function (e) {
//         if (this.classList.contains(errorClassName)) {
//             removeError(this);
//         }
//     });
// });



// function emailsOnly(elemt) {
//     const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

//     if (!regex.test(elemt.value)) {
//         setError(elemt, errorMessageSymbols.email);
//     }
// }

// function phonesOnly(elemt) {
//     const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

//     if (!regex.test(elemt.value)) {
//         setError(elemt, errorMessageSymbols.email);
//     }
// }
// function lettersOnly(elemt) {
//     const regex = /\d\.[a-zA-Z]\S(.+)/;

//     if (regex.test(elemt.value)) {
//         setError(elemt, errorMessageSymbols.letters);
//     }
// }

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


form.addEventListener('submit', submitForm)


function submitForm(e) {
    e.preventDefault();

    console.dir(this);

    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
}




