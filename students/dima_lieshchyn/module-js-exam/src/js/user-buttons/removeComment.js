import removeUser from "../dev-modules/removeUser";

function removeComment() {
    const comment = document.querySelector('.comments-block__wrapper');
    comment.addEventListener('click', function (e) {
        if (e.target.nodeName === 'IMG' && e.target.classList.contains('remove')) {
            let tempId = e.target.dataset.id;
            if (tempId === e.target.dataset.id) {
                let comment = e.target.closest('.comment');
                let answers = document.querySelectorAll('.answer');

                comment.remove();

                answers.forEach(answer => {
                    if (tempId === answer.dataset.id) {
                        answer.remove()
                    }
                })
                removeUser(tempId);
            }

        }

    })
}

export default removeComment;
