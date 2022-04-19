import scrollSmooth from './scroll';
import postForm from './post-form';
import message from './message';
import items from './items';
import cancelInfo from './cancelInfo';
import formAddError from './formAddError';
import removeProfanity from './checkProfanity';

scrollSmooth('.arrow, .nav-link');

document.addEventListener('DOMContentLoaded', postForm);

document.addEventListener('DOMContentLoaded', message);

document.addEventListener('DOMContentLoaded', removeProfanity);

items.cancel.addEventListener('click', cancelInfo);



const com = document.querySelector('.comments-block__wrapper')
const newComment = document.createElement('div');
const website = 'items.userList[0].website;'
const author = 'items.userList[0].userName;'
const postTime = '1 minute ago';
const userMessage = 'items.userList[0].message;'
const likeCount = '1';
const dislikeCount = '1'
const heartCount = '1'
newComment.classList.add('comments-block__comment', 'comment')
const commentData = `<div class="comment__avatar-wrapper"><img class="comment__avatar"
src="./images/comments-block/photo_1.jpg" alt="avatar" srcset="">
<a href="#/" class="comment__avatar-info-link">
<span class="comment__avatar-info-item">${website}</span>
</a>
</div>
<div class="comment__comment-body-wrapper comment-body-wrapper">
<div class="comment-body-wrapper__comment-header comment-header">
<div class="comment-header__info-block">
    <div class="comment-header__item name-block">
        <span class="comment-header__author-name">${author}</span>
    </div>
    <div class="comment-header__item time-block">
        <span class="comment-header__post-time">${postTime}</span>
    </div>
</div>
<div class="comment-header__settings-block settings-block">
    <img class="settings-block__item active"
        src="./images/comments-block/edit.svg" alt="edit" srcset="">
    <img class="settings-block__item active"
        src="./images/comments-block/remove.svg" alt="remove" srcset="">
</div>
</div>
<div class="comment-body-wrapper__text-wrapper text-block">
<p class="text-block__text-info">${userMessage}</p>
<div class="text-block__like-block like-block active">
    <img class="like-block__img" src="./images/comments-block/like.svg"
        alt="like" srcset="">
    <span class="like-block__info">${heartCount}</span>
</div>
</div>
<div class="comment-body-wrapper__comment-footer comment-footer">
<div class="comment-footer__reply-block reply-block active">
    <img class="reply-block__img" src="./images/comments-block/reply.svg"
        alt="reply" srcset="">
    <span class="comment-footer__reply-text">Reply</span>
</div>
<div class="comment-footer__like-dislike like-dislike">
    <span class="like-dislike__like-info">${likeCount}</span>
    <img class="active" src="./images/comments-block/good.svg" alt="like"
        srcset="">
    <img class="active" src="./images/comments-block/bad.svg" alt="dislike"
        srcset="">
    <span class="like-dislike__dislike-info">${dislikeCount}</span>
</div>
</div>
</div>
</div>`
newComment.innerHTML = commentData;
console.log(newComment);
com.append(newComment)





