import Form from "./form";

const forma = new Form({
    form: document.querySelector('.form'),

    errorClassName: 'error',

    errorMessage: 'This field is required',

    requiredElementList: '.required:not(div)',

    errorMessageSymbols: 'Only letters',

    lettersOnlyClass: 'letters-only',

    maxCountElem: '.message-counter',

});
