import scrollSmooth from './scroll';
import postForm from './post-form';
import message from './message';
import items from './items';

scrollSmooth('.arrow, .nav-link');

document.addEventListener('DOMContentLoaded', postForm);

document.addEventListener('DOMContentLoaded', message);

document.addEventListener('DOMContentLoaded', saveInfo);


function saveInfo() {
    // items.switchItem.addEventListener('')
}
// items.form.append()
const com = document.querySelector('.comments-block__wrapper')
const newComment = document.createElement('div');
const website = localStorage.getItem('www');
const author = localStorage.getItem('name');
const postTime = '1 minute ago';
const userMessage = localStorage.getItem('text');
const likeCount = '1';
const dislikeCount = '1'
const heartCount = '1'
newComment.classList.add('comments-block__comment', 'comment')
const commentData = `<div class="comments-block__comment comment">
<div class="comment__avatar-wrapper"><img class="comment__avatar"
        src="./images/comments-block/photo_1.jpg" alt="avatar" srcset="">
    <span class="comment__avatar-info">${website}</span>
</div>
<div class="comment__body-wrapper">
    <div class="comment__info-block">
        <span class="comment__author-name">${author}</span>
        <span class="comment__post-time">${postTime}</span>
    </div>
    <div class="comment__settings settings">
        <img class="settings__item" src="./images/comments-block/edit.svg"
            alt="edit" srcset="">
        <img class="settings__item" src="./images/comments-block/remove.svg"
            alt="remove" srcset="">
    </div>
    <div class="comment__text-wrapper">
        <p class="comment__text-info">${userMessage}</p>
    </div>
    <div class="comment__comment-footer comment-footer">
        <div class="comment-footer__reply-block">
            <img src="./images/comments-block/reply.svg" alt="reply" srcset="">
            <span class="comment-footer__reply-text">Reply</span>
        </div>
        <div class="comment-footer__like-dislike like-dislike">
            <span class="like-dislike__like-info">${likeCount}</span>
            <img src="./images/comments-block/good.svg" alt="like" srcset="">
            <img src="./images/comments-block/bad.svg" alt="dislike" srcset="">
            <span class="like-dislike__dislike-info">${dislikeCount}</span>
        </div>
    </div>
    <div class="comment__like-block like-block">
        <img class="like-block__img" src="./images/comments-block/like.svg"
            alt="like" srcset="">
        <span class="like-block__info">${heartCount}</span>
    </div>
</div>
</div>`
newComment.innerHTML = commentData;
console.log(newComment);
com.append(newComment)
