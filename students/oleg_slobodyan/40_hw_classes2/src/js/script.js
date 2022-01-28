

import Course from "./course";


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
// console.log(front.removeStudent(1));

console.log(front.getStudentsList());
console.log(front.fullCourseName);
console.log(front.findMostOldStud("young"));
console.log(front.getAllStudSkills());
console.log(front.getUniqueStudSkillsList());
console.log(front.sortStudenstBySkills(true));
console.log(front.findRangAgeStud(20, 24));
// console.log(front);



