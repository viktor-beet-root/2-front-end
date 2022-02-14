import Course from "./Course";
//Добавить методы в класс Course

//1. Заменяет студента на другого (id,{student}).
//2. Возвращает масив всех скилов студентов skillList => fullSkillList.
//3. Возвращает масив всех скилов студентов skillList уникальный uniqSkillList.
//4. Сортировать студентов в зависимости 
//от их скила(кол-во скилов length) принимает true false.
//5. Метод возвращает студента по возрасту самого старого.
//6. Метод молодого.

//Все методы описаны в "Course.js"

const frontend = new Course({
    courseName: 'Frontend',
    duration: new Date(2022, 4, 15).getTime(),
    start: new Date(2022, 0, 11).getTime(),
});

frontend.addStudent({
    name: 'Vasya',
    email: 'vasya@gmail.com',
    age: 26,
    skillList: ['html', 'js', 'git']
});
frontend.addStudent({
    name: 'Denn',
    email: 'denn@gmail.com',
    age: 45,
    skillList: ['html', 'js', 'nodeJs', 'git', 'scss', 'css']
});
frontend.addStudent({
    name: 'Kolya',
    email: 'kolya@gmail.com',
    age: 24,
    skillList: ['html', 'js']
});


console.log(frontend.changeStudentById(1, {
    name: 'Andrey',
    email: 'andrey@gmail.com',
    age: 12,
    skillList: ['windows family']
}));
// console.log(frontend.getUniqSkillList());
console.log(frontend.sortStudentsBySkill(0))
console.log(frontend.getStudentsList());
console.log(frontend.getOldestStudent());
console.log(frontend.getYoungerStudent())

