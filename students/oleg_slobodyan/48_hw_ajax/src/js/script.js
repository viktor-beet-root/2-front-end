import myAjax from "./myajax";

myAjax('GET',
    'https://jsonplaceholder.typicode.com/users',
    getRes
);
const container = document.querySelector('.container');

function getRes(res) {
    console.log(res)
    const resData = res;
    const ul = document.createElement('ul');
    resData.forEach(item => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const div1 = document.createElement('div');
        const mailLink = document.createElement('a');
        const div2 = document.createElement('div');
        const phoneLink = document.createElement('a');

        div.textContent = `ID:${item.id} Name: ${item.name}`;
        div1.textContent = "Email: ";
        mailLink.setAttribute('href', `mailto:${item.email}`);
        mailLink.textContent = `${item.email}`;
        div2.textContent = "Phone: ";
        phoneLink.setAttribute('href', `tel:+${item.phone}`);
        phoneLink.textContent = `${item.phone}`;
        li.append(div);
        div1.append(mailLink);
        li.append(div1);
        div2.append(phoneLink);
        li.append(div2);
        ul.append(li);
    });
    container.append(ul);
}
// Опрацювати дані форми і відправити на сервер
const formElement = document.querySelector(".form");
let formData;

formElement.addEventListener('submit', sendFormValue);

function sendFormValue(e) {
    e.preventDefault();
    formData = new FormData(formElement);
    const value = Object.fromEntries(formData.entries());

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(value));
}






