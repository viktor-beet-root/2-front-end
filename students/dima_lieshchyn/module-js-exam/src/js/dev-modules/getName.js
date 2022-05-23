import getCommentsList from "./getCommentsList";

function getName(id) {
    let username = '';
    getCommentsList().forEach(element => {
        if (element.userId === id) {
            username = element.username;
        }
    });
    return username;
}


export default getName;
