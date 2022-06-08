import Glide from '@glidejs/glide';
// import printComment from './comment';

new Glide('.glide', {
    startAt: 0,
    perView: 1,
}).mount();

// add arrow to sub menu

let subMenu = document.querySelectorAll('.menu__sub');
let moreTemplate = `<svg class="more__icon">
<use xlink:href="#menuArrow" />
</svg>`;

subMenu.forEach(element => {
    let linkMore = element.previousElementSibling;
    linkMore.classList.add('more');

    let arrowImg = document.createElement('span');
    arrowImg.classList.add('more__icon-wrap');
    arrowImg.innerHTML = moreTemplate;
    linkMore.appendChild(arrowImg);
});

// open/close submenu

let openSubmenu = document.querySelectorAll('.more');
openSubmenu.forEach(element => {
    element.addEventListener('click', rotateArrow )
});

function rotateArrow(e) {
    e.preventDefault();

    let icon = this.querySelector('.more__icon');
    icon.classList.toggle('rotate-up');

    let menuItem = this.parentElement;
    menuItem.classList.toggle('menu__item_visible')
    let submenu = menuItem.querySelector('.menu__sub');
    submenu.classList.toggle('menu__sub_open');

    let childSubmenus = submenu.querySelectorAll('.menu__sub');
    childSubmenus.forEach(element => {
        if (element.classList.contains('menu__sub_open')) {
            element.classList.remove('menu__sub_open');
            element.parentElement.classList.remove('menu__item_visible');
        }
    });
}

//close mobile menu

const mainMenu = document.querySelector('#mainMenu');

const closeBtn = document.querySelector('#menuCloseBtn');
closeBtn.addEventListener('click', closeMobileMenu);

const openBtn = document.querySelector('#menuOpenBtn');
openBtn.addEventListener('click', closeMobileMenu);

function closeMobileMenu(e) {
    mainMenu.classList.toggle('menu_closed');
}

// scroll to top
document.querySelector('.up-btn').onclick = () => {
    window.scrollTo(scrollY, 0);
}

// FORM

// clear form

const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', resetForm);

function resetForm(e) {
    e.preventDefault();

    let textFields = document.querySelectorAll('.add-comment__input');

    textFields.forEach(elem => {
        elem.value = '';
        
        if (elem.parentElement.classList.contains('error')) {
            elem.parentElement.classList.remove('error');
        }

        elem.blur();
    });

    saveUserInfo.checked = false;

}



// all comments in localStorage
const comments = getComments();

// add new comment form
const addComment = document.forms.addCommentForm;

const userName = addComment.userName;
const userEmail = addComment.userEmail;
const userWebsite = addComment.userWebsite;

let saveUserInfo = addComment.saveUserInfo;

addComment.addEventListener('submit', checkEmptyFields);
addComment.addEventListener('submit', submitForm);
addComment.addEventListener('focusout', cancelError);

// all text fields array
const textFields = addComment.querySelectorAll('.add-comment__input');

// reply to function sends there info about whom to reply;
let whom = '';

// validation

const userInputs = document.querySelectorAll('.add-comment__input_s');

userInputs.forEach(element => {
    element.addEventListener('blur', checkSpelling);
});

function checkSpelling(e) {
    let regExp = '';
    let errorTxt = '';

    switch(this) {
        case userName:
            regExp = /^[A-Za-z0-9 ]+$/;
            errorTxt = 'Only lating letters and numbers';
            break
        case userEmail:
            regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            errorTxt = 'This is incorrect email format';
            break
        case userWebsite:
            regExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
            errorTxt = 'This is incorrect website format';
    }

    let currentInput = this.value;
    let errorMessage = this.parentElement.querySelector('.error-message');

    if(currentInput.match(regExp)) {
        if (this.parentElement.classList.contains('error')) {
            this.parentElement.classList.remove('error');
        }

    } else if (this.value === '') {
        if (this.parentElement.classList.contains('error')) {
            this.parentElement.classList.remove('error');
        }
        this.blur();
    }
     else {
        this.parentElement.classList.add('error');
        errorMessage.textContent = errorTxt;
        this.focus();
    }

}

