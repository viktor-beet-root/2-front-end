export default function getCommentsList() {
    return localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : '';
}
