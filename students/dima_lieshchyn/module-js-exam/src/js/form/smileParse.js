export default function parseSmile(input) {
    let text = input.outerHTML;

    let result = '';

    const smilesCodes = [
        'smile',
        'cool',
        'nice',
        'hi',
        'bad',
        'angry',
        'sad',
    ];

    smilesCodes.forEach(elem => {
        let smileType = new RegExp(`<img[^>]*data-smile="${elem}"[^>]*>`, 'gm');
        if (text.match(smileType)) {
            result = text.replace(smileType, `::${elem}::`).replace(/<(?:.|\n)*?>/gm, '').replace(/^@\w+\s/, '');
        }
    })
    return result;

}
