import getCommentsList from "../dev-modules/getCommentsList";
import updateStorage from "../dev-modules/updateStorage";
import updateAnswerStorage from "../dev-modules/updateAnswerStorage";
import getCookie from "../dev-modules/getCookie";
import setCookie from "../dev-modules/setCookie";
import isEmpty from "../dev-modules/isEmpty";

function likeProcess() {
    const comment = document.querySelector('.comments-block__wrapper');

    comment.addEventListener('click', function (e) {
        let tempId = e.target.dataset.id;
        const users = getCommentsList();
        users.forEach(user => {
            if (tempId === user.userId || tempId === user.answer.userId) {
                if (e.target.nodeName === 'IMG' && e.target.classList.contains('like-block__img')) {

                    if (getCookie(user.username)) return;

                    updateStorage(tempId, 'heartCount', user.heartCount = user.heartCount + 1);
                    e.target.setAttribute('src', './images/comments-block/like_b.svg');
                    e.target.nextElementSibling.textContent = user.heartCount;
                    setCookie(user.username, tempId, 1);


                } else if (e.target.nodeName === 'IMG' && e.target.classList.contains('good')) {
                    if (isEmpty(user.answer)) {
                        updateStorage(tempId, 'likeCount', user.likeCount = user.likeCount + 1);
                        e.target.previousElementSibling.textContent = user.likeCount;
                    } else {
                        updateAnswerStorage(tempId, 'likeCount', user.answer.likeCount = user.answer.likeCount + 1);
                        e.target.previousElementSibling.textContent = user.answer.likeCount;
                    }

                } else if (e.target.nodeName === 'IMG' && e.target.classList.contains('bad')) {

                    if (isEmpty(user.answer)) {
                        updateStorage(tempId, 'dislikeCount', user.dislikeCount = user.dislikeCount + 1);
                        e.target.nextElementSibling.textContent = user.dislikeCount;
                    } else {
                        updateAnswerStorage(tempId, 'dislikeCount', user.answer.dislikeCount = user.answer.dislikeCount + 1);
                        e.target.nextElementSibling.textContent = user.answer.dislikeCount;
                    }

                }
            }
        });



    })
}

export default likeProcess;
