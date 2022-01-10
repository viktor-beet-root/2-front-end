import Animal from "./animal";
import Course from "./course";

// const animal = {
//     name: 'cat',
//     say() {
//         console.log(this.name);
//     }
// }

const cat = new Animal('cat');
const dog = new Animal('dog');

console.log(cat, dog);

cat.name = 'Murka';
cat.say();

const frontEnd = new Course({
    courseName: 'Front End',
    duration: new Date(2022, 4, 15).getTime(),
    start: new Date(2022, 0, 11).getTime(),
});

frontEnd.addStudent({
    name: "Vasya",
    email: "vasya@gmail.com",
    age: 26,
    skillList: ["html", "js", "git"]
});

frontEnd.addStudent({
    name: "Kolya",
    email: "kolya@gmail.com",
    age: 24,
    skillList: ["html", "js"]
});

frontEnd.addStudent({
    name: "Denn",
    email: "denn@gmail.com",
    age: 45,
    skillList: ["html", "js", "nodeJs", "git", "scss", "css"]
});

console.log(frontEnd.removeStudent(6));
console.log(frontEnd.getStudentsList());