// check textarea
const userMessage = addCommentForm.userMessage;

userMessage.addEventListener('keyup', countCharacters);
userMessage.addEventListener('blur', blurTextarea);

function countCharacters(e) {
    let currentTxt = this.value;
    let errorMessage = this.parentElement.querySelector('.error-message');

    let minErrorTxt = 'Your message is too short, it should be longer than 15 characters';
    const maxErrorTxt = 'Your message is too long, it should not exceed 500 characters'
    
    if (currentTxt.length < 15 && currentTxt.length != 0) {
        
        this.parentElement.classList.add('error');
        errorMessage.textContent = minErrorTxt;
        
    } else if (currentTxt.length > 500 && currentTxt.length != 0) {
        this.parentElement.classList.add('error');
        errorMessage.textContent = maxErrorTxt;

    } else {
        if (this.parentElement.classList.contains('error')) {
            this.parentElement.classList.remove('error')
        }
    }
}

function blurTextarea() {
    if (this.parentElement.classList.contains('error')) {
        this.focus();
    }
}

function cancelError() {
    textFields.forEach(elem => {
        if (elem.parentElement.classList.contains('error')) {
            elem.parentElement.classList.remove('error');
        }
    })
}

function checkEmptyFields(e) {

    e.preventDefault();

    const requiredFields = document.querySelectorAll('.required .add-comment__input');

    const errorMessage = document.querySelectorAll('.error-message');

    errorMessage.forEach(elem => {
        elem.textContent = 'This field is required';
    });

    requiredFields.forEach(elem => {
        if (elem.value === '') {
            elem.parentElement.classList.add('error');
            e.stopImmediatePropagation();
        }
    })
}

setDefaultValues();

function submitForm(e) {
    e.preventDefault();

    const userMessage = addComment.userMessage.value;
    const userName = addComment.userName.value;
    const userEmail = addComment.userEmail.value;
    const userWebsite = addComment.userWebsite.value;
    let commentIndex = getUniqueId();

    if(userMessage.startsWith('@', 0)) {

        addReply(e);

    } else {

        const newComment = {
            id: 'comment' + ++commentIndex + '_',
            name: userName,
            email: userEmail,
            website: userWebsite,
            message: userMessage,
            replies: [],
            likes: 0,
        }
    
        comments.push(newComment);
    
        localStorage.setItem('comments', JSON.stringify(comments));

        if(saveUserInfo.checked) {
            localStorage.setItem('userName', newComment.name);
            localStorage.setItem('userEmail', newComment.email);
            localStorage.setItem('userWebsite', newComment.website);
        } 

        addComment.userMessage.value = '';
    
        renderComment([newComment]);

    }
}


// Render comments

