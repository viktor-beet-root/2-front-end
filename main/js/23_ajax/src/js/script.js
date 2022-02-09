import myajax from "./myajax";
import myfetch from "./myfetch";
import renderPosts from "./renderPosts";

const urlUser = 'https://jsonplaceholder.typicode.com/users';
const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

myfetch(urlPosts).then(posts => {
    myfetch(urlUser).then(users => {
        renderPosts(posts, users);
    });
});

// myfetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-type': 'application/json'
//     }
// }).then(data => {
//     console.log(data);
// });

// myajax('GET', url)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((xhr, e) => {
//         console.log(xhr, e);
//    });


// const promis1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('datadfgxcvhdfghcfghnj');
//     }, 2000);
// });

// promis1.then((data) => {
//     console.log(data);
// })
