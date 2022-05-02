import getCommentsList from "./getCommentsList";

export default function insertUsersList(list) {
    const users = getCommentsList();
    if (!getCommentsList()) {
        users = list;
    } else {
        list.forEach(user => {
            users.push(user);
        });
    }

    // list.forEach(user => {
    //     users.push(user);
    // });
    localStorage.setItem('userList', JSON.stringify(users))

}
