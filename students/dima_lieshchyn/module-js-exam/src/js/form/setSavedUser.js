import items from "../dev-modules/items";

export default function setSavedUser() {
    const savedUser = localStorage.getItem('savedUser') ? JSON.parse(localStorage.getItem('savedUser')) : '';
    if (!savedUser) return;
    items.userName.value = savedUser.username;
    items.email.value = savedUser.email;
    items.www.value = savedUser.www;
}
