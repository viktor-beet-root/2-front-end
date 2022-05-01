const form = document.querySelector('.form');

const errorClassName = 'error';

const errorMessageList = {
    default: 'Required field',
    limit: 'To much symbols',
};

const requiredElementList = form.querySelectorAll('.required:not(div)');

const formElements = form.querySelectorAll('input,textarea,div');

const notRequiredElementList = form.querySelectorAll('.email-only,.phone-only,.site-only');

const errorMessageSymbols = {
    fullName: 'Only Name',
    email: 'Only Email',
    phone: 'Only phone number',
    site: 'Only site adress',
};

const specialClasses = {
    fullName: 'full-name-only',
    emails: 'email-only',
    phones: 'phone-only',
    site: 'site-only',
}
const additionalFields = {
    email: form.querySelector('input[name="email"]'),
    phone: form.querySelector('input[name="phone"]'),
    site: form.querySelector('input[name="site"]'),
}
const regexList = {
    name: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    site: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
}

const maxCountElem = form.querySelector('.message-counter');

let isMaxError = false;

function validateItem(item) {
    const value = item.value;
    if (isSpecClass(item, specialClasses.emails) && value !== '') {
        checkField(item, regexList.email, errorMessageSymbols.email);
    } else if (isSpecClass(item, specialClasses.phones) && value !== '') {
        checkField(item, regexList.phone, errorMessageSymbols.phone);
    } else if (isSpecClass(item, specialClasses.site) && value !== '') {
        checkField(item, regexList.site, errorMessageSymbols.site);
    }
}
function isSpecClass(elem, classN) {
    return elem.classList.contains(classN);
}

notRequiredElementList.forEach(elem => {
    elem.addEventListener('blur', function (e) {
        validateItem(elem);
    });

    elem.addEventListener('focus', function (e) {
        if (isSpecClass(elem, errorClassName)) {
            removeError(elem);
        }
    });
});

function checkField(elemt, regex, type) {
    const tempRegex = regex;
    if (!tempRegex.test(elemt.value)) {
        setError(elemt, type);
    }
}

requiredElementList.forEach(elem => {
    if (elem.getAttribute('data-max-content')) {
        elem.addEventListener('input', function (e) {
            const maxCount = +this.dataset.maxContent;
            const valueLength = +this.value.length;
            maxCountElem.dataset.currentCount = valueLength;

            if (valueLength > maxCount && !isMaxError) {
                setError(this, errorMessageList.limit);
                isMaxError = true;
            } else if (valueLength <= maxCount && isMaxError) {
                isMaxError = false;
                removeError(this);
            }
        });
    }
    elem.addEventListener('blur', function (e) {
        const value = this.value;
        if (value === '') {
            setError(this, errorMessageList.default);
        }
        if (isSpecClass(this, specialClasses.fullName) && value !== '') {
            checkField(elem, regexList.name, errorMessageSymbols.fullName);
        }
    });

    elem.addEventListener('focus', function (e) {
        if (isSpecClass(this, errorClassName)) {
            removeError(this);
        }
    });
});


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

formElements.forEach(elem => {

    if (typeof elem.value === 'undefined') {
        console.log('net');
    } else {
        form.addEventListener('submit', submitForm)
    }
})



function submitForm(e) {
    e.preventDefault();

    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }

}




