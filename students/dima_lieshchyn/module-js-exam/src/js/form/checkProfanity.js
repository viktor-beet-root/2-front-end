import items from '../dev-modules/items'

function removeProfanity() {
    items.textarea.addEventListener('input', checkProfanity);
    items.textarea.addEventListener('profanity', function (e) {
        const errMsgText = document.querySelector('.error-msg[data-type="message"]')
        errMsgText.textContent = 'Bad words is a wrong way!';

    });

    function checkProfanity(e) {
        const profanityWords = ['сука', 'пиздец', 'ебать', 'хуй', 'блядь', 'suka', 'bliat', 'hui', 'fuck', 'нахуя'];
        const regex = new RegExp(profanityWords.join('|'), 'i');
        profanityWords.forEach(elem => {
            if (e.target.value.indexOf(elem) >= 0) {
                let temp = e.target.value;
                e.target.value = temp.replace(regex, '');
                items.textarea.dispatchEvent(new Event('profanity', { 'bubbles': true, 'composed': true }));
            }
        })
    }
}

export default removeProfanity;
