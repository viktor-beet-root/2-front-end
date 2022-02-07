import myajax from "./myajax";

let url = "https://api.giphy.com/v1/stickers/search?";
const api = 'api_key=??????????????????????????'

const searchInput = document.querySelector('.search');
const btn = document.querySelector('.s');
const imgWrapper = document.getElementById('img');

btn.addEventListener('click', function () {
    url = url + api;
    const searchUrl = url + '&q=' + searchInput.value + '&bundle=sticker_layering';
    console.log(searchInput.value);

    myajax(
        'GET',
        searchUrl,
        function (res) {
            const tmp = document.createElement('div');
            res.data.forEach(image => {
                const img = document.createElement('img');
                img.setAttribute('src', image.images.fixed_height_small.url);

                tmp.append(img);
            });

            imgWrapper.append(tmp);
        }
    )
});


