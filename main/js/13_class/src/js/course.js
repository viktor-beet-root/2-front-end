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
    return this.studentsList.map(student => student.id).indexOf(idStudent)
};

export default Course;
