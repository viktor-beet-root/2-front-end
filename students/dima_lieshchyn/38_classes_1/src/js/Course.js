let idStudent = 0;

function Course(options) {
    this.studentsList = [];
    this.courseName = options.courseName;
    this.duration = options.duration;
    this.start = options.start;
}

Course.prototype.getStudentsList = function () {
    return this.studentsList;
};

Course.prototype.addStudent = function (student) {
    student.id = idStudent++;
    this.studentsList.push(student);
};

Course.prototype.getTimeToEnd = function () {
    return this.duration - new Date().getTime();
};

Course.prototype.removeStudent = function (idStudent) {
    const indexStudent = this.getStudentIndexById(idStudent);

    if (!~indexStudent) return {};

    return this.studentsList.splice(indexStudent, 1)[0];
};

Course.prototype.getStudentIndexById = function (idStudent) {
    return this.studentsList.map(student => student.id).indexOf(idStudent);
};

Course.prototype.getStudentById = function (idStudent) {
    return this.studentsList.find(student => student.id === idStudent);
};

//1. Заменяет студента на другого (id,{student}).
Course.prototype.changeStudentById = function (idStudent, student) {
    const indexStudent = this.getStudentIndexById(idStudent);

    if (!~indexStudent) return {};

    return this.studentsList.splice(indexStudent, 1, student);
};

//2. Возвращает масив всех скилов студентов skillList => fullSkillList.

Course.prototype.getFullSkillList = function () {
    let fullSkillList = '';
    this.studentsList.map(
        student => fullSkillList = fullSkillList + student.skillList + ','
    );
    return fullSkillList;
};


//3. Возвращает масив всех скилов студентов skillList уникальный uniqSkillList.
Course.prototype.getUniqSkillList = function () {
    return this.getFullSkillList()
        .split(',')
        .filter((skill, index, arr) => arr.indexOf(skill) === index)
        .join(', ')
        .slice(0, -2);
}

//4. Сортировать студентов в зависимости 
//от их скила(кол-во скилов length) принимает true false.
Course.prototype.sortStudentsBySkill = function (switcher) {
    if (switcher) {
        return this.studentsList.sort(
            (a, b) => a.skillList.length - b.skillList.length
        );
    } else {
        return this.studentsList.sort(
            (a, b) => b.skillList.length - a.skillList.length
        );
    }
};

//5. Метод возвращает студента по возрасту самого старого.
Course.prototype.getOldestStudent = function () {
    const temp = this.studentsList.slice();
    return temp.sort((a, b) => b.age - a.age)[0];
};


//6. Метод молодого.
Course.prototype.getYoungerStudent = function () {
    const temp = this.studentsList.slice();
    return temp.sort((a, b) => a.age - b.age)[0];
};

export default Course;

