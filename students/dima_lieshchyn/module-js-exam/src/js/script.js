import scrollSmooth from './dev-modules/scroll';
import postForm from './form/post-form';
import message from './form/message';
import items from './dev-modules/items';
import cancelInfo from './form/cancelInfo';
import removeProfanity from './form/checkProfanity';
import getCommentsList from './dev-modules/getCommentsList';
import renderComments from './comment/renderComments';
import showTime from './dev-modules/showTime';
import editMessage from './user-buttons/editMessage';
import removeComment from './user-buttons/removeComment';
import likeProcess from './user-buttons/likeProcess';
import addAnswer from './answer/addAnswer';
import renderAnswer from './answer/renderAnswer';
import randomId from './dev-modules/idGen';
import clearForm from './form/clearForm';
import setSavedUser from './form/setSavedUser';

scrollSmooth('.arrow, .nav-link', 0.8);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


document.addEventListener('DOMContentLoaded', postForm);

document.addEventListener('DOMContentLoaded', message);

document.addEventListener('DOMContentLoaded', removeProfanity);

document.addEventListener('DOMContentLoaded', showTime);

document.addEventListener('DOMContentLoaded', setSavedUser);

items.cancel.addEventListener('click', cancelInfo);



editMessage();

removeComment();

likeProcess();



// addAnswer('81b5235e');
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

renderComments(getCommentsList());


