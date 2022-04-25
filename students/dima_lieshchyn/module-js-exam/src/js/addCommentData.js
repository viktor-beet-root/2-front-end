import items from "./items";
import randomId from "./idGen";
import renderComment from "./renderComment";

function addCommentData() {
    let tempId = randomId()
    items.userList.push({
        userId: tempId,
        username: items.userName.value,
        email: items.email.value,
        www: items.www.value,
        message: items.textarea.value,
        time: Date.now(),
        likeCount: 0,
        dislikeCount: 0,
        heartCount: 0,
    });
    renderComment(items.userName.value, items.www.value, items.textarea.value, tempId)
}

export default addCommentData;
