const items = {
    form: document.getElementById('form'),
    email: document.getElementById('email'),
    userName: document.getElementById('name'),
    www: document.getElementById('www'),
    smiles: document.querySelectorAll('.smiles__item'),
    inputs: document.querySelectorAll('._required'),
    errorMsg: document.querySelectorAll('.error-msg'),
    msg: {
        empty: 'The field must not be empty',
        wrongName: 'The name is wrong',
        okName: 'Name is ok',
        wrongEmail: 'Email is wrong',
        okEmail: 'Email is ok',
        wrongSite: 'Site url is wrong',
        okSite: 'Site is ok',
    },
    textarea: document.querySelector('.textarea'),
    textCounter: document.querySelector('.counter__item'),
    cancel: document.querySelector('.btn_cancel'),
    switchItem: document.querySelector('.switch__item'),
    name_regexp: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
    email_regexp: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    www_regexp: /(((https?: \/\/)|(www\.))[a-zA-Z0-9]{1,256}\.[a-zA-Z0-9]{1,4}\.?[a-zA-Z0-9]?\S+)|((www\.)?[a-zA-Z0-9]{1,256}\.[a-zA-Z0-9]{1,4}\.?[a-zA-Z0-9]?\S+)/,
    errorClassName: '._error',

}

export default items;
