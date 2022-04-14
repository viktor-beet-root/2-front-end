import scrollSmooth from './scroll';
import postForm from './post-form'

scrollSmooth('a[href*="#"]');

document.addEventListener('DOMContentLoaded', postForm);

document.addEventListener('DOMContentLoaded', function () {
    const smilesNames = {
        smile1: 'smile',
        smile2: 'cool',
        smile3: 'nice',
        smile4: 'hi',
        smile5: 'bad',
        smile6: 'angry',
        smile7: 'sad',
    };

    const smiles = document.querySelectorAll('.smiles__item');
    const textarea = document.querySelector('.textarea');

    smiles.forEach(elem => {

        elem.addEventListener('click', pasteSmile);
    })

    function pasteSmile(e) {
        // textarea.value = `[::${e.dataset.smile.value}::]`;
        console.log(e);
    }
});
