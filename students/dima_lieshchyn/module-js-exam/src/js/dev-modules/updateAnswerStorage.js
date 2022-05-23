import items from "./items";
import getCommentsList from "./getCommentsList";

function updateAnswerStorage(id, type, value) {
    items.userList = getCommentsList();

    items.userList.forEach(user => {
        user.answer.forEach(answer => {
            if (answer.userId === id) {
                answer[type] = value;
            }
        })

    });

    localStorage.setItem('userList', JSON.stringify(items.userList))

}

export default updateAnswerStorage;
