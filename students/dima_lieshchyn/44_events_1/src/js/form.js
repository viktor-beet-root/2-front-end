class Form {
    constructor(options) {
        this.form = options.form;

        this.errorClassName = options.errorClassName;

        this.errorMessage = options.errorMessage;

        this.requiredElementList = this.form.querySelectorAll(options.requiredElementList);

        this.errorMessageSymbols = options.errorMessageSymbols;

        this.lettersOnlyClass = options.lettersOnly;

        this.maxCountElem = this.form.querySelector(options.maxCountElem);

        let isMaxError = false;

        this.form.addEventListener('submit', this.submitForm);
        this.foo(this.requiredElementList);
    }
    foo(element) {
        element.forEach(elem => {
            this.showMaxContent(elem);
            this.showError(elem);
            this.removeErrorAfterFocus(elem);
        });
    }
    showMaxContent(elem) {
        if (elem.getAttribute('data-max-content')) {
            elem.addEventListener('input', function (e) {
                const maxCount = +this.dataset.maxContent;
                const valueLength = +this.value.length;
                this.maxCountElem.dataset.currentCount = valueLength;

                if (valueLength > maxCount && !isMaxError) {
                    this.setError(this, 'Limit is over');
                    isMaxError = true;
                } else if (valueLength <= maxCount && isMaxError) {
                    isMaxError = false;
                    this.removeError(this);
                }
            });
        }
    }
    showError(elem) {
        elem.addEventListener('blur', function (e) {
            const value = this.value;

            if (value === '') {
                console.log(e.target);
                this.setError(e.target, this.errorMessage);
            }
            if (this.classList.contains(this.lettersOnlyClass)) {
                this.lettersOnly(this);
            }
        });
    }

    removeErrorAfterFocus(elem) {
        elem.addEventListener('focus', function (e) {
            if (this.classList.contains(this.errorClassName)) {
                this.removeError(this);
            }
        });
    }

    lettersOnly(elemt) {
        const regex = /\d/;

        if (regex.test(elemt.value)) {
            this.setError(elemt, this.errorMessageSymbols);
        }
    }

    setError(elemt, errorMessage) {
        elemt.parentElement.classList.add(this.errorClassName);
        elemt.classList.add(this.errorClassName);
        elemt.after(createErrorMessage(errorMessage));
    }

    removeError(elemt) {
        elemt.nextElementSibling.remove();
        elemt.parentElement.classList.remove(this.errorClassName);
        elemt.classList.remove(this.errorClassName);
    }

    createErrorMessage(errorMessage) {
        const tag = document.createElement('div');
        tag.classList.add(this.errorClassName);
        tag.textContent = errorMessage;

        return tag;
    }


    submitForm(e) {
        e.preventDefault();

        console.dir(this);

        for (let i = 0; i < this.length; i++) {
            console.log(this[i]);
        }
    }

}

export default Form;
