import items from "../dev-modules/items";
import randomId from "../dev-modules/idGen";
import renderComment from "./renderComment";
import setCookie from "../dev-modules/setCookie";

function addCommentData() {
    let tempId = randomId();
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
        answer: [],
    });
    renderComment(items.userName.value, items.www.value, items.textarea.value, tempId);

}

export default addCommentData;
