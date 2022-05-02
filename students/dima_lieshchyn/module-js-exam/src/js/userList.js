import randomId from "./dev-modules/idGen";

export default [
    {
        userId: randomId(),
        username: 'Jon Davis',
        email: 'email@gmail.com',
        www: '',
        message: 'Lorem ::smile:: ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ',
        time: Date.now(),
        likeCount: 5,
        dislikeCount: 2,
        heartCount: 10,
        answer: [
            {
                userId: randomId(),
                username: 'Jon Davis',
                email: 'email@gmail.com',
                www: '',
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                time: Date.now(),
                likeCount: 5,
                dislikeCount: 2,
            },
            {
                userId: randomId(),
                username: 'Shane Hobbins',
                email: 'email@gmail.com',
                www: '',
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                time: Date.now(),
                likeCount: 5,
                dislikeCount: 2,
            },
        ],
    },
    {
        userId: randomId(),
        username: 'Jon Davis',
        email: 'email@gmail.com',
        www: '',
        message: 'Lorem ::smile:: ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ',
        time: Date.now(),
        likeCount: 5,
        dislikeCount: 2,
        heartCount: 10,
        answer: [],
    }
];
