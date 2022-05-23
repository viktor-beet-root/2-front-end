import renderAnswer from "../answer/renderAnswer";
import renderComment from "./renderComment";
import isEmpty from "../dev-modules/isEmpty";
import userList from "../userList";


function renderComments(commentList) {

    commentList.forEach(elem => {

        renderComment(elem.username, elem.www, elem.message, elem.userId, elem.heartCount, elem.likeCount, elem.dislikeCount);
        let wrapper = document.querySelector('.new-comment').nextElementSibling;
        elem.answer.forEach(answer => {
            if (isEmpty(answer)) return;
            renderAnswer({
                wrapper: wrapper,
                tempId: answer.userId,
                www: answer.www,
                author: answer.username,
                message: answer.message,
                likeCount: answer.likeCount,
                dislikeCount: answer.dislikeCount,
            });
        })


    });

}

export default renderComments;
