import getCommentsList from "./getCommentsList";
import getDate from "./getDate";

function showTime() {
    const comments = getCommentsList();
    const timeElem = document.querySelectorAll('.comment-header__post-time');
    if (!comments) return;
    if (!timeElem) return;
    comments.forEach(elem => {
        timeElem.forEach(time => {
            if (time.dataset.id === elem.userId) {
                time.textContent = getDate(new Date(elem.time));
            } else {
                time.textContent = '2 minutes ago'
            }
        })
    });
}


export default showTime;
