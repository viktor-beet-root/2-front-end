const form = document.querySelector('.form');
//console.log(form)
const errorClassName = 'error';
const errorMessage = 'This field is required';
const errorMessageSimbols = 'Only letters';
//const eventChange = new Event('change');
const lettersOnlyClass = 'letters-only';

const requiredElementList = form.querySelectorAll('.required:not(div)');
const maxCountElemnt = form.querySelector('.message-counter');
let isMaxError = false;

requiredElementList.forEach(elemt => {
    if (elemt.getAttribute('data-max-content')) {
        elemt.addEventListener('input', function (e) {
            const maxCount = +this.dataset.maxContent;
            const valueLength = +this.value.length;
            maxCountElemnt.dataset.currentCount = valueLength;

            if (valueLength > maxCount && !isMaxError) {
                setError(this, 'Limit is fasle');
                isMaxError = true;
            } else if (valueLength <= maxCount && isMaxError) {
                isMaxError = false;
                removeError(this);
            }
        });
    }

    // elemt.addEventListener('change', function (e) {

    // });

    // elemt.addEventListener('input', function (e) {
    //     console.log(this)
    // });

    elemt.addEventListener('blur', function (e) {
        const value = this.value;

        if (value === '') {
            setError(this, errorMessage);
        }

        //this.dispatchEvent(eventChange);

        if (this.classList.contains(lettersOnlyClass)) {
            lettersOnly(this);
        }
    });

    elemt.addEventListener('focus', function (e) {
        if (this.classList.contains(errorClassName)) {
            removeError(this);
        }
    });
});

function lettersOnly(elemt) {
    const regex = /\d/;

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

form.addEventListener('submit', submitFotm)

function submitFotm(e) {
    e.preventDefault();

    for (let i = 0; i < this.length; i++) {
        console.log(this[i])
    }
}


