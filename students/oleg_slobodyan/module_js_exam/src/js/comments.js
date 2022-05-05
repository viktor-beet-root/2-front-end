class Comments {
    constructor(options) {
        this.form = document.querySelector(options.form);
        this.allInputs = this.form.querySelectorAll(options.allInputs);
        this.resetBtn = this.form.querySelector(options.resetBtn);
        this.postBtn = this.form.querySelector(options.postBtn);
        this.inputName = document.getElementById(options.inputName);
        this.inputEmail = document.getElementById(options.inputEmail);
        this.inputWebsite = document.getElementById(options.inputWebsite);
        this.checkboxBtn = document.getElementById(options.checkboxBtn);
        this.textarea = this.form.querySelector(options.textarea);
        this.counter = this.form.querySelector(options.counter);
        this.smilesList = this.form.querySelectorAll(options.smilesList);
        this.commentsWrapper = document.querySelector(options.commentsWrapper);
        this.hartClassName = options.hartClassName;
        this.commentLikeClassName = options.commentLikeClassName;
        this.dislikeClassName = options.dislikeClassName;
        this.replyLikeClassName = options.replyLikeClassName;
        this.replyDislikeClassName = options.replyDislikeClassName;
        this.commentDelClassName = options.commentDelClassName;
        this.isEdit = false;
        this.isReply = false;
        this.editCommentIndex = null;
        this.replyCommentIndex = null;

        /*=========== Localstorage ===========*/
        // localStorage.setItem('users', JSON.stringify([]));
        this.usersList = this.getUserList();
        // localStorage.clear('users');

        /*=========== Events ===========*/
        this.textarea.addEventListener('input', this.checkCountOfSimbols.bind(this));
        this.resetBtn.addEventListener('click', this.clearError.bind(this));
        this.inputName.addEventListener('focus', this.removeError);
        this.inputName.addEventListener('blur', this.checkName.bind(this));
        this.inputEmail.addEventListener('focus', this.removeError);
        this.inputEmail.addEventListener('blur', this.checkEmail.bind(this));
        this.inputWebsite.addEventListener('focus', this.removeError);
        this.inputWebsite.addEventListener('blur', this.checkDomain.bind(this));
        this.textarea.addEventListener('focus', this.removeError);
        this.textarea.addEventListener('blur', this.checkMessage.bind(this));
        this.form.addEventListener('submit', this.submitForm.bind(this));
        this.smilesList.forEach((elem) => {
            elem.addEventListener('click', this.addSmileToMessage.bind(this))
        });
        this.commentsWrapper.addEventListener('click', this.commentsActions.bind(this));
    }
    submitForm(e) {
        e.preventDefault();
        this.checkName(this.inputName);
        this.checkEmail(this.inputEmail);
        this.checkDomain(this.inputWebsite);
        this.checkMessage(this.textarea);
        const checkIf = !this.checkMessage(this.textarea) && !this.checkDomain(this.inputWebsite) && !this.checkEmail(this.inputEmail) && !this.checkName(this.inputName);

        if (this.isEdit && checkIf) {
            this.changeMessage(this.editCommentIndex);
            this.clearMassage();
            return;
        }

        if (this.isReply && checkIf) {
            this.addReplyToMessage();
            this.clearMassage();
            return;
        }

        if (checkIf) {
            this.addMessage();
            this.clearMassage();
        }
    }
    clearMassage() {
        if (this.checkboxBtn.checked) {
            this.textarea.value = '';
            return
        }
        this.allInputs.forEach(elem => {
            if (!elem.classList.contains('comment-form__checkbox')) {
                elem.value = '';
            }
        });
        this.counter.style.display = "none";
    }

    clearError() {
        this.allInputs.forEach(elem => {
            elem.parentElement.classList.remove('error');
            elem.nextElementSibling.textContent = '';
        });
        this.isEdit = false;
        this.isReply = false;
    }

    // Функція для перевірки Імені
    checkName() {
        const regExp = /[a-z]{2,10}(\d{1,5})?/i;
        let error = false;

        if (!this.inputName.value) {
            this.setError(this.inputName, 'This field is required');
            error = true;
        } else if (!this.inputName.value.match(regExp)) {
            this.setError(this.inputName, "Only latin letter and numbers");
            error = true;
        }
        return error;
    }

    // Функція для перевірки пошти
    checkEmail() {
        let error = false;
        const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

        if (!this.inputEmail.value) {
            this.setError(this.inputEmail, 'This field is required');
            error = true;
        }
        if (this.inputEmail.value !== '' && !this.inputEmail.value.match(regExp)) {
            this.setError(this.inputEmail, 'This is email invalid');
            error = true;
        }
        return error;
    }

    // Функція для перевірки домену сайту
    checkDomain() {
        let error = false;
        const regExp = /^(https?:\/\/)?([\w\d-_]+)\.([\w\d-_\.]+)\/?\??([^#\n\r]*)?#?([^\n\r]*)/gm;

        if (this.inputWebsite.value !== '' && !this.inputWebsite.value.match(regExp)) {
            this.setError(this.inputWebsite, 'This website address invalid');
            error = true;
        }
        return error;
    }

    // Функція для перевірки повідомлення
    checkMessage() {
        let error = false;
        const messageLength = this.textarea.value.length;

        if (this.textarea.value === '') {
            this.setError(this.textarea, 'This field is required');
            error = true;

        } else if (messageLength < 14) {
            this.setError(this.textarea, 'Message is too short (minimum 15 characters)');
            error = true;
        }
        return error;
    }

    //Функція для підрахунку введених симовлів у повідомленні
    checkCountOfSimbols() {
        const valueLength = +this.textarea.value.length;
        const maxCount = +this.textarea.dataset.maxCount;
        let isMaxError = false;

        this.counter.style.display = "block";
        this.counter.textContent = `${valueLength}/${maxCount}`;

        if (valueLength > maxCount) {
            this.setError(this.textarea, 'Max message length 500 characters');
            isMaxError = true;
        } else if (valueLength <= maxCount) {
            isMaxError = false;
            this.removeError.bind(this);
        }
    }

    // Функція додавання смайлів у textarea
    addSmileToMessage(e) {
        let smileName = e.currentTarget.dataset.smileName;;
        let event = new Event("input", { bubbles: true });
        this.textarea.value = `${this.textarea.value}[::${smileName}::] `;
        this.textarea.dispatchEvent(event);
    };

    setError(elem, errorMessage) {
        if (elem.classList.contains('error')) return;
        elem.parentElement.classList.add('error');
        elem.nextElementSibling.textContent = errorMessage;
    }

    removeError() {
        if (this.parentElement.classList.contains('error')) {
            this.parentElement.classList.remove('error');
            this.nextElementSibling.textContent = '';
        }
    }

    getUserList() {
        const localStorageData = JSON.parse(localStorage.getItem('users'));
        if (!localStorageData) {
            localStorageData = localStorage.setItem('users', JSON.stringify([]))
        }
        return localStorageData.length ? localStorageData : [
            {
                userMessageId: 44566778545,
                pubDate: 1651580231152,
                dateDisplay: 'Just now',
                userName: 'Jon Davis',
                userAva: './images/ava1.jpg',
                userEmail: 'someemail@gmail.com',
                userWebsite: 'Website',
                userMessage: 'Lorem <img src=\"./images/smils/smile.svg\" alt=\"smile\"> ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
                replyList: [
                    {
                        userReplyMessageId: 75648395643,
                        pubDate: 1651585231352,
                        dateDisplay: 'Just now',
                        userAva: './images/ava2.jpg',
                        userName: 'Shane Hobbins',
                        userEmail: 'someemail@gmail.com',
                        userWebsite: 'Website',
                        userReplyMessage: '<span class="answer-message__person">@Jon Davis</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                        likes: 5,
                        isLike: false,
                        dislikes: 2,
                        isDislike: false,
                    },
                    {
                        userReplyMessageId: 81648395643,
                        pubDate: 1651585235182,
                        dateDisplay: 'Just now',
                        userAva: './images/ava1.jpg',
                        userName: 'Shane Hobbins',
                        userEmail: 'someemail@gmail.com',
                        userWebsite: 'Website',
                        userReplyMessage: '<span class="answer-message__person">@Jon Davis</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                        likes: 5,
                        isLike: false,
                        dislikes: 2,
                        isDislike: false,
                    },
                ],
                likes: 5,
                isLike: false,
                dislikes: 2,
                isDislike: false,
                harts: 10,
                isHart: false,
            },
            {
                userMessageId: 566767845545,
                pubDate: 1651580231152,
                dateDisplay: 'Just now',
                userName: 'Jon Davis',
                userAva: './images/ava1.jpg',
                userEmail: 'someemail@gmail.com',
                userWebsite: 'Website',
                userMessage: 'Lorem <img src=\"./images/smils/smile.svg\" alt=\"smile\"> ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
                replyList: [],
                likes: 5,
                isLike: false,
                dislikes: 2,
                isDislike: false,
                harts: 10,
                isHart: false,
            },
        ];
    }

    setUserList() {
        localStorage.setItem('users', JSON.stringify(this.usersList));
    }

    getUserMessageId() {
        return Math.floor(Math.random() * 10000000) + 1;;
    }

    getPubTime(obj) {
        const display = 'ago';
        const time = ~((obj.pubDate - Date.now()) / (1000 * 60));
        if (time < 1) {
            obj.dateDisplay = 'Just now';
        }
        if (time > 1 && time < 60) {

            obj.dateDisplay = `${time} Minutes ${display}`;
        }
        if (time >= 60) {
            obj.dateDisplay = `${Math.floor(time / 60)} Hours ${display}`;
        }
        if (time >= 1440) {
            obj.dateDisplay = `${Math.floor(time / 1440)} Days ${display}`;
        }
    }

    commentsActions(e) {
        e.preventDefault();
        if (e.target.dataset.name === "edit") {
            this.editComment(e);
        }
        if (e.target.dataset.name === "delete") {
            this.removeComment(e);
        }
        if (e.target.dataset.name === "hart") {
            this.addCommentHart(e);
        }
        if (e.target.dataset.name === "like") {
            this.addCommentLike(e);
        }
        if (e.target.dataset.name === "dislike") {
            this.addCommentDislike(e);
        }
        if (e.target.dataset.name === "reply") {
            this.replyMessage(e);
        }
        if (e.target.dataset.name === "reply-like") {
            this.addReplyLike(e);
        }
        if (e.target.dataset.name === "reply-dislike") {
            this.addReplyDislike(e);
        }
    }
    replyMessage(e) {
        const id = e.target.closest('.user-comment').dataset.id;
        const index = this.getCommentIndexById(id);
        this.isReply = true;
        this.replyCommentIndex = index;
        this.textarea.value = `@${this.usersList[index].userName}: `;
    }

    addReplyToMessage() {
        const replyInfo = {
            userReplyMessageId: this.getUserMessageId(),
            pubDate: Date.now(),
            dateDisplay: 'Just now',
            userAva: './images/ava3.jpg',
            userName: this.inputName.value,
            userEmail: this.inputEmail.value,
            userWebsite: this.inputWebsite.value,
            userReplyMessage: this.replaceCodeToImg(),
            likes: 0,
            isLike: false,
            dislikes: 0,
            isDislike: false,
        };
        this.usersList[this.replyCommentIndex].replyList.push(replyInfo);
        this.setUserList();
        this.renderReply(replyInfo, this.replyCommentId);
        this.isReply = false;
    }

    renderReply(obj) {
        const replyWrapper = document.querySelector(`[data-id="${this.usersList[this.replyCommentIndex].userMessageId}"]`);
        const html = `<div class="user-answer" data-id="${obj.userReplyMessageId}">
                        <div class="user-answer__avatar">
                            <img src="${obj.userAva}" alt="avatar">
                            <a ${obj.userWebsite ? 'https://' + obj.userWebsite : '#'}">${obj.userWebsite ? obj.userWebsite : 'unset'}</a>
                        </div>
                        <div class="user-answer__data">
                            <div>
                                <span class="user-answer__name">${obj.userName}</span>
                                <span class="user-answer__pubtime">${obj.dateDisplay}</span>
                            </div>
                        </div>
                        <div class="user-answer__message answer-message">
                            ${obj.userReplyMessage}
                        </div>
                        <div class="user-answer__footer">
                            <a data-name="reply" href="#" class="user-answer__reply">
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 4C13.2 4 16 7.8 16 14C14.5 11.6 13.3 10 8 10V14L0 7L8 0V4Z"
                                        fill="#777777" />
                                </svg> Reply
                            </a>
                            <div class="user-answer__reactions">
                                <a href="#" class="user-answer__like">
                                    <span class="answer-like__counter">${obj.likes}</span>
                                    <svg data-name="reply-like" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path data-name="reply-like"
                                            d="M20.9457 12.3187C21.3397 11.6806 21.5625 11 21.5625 10.1771C21.5625 8.28588 19.8906 6.49988 17.7073 6.49988H16.0686C16.2896 5.94945 16.4661 5.29117 16.4661 4.50012C16.4661 1.37225 14.773 0 12.1864 0C9.4189 0 9.57676 4.07915 8.96281 4.66641C7.94097 5.64382 6.73401 7.52155 5.87398 8.25H1.4375C0.643596 8.25 0 8.86561 0 9.625V19.9375C0 20.6969 0.643596 21.3125 1.4375 21.3125H4.3125C4.98152 21.3125 5.54372 20.8753 5.70409 20.2834C7.70352 20.3264 9.07593 21.9996 13.6913 21.9996C14.0156 21.9996 14.375 22 14.6895 22C18.1537 22 19.7201 20.306 19.7629 17.9038C20.3612 17.1121 20.6748 16.0509 20.5419 15.0253C20.9845 14.2325 21.1557 13.2918 20.9457 12.3187ZM18.1718 14.6317C18.736 15.5396 18.2284 16.7548 17.5456 17.1054C17.8915 19.2014 16.7546 19.9371 15.1593 19.9371H13.4604C10.2422 19.9371 8.15831 18.312 5.75 18.312V10.3125H6.24055C7.51453 10.3125 9.29434 7.26645 10.4875 6.12477C11.7614 4.90617 11.3369 2.87504 12.1864 2.0625C14.3099 2.0625 14.3099 3.47961 14.3099 4.50012C14.3099 6.1832 13.0359 6.9373 13.0359 8.56238H17.7073C18.6556 8.56238 19.4022 9.37492 19.4062 10.1875C19.4103 10.9996 18.8304 11.8121 18.4058 11.8121C19.0118 12.4375 19.1413 13.7558 18.1718 14.6317ZM3.95312 18.5625C3.95312 19.1321 3.47044 19.5938 2.875 19.5938C2.27956 19.5938 1.79688 19.1321 1.79688 18.5625C1.79688 17.9929 2.27956 17.5312 2.875 17.5312C3.47044 17.5312 3.95312 17.9929 3.95312 18.5625Z"
                                            fill="#01620B" />
                                    </svg>
                                </a>
                                <a href="#" class="user-answer__dislike">
                                    <svg data-name="reply-dislike" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path data-name="reply-dislike"
                                            d="M0.616778 9.68129C0.222814 10.3194 9.61651e-07 11 8.89715e-07 11.8228C7.24375e-07 13.7141 1.6719 15.5001 3.8552 15.5001L5.49394 15.5001C5.27293 16.0505 5.09639 16.7088 5.09639 17.4999C5.09639 20.6277 6.78949 22 9.37609 22C12.1436 22 11.9857 17.9208 12.5997 17.3336C13.6215 16.3562 14.8285 14.4784 15.6885 13.75L20.125 13.75C20.9189 13.75 21.5625 13.1344 21.5625 12.375L21.5625 2.0625C21.5625 1.30311 20.9189 0.6875 20.125 0.6875L17.25 0.6875C16.581 0.6875 16.0188 1.12466 15.8584 1.7166C13.859 1.67359 12.4866 0.000430267 7.87121 0.000429864C7.54688 0.000429836 7.1875 -1.2567e-06 6.87305 -1.28419e-06C3.40881 -1.58705e-06 1.84243 1.69395 1.79957 4.09621C1.20126 4.88791 0.887702 5.94911 1.02063 6.97469C0.577966 7.76755 0.406814 8.70817 0.616778 9.68129ZM3.3907 7.36828C2.82649 6.46035 3.3341 5.24519 4.01692 4.89457C3.67102 2.79855 4.8079 2.06293 6.40317 2.06293L8.10211 2.06293C11.3203 2.06293 13.4042 3.68801 15.8125 3.68801L15.8125 11.6875L15.322 11.6875C14.048 11.6875 12.2682 14.7336 11.075 15.8752C9.80105 17.0938 10.2256 19.125 9.37609 19.9375C7.25264 19.9375 7.25264 18.5204 7.25264 17.4999C7.25264 15.8168 8.52662 15.0627 8.52662 13.4376L3.8552 13.4376C2.9069 13.4376 2.16029 12.6251 2.15625 11.8125C2.15221 11.0004 2.73215 10.1879 3.15666 10.1879C2.55071 9.56248 2.42125 8.24416 3.3907 7.36828ZM17.6094 3.4375C17.6094 2.86795 18.0921 2.40625 18.6875 2.40625C19.2829 2.40625 19.7656 2.86795 19.7656 3.4375C19.7656 4.00705 19.2829 4.46875 18.6875 4.46875C18.0921 4.46875 17.6094 4.00705 17.6094 3.4375Z"
                                            fill="#A30000" />
                                    </svg>
                                    <span class="answer-dislike__counter">${obj.dislikes}</span>
                                </a>
                            </div>
                        </div>
                    </div>`;
        replyWrapper.insertAdjacentHTML("beforeend", html);
    }

    renderReplyList(comment) {
        let html = '';
        const reply = '';
        comment.replyList.forEach(reply => {
            this.getPubTime(reply);
            reply = `<div class="user-answer" data-id="${reply.userReplyMessageId}">
            <div class="user-answer__avatar">
                <img src="${reply.userAva}" alt="avatar">
                <a ${reply.userWebsite ? 'https://' + reply.userWebsite : '#'}">${reply.userWebsite ? reply.userWebsite : 'unset'}</a>
            </div>
            <div class="user-answer__data">
                <div>
                    <span class="user-answer__name">${reply.userName}</span>
                    <span class="user-answer__pubtime">${reply.dateDisplay}</span>
                </div>
            </div>
            <div class="user-answer__message answer-message">
                ${reply.userReplyMessage}
            </div>
            <div class="user-answer__footer">
                <a data-name="reply" href="#" class="user-answer__reply">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4C13.2 4 16 7.8 16 14C14.5 11.6 13.3 10 8 10V14L0 7L8 0V4Z"
                            fill="#777777" />
                    </svg> Reply
                </a>
                <div class="user-answer__reactions">
                    <a href="#" class="user-answer__like">
                        <span class="answer-like__counter">${reply.likes}</span>
                        <svg data-name="reply-like" class="${reply.isLike ? 'active' : ''}" width="22" height="22" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path data-name="reply-like"
                                d="M20.9457 12.3187C21.3397 11.6806 21.5625 11 21.5625 10.1771C21.5625 8.28588 19.8906 6.49988 17.7073 6.49988H16.0686C16.2896 5.94945 16.4661 5.29117 16.4661 4.50012C16.4661 1.37225 14.773 0 12.1864 0C9.4189 0 9.57676 4.07915 8.96281 4.66641C7.94097 5.64382 6.73401 7.52155 5.87398 8.25H1.4375C0.643596 8.25 0 8.86561 0 9.625V19.9375C0 20.6969 0.643596 21.3125 1.4375 21.3125H4.3125C4.98152 21.3125 5.54372 20.8753 5.70409 20.2834C7.70352 20.3264 9.07593 21.9996 13.6913 21.9996C14.0156 21.9996 14.375 22 14.6895 22C18.1537 22 19.7201 20.306 19.7629 17.9038C20.3612 17.1121 20.6748 16.0509 20.5419 15.0253C20.9845 14.2325 21.1557 13.2918 20.9457 12.3187ZM18.1718 14.6317C18.736 15.5396 18.2284 16.7548 17.5456 17.1054C17.8915 19.2014 16.7546 19.9371 15.1593 19.9371H13.4604C10.2422 19.9371 8.15831 18.312 5.75 18.312V10.3125H6.24055C7.51453 10.3125 9.29434 7.26645 10.4875 6.12477C11.7614 4.90617 11.3369 2.87504 12.1864 2.0625C14.3099 2.0625 14.3099 3.47961 14.3099 4.50012C14.3099 6.1832 13.0359 6.9373 13.0359 8.56238H17.7073C18.6556 8.56238 19.4022 9.37492 19.4062 10.1875C19.4103 10.9996 18.8304 11.8121 18.4058 11.8121C19.0118 12.4375 19.1413 13.7558 18.1718 14.6317ZM3.95312 18.5625C3.95312 19.1321 3.47044 19.5938 2.875 19.5938C2.27956 19.5938 1.79688 19.1321 1.79688 18.5625C1.79688 17.9929 2.27956 17.5312 2.875 17.5312C3.47044 17.5312 3.95312 17.9929 3.95312 18.5625Z"
                                fill="#01620B" />
                        </svg>
                    </a>
                    <a href="#" class="user-answer__dislike">
                        <svg data-name="reply-dislike" class="${reply.isDislike ? 'active' : ''}" width="22" height="22" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path data-name="reply-dislike"
                                d="M0.616778 9.68129C0.222814 10.3194 9.61651e-07 11 8.89715e-07 11.8228C7.24375e-07 13.7141 1.6719 15.5001 3.8552 15.5001L5.49394 15.5001C5.27293 16.0505 5.09639 16.7088 5.09639 17.4999C5.09639 20.6277 6.78949 22 9.37609 22C12.1436 22 11.9857 17.9208 12.5997 17.3336C13.6215 16.3562 14.8285 14.4784 15.6885 13.75L20.125 13.75C20.9189 13.75 21.5625 13.1344 21.5625 12.375L21.5625 2.0625C21.5625 1.30311 20.9189 0.6875 20.125 0.6875L17.25 0.6875C16.581 0.6875 16.0188 1.12466 15.8584 1.7166C13.859 1.67359 12.4866 0.000430267 7.87121 0.000429864C7.54688 0.000429836 7.1875 -1.2567e-06 6.87305 -1.28419e-06C3.40881 -1.58705e-06 1.84243 1.69395 1.79957 4.09621C1.20126 4.88791 0.887702 5.94911 1.02063 6.97469C0.577966 7.76755 0.406814 8.70817 0.616778 9.68129ZM3.3907 7.36828C2.82649 6.46035 3.3341 5.24519 4.01692 4.89457C3.67102 2.79855 4.8079 2.06293 6.40317 2.06293L8.10211 2.06293C11.3203 2.06293 13.4042 3.68801 15.8125 3.68801L15.8125 11.6875L15.322 11.6875C14.048 11.6875 12.2682 14.7336 11.075 15.8752C9.80105 17.0938 10.2256 19.125 9.37609 19.9375C7.25264 19.9375 7.25264 18.5204 7.25264 17.4999C7.25264 15.8168 8.52662 15.0627 8.52662 13.4376L3.8552 13.4376C2.9069 13.4376 2.16029 12.6251 2.15625 11.8125C2.15221 11.0004 2.73215 10.1879 3.15666 10.1879C2.55071 9.56248 2.42125 8.24416 3.3907 7.36828ZM17.6094 3.4375C17.6094 2.86795 18.0921 2.40625 18.6875 2.40625C19.2829 2.40625 19.7656 2.86795 19.7656 3.4375C19.7656 4.00705 19.2829 4.46875 18.6875 4.46875C18.0921 4.46875 17.6094 4.00705 17.6094 3.4375Z"
                                fill="#A30000" />
                        </svg>
                        <span class="answer-dislike__counter">${reply.dislikes}</span>
                    </a>
                </div>
            </div>
        </div>`;
            html = html + reply;
        });
        return html;
    }

    getCommentIndexById(id) {
        return this.usersList.map((user) => user.userMessageId).indexOf(+id);
    }
    getReplyIndexById(idReply, indexComment) {
        return this.usersList[indexComment].replyList.map((user) => user.userReplyMessageId).indexOf(+idReply);
    }

    tranformMessageEditing(message) {
        let res = message;
        const arrSmiles = this.getArrSmils();
        for (let i = 0; i < arrSmiles.length; i++) {
            const regExp = new RegExp(`<img src="./images/smils/${arrSmiles[i]}.svg" alt="${arrSmiles[i]}">`, 'g');
            let smileTag = `[::${arrSmiles[i]}::]`;
            res = res.replace(regExp, smileTag);
        }
        return res;
    }

    editComment(e) {
        const id = e.target.closest('.user-comment').dataset.id;
        const comment = this.usersList[this.getCommentIndexById(id)];
        this.inputName.value = comment.userName;
        this.inputEmail.value = comment.userEmail;
        if (comment.userEmail) {
            this.inputEmail.value = comment.userEmail;
        }
        this.textarea.value = this.tranformMessageEditing(comment.userMessage);
        this.isEdit = true;
        this.editCommentIndex = this.getCommentIndexById(id);
    }

    changeMessage(index) {
        const messageWrapper = document.querySelector(`[data-id="${this.usersList[index].userMessageId}"]`);
        this.usersList[index].userMessage = this.replaceCodeToImg();
        this.setUserList();
        this.isEdit = false;
        messageWrapper.querySelector('.user-comment__message').innerHTML = this.usersList[index].userMessage;
    }

    addCommentHart(e) {
        const id = e.target.closest('.user-comment').dataset.id;
        const index = this.getCommentIndexById(id);
        if (this.usersList[index].isHart) {
            return;
        }
        this.usersList[index].harts += 1;
        this.usersList[index].isHart = true;
        e.target.classList.add('active');
        const hartCounter = +(e.target.closest(this.hartClassName).querySelector('.coment-hart__counter').textContent);
        e.target.closest(this.hartClassName).querySelector('.coment-hart__counter').textContent = hartCounter + 1;
        this.setUserList();
    }

    addCommentLike(e) {
        const id = e.target.closest('.user-comment').dataset.id;
        const index = this.getCommentIndexById(id);
        if (this.usersList[index].isLike) {
            return;
        }
        this.usersList[index].likes += 1;
        this.usersList[index].isLike = true;
        e.target.classList.add('active');
        const likeCounter = +(e.target.closest(this.commentLikeClassName).querySelector('.coment-like__counter').textContent);
        e.target.closest(this.commentLikeClassName).querySelector('.coment-like__counter').textContent = likeCounter + 1;
        this.setUserList();
    }

    addCommentDislike(e) {
        const id = e.target.closest('.user-comment').dataset.id;
        const index = this.getCommentIndexById(id);
        if (this.usersList[index].isDislike) {
            return;
        }
        this.usersList[index].dislikes += 1;
        this.usersList[index].isDislike = true;
        e.target.classList.add('active');
        const dislikeCounter = +(e.target.closest(this.dislikeClassName).querySelector('.coment-dislike__counter').textContent);
        e.target.closest(this.dislikeClassName).querySelector('.coment-dislike__counter').textContent = dislikeCounter + 1;
        this.setUserList();
    }

    addReplyLike(e) {
        const idComment = e.target.closest('.user-comment').dataset.id;
        const indexComment = this.getCommentIndexById(idComment);
        const idReply = e.target.closest('.user-answer').dataset.id;
        const indexReply = this.getReplyIndexById(idReply, indexComment);

        if (this.usersList[indexComment].replyList[indexReply].isLike) {
            return;
        }
        this.usersList[indexComment].replyList[indexReply].likes += 1;
        this.usersList[indexComment].replyList[indexReply].isLike = true;
        e.target.classList.add('active');
        const likeCounter = +(e.target.closest(this.replyLikeClassName).querySelector('.answer-like__counter').textContent);
        e.target.closest(this.replyLikeClassName).querySelector('.answer-like__counter').textContent = likeCounter + 1;
        this.setUserList();
    }

    addReplyDislike(e) {
        const idComment = e.target.closest('.user-comment').dataset.id;
        const indexComment = this.getCommentIndexById(idComment);
        const idReply = e.target.closest('.user-answer').dataset.id;
        const indexReply = this.getReplyIndexById(idReply, indexComment);

        if (this.usersList[indexComment].replyList[indexReply].isDislike) {
            return;
        }
        this.usersList[indexComment].replyList[indexReply].dislikes += 1;
        this.usersList[indexComment].replyList[indexReply].isDislike = true;
        e.target.classList.add('active');
        const dislikeCounter = +(e.target.closest(this.replyDislikeClassName).querySelector('.answer-dislike__counter').textContent);
        e.target.closest(this.replyDislikeClassName).querySelector('.answer-dislike__counter').textContent = dislikeCounter + 1;
        this.setUserList();
    }

    removeComment(e) {
        const id = e.target.closest('.user-comment').dataset.id;
        const index = this.getCommentIndexById(id);
        this.usersList.splice(index, 1);
        this.setUserList();
        e.target.closest('.user-comment').remove();
    }
    addMessage() {
        const userData = {
            userMessageId: this.getUserMessageId(),
            pubDate: Date.now(),
            dateDisplay: 'Just now',
            userAva: './images/ava3.jpg',
            userName: this.inputName.value,
            userEmail: this.inputEmail.value,
            userWebsite: this.inputWebsite.value,
            userMessage: this.replaceCodeToImg(),
            replyList: [],
            likes: 0,
            isLike: false,
            dislikes: 0,
            isDislike: false,
            harts: 0,
            isHart: false,
        };

        this.usersList.push(userData);
        this.setUserList();
        this.renderMessage(userData);

    }

    getArrSmils() {
        const arrSmiles = [];
        this.smilesList.forEach(elem => { arrSmiles.push(elem.dataset.smileName) });
        return arrSmiles;
    }

    replaceCodeToImg() {
        let res = this.textarea.value.replace(/[\[\]']+/g, '');
        const arrSmiles = this.getArrSmils();
        for (let i = 0; i < arrSmiles.length; i++) {
            const regExp = new RegExp('::' + arrSmiles[i] + '::', 'g');
            let smileImg = `<img src="./images/smils/${arrSmiles[i]}.svg" alt="${arrSmiles[i]}">`;
            res = res.replace(regExp, smileImg);
        }
        const regAutor = /^@\w+(\d+)?\s?(\w+)?:/g;
        let autor = res.match(regAutor);
        if (autor) {
            let codeAutor = '<span class="answer-message__person">' + autor.toString().slice(1, -1) + '</span>'
            res = res.replace(autor, codeAutor);
        }
        return res;
    }

    renderComments() {
        let html = '';
        let commentPost = '';
        this.usersList.forEach(comment => {
            this.getPubTime(comment);
            commentPost = `
            <div class="user-comment" data-id="${comment.userMessageId}">
                <div class="user-comment-wrapper">
                    <div class="user-comment__avatar">
                        <img src="${comment.userAva}" alt="avatar">
                        <a href="${comment.userWebsite ? 'https://' + comment.userWebsite : '#'}">${comment.userWebsite ? comment.userWebsite : 'unset'}</a>
                    </div>
                    <div class="user-comment__data">
                        <div>
                            <span class="user-comment__name">${comment.userName}</span>
                            <span class="user-comment__pubtime">${comment.dateDisplay}</span>
                        </div>
                        <div class="user-comment__btns">
                            <a href="#form" class="user-comment__edit">
                                <svg data-name="edit" width="18" height="16" viewBox="0 0 18 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path data-name="edit"
                                        d="M12.5721 10.7789L13.5722 9.77904C13.7284 9.62281 14.0003 9.73217 14.0003 9.95714V14.5002C14.0003 15.3282 13.3284 16 12.5003 16H1.50003C0.671889 16 0 15.3282 0 14.5002V3.50183C0 2.67383 0.671889 2.00205 1.50003 2.00205H10.0471C10.269 2.00205 10.3815 2.27076 10.2252 2.43011L9.2252 3.42997C9.17832 3.47683 9.11582 3.50183 9.04707 3.50183H1.50003V14.5002H12.5003V10.9539C12.5003 10.8882 12.5253 10.8258 12.5721 10.7789ZM17.466 4.47356L9.25957 12.6786L6.43451 12.9911C5.61575 13.0817 4.91886 12.3912 5.00948 11.5663L5.32199 8.74169L13.5284 0.53664C14.2441 -0.17888 15.4003 -0.17888 16.1128 0.53664L17.4629 1.88644C18.1785 2.60196 18.1785 3.76117 17.466 4.47356ZM14.3784 5.43905L12.5628 3.62369L6.7564 9.43221L6.52827 11.4725L8.56894 11.2444L14.3784 5.43905ZM16.4035 2.94879L15.0535 1.59898C14.9253 1.47088 14.7159 1.47088 14.5909 1.59898L13.6253 2.56447L15.441 4.37983L16.4066 3.41434C16.5316 3.28311 16.5316 3.07689 16.4035 2.94879Z"
                                        fill="#01620B" />
                                </svg>
                            </a>
                            <a href="#" class="user-comment__delete">
                                <svg data-name="delete" width="14" height="16" viewBox="0 0 14 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path data-name="delete"
                                        d="M13.5 0.999944H9.75L9.45625 0.415569C9.39402 0.290636 9.29817 0.185545 9.17947 0.112119C9.06078 0.0386926 8.92395 -0.000155659 8.78438 -5.55562e-05H5.2125C5.07324 -0.000590885 4.93665 0.0381126 4.81838 0.111621C4.7001 0.185129 4.60492 0.290468 4.54375 0.415569L4.25 0.999944H0.5C0.367392 0.999944 0.240215 1.05262 0.146447 1.14639C0.0526784 1.24016 0 1.36734 0 1.49994L0 2.49994C0 2.63255 0.0526784 2.75973 0.146447 2.8535C0.240215 2.94727 0.367392 2.99994 0.5 2.99994H13.5C13.6326 2.99994 13.7598 2.94727 13.8536 2.8535C13.9473 2.75973 14 2.63255 14 2.49994V1.49994C14 1.36734 13.9473 1.24016 13.8536 1.14639C13.7598 1.05262 13.6326 0.999944 13.5 0.999944ZM1.6625 14.5937C1.68635 14.9745 1.85443 15.3319 2.13252 15.5932C2.41061 15.8544 2.77781 15.9999 3.15937 15.9999H10.8406C11.2222 15.9999 11.5894 15.8544 11.8675 15.5932C12.1456 15.3319 12.3137 14.9745 12.3375 14.5937L13 3.99994H1L1.6625 14.5937Z"
                                        fill="#A30000" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="user-comment__message">
                    ${comment.userMessage}
                    </div>
                    <div class="user-comment__footer">
                        <a href="#form" data-name="reply" class="user-comment__reply">
                            <svg data-name="reply" width="16" height="14" viewBox="0 0 16 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path data-name="reply" d="M8 4C13.2 4 16 7.8 16 14C14.5 11.6 13.3 10 8 10V14L0 7L8 0V4Z"
                                    fill="#777777" />
                            </svg> Reply
                        </a>
                        <div class="user-comment__reactions">
                            <a href="#" class="user-comment__like">
                                <span class="coment-like__counter">${comment.likes}</span>
                                <svg data-name="like" class="${comment.isLike ? 'active' : ''}" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path data-name="like"
                                        d="M20.9457 12.3187C21.3397 11.6806 21.5625 11 21.5625 10.1771C21.5625 8.28588 19.8906 6.49988 17.7073 6.49988H16.0686C16.2896 5.94945 16.4661 5.29117 16.4661 4.50012C16.4661 1.37225 14.773 0 12.1864 0C9.4189 0 9.57676 4.07915 8.96281 4.66641C7.94097 5.64382 6.73401 7.52155 5.87398 8.25H1.4375C0.643596 8.25 0 8.86561 0 9.625V19.9375C0 20.6969 0.643596 21.3125 1.4375 21.3125H4.3125C4.98152 21.3125 5.54372 20.8753 5.70409 20.2834C7.70352 20.3264 9.07593 21.9996 13.6913 21.9996C14.0156 21.9996 14.375 22 14.6895 22C18.1537 22 19.7201 20.306 19.7629 17.9038C20.3612 17.1121 20.6748 16.0509 20.5419 15.0253C20.9845 14.2325 21.1557 13.2918 20.9457 12.3187ZM18.1718 14.6317C18.736 15.5396 18.2284 16.7548 17.5456 17.1054C17.8915 19.2014 16.7546 19.9371 15.1593 19.9371H13.4604C10.2422 19.9371 8.15831 18.312 5.75 18.312V10.3125H6.24055C7.51453 10.3125 9.29434 7.26645 10.4875 6.12477C11.7614 4.90617 11.3369 2.87504 12.1864 2.0625C14.3099 2.0625 14.3099 3.47961 14.3099 4.50012C14.3099 6.1832 13.0359 6.9373 13.0359 8.56238H17.7073C18.6556 8.56238 19.4022 9.37492 19.4062 10.1875C19.4103 10.9996 18.8304 11.8121 18.4058 11.8121C19.0118 12.4375 19.1413 13.7558 18.1718 14.6317ZM3.95312 18.5625C3.95312 19.1321 3.47044 19.5938 2.875 19.5938C2.27956 19.5938 1.79688 19.1321 1.79688 18.5625C1.79688 17.9929 2.27956 17.5312 2.875 17.5312C3.47044 17.5312 3.95312 17.9929 3.95312 18.5625Z"
                                        fill="#01620B" />
                                </svg>
                            </a>
                            <a href="#" class="user-comment__dislike">
                                <svg data-name="dislike" class="${comment.isDislike ? 'active' : ''}" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.616778 9.68129C0.222814 10.3194 9.61651e-07 11 8.89715e-07 11.8228C7.24375e-07 13.7141 1.6719 15.5001 3.8552 15.5001L5.49394 15.5001C5.27293 16.0505 5.09639 16.7088 5.09639 17.4999C5.09639 20.6277 6.78949 22 9.37609 22C12.1436 22 11.9857 17.9208 12.5997 17.3336C13.6215 16.3562 14.8285 14.4784 15.6885 13.75L20.125 13.75C20.9189 13.75 21.5625 13.1344 21.5625 12.375L21.5625 2.0625C21.5625 1.30311 20.9189 0.6875 20.125 0.6875L17.25 0.6875C16.581 0.6875 16.0188 1.12466 15.8584 1.7166C13.859 1.67359 12.4866 0.000430267 7.87121 0.000429864C7.54688 0.000429836 7.1875 -1.2567e-06 6.87305 -1.28419e-06C3.40881 -1.58705e-06 1.84243 1.69395 1.79957 4.09621C1.20126 4.88791 0.887702 5.94911 1.02063 6.97469C0.577966 7.76755 0.406814 8.70817 0.616778 9.68129ZM3.3907 7.36828C2.82649 6.46035 3.3341 5.24519 4.01692 4.89457C3.67102 2.79855 4.8079 2.06293 6.40317 2.06293L8.10211 2.06293C11.3203 2.06293 13.4042 3.68801 15.8125 3.68801L15.8125 11.6875L15.322 11.6875C14.048 11.6875 12.2682 14.7336 11.075 15.8752C9.80105 17.0938 10.2256 19.125 9.37609 19.9375C7.25264 19.9375 7.25264 18.5204 7.25264 17.4999C7.25264 15.8168 8.52662 15.0627 8.52662 13.4376L3.8552 13.4376C2.9069 13.4376 2.16029 12.6251 2.15625 11.8125C2.15221 11.0004 2.73215 10.1879 3.15666 10.1879C2.55071 9.56248 2.42125 8.24416 3.3907 7.36828ZM17.6094 3.4375C17.6094 2.86795 18.0921 2.40625 18.6875 2.40625C19.2829 2.40625 19.7656 2.86795 19.7656 3.4375C19.7656 4.00705 19.2829 4.46875 18.6875 4.46875C18.0921 4.46875 17.6094 4.00705 17.6094 3.4375Z"
                                        fill="#A30000" />
                                </svg>
                                <span class="coment-dislike__counter">${comment.dislikes}</span>

                            </a>
                            <a href="#" class="user-comment__hart">
                                <svg data-name="hart" width="23" height="21" viewBox="0 0 23 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path data-name="hart"
                                        d="M20.5922 1.88848C17.9957 -0.294718 13.9842 0.0332111 11.5 2.56231C9.01583 0.0332111 5.0043 -0.299211 2.40782 1.88848C-0.970307 4.73204 -0.476167 9.36797 1.93165 11.8252L9.81094 19.8527C10.2602 20.3109 10.8621 20.567 11.5 20.567C12.1424 20.567 12.7399 20.3154 13.1891 19.8572L21.0684 11.8297C23.4717 9.37247 23.9748 4.73653 20.5922 1.88848Z"
                                        fill="#474747" />
                                    <path data-name="hart" class="${comment.isHart ? 'active' : ''}"
                                        d="M19.532 10.3113L11.6527 18.3389C11.5449 18.4467 11.4551 18.4467 11.3473 18.3389L3.46797 10.3113C1.82833 8.64024 1.49591 5.47774 3.7959 3.54161C5.54337 2.07266 8.23868 2.29278 9.92774 4.01329L11.5 5.617L13.0723 4.01329C14.7703 2.28379 17.4656 2.07266 19.2041 3.53711C21.4996 5.47325 21.1582 8.65371 19.532 10.3113Z"
                                        fill="white" />
                                </svg>
                                <span class="coment-hart__counter">${comment.harts}</span>
                            </a>
                        </div>
                    </div>
                </div>`;
            if (comment.replyList.length) {
                commentPost = commentPost + this.renderReplyList(comment);
            }

            html = html + commentPost + '</div>';
        });
        this.commentsWrapper.insertAdjacentHTML('beforeend', html);
    }

    renderMessage(obj) {
        const html = `
                <div class="user-comment" data-id="${obj.userMessageId}">
                    <div class="user-comment-wrapper">
                        <div class="user-comment__avatar">
                            <img src="${obj.userAva}" alt="avatar">
                                <a href="${obj.userWebsite ? 'https://' + obj.userWebsite : '#'}">${obj.userWebsite ? obj.userWebsite : 'unset'}</a>
                        </div>
                        <div class="user-comment__data">
                            <div>
                                <span class="user-comment__name">${obj.userName}</span>
                                <span class="user-comment__pubtime">${obj.dateDisplay}</span>
                            </div>
                            <div class="user-comment__btns">
                                <a href="#form" class="user-comment__edit">
                                    <svg data-name="edit" width="18" height="16" viewBox="0 0 18 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path data-name="edit"
                                            d="M12.5721 10.7789L13.5722 9.77904C13.7284 9.62281 14.0003 9.73217 14.0003 9.95714V14.5002C14.0003 15.3282 13.3284 16 12.5003 16H1.50003C0.671889 16 0 15.3282 0 14.5002V3.50183C0 2.67383 0.671889 2.00205 1.50003 2.00205H10.0471C10.269 2.00205 10.3815 2.27076 10.2252 2.43011L9.2252 3.42997C9.17832 3.47683 9.11582 3.50183 9.04707 3.50183H1.50003V14.5002H12.5003V10.9539C12.5003 10.8882 12.5253 10.8258 12.5721 10.7789ZM17.466 4.47356L9.25957 12.6786L6.43451 12.9911C5.61575 13.0817 4.91886 12.3912 5.00948 11.5663L5.32199 8.74169L13.5284 0.53664C14.2441 -0.17888 15.4003 -0.17888 16.1128 0.53664L17.4629 1.88644C18.1785 2.60196 18.1785 3.76117 17.466 4.47356ZM14.3784 5.43905L12.5628 3.62369L6.7564 9.43221L6.52827 11.4725L8.56894 11.2444L14.3784 5.43905ZM16.4035 2.94879L15.0535 1.59898C14.9253 1.47088 14.7159 1.47088 14.5909 1.59898L13.6253 2.56447L15.441 4.37983L16.4066 3.41434C16.5316 3.28311 16.5316 3.07689 16.4035 2.94879Z"
                                            fill="#01620B" />
                                    </svg>
                                </a>
                                <a href="#" class="user-comment__delete">
                                    <svg data-name="delete" width="14" height="16" viewBox="0 0 14 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path data-name="delete"
                                            d="M13.5 0.999944H9.75L9.45625 0.415569C9.39402 0.290636 9.29817 0.185545 9.17947 0.112119C9.06078 0.0386926 8.92395 -0.000155659 8.78438 -5.55562e-05H5.2125C5.07324 -0.000590885 4.93665 0.0381126 4.81838 0.111621C4.7001 0.185129 4.60492 0.290468 4.54375 0.415569L4.25 0.999944H0.5C0.367392 0.999944 0.240215 1.05262 0.146447 1.14639C0.0526784 1.24016 0 1.36734 0 1.49994L0 2.49994C0 2.63255 0.0526784 2.75973 0.146447 2.8535C0.240215 2.94727 0.367392 2.99994 0.5 2.99994H13.5C13.6326 2.99994 13.7598 2.94727 13.8536 2.8535C13.9473 2.75973 14 2.63255 14 2.49994V1.49994C14 1.36734 13.9473 1.24016 13.8536 1.14639C13.7598 1.05262 13.6326 0.999944 13.5 0.999944ZM1.6625 14.5937C1.68635 14.9745 1.85443 15.3319 2.13252 15.5932C2.41061 15.8544 2.77781 15.9999 3.15937 15.9999H10.8406C11.2222 15.9999 11.5894 15.8544 11.8675 15.5932C12.1456 15.3319 12.3137 14.9745 12.3375 14.5937L13 3.99994H1L1.6625 14.5937Z"
                                            fill="#A30000" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="user-comment__message">
                            ${obj.userMessage}
                        </div>
                        <div class="user-comment__footer">
                            <a data-name="reply" href="#" class="user-comment__reply">
                                <svg data-name="reply" width="16" height="14" viewBox="0 0 16 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path data-name="reply" d="M8 4C13.2 4 16 7.8 16 14C14.5 11.6 13.3 10 8 10V14L0 7L8 0V4Z"
                                        fill="#777777" />
                                </svg> Reply
                            </a>
                            <div class="user-comment__reactions">
                                <a href="#" class="user-comment__like">
                                    <span class="coment-like__counter">${obj.likes}</span>
                                    <svg data-name="like" class="${obj.isLike ? 'active' : ''}" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path data-name="like" class="${obj.isLike ? 'active' : ''}"
                                            d="M20.9457 12.3187C21.3397 11.6806 21.5625 11 21.5625 10.1771C21.5625 8.28588 19.8906 6.49988 17.7073 6.49988H16.0686C16.2896 5.94945 16.4661 5.29117 16.4661 4.50012C16.4661 1.37225 14.773 0 12.1864 0C9.4189 0 9.57676 4.07915 8.96281 4.66641C7.94097 5.64382 6.73401 7.52155 5.87398 8.25H1.4375C0.643596 8.25 0 8.86561 0 9.625V19.9375C0 20.6969 0.643596 21.3125 1.4375 21.3125H4.3125C4.98152 21.3125 5.54372 20.8753 5.70409 20.2834C7.70352 20.3264 9.07593 21.9996 13.6913 21.9996C14.0156 21.9996 14.375 22 14.6895 22C18.1537 22 19.7201 20.306 19.7629 17.9038C20.3612 17.1121 20.6748 16.0509 20.5419 15.0253C20.9845 14.2325 21.1557 13.2918 20.9457 12.3187ZM18.1718 14.6317C18.736 15.5396 18.2284 16.7548 17.5456 17.1054C17.8915 19.2014 16.7546 19.9371 15.1593 19.9371H13.4604C10.2422 19.9371 8.15831 18.312 5.75 18.312V10.3125H6.24055C7.51453 10.3125 9.29434 7.26645 10.4875 6.12477C11.7614 4.90617 11.3369 2.87504 12.1864 2.0625C14.3099 2.0625 14.3099 3.47961 14.3099 4.50012C14.3099 6.1832 13.0359 6.9373 13.0359 8.56238H17.7073C18.6556 8.56238 19.4022 9.37492 19.4062 10.1875C19.4103 10.9996 18.8304 11.8121 18.4058 11.8121C19.0118 12.4375 19.1413 13.7558 18.1718 14.6317ZM3.95312 18.5625C3.95312 19.1321 3.47044 19.5938 2.875 19.5938C2.27956 19.5938 1.79688 19.1321 1.79688 18.5625C1.79688 17.9929 2.27956 17.5312 2.875 17.5312C3.47044 17.5312 3.95312 17.9929 3.95312 18.5625Z"
                                            fill="#01620B" />
                                    </svg>
                                </a>
                                <a href="#" class="user-comment__dislike">
                                    <svg data-name="dislike" class="${obj.isDislike ? 'active' : ''}" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.616778 9.68129C0.222814 10.3194 9.61651e-07 11 8.89715e-07 11.8228C7.24375e-07 13.7141 1.6719 15.5001 3.8552 15.5001L5.49394 15.5001C5.27293 16.0505 5.09639 16.7088 5.09639 17.4999C5.09639 20.6277 6.78949 22 9.37609 22C12.1436 22 11.9857 17.9208 12.5997 17.3336C13.6215 16.3562 14.8285 14.4784 15.6885 13.75L20.125 13.75C20.9189 13.75 21.5625 13.1344 21.5625 12.375L21.5625 2.0625C21.5625 1.30311 20.9189 0.6875 20.125 0.6875L17.25 0.6875C16.581 0.6875 16.0188 1.12466 15.8584 1.7166C13.859 1.67359 12.4866 0.000430267 7.87121 0.000429864C7.54688 0.000429836 7.1875 -1.2567e-06 6.87305 -1.28419e-06C3.40881 -1.58705e-06 1.84243 1.69395 1.79957 4.09621C1.20126 4.88791 0.887702 5.94911 1.02063 6.97469C0.577966 7.76755 0.406814 8.70817 0.616778 9.68129ZM3.3907 7.36828C2.82649 6.46035 3.3341 5.24519 4.01692 4.89457C3.67102 2.79855 4.8079 2.06293 6.40317 2.06293L8.10211 2.06293C11.3203 2.06293 13.4042 3.68801 15.8125 3.68801L15.8125 11.6875L15.322 11.6875C14.048 11.6875 12.2682 14.7336 11.075 15.8752C9.80105 17.0938 10.2256 19.125 9.37609 19.9375C7.25264 19.9375 7.25264 18.5204 7.25264 17.4999C7.25264 15.8168 8.52662 15.0627 8.52662 13.4376L3.8552 13.4376C2.9069 13.4376 2.16029 12.6251 2.15625 11.8125C2.15221 11.0004 2.73215 10.1879 3.15666 10.1879C2.55071 9.56248 2.42125 8.24416 3.3907 7.36828ZM17.6094 3.4375C17.6094 2.86795 18.0921 2.40625 18.6875 2.40625C19.2829 2.40625 19.7656 2.86795 19.7656 3.4375C19.7656 4.00705 19.2829 4.46875 18.6875 4.46875C18.0921 4.46875 17.6094 4.00705 17.6094 3.4375Z"
                                            fill="#A30000" />
                                    </svg>
                                    <span class="coment-dislike__counter">${obj.dislikes}</span>

                                </a>
                                <a href="#" class="user-comment__hart">
                                    <svg data-name="hart" width="23" height="21" viewBox="0 0 23 21" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path data-name="hart"
                                            d="M20.5922 1.88848C17.9957 -0.294718 13.9842 0.0332111 11.5 2.56231C9.01583 0.0332111 5.0043 -0.299211 2.40782 1.88848C-0.970307 4.73204 -0.476167 9.36797 1.93165 11.8252L9.81094 19.8527C10.2602 20.3109 10.8621 20.567 11.5 20.567C12.1424 20.567 12.7399 20.3154 13.1891 19.8572L21.0684 11.8297C23.4717 9.37247 23.9748 4.73653 20.5922 1.88848Z"
                                            fill="#474747" />
                                        <path data-name="hart"
                                            d="M19.532 10.3113L11.6527 18.3389C11.5449 18.4467 11.4551 18.4467 11.3473 18.3389L3.46797 10.3113C1.82833 8.64024 1.49591 5.47774 3.7959 3.54161C5.54337 2.07266 8.23868 2.29278 9.92774 4.01329L11.5 5.617L13.0723 4.01329C14.7703 2.28379 17.4656 2.07266 19.2041 3.53711C21.4996 5.47325 21.1582 8.65371 19.532 10.3113Z"
                                            fill="white" />
                                    </svg>
                                    <span class="coment-hart__counter">${obj.harts}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div > `;
        this.commentsWrapper.insertAdjacentHTML('beforeend', html);
    }
}
export default Comments;
