const form = document.querySelector('.form');

const errorClassName = 'error';

const errorMessageList = {
    default: 'This field is required',
    empty: 'Field is empty',
    limit: 'Limit is over',
};

const requiredElementList = form.querySelectorAll('.required:not(div)');

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

const maxCountElem = form.querySelector('.message-counter');

let isMaxError = false;


// /[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/;
notRequiredElementList.forEach(elem => {
    elem.addEventListener('blur', function (e) {

        if (this.classList.contains(specialClasses.emails)) {
            emailsOnly(this);
        }
    });

    elem.addEventListener('focus', function (e) {
        if (this.classList.contains(errorClassName)) {
            removeError(this);
        }
    });
})

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
        if (this.classList.contains(specialClasses.letters)) {
            lettersOnly(this);
        }
    });

    elem.addEventListener('focus', function (e) {
        if (this.classList.contains(errorClassName)) {
            removeError(this);
        }
    });
});

function emailsOnly(elemt) {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (regex.test(elemt.value)) {
        setError(elemt, errorMessageSymbols.email);
    }
}

function lettersOnly(elemt) {
    const regex = /\d/;

    if (regex.test(elemt.value)) {
        setError(elemt, errorMessageSymbols.letters);
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


form.addEventListener('submit', submitForm)


function submitForm(e) {
    e.preventDefault();

    console.dir(this);

    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
}




