import Course from "./course";

function getIdfunc() {
    let count = 0;
    return () => count++;
}

class Academy {
    constructor(options) {
        this.courseList = [];

        this.appElem = document.getElementById(options.app);

        this.addCourseForm = this.appElem.querySelector(
            options.addCourseFormSelector
        );

        this.addCourseForm.addEventListener('submit', this.addCourse.bind(this));

        this.courseListElement = this.appElem.querySelector(
            options.courseListSelector
        );

        this.courseListElement.addEventListener(
            'click', this.actionsCourse.bind(this)
        );

        this.addsudentForm = this.appElem.querySelector(options.addStudentFormSelector);

        this.addsudentForm.addEventListener(
            'submit', this.addStudentToCourse.bind(this)
        )
    }

    getCourseById(id) {
        return this.courseList.find((course) => course.id === +id);
    }

    actionsCourse(e) {
        if (e.target.classList.contains('add-student-btn')) {
            this.addsudentForm.dataset.courseId = e.target.dataset.courseId;
            this.toggleAddStudentForm();
        }
    }

    addStudentToCourse(e) {
        e.preventDefault();

        const newStudent = {
            name: this.addsudentForm[0].value
        }

        const course = this.getCourseById(e.target.dataset.courseId);
        course.addStudent(newStudent);

        course.courseElement
            .querySelector('.students')
            .append(this.getHtmlStudent(newStudent));

    }

    getHtmlStudent(newStudent) {
        const html = `
        <li><strong>ID:</strong> ${newStudent.id} <strong>Student Name:</strong> ${newStudent.name}</li>
        `;

        const div = document.createElement('div');
        div.innerHTML = html;

        return div.firstElementChild;
    }

    toggleAddStudentForm() {
        this.addsudentForm.classList.toggle('active');
    }

    getCourseId = getIdfunc();

    valideateStartDate(data, pattern) {
        //if (!data) return false;
        //* ===> {0,}
        //+ ===> {1,}
        //? ===> {0,1}
        console.log('a [u]witch[/u] [::nosmile::] and her "broom" is one'.replace(/(\[[u]\])(.+?)(\[\/[u]\])/ig, "<u>$2</u>"));
        console.log('One Two'.replace(/^(\w+) (\w+)$/ig, '$2 $1'))
    }

    addCourse(e) {
        e.preventDefault();


        const newCourseData = {};
        let pattern = '';

        for (let i = 0; i < this.addCourseForm.length; i++) {
            if (this.addCourseForm[i].tagName.toLocaleLowerCase() === 'input') {
                if (this.addCourseForm[i].getAttribute('name') === 'start') {
                    pattern = this.addCourseForm[i].dataset.pattern;
                }
                newCourseData[this.addCourseForm[i].getAttribute('name')] = this.addCourseForm[i].value;
            }
        }

        this.valideateStartDate(newCourseData.start, pattern);

        newCourseData.id = this.getCourseId();

        const newCourse = new Course(newCourseData);
        this.courseList.push(newCourse);

        console.log(this.courseList);

        this.clearForm();

        this.renderHtmlCourse(newCourse);
    }

    renderHtmlCourse(course) {
        course.courseElement = course.getHtmlCourse();
        this.courseListElement.append(course.courseElement);
    }



    clearForm() {
        for (let i = 0; i < this.addCourseForm.length; i++) {
            if (this.addCourseForm[i].tagName.toLocaleLowerCase() === 'input') {
                this.addCourseForm[i].value = '';
            }
        }
    }
}

export default Academy;
