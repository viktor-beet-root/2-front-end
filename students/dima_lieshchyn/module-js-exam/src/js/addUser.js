import items from "./items";
import randomId from "./idGen";

function addUser() {
    return items.userList.push({
        userId: randomId(),
        username: items.userName.value,
        email: items.email.value,
        www: items.www.value,
        message: items.textarea.value,
        messageId: randomId(),
    });
}

export default addUser;