function renderComment(comments) {
    const commentList = document.querySelector('#commentList');

    comments.forEach(comment => {
        comment.message = codeToSmile(comment.message);
        const mainCommentTemplate = `<li class="comment" id="${comment.id}">
            <div class="comment__head">
                <div class="comment-ava">
                    <div class="comment-ava__img-wrap">
                        <img class="comment-ava__img" src="../images/user-1.jpg" alt="">
                    </div>
                    <div class="comment-ava__website">
                        <a class="comment-ava__link" href="#">${comment.website}</a>
                    </div>
                </div>
                <div class="comment-title">
                    <div class="comment-title__name">${comment.name}</div>
                    <div class="comment-title__date">Just now</div>
                </div>
                <div class="comment-icons">
                    <div class="change">
                        <svg class="change__img change__img_edit">
                            <use xlink:href="#edit" />
                        </svg>
                        <svg class="change__img change__img_delete">
                            <use xlink:href="#delete" />
                        </svg>
                    </div>
                    <div class="likes">
                        <div class="likes__wrap">
                            <svg class="likes__img likes__img_inner">
                                <use xlink:href="#innerHeart" />
                            </svg>
                            <svg class="likes__img">
                                <use xlink:href="#heart" />
                            </svg>
                        </div>
                        <div class="likes__counter">${comment.likes}</div>
                    </div>
                </div>
            </div>
            <div class="comment__body">
                <p class="comment__txt">${comment.message}</p>
            </div>
            <div class="comment__foot">
                <div class="reply">
                    <svg class="reply__img">
                        <use xlink:href="#reply" />
                    </svg>
                    <div class="reply__txt">Reply</div>
                </div>
                <div class="helpful">
                    <div class="helpful__item helpful__item_up">
                        <div class="helpful__counter helpful__counter_up">0</div>
                        <svg class="helpful__img helpful__img_up">
                            <use xlink:href="#like" />
                        </svg>
                    </div>
                    <div class="helpful__item helpful__item_down">
                        <svg class="helpful__img helpful__img_down">
                            <use xlink:href="#dislike" />
                        </svg>
                        <div class="helpful__counter helpful__counter_down">0</div>
                    </div>
                </div>
            </div>
            <ul class="replies">

            </ul>
        </li>`

        commentList.insertAdjacentHTML('beforeend', mainCommentTemplate);

        let replies = comment.replies;
        if (replies.length > 0) {
            replies.forEach(reply => renderReply(reply));
        }

    });

    const likeCounters = document.querySelectorAll('.likes__wrap');

    likeCounters.forEach(counter => {
        counter.addEventListener('click', countLikes, {once: true});
    });

    const replyBtn = document.querySelectorAll('.reply');

    replyBtn.forEach(btn => {
        btn.addEventListener('click', scrollToForm);
    });

    codeToSmile(addComment.userMessage.value);

}

// get comments from local storage

function getComments() {
    const savedComments = JSON.parse(localStorage.getItem('comments'));
    return savedComments ? savedComments : [];
}

renderComment(comments);

// get unique id for comment

function getUniqueId() {
    const savedComments = getComments();
    
    if (savedComments.length > 0) {
        const lastComment = savedComments[savedComments.length - 1];
        const lastCommentId = lastComment.id;
        const newId = lastCommentId.substring(7, lastComment.id.length - 1);
        return newId;
    } else {
        return 0;
    }
}

function getUniqueReplyId(currentObj) {

    const currentObjReplies = currentObj.replies;

    if (!currentObjReplies) {
        const parentId = currentObj.parentId;
        const parentObj = comments.find(elem => elem.id === parentId);
        const parentArr = parentObj.replies;

        const lastSiblingReply = parentArr[parentArr.length - 1];

        const lastSiblingReplyId = lastSiblingReply.id;

        const strLastSiblingReplyId = lastSiblingReplyId.indexOf('_') + 1;

        const n = lastSiblingReplyId.substring(strLastSiblingReplyId);

        return n;
    }

    const lastReply = currentObjReplies[currentObjReplies.length - 1];

    if (lastReply) {

        const lastReplyId = lastReply.id;
        const lastReplyI = lastReplyId.indexOf('_') + 1;
        const n = lastReplyId.substring(lastReplyI);

        return n;

    } else {
        return 0;
    }

}


// Delete comment

const deleteCommentBtn = document.querySelectorAll('.change__img_delete');

deleteCommentBtn.forEach(btn => {
    btn.addEventListener('click', deleteThisComment);
})

function deleteThisComment(e) {
    const thisCommentId = this.closest('li').id;
    
    let thisCommentObj = comments.find(elem => elem.id === thisCommentId);

    let thisCommentIndex = comments.indexOf(thisCommentObj);

    comments.splice(thisCommentIndex, 1);

    localStorage.setItem('comments', JSON.stringify(comments));

    this.closest('li').remove();
}


