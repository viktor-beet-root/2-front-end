import items from "./items";
import showTime from "./showTime";

function renderComment(author = '', www = '', message = '', tempId = '', heartCount = 0, likeCount = 0, dislikeCount = 0) {
    const newComment = document.createElement('div');

    newComment.classList.add('comments-block__comment', 'comment', 'new-comment');
    newComment.dataset.id = tempId;
    const commentData = `<div class="comment__avatar-wrapper"><img class="comment__avatar"
    src="./images/comments-block/photo_1.jpg" alt="avatar" srcset="">
    <a href="#/" class="comment__avatar-info-link">
    <span data-id="${tempId}" class="comment__avatar-info-item">${www ? www : 'Website'}</span>
    </a>
    </div>
    <div class="comment__comment-body-wrapper comment-body-wrapper">
    <div class="comment-body-wrapper__comment-header comment-header">
    <div class="comment-header__info-block">
        <div class="comment-header__item name-block">
            <span data-id="${tempId}" class="comment-header__author-name">${author}</span>
        </div>
        <div class="comment-header__item time-block">
            <span data-id="${tempId}" class="comment-header__post-time">Just now</span>
        </div>
    </div>
    <div class="comment-header__settings-block settings-block">
        <img data-id="${tempId}" id="${tempId}" class="settings-block__item edit-message active"
            src="./images/comments-block/edit.svg" alt="edit" srcset="">
        <img data-id="${tempId}" class="settings-block__item remove active"
            src="./images/comments-block/remove.svg" alt="remove" srcset="">
    </div>
    </div>
    <div class="comment-body-wrapper__text-wrapper text-block">
    <div class="text-block__wrapper">
        <p data-id="${tempId}" class="text-block__text-info"><span class="author_info">@${author}</span> ${message}</p>
    </div>
    <div class="text-block__like-block like-block active">
        <img data-id="${tempId}" class="like-block__img" src="./images/comments-block/like.svg"
            alt="like" srcset="">
        <span data-id="${tempId}" class="like-block__info">${heartCount}</span>
    </div>
    </div>
    <div class="comment-body-wrapper__comment-footer comment-footer">
    <div data-id="${tempId}" class="comment-footer__reply-block reply-block active">
        <img class="reply-block__img" src="./images/comments-block/reply.svg"
            alt="reply" srcset="">
        <span class="comment-footer__reply-text">Reply</span>
    </div>
    <div data-id="${tempId}" class="comment-footer__like-dislike like-dislike">
        <span data-id="${tempId}" class="like-dislike__like-info">${likeCount}</span>
        <img data-id="${tempId}" class="good active" src="./images/comments-block/good.svg" alt="like"
            srcset="">
        <img data-id="${tempId}" class="bad active" src="./images/comments-block/bad.svg" alt="dislike"
            srcset="">
        <span data-id="${tempId}" class="like-dislike__dislike-info">${dislikeCount}</span>
    </div>
    </div>
    </div>`
    newComment.innerHTML = commentData;
    items.commentsWrapper.append(newComment)
}

export default renderComment;
