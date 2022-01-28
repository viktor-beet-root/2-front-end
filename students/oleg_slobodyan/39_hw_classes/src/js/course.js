let idStudent = 0;

function Course(options) {
    this.studentList = [];
    this.courseName = options.courseName;
    this.duration = options.duration;
    this.start = options.start;
}
Course.prototype.getStudentsList = function () {
    return this.studentList;
};
Course.prototype.addStudent = function (student) {
    student.id = idStudent++;
    this.studentList.push(student);
};

Course.prototype.getTimetoEnd = function () {
    return this.duration - new Date().getTime();
};
Course.prototype.removeStudent = function (idStudent) {
    const indexSudent = this.getStudentIndexById(idStudent);

    if (!~indexSudent) return {};

    return this.studentList.splice(indexSudent, 1);
}

Course.prototype.getStudentIndexById = function (idStudent) {
    return this.studentList.map(student => student.id).indexOf(idStudent);
};

// 1. Заміна одного студента на іншого(по ID)
Course.prototype.changeSudent = function (idStudent, newStudent) {
    const indexSudent = this.getStudentIndexById(idStudent);
    newStudent.id = idStudent;

    return this.studentList.splice(indexSudent, 1, newStudent);
}

// 2. Метот повертає всі скіли студентів
Course.prototype.getAllStudSkills = function () {
    let res = [];

    for (let i = 0; i < this.studentList.length; i++) {
        res = res.concat(this.studentList[i].skillList);
    }

    return res;
};

// 3. Метод повертає унікальний список скілів студунтів
Course.prototype.getUniqueStudSkillsList = function () {
    const allSkillslist = this.getAllStudSkills();
    let uniqueSkillsList = [];
    uniqueSkillsList.push(allSkillslist[0]);

    for (let i = 0; i < allSkillslist.length; i++) {
        if (!(~uniqueSkillsList.indexOf(allSkillslist[i]))) {
            uniqueSkillsList.push(allSkillslist[i]);
        }
    }

    return uniqueSkillsList;
}

// 4. Метод сортує студентів за кількістю скілів
Course.prototype.sortStudenstBySkills = function (option) {
    const amountSkillsStud = [];
    const tempArr = [];
    const res = [];

    for (let i = 0; i < this.studentList.length; i++) {
        amountSkillsStud.push(this.studentList[i].skillList.length);
    }
    const sortArr = amountSkillsStud.filter((item, i, arr) => arr.indexOf(item) === i).sort((a, b) => a - b);

    for (let i = 0; i < sortArr.length; i++) {
        if (option === true) {
            tempArr.unshift(this.studentList.filter(function (item) {
                if (item.skillList.length === sortArr[i]) {
                    return item;
                }
            }));
        }
        if (option === false) {
            tempArr.push(this.studentList.filter(function (item) {
                if (item.skillList.length === sortArr[i]) {
                    return item;
                }
            }));
        }

    }

    return res.concat(...tempArr);
}
//5. Метод шукає найтсаршого або наймолодшого студента в групі
Course.prototype.findMostOldStud = function (param) {
    const ageList = this.studentList.map(item => item.age);
    let paramAge = ageList[0];

    for (let i = 0; i < ageList.length; i++) {
        if (param === "old") {
            if (paramAge < ageList[i]) {
                paramAge = ageList[i];
            }
        }
        if (param === "young") {
            if (paramAge > ageList[i]) {
                paramAge = ageList[i];
            }
        }
    }

    return this.studentList.filter(item => item.age === paramAge);
}

// 6. Метод виводить студентів в заданому діапазоні віку
Course.prototype.findRangAgeStud = function (from, to) {
    const res = [];
    const rangeArr = [];

    for (let i = from; i <= to; i++) {
        rangeArr.push(i);
    }

    for (let i = 0; i < rangeArr.length; i++) {
        for (let j = 0; j < this.studentList.length; j++) {
            if (this.studentList[j].age.indexOf(rangeArr[i]) !== -1) {
                res.push(this.studentList[j]);
            }
        }
    }

    return res;
}

export default Course;
