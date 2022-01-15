function getIdfunc() {
    let count = 0;
    return () => count++;
}


class Course {
    constructor(options) {
        this.studentsList = [];

        this.courseName = options.courseName;
        this.duration = options.duration;
        this.start = options.start;
    }

    getStudentsId = getIdfunc();

    getStudentsList() {
        return this.studentsList;
    }

    set addStudent(student) {
        if (!student) return;
        student.id = this.getStudentsId();
        this.studentsList.push(student);
    }

    get fullCourseName() {
        return this.courseName + ' Beetroot Academy';
    }

    getTimeToEnd() {
        return this.duration - new Date().getTime();
    }

    removeStudent(idStudent) {
        const indexStudent = this.getStudentIndexById(idStudent);

        if (!~indexStudent) return {};

        return this.studentsList.splice(indexStudent, 1)[0];
    }

    getStudentIndexById(idStudent) {
        return this.studentsList.map(student => student.id).indexOf(idStudent);
    }
}

export default Course;
