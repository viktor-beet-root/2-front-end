import Form from "./form";

const frm = new Form({
    form: '.form',

    errorClassName: 'error',

    errorMessage: 'This field is required',

    requiredElementList: '.required:not(div)',

    errorMessageSymbols: 'Only letters',

    lettersOnlyClass: 'letters-only',

    maxCountElem: '.message-counter',

    maxContent: 'data-max-content',

    limitIsOver: 'Limit is over',
});


