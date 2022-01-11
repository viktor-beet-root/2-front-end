import Course from "./Course";


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
    name: 'Kolya',
    email: 'kolya@gmail.com',
    age: 24,
    skillList: ['html', 'js']
});
frontend.addStudent({
    name: 'Denn',
    email: 'denn@gmail.com',
    age: 45,
    skillList: ['html', 'js', 'nodeJs', 'git', 'scss', 'css']
});

console.log(frontend.removeStudent(6));

console.log(frontend.getStudentsList());
// console.log(makeStudentsScope(students));


//1. Заменяет студента на другого (id,{student}).
//2. Возвращает масив всех скилов студентов skillList => fullSkillList.
//3. Возвращает масив всех скилов студентов skillList уникальный uniqSkillList.
//4. Сортировать студентов в зависимости от их скила(кол-во скилов length) принимает true false.
//5. Метод возвращает студента по возрасту самого старого.
//6. Метод молодого.
//7. Диапазон принимает возвраста и возвращает студентов масив.
