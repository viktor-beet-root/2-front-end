import removeUser from "./removeUser";

function removeComment() {
    const comment = document.querySelector('.comments-block__wrapper');
    comment.addEventListener('click', function (e) {
        if (e.target.nodeName === 'IMG' && e.target.classList.contains('remove')) {
            let tempId = e.target.dataset.id;
            if (tempId === e.target.dataset.id) {
                e.target.closest('.comment').remove();
                removeUser(tempId)
            }

        }

    })
}

export default removeComment;
