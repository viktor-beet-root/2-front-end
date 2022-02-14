import Course from "./Course";
//Переписать на новый синтаксис 
//прошлое занятие по добавлению методов к класу Course. 
// класс находиться в Course.js
const frontend = new Course({
    courseName: 'Frontend',
    duration: new Date(2022, 4, 15).getTime(),
    start: new Date(2022, 0, 11).getTime(),
});

frontend.addStudent = {
    name: 'Vasya',
    email: 'vasya@gmail.com',
    age: 26,
    skillList: ['html', 'js', 'git']
};
frontend.addStudent = {
    name: 'Denn',
    email: 'denn@gmail.com',
    age: 45,
    skillList: ['html', 'js', 'nodeJs', 'git', 'scss', 'css']
};
frontend.addStudent = {
    name: 'Kolya',
    email: 'kolya@gmail.com',
    age: 24,
    skillList: ['html', 'js']
};


// console.log(frontend.changeStudentById(1, {
//     name: 'Andrey',
//     email: 'andrey@gmail.com',
//     age: 12,
//     skillList: ['windows family']
// }));
// console.log(frontend.getUniqSkillList());
console.log(frontend.sortStudentsBySkill(1))
// console.log(frontend.getStudentsList());
// console.log(frontend.getOldestStudent());
// console.log(frontend.getYoungerStudent())
console.log(frontend.getStudentsList());
