function renderPosts(posts, users) {
    const postsElement = document.querySelector('.posts');
    //console.log(users);
    const findUser = {};
    posts.forEach(post => {
        //console.log(post)
        let user;
        if (!findUser[post.userId]) {
            user = getUser(users, post.userId);
            findUser[post.userId] = user;
        } else {
            user = findUser[post.userId];
        }
        console.log(user);
        const htmlTemlate = `
            <li class="posts__item">
                <h2 class="posts__title">${post.id}. ${post.title}</h2>
                <p class="posts__body">${post.body}</p>
                <div class="posts__info">
                    <p class="posts__user-wrapper">
                        Name: <span class="posts__user-name">${user.name}</span>
                        <br>Phone: <a href="tel:${user.phone}">${user.phone}</a>
                        <br>Email: <a href="mailto:${user.email}">${user.email}</a>
                        <br>www: <a href="${user.website}">${user.website}</a>
                    </p>
                </div>
            </li>
        `;
        postsElement.insertAdjacentHTML('beforeend', htmlTemlate);
    });
}

function getUser(users, userId) {
    //console.log(users, userId)
    return users.find(user => user.id === userId);
}

export default renderPosts;
