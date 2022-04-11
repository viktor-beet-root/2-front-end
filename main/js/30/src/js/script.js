import M from 'materialize-css';

const d = document.querySelector('.top-m');
d.addEventListener('click', function (e) {
    e.preventDefault();

});

const userList = [
    {
        id: '1',
        userName: '',
        email: '',
        pass: '',
        www: ''
    }
]

// userList.forEach(function(item, idex){
//     item.userName
// })

//if (userList[0].userName === 'petya' || userList[0].email === 'sdf@sdf.com' && )

const btnSmiList = document.querySelectorAll('.ddd');
const textarea = document.querySelector('textarea');

btnSmiList.forEach(item => item.addEventListener('click', addSmile));

function addSmile(e) {
    const smile = e.currentTarget.dataset.smile;
    const shablon = `::${smile}::`;

    textarea.value = textarea.value + ' ' + shablon;

    console.log()
}

const post = document.getElementById('post');

post.addEventListener('click', addPost);

const path = './image/smiles/';

const smileListCode = {
    smile: path + 'smile.svg',
    ok: path + 'ok.svg'
}

function addPost(e) {
    e.preventDefault();

    let post = textarea.value;

    let smileRegexp;
    let img;
    for (let key in smileListCode) {
        smileRegexp = new RegExp(`::${key}::`, 'g');
        img = `<img src="${smileListCode[key]}" alt="">`;
        post = post.replace(smileRegexp, img);

    }
    console.log(post)
    document.body.append(...stringToHtml(post));
}

function stringToHtml(string) {
    let html = document.createElement('div');

    html.innerHTML = string;

    return html.childNodes;
}


const postsList = [
    {
        id: 1,
        user: 'Jon',
        timePublish: '234234234',
        ava: './image/1.jpg',
        www: '',
        value: 'ldkjsghfdoksghf',
        like: 1,
        top: {
            like: 5,
            disLike: 1
        },
        answer: [
            {
                id: 1,
                user: 'Jonsdf',
                timePublish: 'sdf34',
                ava: './image/2.jpg',
                www: '',
                value: '<span>Jon</span> ldkjsghfdoksghf',
                top: {
                    like: 2,
                    disLike: 8
                },
            }
        ]
    }
]


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 500
    });
});
