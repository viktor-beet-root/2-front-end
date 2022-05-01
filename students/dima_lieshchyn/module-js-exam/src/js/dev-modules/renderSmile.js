export default function renderSmile(text) {
    const temp = text;
    const path = './images/smiles/smile_';
    const smilesPath = {
        smile: path + '1.svg',
        cool: path + '2.svg',
        nice: path + '3.svg',
        hi: path + '4.svg',
        bad: path + '5.svg',
        angry: path + '6.svg',
        sad: path + '7.svg',
    };

    while (typeof text !== 'undefined') {

        for (let key in smilesPath) {
            let smileRegexp = new RegExp(`\(::${key}::\)`, 'g');
            let img = `<img class="smile" data-smile="${key}" src="${smilesPath[key]}" alt="${key}" srcset="">`
            text = text.replace(smileRegexp, img);
        }

        return text;
    }

}
