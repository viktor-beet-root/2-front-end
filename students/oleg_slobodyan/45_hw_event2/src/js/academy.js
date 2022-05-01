
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
        this.errorMessage = 'This field is required';
        this.errorMessageDigital = 'Only a number is expected';
        this.errorMessageDate = 'Expected data in format DD.MM.YYYY';

        this.addsudentForm = this.appElem.querySelector(options.addStudentFormSelector);

        this.addsudentForm.addEventListener(
            'submit', this.addStudentToCourse.bind(this)
        );

        this.addCourseForm.querySelector('button[type = "reset"]').addEventListener(
            'click', this.clearError.bind(this));


        this.addCourseForm.querySelector('[name="courseName"]').addEventListener(
            'focus', this.removeError
        );
        this.addCourseForm.querySelector('[name="duration"]').addEventListener(
            'focus', this.removeError
        );
        this.addCourseForm.querySelector('[name="start"]').addEventListener(
            'focus', this.removeError
        );
        this.addsudentForm.querySelector('[name="fullName"]').addEventListener(
            'focus', this.removeError
        );

        this.addsudentForm.querySelector('[type="reset"]').addEventListener(
            'click', this.removeStudentForm.bind(this)
        );



    }
    // 5. Закривати форму Add Student при натискані на кнопку Cansel
    removeStudentForm() {
        this.addsudentForm.classList.remove('active');
    }
    removeError(e) {

        if (e.target.classList.contains('error')) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.remove();
        }
    }
    clearError() {

        for (let i = 0; i < this.addCourseForm.length; i++) {
            const element = this.addCourseForm[i];
            if (element.tagName.toLocaleLowerCase() === 'input' && element.classList.contains('error')) {
                element.nextElementSibling.remove();
            }
        }

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
        // Валідація імені студента на порожгє значення
        if (this.addsudentForm[0].value !== '') {
            const newStudent = {
                name: this.addsudentForm[0].value
            }

            const course = this.getCourseById(e.target.dataset.courseId);
            course.addStudent(newStudent);

            course.courseElement
                .querySelector('.students')
                .append(this.getHtmlStudent(newStudent));
            this.clearStudentForm();

        } else this.setErroMessage(this.addsudentForm[0], this.errorMessage);

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

    addCourse(e) {
        e.preventDefault();
        const newCourseData = {};
        let hasError = false;
        for (let i = 0; i < this.addCourseForm.length; i++) {
            const element = this.addCourseForm[i];

            if (element.tagName.toLocaleLowerCase() === 'input' && element.value !== '') {
                newCourseData[element.getAttribute('name')] = element.value;

                // 1. Валідація полів на порожнє значення     
            } else if (element.tagName.toLocaleLowerCase() === 'input' && element.value === '') {
                this.setErroMessage.call(this, element, this.errorMessage);
                hasError = true;
            }
            if (element.getAttribute('name') === 'duration') {
                this.checkDuration(element)
            }
            if (element.getAttribute('name') === 'start') {
                this.checktDate(element)
            }

        }

        if (hasError) return;

        newCourseData.id = this.getCourseId();

        const newCourse = new Course(newCourseData);
        this.courseList.push(newCourse);
        this.clearForm();

        this.renderHtmlCourse(newCourse);

    }
    // 2.  Валідація Duration тільки числа
    checkDuration(elem) {
        const regExp = /\d+/;
        if (!elem.value.match(regExp)) {
            this.setErroMessage(elem, this.errorMessageDigital)
        }
    }
    // 3.  Валідація Дати, дата тільки в заданому форматі dd.mm.yyyy
    checktDate(elem) {
        const regExp = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!elem.value.match(regExp)) {
            this.setErroMessage(elem, this.errorMessageDate)
        }
    }

    setErroMessage(elem, errorMessage) {
        if (elem.classList.contains('error')) return;

        elem.classList.add('error')
        const errorElem = document.createElement('div');
        errorElem.textContent = errorMessage;
        elem.after(errorElem);
    }
    renderHtmlCourse(course) {
        course.courseElement = course.getHtmlCourse();
        this.courseListElement.append(course.courseElement);
    }

    // 4.Очищувати форму Add Student при submit 
    clearStudentForm() {
        this.addsudentForm[0].value = '';
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
