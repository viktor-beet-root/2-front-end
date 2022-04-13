function scrollSmooth(item) {
    const anchors = document.querySelectorAll(item);
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        });
    }
}

export default scrollSmooth;
