import Course from "./course";
(function () {
    // 1. Створити сторінку, що показує нумерований список пісень:
    const playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        },
        {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        },
        {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        },
        {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        },
        {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        },
        {
            author: "AC/DC",
            song: "BACK IN BLACK"
        },
        {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        },
        {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }
    ];
    const ol = document.createElement('ol');
    ol.classList.add('play-list')
    document.querySelector('.title').after(ol);
    function createLi() {

        for (let i = 0; i < playList.length; i++) {
            const author = document.createElement('h4')
            author.textContent = 'Author: ' + playList[i].author;

            const song = document.createElement('p')
            song.textContent = 'Song: ' + playList[i].song;;

            const li = document.createElement('li');

            document.querySelector('.play-list').append(li)
            document.querySelectorAll('.play-list li')[i].append(author)
            document.querySelectorAll('.play-list li')[i].append(song)

        }
    }
    console.log(createLi());

    // 2. Вивести інформацію про курс і сптсок студентів

    const front = new Course({
        courseName: 'Front End',
        duration: new Date(2022, 4, 17).getTime(),
        start: new Date(2022, 0, 12).getTime(),
    });
    front.addStudent = {
        name: 'Vasya',
        email: 'vasya@gmail.com',
        age: '24',
        skillList: ['html', 'js', 'git'],
    };
    front.addStudent = {
        name: 'Kolya',
        email: 'kolya2@gmail.com',
        age: '23',
        skillList: ['html', 'js'],
    };
    front.addStudent = {
        name: 'Denn',
        email: 'denn502@gmail.com',
        age: '28',
        skillList: ['html', 'js', 'git', 'scss', 'css'],
    };

    front.addStudent = {
        name: 'Oleg',
        email: 'oleg5@gmail.com',
        age: '23',
        skillList: ['html', 'js', 'css', 'pug'],
    };
    console.log(front);

    function cElem(option = {}) {
        if (!option.tag) return;
        const tag = document.createElement(option.tag);

        if (option.class) addClass(tag, option.class);

        if (option.attr) addAttr(tag, option.attr);

        if (option.content) addContent(tag, option.content)

        return tag;

    }
    function addClass(node, nameClass) {
        if (!node || !nameClass) return;
        const classNameList = nameClass.split(" ");
        node.classList.add(...classNameList);
    }
    function addAttr(node, attr) {
        if (!node || !attr) return;

        for (const key in attr) {
            node.setAttribute(key, attr[key]);
        }
    }
    function addContent(node, content) {
        if (!node || !content) return;

        if (typeof content === 'string') {
            node.textContent = content;
        } else if (Array.isArray(content)) {
            content.forEach(elem => {
                node.append(elem, ' ');
            });
        } else if (content.nodeType === 1) {
            node.append(content);
        }

    }
    document.querySelector('.container').append(cElem({
        tag: 'h3',
        class: 'title__course',

        content: [
            'Назава курсу: ' + front.courseName
        ],
    }));
    document.querySelector('.container').append(cElem({
        tag: 'h4',
        content: [
            'Початок курсу: ' + front.start
        ],
    }));
    document.querySelector('.container').append(cElem({
        tag: 'p',
        content: [
            "Список студентів у групі"
        ],
    }));
    document.querySelector('.container').append(cElem({
        tag: 'ol',
        class: 'student-list'
    }));
    // console.log(front.studentsList[1].name);
    const studList = document.querySelector('.student-list')
    for (let i = 0; i < front.studentsList.length; i++) {
        studList.append(cElem({
            tag: 'li',
            content: [cElem({
                tag: "span",
                content: front.studentsList[i].name
            }),
            cElem({
                tag: "span",
                content: 'вік: ' + front.studentsList[i].age
            }),
            cElem({
                tag: "span",
                content: 'знання: ' + front.studentsList[i].skillList
            }),
            ],
        }));
    }
    const spans = document.querySelectorAll('.student-list li span');
    console.log(spans)
    spans.forEach(elem => {
        console.log(elem)
        elem.style.display = 'inline-block';
        elem.style['margin-right'] = '10px';
    })
})();
