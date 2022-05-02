import randomId from "../dev-modules/idGen";
import addAnswer from "./addAnswer";
import renderAnswer from "./renderAnswer";
import clearForm from "../form/clearForm";
import items from "../dev-modules/items";

export default function eventAnswer() {
    items.commentsWrapper.addEventListener('click', function (e) {
        const btn = document.querySelector('.answer-btn');
        let tempid = randomId();

        if (e.target.dataset.type === 'reply') {
            items.userName.focus();
            items.post.style.display = 'none';
            btn.style.display = 'block';
            let wrapper = e.target.closest('.new-comment,.answer').nextElementSibling;
            let currentId = e.target.dataset.id;
            btn.addEventListener('click', function (e) {
                e.preventDefault();

                addAnswer(currentId);
                renderAnswer({
                    wrapper: wrapper,
                    tempId: tempid,
                    www: items.www.value,
                    author: items.userName.value,
                    message: items.textarea.value,
                    likeCount: 0,
                    dislikeCount: 0,
                });
                items.post.style.display = 'block';
                btn.style.display = 'none';
                clearForm();
            })

        }
    })
}
