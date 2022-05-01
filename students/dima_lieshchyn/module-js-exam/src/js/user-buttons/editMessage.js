import clearForm from "../form/clearForm";
import items from "../dev-modules/items";
import updateStorage from "../dev-modules/updateStorage";
import parseSmile from "../form/smileParse";
import renderSmile from "../dev-modules/renderSmile";

function editMessage() {
    const comment = document.querySelector('.comments-block__wrapper');
    const btn = document.querySelector('.edit-btn');
    let tempMessage = '';
    btn.addEventListener('click', editMessageEvent);
    comment.addEventListener('click', function (e) {
        if (e.target.nodeName === 'IMG' && e.target.classList.contains('edit-message')) {
            let tempId = e.target.dataset.id;
            let tempElem = e.currentTarget.querySelectorAll('.new-comment p');

            tempElem.forEach(text => {
                if (tempId === text.dataset.id) {
                    items.textarea.value = parseSmile(text) ? parseSmile(text) : text.textContent;
                    items.textarea.focus();
                    items.post.style.display = 'none';
                    btn.style.display = 'block';
                    btn.addEventListener('editMessage', function (e) {
                        text.innerHTML = `${renderSmile(tempMessage)}`;
                        updateStorage(tempId, 'message', tempMessage);
                        items.post.style.display = 'block';
                        btn.style.display = 'none';
                    })
                }
            });

        }

    })
    function editMessageEvent(e) {
        e.preventDefault();
        tempMessage = items.textarea.value;
        clearForm();
        e.target.dispatchEvent(new Event('editMessage', { 'bubbles': true }));
    }


}

export default editMessage;
