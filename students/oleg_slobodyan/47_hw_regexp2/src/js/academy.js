import Course from "./course";

function getIdfunc() {
    let count = 0;
    return () => count++;
}

class Academy {
    constructor(options) {
        this.errerClass = 'error';
        this.separatorList = ['.', '/', '-', ' '];

        this.courseList = [];

        this.appElem = document.getElementById(options.app);
        const pattern = this
            .appElem
            .querySelector('[data-pattern]')
            .dataset.pattern;
        this.resetBtn = this.appElem.querySelector('[type="reset"]');

        this.separator = this.separatorList.find(
            (separator) => pattern.indexOf(separator) !== -1
        );


        this.addCourseForm = this.appElem.querySelector(
            options.addCourseFormSelector
        );

        this.addCourseForm.addEventListener('submit', this.addCourse.bind(this));


        this.resetBtn.addEventListener('click', this.clearErrorForm.bind(this));

        this.courseListElement = this.appElem.querySelector(
            options.courseListSelector
        );

        this.courseListElement.addEventListener(
            'click', this.actionsCourse.bind(this)
        );

        this.addsudentForm = this.appElem.querySelector(options.addStudentFormSelector);

        this.addsudentForm.addEventListener(
            'submit', this.addStudentToCourse.bind(this)
        );

        this.addClearErrorHandler();
    }

    addClearErrorHandler() {
        const allFields = this.addCourseForm.querySelectorAll('input.required');
        const self = this;

        allFields.forEach((field) => {
            field.addEventListener('focus', function (e) {
                const errorMessageElement = this.nextElementSibling;

                if (errorMessageElement) {
                    this.closest('.form__control').classList.remove(self.errerClass);
                    errorMessageElement.remove();
                }
            });
        })
    }
    // 3. При натисканні на кнопку Cansel очищувати форму від помилок 
    clearErrorForm() {
        for (let i = 0; i < this.addCourseForm.length; i++) {

            if (this.addCourseForm[i].tagName.toLocaleLowerCase() === 'input' &&
                this.addCourseForm[i].closest('.form__control').classList.contains('error')) {
                this.addCourseForm[i].closest('.form__control').classList.remove('error');
                this.addCourseForm[i].nextElementSibling.remove();
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
        if (!data || !pattern) return false;

        this.patternPList = {
            d: {},
            m: {},
            y: {}
        };

        const patternArrya = this.getPatternArrya(pattern);
        this.getMapPattrenr(patternArrya);

        return new RegExp(`^${this.getRegExp()}$`).test(data) && this.valideateDate(data);
    }

    valideateDate(data) {
        const dateSeparate = data.split(this.separator);
        const year = dateSeparate[this.patternPList.y.index];
        const month = dateSeparate[this.patternPList.m.index];
        const day = dateSeparate[this.patternPList.d.index];
        console.log(year, month, day);
        const newDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        return (newDate.getTime() >= currentDate.getTime()) &&
            (newDate.getDate() === +day) &&
            (newDate.getMonth() + 1 === +month);
    }

    getRegExp() {
        let regExp = ['\\d', '\\d', '\\d'];
        let index = 0;

        this.patternPList.d.index
        let tmp = '';

        for (let key in this.patternPList) {
            tmp = regExp[this.patternPList[key].index];
            tmp = tmp + `{${this.patternPList[key].count}}`
            regExp[this.patternPList[key].index] = tmp;
        }

        return regExp.join(this.getSeparatopString());
    }

    getSeparatopString() {
        switch (this.separator) {
            case '/':
            case ' ':
            case '-':
                return this.separator;
            case '.':
                return '\\.';
        }
    }

    getMapPattrenr(patternArrya) {
        for (let key in this.patternPList) {
            for (let i = 0; i < patternArrya.length; i++) {
                const isExist = patternArrya[i].indexOf(key);

                if (isExist === 0) {
                    this.patternPList[key].index = i;
                    this.patternPList[key].count = patternArrya[i].length;
                    break;
                }
            }
        }
    }

    getPatternArrya(pattern) {
        return pattern.split(this.separator);
    }

    addCourse(e) {
        e.preventDefault();

        const newCourseData = {};
        let pattern = '';
        let sartElement;

        for (let i = 0; i < this.addCourseForm.length; i++) {
            if (this.addCourseForm[i].tagName.toLocaleLowerCase() === 'input') {

                // 1. Перевірка на пусті поля  
                if (this.addCourseForm[i].classList.contains('required') && this.addCourseForm[i].value === '') {
                    this.showErrorMessage(this.addCourseForm[i], 'This filed is requred');
                }
                if (this.addCourseForm[i].getAttribute('name') === 'start') {
                    sartElement = this.addCourseForm[i];
                    pattern = sartElement.dataset.pattern;
                }


                if (this.addCourseForm[i].getAttribute('name') === 'duration' && this.addCourseForm[i].value !== '') {
                    this.validDuration(this.addCourseForm[i]);
                }
                newCourseData[this.addCourseForm[i].getAttribute('name')] = this.addCourseForm[i].value;
            }
        }

        if (
            !this.valideateStartDate(newCourseData.start, pattern) && sartElement.value !== ''
        ) {
            this.errorrHandler(sartElement, 'This date is invalid');
            return;
        }

        newCourseData.id = this.getCourseId();

        const newCourse = new Course(newCourseData);
        this.courseList.push(newCourse);

        console.log(this.courseList);

        this.clearForm();

        this.renderHtmlCourse(newCourse);
    }
    // 2. Перевірка duration на числове значення
    validDuration(input) {
        const regExp = /\d+/;
        if (!input.value.match(regExp)) {
            this.showErrorMessage(input, 'Only numbers')
        }
    }
    errorrHandler(input, errorMessage) {
        this.showErrorMessage(input, errorMessage);

    }

    showErrorMessage(input, errorMessage) {

        if (!input.closest('.form__control').classList.contains('error')) {
            const div = document.createElement('div');
            div.textContent = errorMessage;
            div.classList.add('error-message');
            input.after(div);
            input.closest('.form__control').classList.add(this.errerClass);
        }

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
