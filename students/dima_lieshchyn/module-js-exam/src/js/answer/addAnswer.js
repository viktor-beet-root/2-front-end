import items from "../dev-modules/items";
import randomId from "../dev-modules/idGen";
import getCommentsList from "../dev-modules/getCommentsList";

function addAnswer(id) {
    const updatedComentList = getCommentsList();
    updatedComentList.map(elem => {
        if (elem.userId === id) {
            elem.answer = {
                userId: randomId(),
                username: items.userName.value,
                email: items.email.value,
                www: items.www.value,
                message: items.textarea.value,
                time: Date.now(),
                likeCount: 0,
                dislikeCount: 0,
            }
        }
    });
    localStorage.setItem('userList', JSON.stringify(updatedComentList));
}

export default addAnswer;
