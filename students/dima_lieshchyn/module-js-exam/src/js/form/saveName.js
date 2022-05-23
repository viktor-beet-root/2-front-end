import items from "../dev-modules/items";

export default function saveName() {
    const savedUser = {
        username: items.userName.value,
        email: items.email.value,
        www: items.www.value,
    }
    localStorage.setItem('savedUser', JSON.stringify(savedUser));
}
