import getCommentsList from "./getCommentsList";
import renderComment from "./renderComment";



function renderComments(commentList) {
    if (!commentList) return;
    commentList.forEach(elem => {
        renderComment(elem.username, elem.www, elem.message, elem.userId, elem.heartCount, elem.likeCount, elem.dislikeCount);
    });
}

export default renderComments;
