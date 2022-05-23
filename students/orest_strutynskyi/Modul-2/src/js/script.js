const elements = document.getElementsByClassName('menu__item');


for (let i = 0; i < elements.length; i++) {
	if (window.screen.width < 576) {
		elements[i].addEventListener('click', () => {
			const item = elements[i].querySelector('.sub-menu');
			if (item.style.opacity === '1') {
				item.style.overflow = 'hidden';
				item.style.opacity = '0';
				item.style.height = '0';
			}
			else {
				item.style.overflow = 'visible';
				item.style.opacity = '1';
				item.style.height = 'auto';
			}
		});
	} else {
		elements[i].addEventListener('mouseover', showMenu);
		elements[i].addEventListener('mouseleave', hideMenu);
	}
}


function showMenu() {
	if (this.children.length > 1) {
		this.children[1].style.height = 'auto';
		this.children[1].style.opacity = '1';
		this.children[1].style.overflow = 'visible';
	}
}

function hideMenu() {
	if (this.children.length > 1) {
		this.children[1].style.height = '0';
		this.children[1].style.opacity = '0';
		this.children[1].style.overflow = 'hidden';
	}
}


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
})

//TODO Swiper
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
const swiper = new Swiper(".mySwiper", {
	speed: 700,
	modules: [Navigation, Pagination, Scrollbar],
	spaceBetween: 30,
	effect: "fade",
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


//TODO smile in textarea

function addSmile(selector, selector2) {
	const textArea = document.querySelector(selector);
	const smile = document.querySelectorAll(selector2);
	const eventInput = new Event('input', {
		bubbles: true,
		cancelable: true,
	});
	smile.forEach(element => {
		element.addEventListener('click', function () {
			textArea.value = textArea.value + "[::" + this.getAttribute('meta-data') + "::]";
			textArea.dispatchEvent(eventInput);
			textArea.focus()
		})
	})
}
addSmile('.textarea', '.massage__img');

function smileToImg(textArea) {
	if (textArea.includes('[::')) {
		let indexStart = textArea.indexOf('[::');
		const images = {
			keys: [],
			srcs: [],
		}
		const imageList = document.querySelectorAll('.massage__img');

		imageList.forEach(e => {
			images.keys.push(e.getAttribute('meta-data'));
			images.srcs.push(e.getAttribute('src'))
		});

		do {
			const indexEnd = textArea.indexOf('::]') + 3;
			const smileName = textArea.slice(indexStart + 3, indexEnd - 3);
			const endString = textArea.slice(indexEnd);
			textArea = textArea.slice(0, indexStart);
			const idSrc = images.keys.indexOf(smileName);
			if (~idSrc) {
				const str = images.srcs[idSrc];
				textArea = textArea + ` <img src="${str}" alt=""> `;
			}
			else {
				textArea = textArea + smileName;
			}
			textArea = textArea + endString;
			indexStart = textArea.indexOf('[::')
		} while (~indexStart);
	}

	return textArea;
}

function validateTextarea() {
	const textArea = document.querySelector('.textarea');
	const resultTextarea = document.querySelector('.textarea-result')
	const limit = 500
	resultTextarea.textContent = `0 / ${limit}`;

	textArea.addEventListener('input', () => {
		const textLength = textArea.value.length
		resultTextarea.textContent = `${textLength} '/' ${limit}`;
	})

}

validateTextarea();


//TODO FORM
const formComment = document.querySelector('.form-comment');
const errorClassName = 'error';
const errorMessage = 'This field is required';
const requiredElementList = formComment.querySelectorAll('.required:not(div)');
const post = document.querySelector('.button__post');

requiredElementList.forEach(e => {
	requiredCheck(e, 'userName', 'userEmail', 'userSite', 'textarea');
})

function requiredCheck(element, userName, userEmail, userSite, textarea) {

	element.addEventListener('blur', function () {
		const value = this.value;
		const postButton = this.closest('.form-comment').querySelector('.button__post');
		if (value === '') {
			this.parentElement.classList.add(errorClassName);
			this.classList.add(errorClassName);
			this.after(createErrorMassage(errorMessage));
			this.setAttribute('data-required', 'false');
		} else {
			if (this.classList.contains(userName)) {
				const validator = validateUserName(value);
				if (validator) {
					this.after(createErrorMassage(validator));
					this.parentElement.classList.add(errorClassName);
					this.classList.add(errorClassName);
					this.setAttribute('data-required', 'false');
				} else {
					this.setAttribute('data-required', 'true');
				}

			}
			if (this.classList.contains(userEmail)) {
				const validatorEmail = validateUserEmail(value);
				if (validatorEmail) {
					this.after(createErrorMassage(validatorEmail));
					this.parentElement.classList.add(errorClassName);
					this.classList.add(errorClassName);
					this.setAttribute('data-required', 'false');
				} else {
					this.setAttribute('data-required', 'true');
				}
			}

			if (this.classList.contains(userSite)) {
				const validatorSite = validateUserWebsite(value);
				if (validatorSite) {
					this.after(createErrorMassage(validatorSite));
					this.parentElement.classList.add(errorClassName);
					this.classList.add(errorClassName);
					this.setAttribute('data-required', 'false');
				} else {
					this.setAttribute('data-required', 'true');
				}
			}

			if (this.classList.contains(textarea)) {
				const validatorTexrArea = validateTextArea(value);
				if (validatorTexrArea) {
					this.parentElement.classList.add(errorClassName);
					this.classList.add(errorClassName);
					this.after(createErrorMassage(validatorTexrArea));
					this.setAttribute('data-required', 'false');
				} else {
					this.setAttribute('data-required', 'true');
				}
			}
		}
		const requiredName = document.querySelector('.' + userName).getAttribute('data-required');
		const requiredEmail = document.querySelector('.' + userEmail).getAttribute('data-required');
		const requiredSite = document.querySelector('.' + userSite).getAttribute('data-required');
		const requiredTextarea = document.querySelector('.' + textarea).getAttribute('data-required');
		removeDisabled(postButton, requiredName, requiredEmail, requiredSite, requiredTextarea);
	});
	element.addEventListener('focus', function (e) {
		if (this.classList.contains(errorClassName)) {
			this.nextElementSibling.remove();
			this.parentElement.classList.remove(errorClassName);
			this.classList.remove(errorClassName);
		}
	})
}




function removeDisabled(postButton, name, email, site, text) {
	if (name === 'true' && email === 'true' && site === 'true' && text === 'true') {
		postButton.removeAttribute('disabled')
	} else {
		if (!postButton.hasAttribute('disabled')) {
			postButton.setAttribute('disabled', '')
		}
	}
}


function validateTextArea(userText) {
	if (userText.length < 15) {
		return 'Not enough text';
	}
	return false;
}

function validateUserName(userName) {
	let validateName = /[^A-Za-z0-9]+/;
	if (validateName.test(String(userName).toLowerCase())) {
		return 'Anaviliable "$#!@^&*()"';
	}
	return false;
}

function validateUserEmail(userEmail) {
	let validateEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
	if (!validateEmail.test(String(userEmail).toLowerCase())) {
		return 'incorrect email';
	}
	return false;
}

function validateUserWebsite(userSite) {
	let validateSite = /[^A-Za-z0-9\.@:_\-]/;
	if (validateSite.test(String(userSite).toLowerCase())) {
		return 'incorrect website';
	}
	return false;
}



function createErrorMassage(errorMessage) {
	const tag = document.createElement('p');
	tag.classList.add(errorClassName);
	tag.textContent = errorMessage;
	return tag;
}



//TODO scroll

const scroll = document.getElementById("scroll")
scroll.addEventListener('click', function () {
	const scrollUp = document.querySelector(".page")
	scrollUp.scrollIntoView({
		behavior: 'smooth',
	})
})


//TODO LocalStorage
const userList = getUserList();
const checkbox = document.querySelector('.checkbox');
const buttonPost = document.querySelector('.form-comment')
buttonPost.addEventListener('submit', function (e) {
	e.preventDefault()
	if (checkbox.checked) {
		const userName = document.querySelector('.userName').value;
		const userEmail = document.querySelector('.userEmail').value;
		const userSite = document.querySelector('.userSite').value;

		const newUser = {
			userName: userName,
			userEmail: userEmail,
			userSite: userSite,
		}
		//console.log(newUser);
		userList.push(newUser);
		localStorage.setItem('user', JSON.stringify(userList))

		//console.log(JSON.parse(localStorage.getItem('user')));
	}

})
const userList1 = JSON.parse(localStorage.getItem('user'));

if (userList1 !== null) {
	const lastUser = userList1[userList1.length - 1];
	for (let key in lastUser) {
		document.querySelector('.' + key).value = lastUser[key];
	}
	checkbox.checked = true;
	document.querySelector('.userName').setAttribute('data-required', 'true');
	document.querySelector('.userEmail').setAttribute('data-required', 'true');
	document.querySelector('.userSite').setAttribute('data-required', 'true');
}

checkbox.addEventListener('change', () => {
	if (!checkbox.checked) {
		localStorage.removeItem('user');
	}
})

function getUserList() {
	const users = JSON.parse(localStorage.getItem('user'))
	return users ? users : [];
}

///

let idMesage = 0;
let replyId = 0;

function renderPosts() {
	let maxId = -1;
	let maxReplyId = -1;
	const localStorageItem = JSON.parse(localStorage.getItem('userMessages'));
	if (localStorageItem) {
		localStorageItem.forEach((e) => {
			messageToHtml(e.userName, e.userSite, e.textArea, e.getTime, e.id, e.counterLikes, e.liked);
			maxId = maxId > e.id ? maxId : e.id;
			const rPosts = e.repliedPosts;
			const place = document.querySelector('.comment__wrapper-hero');
			if (rPosts[0]) {
				rPosts.forEach((item) => {
					replyToHtml(place, item.userName, item.replyName, item.userSite, item.textArea, item.getTime, e.id);
					maxReplyId = maxReplyId > item.id ? maxReplyId : item.id;
				})
				replyId = maxReplyId;
			}
		})

		idMesage = maxId + 1;
	}
	const htmlStorage = JSON.parse(localStorage.getItem('inHtml'));
	if (htmlStorage) {
		htmlStorage.forEach((e) => {
			const htmlComent = document.querySelector(`button[data-id=${e.id}]`);
			if (e.isRemoved) {
				htmlComent.closest('.comment').remove();
			} else if (e.liked) {
				const htmlLikes = document.querySelector(`.comment__like-wrapper>button[data-id=${e.id}]`);
				const likeCounter = htmlLikes.nextElementSibling;
				htmlLikes.firstElementChild.setAttribute('src', './images/dark-dark-heart.svg');
				likeCounter.textContent = Number(likeCounter.textContent) + 1;
				htmlLikes.setAttribute('disabled', '');
			}
			if (e.repliedPosts[0]) {
				e.repliedPosts.forEach((item) => {
					const place = document.querySelector(`[data-id="${e.id}"]`).closest('.comment__wrapper-hero');
					replyToHtml(place, item.userName, item.replyName, item.userSite, item.textArea, item.getTime, e.id);
					maxReplyId = maxReplyId > item.id ? maxReplyId : item.id;
				})
				replyId = maxReplyId;
			}
		});
	}
}
renderPosts();

//TODO	 Add comment

function messageToHtml(userName, userSite, textArea, time, id, counterLikes, liked) {
	let lastComent = document.querySelector('.messages-list');
	let addComment = document.createElement("li");
	addComment.className = 'messages-list__item comment'
	let html = `
	<div class="comment__wrapper comment-margin">
		<div class="comment__wrapper-hero">
			<div class="comment__header">
				<div class="comment__ava ava">
					<div class="ava__img1">
						<img class="ava__img1-size" src="./images/face-1.png" alt="">
					</div>
					<a class="ava__web" href="">${userSite}</a>
				</div>
				<div class="comment__group">
					<h4 class="comment__title">${userName}</h4>
					<div class="comment__publish-date">${timeCheck(time)}</div>
				</div>
				<div class="comment__actions">
					<button class="edit" data-id="${id}">
						<img src="./images/edit-icon.svg">
					</button>
					<button class="remove" data-id="${id}">
						<img src="./images/remove-icon.svg">
					</button>
				</div>
			</div>
			<div class="comment__content">
				<div class="comment__text">${textArea} </div>
				<div class="comment__like-wrapper">`;
	if (!liked) {
		html = html + `<button class="like" data-id="${id}">
		<img src="./images/white-dark-h.svg"></img>`;
	} else {
		html = html + `<button class="like" data-id="${id}" disabled>
		<img src="./images/dark-dark-heart.svg"></img>`;
	}
	html = html + `
					</button>
					<p class="like-number">${counterLikes}</p>
				</div>
			</div>
			<div class="comment__footer">
				<button class="reply-img" data-id="${id}">Reply</button>
				<div class="top">
					<button class="top-p" data-id="${id}">
						<img src="./images/like-icon.png" >
					</button>
					<button class="top-m" data-id="${id}">
						<img src="./images/disLike.png">
					</button>
				</div>
			</div>
		</div>
`;
	addComment.innerHTML = html;
	lastComent.prepend(addComment)
}

function timeCheck(time) {
	const timeNow = new Date().getTime();
	const timeMs = (timeNow - time) / 60000;
	if (timeMs < 1) {
		return 'Just Now';
	}
	if (timeMs < 60) {
		return `${Math.floor(timeMs)} Minutes ago`;
	}
	const timeH = timeMs / 60;
	if (timeH < 24) {
		return `${Math.floor(timeH)} Hours ago`;
	}
	const timeD = timeH / 24;
	if (timeD < 7) {
		return `${Math.floor(timeD)} Days ago`;
	}
	const timeW = timeD / 7;
	if (timeW < 4) {
		return `${Math.floor(timeW)} Weeks ago`;
	}
	const timeM = timeW / 4;
	if (timeM < 12) {
		return `${Math.floor(timeM)} Months ago`;
	}
	const timeY = timeM / 12;
	return `${Math.floor(timeY)} Years ago`;
}

let addLikeList = document.querySelectorAll('.like');

function addCommentPost() {
	const userName = document.querySelector('.userName').value;
	const userEmail = document.querySelector('.userEmail').value;
	const userSite = document.querySelector('.userSite').value;
	const textArea = smileToImg(document.querySelector('.textarea').value);
	const getTime = setTimeForm();
	const setLocalStorage = {
		liked: false,
		userName,
		userEmail,
		userSite,
		textArea,
		getTime,
		id: idMesage,
		counterLikes: 0,
		repliedPosts: [
			// {
			// 	userName,
			// 	userSite,
			// 	textArea,
			// 	getTime,
			// 	id: replyId,
			// },
		]
	}
	let localStorageMessages = [];
	const localStorageItem = localStorage.getItem('userMessages')
	if (localStorageItem) {
		localStorageMessages = JSON.parse(localStorageItem);
	}
	localStorageMessages.push(setLocalStorage)
	localStorage.setItem('userMessages', JSON.stringify(localStorageMessages));
	messageToHtml(userName, userSite, textArea, getTime, idMesage, setLocalStorage.counterLikes, setLocalStorage.liked);
	idMesage += 1;
	addLikeList = document.querySelectorAll('.like');
	likeListener();
	removeLike();
	addReply();
}


function setTimeForm() {
	const date = new Date();

	return date.getTime();
}

post.addEventListener('click', addCommentPost)


//TODO: remove comments



function removeLike() {
	let htmlStorageList = [];
	const removeMessageList = JSON.parse(localStorage.getItem('userMessages'));
	const buttonRemoveList = document.querySelectorAll('.remove');
	buttonRemoveList.forEach((e) => {
		e.addEventListener('click', () => {
			const id = Number(e.getAttribute('data-id'));
			if (isNaN(id)) {
				const formalId = e.getAttribute('data-id');
				const localStorageHtml = {
					id: formalId,
					liked: false,
					counterLikes: 0,
					isRemoved: true,
				}
				const htmlStorage = JSON.parse(localStorage.getItem('inHtml'));
				if (htmlStorage) {
					htmlStorageList = htmlStorage;
				}
				const storageObject = htmlStorageList.find((item) => item.id === formalId)
				if (storageObject) {
					storageObject.isRemoved = true;
					storageObject.repliedPosts = [];
				} else {
					htmlStorageList.push(localStorageHtml)
				}
				localStorage.setItem('inHtml', JSON.stringify(htmlStorageList));
			} else {
				const found = removeMessageList.find((item) => item.id === id);
				const foundIndex = removeMessageList.indexOf(found);
				removeMessageList.splice(foundIndex, 1);
				localStorage.setItem('userMessages', JSON.stringify(removeMessageList));
			}
			e.closest('.comment').remove();
		})
	})
}

removeLike();


//TODO: addLike

function addLike() {
	const localStorageMessages = JSON.parse(localStorage.getItem('userMessages'));
	const likeCounter = this.nextElementSibling;
	this.firstElementChild.setAttribute('src', './images/dark-dark-heart.svg');
	likeCounter.textContent = Number(likeCounter.textContent) + 1;
	const id = Number(this.getAttribute('data-id'));
	let htmlStorageList = [];
	if (isNaN(id)) {
		const formalId = this.getAttribute('data-id');
		const localStorageHtml = {
			id: formalId,
			liked: true,
			counterLikes: Number(likeCounter.textContent) + 1,
			isRemoved: false,
			repliedPosts: [],
		}
		const htmlStorage = JSON.parse(localStorage.getItem('inHtml'));
		if (htmlStorage) {
			htmlStorageList = htmlStorage;
		}
		const storageObject = htmlStorageList.find((item) => item.id === formalId)
		if (storageObject) {
			storageObject.liked = true;
			storageObject.counterLikes = Number(likeCounter.textContent) + 1;
		} else {
			htmlStorageList.push(localStorageHtml)
		}

		localStorage.setItem('inHtml', JSON.stringify(htmlStorageList));
	} else {
		const found = localStorageMessages.find((item) => item.id === id);
		found.counterLikes++;
		found.liked = true;
		localStorage.setItem('userMessages', JSON.stringify(localStorageMessages));
	}
	this.removeEventListener('click', addLike);
}

function likeListener() {
	addLikeList.forEach((e) => {
		e.addEventListener('click', addLike);
	})
}

likeListener()


//TODO subcomment

function replyToHtml(place, userName, replyName, userSite, textArea, time, id) {
	const createListMessages = document.createElement('div');
	createListMessages.className = 'comment__reply reply';
	let htmlSubMessages = `
							<div class="reply__header">
								<div class="reply__ava ava">
									<div class="ava__img2">
										<img class="ava__img1-size" src="./images/face-2.png" alt="">
									</div>
									<a class="ava__web" _blank href="#">${userSite}</a>
								</div>
								<div class="reply__group">
									<h4 class="reply__title">${userName}</h4>
									<div class="reply__publish-date">${timeCheck(time)}</div>
								</div>
							</div>
							<div class="reply__content">
								<p class="reply__text">
								<span class="q">${replyName},</span>
								${textArea}</p>
							</div>
							<div class="reply__footer">
								<button class="reply-img reply-img__second" data-id='${id}'>Reply</button>
								<div class="top top__reply-padding">
									<button class="top-p" ">
										<img src="./images/like-icon.png">
									</button>
									<button class="top-m" ">
										<img src="./images/disLike.png">
									</button>
								</div>
							</div>
	`
	createListMessages.innerHTML = htmlSubMessages;
	place.after(createListMessages);
}


//TODO: SUB FORM


function replyFormToHtml(addNewForm) {
	const crateForm = document.createElement('div');
	crateForm.classList.add('sub-form');
	let htmlSubForm = `
	<section class="comment">
	<h2 class="comment__title">Add a Comment</h2>
	<form class="form-comment subForm" action="" method="post" id="subForm">
		<div class="form-comment__reg">
			<div class="form-comment__control required">
				<label for="" class="form-comment__lable">Name*</label>
				<input class="form-comment__input required userName subUserName" data-required="false" id="patternName" type="text"
					placeholder="Shane Hobbins" name="name">
			</div>
			<div class="form-comment__control required">
				<label for="" class="form-comment__lable">Email*</label>
				<input class="form-comment__input required userEmail subUserEmail" data-required="false" id="patterEmail" type="text"
					placeholder="info@interface.com" name="email">
			</div>
			<div class="form-comment__control required">
				<label for="" class="form-comment__lable">Website*</label>
				<input class="form-comment__input required userSite subUserSite" data-required="false" id="patternWebsite" type="text"
					placeholder="www.interface.com" name="website">
			</div>
		</div>
		<div class="massage required">
			<label class="massage__text">Message*</label>
			<img class="subMessage__img " meta-data="smile" src="./images/smile-1.svg" alt="">
			<img class="subMessage__img" meta-data="ok-smile" src="./images/smile-2.svg" alt="">
			<img class="subMessage__img" meta-data="fan-smile" src="./images/smile-3.svg" alt="">
			<img class="subMessage__img" meta-data="piece-smile" src="./images/smile-4.svg" alt="">
			<img class="subMessage__img" meta-data="poker-smile" src="./images/smile-5.svg" alt="">
			<img class="subMessage__img" meta-data="mad-smile" src="./images/smile-6.svg" alt="">
			<img class="subMessage__img" meta-data="sad-smile" src="./images/smile-7.svg" alt="">
			<textarea class="subTextarea  required" minlength="15" maxlength="500" data-required="false" id="" name="textareaMassage"
				placeholder="Hi there [::smile::] lorem [b]ipsum[/b] [i]dolor[/i]"></textarea>
			<p class="textarea-result"></p>
		</div>
		<div class="form-button">
			<button class="button button__cancle subCancel" for="subForm" type="reset">Cancel</button>
			<button class="button button__post subPost" for="subForm" type="submit" disabled>Post</button>
		</div>
	</form>
</section>`
	crateForm.innerHTML = htmlSubForm;
	addNewForm.after(crateForm);
}



function addReply() {
	const reply = document.querySelectorAll('.reply-img');
	reply.forEach((e) => {
		e.addEventListener('click', () => {
			const checkPrevForm = document.querySelector('.subForm')
			if (checkPrevForm) {
				const prvForm = checkPrevForm.closest('.sub-form');
				prvForm.previousElementSibling.querySelector('.reply-img').toggleAttribute('disabled')
				prvForm.remove();
			}
			e.toggleAttribute('disabled');
			let replyButton = e.closest('.reply');
			if (replyButton) {
				replyFormToHtml(replyButton);
				const subRequiredList = document.querySelectorAll('.subForm .required:not(div)');
				subRequiredList.forEach((e) => {
					requiredCheck(e, 'subUserName', 'subUserEmail', 'subUserSite', 'subTextarea');
				})
				subPost(replyButton, '.reply__title');
			} else {
				replyButton = e.closest('.comment__wrapper-hero');
				if (replyButton) {
					replyFormToHtml(replyButton);
					const subRequiredList = document.querySelectorAll('.subForm .required:not(div)');
					subRequiredList.forEach((e) => {
						requiredCheck(e, 'subUserName', 'subUserEmail', 'subUserSite', 'subTextarea');
					})
					subPost(replyButton, '.comment__title');
				}
			}
			buttonListeners(e, replyButton);
		})
	})
}

function subForm(trigger) {
	const subForm = document.querySelector('.subForm');
	subForm.addEventListener('submit', (e) => {
		e.preventDefault();
		trigger.toggleAttribute('disabled');
		subForm.closest('.sub-form').remove();
	});
}


function subCancel(trigger) {
	const cancel = document.querySelector('.subCancel');
	cancel.addEventListener('click', () => {
		trigger.toggleAttribute('disabled');
		cancel.closest('.sub-form').remove();
	})
}

function subPost(replyButton, replyName) {
	const post = document.querySelector('.subPost');
	post.addEventListener('click', () => {
		addReplyPost(replyButton, replyName);
	});
}



function addReplyPost(replyButton, replyName) {
	const userName = document.querySelector('.subUserName').value;
	const userEmail = document.querySelector('.subUserEmail').value;
	const userSite = document.querySelector('.subUserSite').value;
	const textArea = smileToImg(document.querySelector('.subTextarea').value);
	const getTime = setTimeForm();
	const subForm = document.querySelector('.sub-form');

	let id = replyButton.querySelector('.reply-img').getAttribute('data-id')
	if (Number(id) || Number(id) === 0) {
		id = Number(id);
	}
	replyName = replyButton.querySelector(replyName).textContent;
	replyToHtml(subForm, userName, replyName, userSite, textArea, getTime, id)
	addReply();
	localStorageFull(userName, userSite, userEmail, textArea, getTime, replyId, replyName, id);
	replyId += 1;
}

function localStorageFull(userName, userSite, userEmail, textArea, getTime, replyId, replyName, id) {

	const objectReply = {
		userName,
		userSite,
		userEmail,
		textArea,
		getTime,
		replyName,
		id: replyId,
	}
	if (typeof id === 'string') {
		let localStorageHTML = JSON.parse(localStorage.getItem('inHtml'));
		const localStorageHtml = {
			id,
			isRemoved: false,
			repliedPosts: [],
		}
		if (!localStorageHTML) {
			localStorageHTML = [];
			localStorageHTML.push(localStorageHtml);
		}
		let itemHtml = localStorageHTML.find((item) => item.id === id);
		if (!itemHtml) {
			localStorageHTML.push(localStorageHtml);
		}
		itemHtml = localStorageHTML.find((item) => item.id === id);
		itemHtml.repliedPosts.push(objectReply);
		localStorage.setItem('inHtml', JSON.stringify(localStorageHTML))
	} else {
		const localS = JSON.parse(localStorage.getItem('userMessages'));
		localS.find((item) => item.id === id).repliedPosts.push(objectReply)
		localStorage.setItem('userMessages', JSON.stringify(localS));
	}
}


function buttonListeners(e) {
	addSmile('.subTextarea', '.subMessage__img');
	subCancel(e);
	subForm(e);
}

addReply();


