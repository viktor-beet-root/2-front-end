import getCommentsList from "./getCommentsList";

export default function insertUsersList(list) {
    let users = getCommentsList();
    if (!users) {
        users = list;

        localStorage.setItem('userList', JSON.stringify(users))
    }


    return users;
}
