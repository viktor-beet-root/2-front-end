import Course from "./course";
(function () {


    const frontEnd = new Course({
        courseName: 'Front End',
        duration: new Date(2022, 4, 15).getTime(),
        start: new Date(2022, 0, 11).getTime(),
    });

    frontEnd.addStudent({
        name: 'Vasya',
        email: 'vasya@gmail.com',
        age: '24',
        skillList: ['html', 'js', 'git'],
    });
    frontEnd.addStudent({
        name: 'Kolya',
        email: 'kolya2@gmail.com',
        age: '23',
        skillList: ['html', 'js'],
    });
    frontEnd.addStudent({
        name: 'Denn',
        email: 'denn502@gmail.com',
        age: '28',
        skillList: ['html', 'js', 'git', 'scss', 'css'],
    });
    frontEnd.addStudent({
        name: 'Maxum',
        email: 'max345@gmail.com',
        age: '26',
        skillList: ['html', 'php', 'java'],
    });
    // console.log(frontEnd.removeStudent(1));
    frontEnd.changeSudent(0, {
        name: 'Enokentiy',
        email: 'enokentiy@gmail.com',
        age: '21',
        skillList: ['html', 'css'],
    })
    console.log(frontEnd.getStudentsList());
    console.log(frontEnd.getAllStudSkills());
    console.log(frontEnd.getUniqueStudSkillsList());
    console.log(frontEnd.sortStudenstBySkills(true));
    console.log(frontEnd.findMostOldStud("young"));
    console.log(frontEnd.findRangAgeStud(21, 24));


})();





