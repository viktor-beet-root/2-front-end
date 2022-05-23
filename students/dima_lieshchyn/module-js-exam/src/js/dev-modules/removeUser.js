import getCommentsList from "./getCommentsList";
import items from "./items";
function removeUser(id) {
    items.userList = getCommentsList();

    items.userList.forEach((user, index) => {
        if (user.userId === id) {
            items.userList.splice(index, 1);
        }
    });

    localStorage.setItem('userList', JSON.stringify(items.userList))


}

export default removeUser;