// Like comment

// const likeCounters = document.querySelectorAll('.likes__wrap');

// likeCounters.forEach(counter => {
//     counter.addEventListener('click', countLikes, {once: true});
// })

function getCurrentObject(target) {
    const savedComments = getComments();
    const currentLi = target.closest('li').id;
    const currentObj = savedComments.find(elem => elem.id === currentLi);

    if (target.closest('ul').classList.contains('replies')) {
        const parentLiId = target.closest('ul').parentElement.id;
        const parentArr = savedComments.find(elem => elem.id === parentLiId);

        const currentReply = parentArr.replies.find(elem => elem.id === currentLi);

        return currentReply;
    }

    return currentObj;
}

function updatedLocalStorage(currentObj) {
    const updatedComments = comments.map(comment => (comment.id === currentObj.id) ? currentObj : comment);

    localStorage.setItem('comments', JSON.stringify(updatedComments));
}

function countLikes(e) {

    console.log('meow')

    let currentObj = getCurrentObject(this);

    currentObj.likes++;

    updatedLocalStorage(currentObj);

    renderLikes(this, currentObj);

    this.parentElement.classList.add('active');
    this.parentElement.style.cursor='unset';
}

function renderLikes(target, currentObj) {
    const counterParent = target.closest('li');
    const counter = counterParent.querySelector('.likes__counter');
    counter.innerText = currentObj.likes;
}


// smiles
const smiles = document.querySelectorAll('.smile-list__img');

smiles.forEach(element => {
    element.addEventListener('click', smileToCode);
});

function smileToCode(e) {

    let codeSmile = '';

    let smileNumber = e.currentTarget.id;

    switch (smileNumber) {
        case 'smileGrin': 
            codeSmile = '[::grin::]'
            break
        case 'smileWink': 
            codeSmile = '[::wink::]'
            break
        case 'smileHappy':
            codeSmile = '[::happy::]'
            break
        case 'smileVictory':
            codeSmile = '[::victory::]'
            break
        case 'smilePerplexed':
            codeSmile = '[::perplexed::]'
            break
        case 'smileAngry':
            codeSmile = '[::angry::]'
            break
        case 'smileSad':
            codeSmile = '[::sad::]'
    }

    addComment.userMessage.value = addComment.userMessage.value + codeSmile;
}

function codeToSmile(text) {

    const smileImages = Array.from(document.querySelectorAll('.smile-list__img'));

    const grin = smileImages.find(img => img.id === 'smileGrin').outerHTML;
    const wink = smileImages.find(img => img.id === 'smileWink').outerHTML;
    const happy = smileImages.find(img => img.id === 'smileHappy').outerHTML;
    const victory = smileImages.find(img => img.id === 'smileVictory').outerHTML;
    const perplexed = smileImages.find(img => img.id === 'smilePerplexed').outerHTML;
    const angry = smileImages.find(img => img.id === 'smileAngry').outerHTML;
    const sad = smileImages.find(img => img.id === 'smileSad').outerHTML;

    const regGrin = /\[::grin::\]/g;
    const regWink = /\[::wink::\]/g;
    const regHappy = /\[::happy::\]/g;
    const regVictory = /\[::victory::\]/g;
    const regPerplexed = /\[::perplexed::\]/g;
    const regAngry = /\[::angry::\]/g;
    const regSad = /\[::sad::\]/g;


    return text.replace(regAngry, angry).replace(regGrin, grin).replace(regHappy, happy).replace(regWink, wink).replace(regVictory, victory).replace(regPerplexed,perplexed).replace(regSad, sad);

}


// add reply
// const replyBtn = document.querySelectorAll('.reply');
// replyBtn.forEach(btn => {
//     btn.addEventListener('click', scrollToForm);
// });

