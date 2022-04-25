import getCommentsList from "./getCommentsList";
import items from "./items";
function updateStorage(id, type, value) {
    items.userList = getCommentsList();

    items.userList.forEach(user => {
        if (user.userId === id) {
            user[type] = value;
        }
    });

    localStorage.setItem('userList', JSON.stringify(items.userList))


}

export default updateStorage;
