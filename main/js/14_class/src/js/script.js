import Course from "./course";

const front = new Course({
    courseName: 'Front End',
    duration: new Date(2022, 4, 15).getTime(),
    start: new Date(2022, 0, 11).getTime(),
});
const front1 = new Course({
    courseName: 'Front End1',
    duration: new Date(2022, 4, 15).getTime(),
    start: new Date(2022, 0, 11).getTime(),
});
front1.addStudent = {
    name: "Vasya",
    email: "vasya@gmail.com",
    age: 26,
    skillList: ["html", "js", "git"]
};
// front.addStudent({
//     name: "Vasya",
//     email: "vasya@gmail.com",
//     age: 26,
//     skillList: ["html", "js", "git"]
// })
// console.log(front.addStudent({
//     name: "Vasya",
//     email: "vasya@gmail.com",
//     age: 26,
//     skillList: ["html", "js", "git"]
// }).getStudentsList())

console.log(front, front1.fullCourseName);