function scrollToForm(e) {

    addComment.scrollIntoView();

    let currentObj = getCurrentObject(this);

    const topicStarter = currentObj.name;

    addComment.userMessage.value = '@' + topicStarter;

    whom = this;
    return whom;
}

function addReply() {
    let currentObj = getCurrentObject(whom);

    const userName = addComment.userName.value;
    const userEmail = addComment.userEmail.value;
    const userWebsite = addComment.userWebsite.value;
    const userMessage = addComment.userMessage.value;

    const topicStarter = currentObj.name;

    let currentIdNumber = currentObj.id;
    
    let n = getUniqueReplyId(currentObj);

    const newReply = {
        id: currentIdNumber + ++n,
        name: userName,
        email: userEmail,
        website: userWebsite,
        message: userMessage,
        topicStarter: topicStarter,
        parentId: currentIdNumber,
    }

    if (!currentObj.replies) {
        const separator = currentObj.id.indexOf('_') + 1;
        const parentId = currentObj.id.slice(separator);

        const parentObj = comments.find(obj => obj.id = parentId);

        const repliesArr = parentObj.replies;

        repliesArr.push(newReply);

    } else {

        currentObj.replies.push(newReply);

    }

    updatedLocalStorage(currentObj);

    renderReply(newReply);

}

function renderReply(newReply) {

    const toWhom = newReply.topicStarter;

    let text = newReply.message.substring(toWhom.length + 1);

    text = codeToSmile(text);

    const replyTemplate = `
    <li class="comment" id="${newReply.id}">
        <div class="comment__head">
            <div class="comment-ava">
                <div class="comment-ava__img-wrap">
                    <img class="comment-ava__img" src="../images/user-2.jpg" alt="">
                </div>
                <div class="comment-ava__website">
                    <a class="comment-ava__link" href="#">${newReply.website}</a>
                </div>
            </div>
            <div class="comment-title">
                <div class="comment-title__name">${newReply.name}</div>
                <div class="comment-title__date">Just now</div>
            </div>
        </div>
        <div class="comment__body">
            <p class="comment__txt"><span class="comment__starter">${toWhom}</span>${text}</p>
        </div>
        <div class="comment__foot">
            <div class="reply">
                <svg class="reply__img">
                    <use xlink:href="#reply" />
                </svg>
                <div class="reply__txt">Reply</div>
            </div>
            <div class="helpful">
                <div class="helpful__item helpful__item_up">
                    <div class="helpful__counter helpful__counter_up">5</div>
                    <svg class="helpful__img helpful__img_up">
                        <use xlink:href="#like" />
                    </svg>
                </div>
                <div class="helpful__item helpful__item_down">
                    <svg class="helpful__img helpful__img_down">
                        <use xlink:href="#dislike" />
                    </svg>
                    <div class="helpful__counter helpful__counter_down">2</div>
                </div>
            </div>
        </div>
    </li>`;

    
    const parentLi = document.getElementById(newReply.parentId);

    if (parentLi.querySelector('.replies')) {

        const ul = parentLi.querySelector('.replies');
        ul.insertAdjacentHTML('beforeend', replyTemplate);

    } else {

        parentLi.parentElement.insertAdjacentHTML('beforeend', replyTemplate);
    }

}

function setDefaultValues() {

    localStorage.getItem('userName') ? addComment.userName.value = localStorage.getItem('userName') : addComment.userName.value = '';

    localStorage.getItem('userEmail') ? addComment.userEmail.value = localStorage.getItem('userEmail') : addComment.userEmail.value = '';

    localStorage.getItem('userWebsite') ? addComment.userWebsite.value = localStorage.getItem('userWebsite') : userWebsite.value = '';

    localStorage.getItem('userName') ? saveUserInfo.checked = true : saveUserInfo.checked = false;
    
}

saveUserInfo.addEventListener('change', getUser);

function getUser() {
    if (localStorage.getItem('userName')) {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userWebsite');

    }
}
