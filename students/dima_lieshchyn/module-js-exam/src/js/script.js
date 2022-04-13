import $ from 'jquery';
import scrollSmooth from './scroll';

scrollSmooth('a[href*="#"]');

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', commentSend);

    function commentSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.required');
        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];

            formRemoveError(input);


            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    console.log('qwe');
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    console.log('qwe');
                    formAddError(input);
                    error++;
                }
            }

        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('.error');
        input.classList.add('.error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('.error');
        input.classList.remove('.error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
})

