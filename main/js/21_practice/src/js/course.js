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
        this.id = options.id;
    }

    getHtmlCourse() {
        const html = `
            <li class="course-list__item">
                <p><strong>Course name:</strong> ${this.courseName}</p>
                <p><strong>Duration:</strong> ${this.duration}</p>
                <p><strong>Start date:</strong> ${this.start}</p>
                <ul class="students"></ul>
                <div class="course-list__actions">
                    <button data-course-id="${this.id}" class="btn add-student-btn">Add student</button>
                    <button data-course-id="${this.id}" class="btn remove-student">Remove student</button>
                    <button data-course-id="${this.id}" class="btn remove-course">Remove Course</button>
                </div>
            </li>
        `;

        const div = document.createElement(div);
        div.innerHTML = html;

        return div.firstElementChild;
    }

    getStudentsId = getIdfunc();

    getStudentsList() {
        return this.studentsList;
    }

    addStudent(student) {
        if (!student) return;
        student.id = this.getStudentsId();
        this.studentsList.push(student);
    }

    fullCourseName() {
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
