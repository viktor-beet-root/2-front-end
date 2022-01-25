class Form {
    constructor(options) {
        this.form = document.querySelector(options.form);

        this.errorClassName = options.errorClassName;

        this.errorMessage = options.errorMessage;

        this.requiredElementList = this.form.querySelectorAll(options.requiredElementList);

        this.errorMessageSymbols = options.errorMessageSymbols;

        this.lettersOnlyClass = options.lettersOnlyClass;

        this.maxCountElem = this.form.querySelector(options.maxCountElem);

        this.isMaxError = false;

        this.maxContent = options.maxContent;

        this.input = options.input;

        this.limitIsOver = options.limitIsOver;

        this.form.addEventListener('submit', this.submitForm);

        this.requiredD(this.requiredElementList);
    }

    lettersOnly(elemt) {
        const regex = /\d/;

        if (regex.test(elemt.value)) {
            setError(elemt, this.errorMessageSymbols);
        }
    }

    setError(elemt, errorMessage) {
        elemt.parentElement.classList.add(this.errorClassName);
        elemt.classList.add(this.errorClassName);
        elemt.after(this.createErrorMessage(errorMessage));
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

    maxContentControl() {
        const maxCount = +this.dataset.maxContent;
        const valueLength = +this.value.length;
        maxCountElem.dataset.currentCount = valueLength;

        if (valueLength > maxCount && !isMaxError) {
            this.setError(this, this.limitIsOver);
            this.isMaxError = true;
        } else if (valueLength <= maxCount && isMaxError) {
            this.isMaxError = false;
            this.removeError(this);
        }
    }

    focusOut() {
        const value = this.value;

        if (value === '') {
            console.log(this.errorMessage);
            this.setError(this, this.errorMessage);
        }
        if (this.classList.contains(this.lettersOnlyClass)) {
            this.lettersOnly(this);
        }
    }

    focusIn() {
        if (this.classList.contains(this.errorClassName)) {
            this.removeError(this);
        }
    }

    requiredD(e) {
        e.forEach(elem => {
            if (elem.getAttribute(this.maxContent)) {
                elem.addEventListener('input', this.maxContentControl);
            }

            elem.addEventListener('blur', this.focusOut);

            elem.addEventListener('focus', this.focusIn);
        });

    }


}
export default Form;
