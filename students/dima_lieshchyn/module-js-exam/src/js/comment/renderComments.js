import renderAnswer from "../answer/renderAnswer";
import renderComment from "./renderComment";
import isEmpty from "../dev-modules/isEmpty";


function renderComments(commentList) {
    if (!commentList) return;
    commentList.forEach(elem => {

        renderComment(elem.username, elem.www, elem.message, elem.userId, elem.heartCount, elem.likeCount, elem.dislikeCount);
        let wrapper = document.querySelector('.new-comment').nextElementSibling;

        if (isEmpty(elem.answer)) return;
        renderAnswer({
            wrapper: wrapper,
            tempId: elem.answer.userId,
            www: elem.answer.www,
            author: elem.answer.username,
            message: elem.answer.message,
            likeCount: elem.answer.likeCount,
            dislikeCount: elem.answer.dislikeCount,
        });

    });

}

export default renderComments;
