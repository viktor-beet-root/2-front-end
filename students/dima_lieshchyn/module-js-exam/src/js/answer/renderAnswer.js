import renderSmile from "../dev-modules/renderSmile";

function renderAnswer(options) {
    const newAnswer = document.createElement('div');
    const nextAnswer = document.createElement('div');
    newAnswer.classList.add('comments-block__comment', 'comment', 'answer');
    newAnswer.dataset.id = options.tempId;
    const answerData = `<div class="comment__avatar-wrapper"><img class="comment__avatar"
    src="./images/comments-block/photo_1.jpg" alt="avatar" srcset="">
    <a href="#/" class="comment__avatar-info-link">
    <span data-id="${options.tempId}" class="comment__avatar-info-item">${options.www ? options.www : 'Website'}</span>
    </a>
    </div>
    <div class="comment__comment-body-wrapper comment-body-wrapper">
    <div class="comment-body-wrapper__comment-header comment-header">
    <div class="comment-header__info-block">
        <div class="comment-header__item time-block">
            <span data-id="${options.tempId}" class="comment-header__post-time">Just now</span>
        </div>
    </div>
    </div>
    <div class="comment-body-wrapper__text-wrapper text-block">
    <div class="text-block__wrapper">
        <p data-id="${options.tempId}" class="text-block__text-info"><span class="author_info">@${options.author}</span> ${renderSmile(options.message) ? renderSmile(options.message) : options.message}</p>
    </div>
    </div>
    <div class="comment-body-wrapper__comment-footer comment-footer">
    <div data-id="${options.tempId}" data-type="reply" class="comment-footer__reply-block reply-block active">
        <img data-id="${options.tempId}" data-type="reply" class="reply-block__img" src="./images/comments-block/reply.svg"
            alt="reply" srcset="">
        <span data-id="${options.tempId}" data-type="reply" class="comment-footer__reply-text">Reply</span>
    </div>
    <div data-id="${options.tempId}" class="comment-footer__like-dislike like-dislike">
        <span data-id="${options.tempId}" class="like-dislike__like-info">${options.likeCount}</span>
        <img data-id="${options.tempId}" class="good active" src="./images/comments-block/good.svg" alt="like"
            srcset="">
        <img data-id="${options.tempId}" class="bad active" src="./images/comments-block/bad.svg" alt="dislike"
            srcset="">
        <span data-id="${options.tempId}" class="like-dislike__dislike-info">${options.dislikeCount}</span>
    </div>
    </div>
    </div>`;

    newAnswer.innerHTML = answerData;
    options.wrapper.append(newAnswer);
    options.wrapper.append(nextAnswer);
}

export default renderAnswer;
