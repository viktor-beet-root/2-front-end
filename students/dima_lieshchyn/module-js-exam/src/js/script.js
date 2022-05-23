import scrollSmooth from './dev-modules/scroll';
import postForm from './form/post-form';
import message from './form/message';
import items from './dev-modules/items';
import cancelInfo from './form/cancelInfo';
import removeProfanity from './form/checkProfanity';
import renderComments from './comment/renderComments';
import showTime from './dev-modules/showTime';
import editMessage from './user-buttons/editMessage';
import removeComment from './user-buttons/removeComment';
import likeProcess from './user-buttons/likeProcess';
import setSavedUser from './form/setSavedUser';
import insertUsersList from './dev-modules/insertUsersList';
import userList from './userList';
import eventAnswer from './answer/eventAnswer';

//Плавный скроллинг
scrollSmooth('.arrow, .nav-link', 0.8);

//Просто tooltip на кнопке сердечка
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//отправка формы
document.addEventListener('DOMContentLoaded', postForm);
//работа текстареи
document.addEventListener('DOMContentLoaded', message);
//удаление плохих слов
document.addEventListener('DOMContentLoaded', removeProfanity);
//показ времени на коменте
document.addEventListener('DOMContentLoaded', showTime);
//сохранение юзера после перезагрузки
document.addEventListener('DOMContentLoaded', setSavedUser);
//очистка формы
items.cancel.addEventListener('click', cancelInfo);


//редактирование комента
editMessage();
//удаление комента
removeComment();
//работа лайков дислайков
likeProcess();
//работа Reply кнопки
eventAnswer();
//рендеринг коментов из локал стораджа
renderComments(insertUsersList(userList));


