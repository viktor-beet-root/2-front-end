import getCommentsList from "./getCommentsList";
import renderComment from "./renderComment";
import renderComments from "./renderComments";
import updateStorage from "./updateStorage";
function likeProcess() {
    const comment = document.querySelector('.comments-block__wrapper');

    comment.addEventListener('click', function (e) {
        let tempId = e.target.dataset.id;
        const users = getCommentsList();
        users.forEach(user => {
            if (tempId === user.userId) {
                if (e.target.nodeName === 'IMG' && e.target.classList.contains('like-block__img')) {
                    console.log('like');
                    updateStorage(tempId, 'heartCount', user.heartCount = user.heartCount + 1);
                    e.target.nextElementSibling.textContent = user.heartCount;
                } else if (e.target.nodeName === 'IMG' && e.target.classList.contains('good')) {
                    console.log('good');
                    updateStorage(tempId, 'likeCount', user.likeCount = user.likeCount + 1);
                    e.target.previousElementSibling.textContent = user.likeCount;
                } else if (e.target.nodeName === 'IMG' && e.target.classList.contains('bad')) {
                    console.log('bad');
                    updateStorage(tempId, 'dislikeCount', user.dislikeCount = user.dislikeCount + 1);
                    e.target.nextElementSibling.textContent = user.dislikeCount;
                }
            }
        });



    })
}

export default likeProcess;
