function stingToHtml(string) {
    const elem = document.createElement('div');
    elem.innerHTML = string;

    return elem.firstChild;
}

export default stingToHtml;
