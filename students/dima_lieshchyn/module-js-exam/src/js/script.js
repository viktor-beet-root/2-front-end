import scrollSmooth from './scroll';
import postForm from './post-form';
import message from './message';
import items from './items';
import cancelInfo from './cancelInfo';
import removeProfanity from './checkProfanity';
import getCommentsList from './getCommentsList';
import renderComments from './renderComments';
import showTime from './showTime';
import editMessage from './editMessage';
import removeComment from './removeComment';
import likeProcess from './likeProcess';

scrollSmooth('.arrow, .nav-link');

document.addEventListener('DOMContentLoaded', postForm);

document.addEventListener('DOMContentLoaded', message);

document.addEventListener('DOMContentLoaded', removeProfanity);

document.addEventListener('DOMContentLoaded', showTime);




items.cancel.addEventListener('click', cancelInfo);



editMessage();

removeComment();

likeProcess();

renderComments(getCommentsList());





