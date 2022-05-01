import items from "./items";
import getCommentsList from "./getCommentsList";

function updateAnswerStorage(id, type, value) {
    items.userList = getCommentsList();

    items.userList.forEach(user => {
        if (user.answer.userId === id) {
            user.answer[type] = value;
        }
    });

    localStorage.setItem('userList', JSON.stringify(items.userList))

}

export default updateAnswerStorage;
