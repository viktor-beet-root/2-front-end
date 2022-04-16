function message() {

    const smiles = document.querySelectorAll('.smiles__item');
    const textarea = document.querySelector('.textarea');

    textarea.addEventListener("input", countKeyUp);

    smiles.forEach(elem => {
        elem.addEventListener('click', pasteSmile);
    });

    textarea.addEventListener('input', function () {
        textarea.addEventListener('blur', function () {
            localStorage.setItem('text', textarea.value)
        })
    });

    function pasteSmile(e) {
        textarea.value = `${textarea.value} [::${e.currentTarget.dataset.smile}::] `;
        textarea.focus();
    }

    function countKeyUp(e) {
        const target = e.currentTarget;
        const maxLength = target.getAttribute("maxlength");
        const currentLength = target.value.length;

        const counter = document.querySelector('.counter__item');

        if (currentLength >= maxLength) {
            return console.log("You have reached the maximum number of characters.");
        }
        counter.textContent = maxLength - currentLength;
    }
}

export default message;
