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

            if (tempId === user.userId) {
                if (e.target.nodeName === 'IMG' && e.target.classList.contains('like-block__img')) {

                    if (getCookie(user.username)) return;

                    updateStorage(tempId, 'heartCount', user.heartCount = user.heartCount + 1);
                    e.target.setAttribute('src', './images/comments-block/like_b.svg');
                    e.target.nextElementSibling.textContent = user.heartCount;
                    setCookie(user.username, tempId, 1);

                }
                if (e.target.nodeName === 'IMG' && e.target.classList.contains('good')) {
                    updateStorage(tempId, 'likeCount', user.likeCount = user.likeCount + 1);
                    e.target.previousElementSibling.textContent = user.likeCount;


                } else if (e.target.nodeName === 'IMG' && e.target.classList.contains('bad')) {

                    updateStorage(tempId, 'dislikeCount', user.dislikeCount = user.dislikeCount + 1);
                    e.target.nextElementSibling.textContent = user.dislikeCount;

                }
            }
            user.answer.forEach(answer => {
                if (tempId === answer.userId) {
                    if (isEmpty(answer)) return;
                    if (e.target.nodeName === 'IMG' && e.target.classList.contains('good')) {
                        updateAnswerStorage(tempId, 'likeCount', answer.likeCount = answer.likeCount + 1);
                        e.target.previousElementSibling.textContent = answer.likeCount;
                    } else if (e.target.nodeName === 'IMG' && e.target.classList.contains('bad')) {
                        updateAnswerStorage(tempId, 'dislikeCount', answer.dislikeCount = answer.dislikeCount + 1);
                        e.target.nextElementSibling.textContent = answer.dislikeCount;
                    }
                }
            })

        });



    })
}

export default likeProcess;
