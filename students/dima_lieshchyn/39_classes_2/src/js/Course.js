function getIdfunc() {
    let counter = 0;
    return () => counter++;
}

class Course {
    constructor(options) {
        this.studentsList = [];
        this.courseName = options.courseName;
        this.duration = options.duration;
        this.start = options.start;
    }

    getStudentId = getIdfunc();

    getStudentsList() {
        return this.studentsList;
    };

    set addStudent(student) {
        if (!student) return;
        student.id = this.getStudentId();
        this.studentsList.push(student);
    };

    getTimeToEnd() {
        return this.duration - new Date().getTime();
    };

    removeStudent(idStudent) {
        const indexStudent = this.getStudentIndexById(idStudent);

        if (!~indexStudent) return {};

        return this.studentsList.splice(indexStudent, 1)[0];
    };

    getStudentIndexById(idStudent) {
        return this.studentsList.map(student => student.id).indexOf(idStudent);
    };

    getStudentById(idStudent) {
        return this.studentsList.find(student => student.id === idStudent);
    };

    //1. Заменяет студента на другого (id,{student}).
    changeStudentById(idStudent, student) {
        const indexStudent = this.getStudentIndexById(idStudent);

        if (!~indexStudent) return {};

        return this.studentsList.splice(indexStudent, 1, student);
    };

    //2. Возвращает масив всех скилов студентов skillList => fullSkillList.
    getFullSkillList() {
        let fullSkillList = '';
        this.studentsList.map(
            student => fullSkillList = fullSkillList + student.skillList + ','
        );
        return fullSkillList;
    };

    //3. Возвращает масив всех скилов студентов skillList уникальный uniqSkillList.
    getUniqSkillList() {
        return this.getFullSkillList()
            .split(',')
            .filter((skill, index, arr) => arr.indexOf(skill) === index)
            .join(', ')
            .slice(0, -2);
    }

    //4. Сортировать студентов в зависимости 
    //от их скила(кол-во скилов length) принимает true false.
    sortStudentsBySkill(switcher) {
        const sortedStudentList = this.studentsList.slice();
        sortedStudentList.sort(
            (a, b) => a.skillList.length - b.skillList.length
        );
        return switcher ? sortedStudentList : sortedStudentList.reverse();
    };

    //5. Метод возвращает студента по возрасту самого старого.
    getOldestStudent() {
        const temp = this.studentsList.slice();
        return temp.sort((a, b) => b.age - a.age)[0];
    };

    //6. Метод молодого.
    getYoungerStudent() {
        const temp = this.studentsList.slice();
        return temp.sort((a, b) => a.age - b.age)[0];
    };

}

export default Course;

