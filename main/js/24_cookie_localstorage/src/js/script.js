const date = new Date(Date.now());
console.log(date.getTime())
const nextDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
const midNight = ~~((nextDay.getTime() - date.getTime()) / 1000);
// document.cookie = 'user=Vasya; path=/;';
//document.cookie = 'user2=Vasya';
// document.cookie = 'user1=Test; max-age=' + midNight;
// document.cookie = 'user1=dsa; max-age=-1';

function getCookie(nameCookie) {
    const cookies = document.cookie;
    const cookiesList = cookies.split('; ').map(item => item.split('='));
    //const findCookie = cookiesList.find(cookie => cookie[0] === nameCookie);
    const cookie = Object.fromEntries(cookiesList)[nameCookie];

    return cookie ? decodeURIComponent(cookie) : '';

    // if (!findCookie) return '';

    // return findCookie[1];
}

function removeCookie(nameCookie) {
    document.cookie = nameCookie + '=w; max-age=-1';
}

function setCookie(nameCookie, value, options) {
    let cookie = `${nameCookie}=${encodeURIComponent(value)}`;

    if (options) {
        for (let key in options) {
            let value = options[key];

            if (key === 'expires' && value instanceof Date) {
                value = value.toUTCString();
            }

            cookie = `${cookie}; ${key}=${value}`
        }
    }

    document.cookie = cookie;
}

removeCookie('user2');

setCookie('test', 'tr ue sdf dsgf', {
    'max-age': 60,
    path: '/'
});

// setCookie('test3333', 'sdfgdf', {
//     'expires': new Date(Date.now() + 5000)
// });

console.log(getCookie('test2'));

const userList = getUserList();
// userList.shift();
// localStorage.setItem('users', JSON.stringify(userList));
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const uaerName = document.querySelector('.first-name').value;
    const age = document.querySelector('.age').value;
    const email = document.querySelector('.email').value;

    const newUser = {
        name: uaerName,
        age: age,
        email: email
    }

    userList.push(newUser);

    localStorage.setItem('users', JSON.stringify(userList));

    render([newUser]);

    console.log(JSON.parse(localStorage.getItem('users')));

});

function render(userList) {
    const userListWrapper = document.querySelector('.user-list');
    const f = document.createDocumentFragment();
    userList.forEach(user => {
        const li = document.createElement('li');
        li.classList.add('user-list__item');
        li.textContent = `User: ${user.name}, age: ${user.age}, email: ${user.email}`;
        f.append(li);
    });
    userListWrapper.append(f);
}

function getUserList() {
    const users = JSON.parse(localStorage.getItem('users'))
    return users ? users : [];
}

render(userList);

//localStorage.setItem('users', JSON.stringify(userList))

//localStorage.clear();

function prepChangeCase(elemClass) {
    let tagList = document.querySelectorAll(elemClass);
    console.log(tagList);
    tagList.forEach(function (elem) {
        const reg = /\b(to|on|in|at|the|a)\b/ig;
        elem.textContent = elem.textContent.replace(
            reg, (match) => match.toLocaleUpperCase()
        );
        // let regMatch = elem.textContent.match(reg);
        // let string = elem.textContent;
        // if (regMatch.length) {
        //     for (let i = 0; i < regMatch.length; i++) {
        //         let newstr = regMatch[i].toUpperCase();
        //         console.log(newstr)
        //         string = string.replace(regMatch[i], newstr);
        //         elem.textContent = string
        //     }
        // }
    });
}

prepChangeCase('.text')
