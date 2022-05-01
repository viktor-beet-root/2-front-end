
let idStudent = 0;
function getIdFunc() {
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

    getStudentsId = getIdFunc();
    getStudentsList() {
        return this.studentsList;
    }
    set addStudent(student) {
        student.id = this.getStudentsId();
        this.studentsList.push(student);
    }
    get fullCourseName() {
        return this.courseName + "Beetroot Academy";
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
    // 1. Заміна одного студента на іншого(по ID)
    changeSudent(idStudent, newStudent) {
        const indexSudent = this.getStudentIndexById(idStudent);
        newStudent.id = idStudent;

        return this.studentsList.splice(indexSudent, 1, newStudent);
    }

    // 2. Метот повертає всі скіли студентів
    getAllStudSkills() {
        let res = [];

        for (let i = 0; i < this.studentsList.length; i++) {
            res = res.concat(this.studentsList[i].skillList);
        }

        return res;
    };

    // 3. Метод повертає унікальний список скілів студунтів
    getUniqueStudSkillsList() {
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
    sortStudenstBySkills(option) {
        const amountSkillsStud = [];
        const tempArr = [];
        const res = [];

        for (let i = 0; i < this.studentsList.length; i++) {
            amountSkillsStud.push(this.studentsList[i].skillList.length);
        }
        const sortArr = amountSkillsStud.filter((item, i, arr) => arr.indexOf(item) === i).sort((a, b) => a - b);

        for (let i = 0; i < sortArr.length; i++) {
            if (option === true) {
                tempArr.unshift(this.studentsList.filter(function (item) {
                    if (item.skillList.length === sortArr[i]) {
                        return item;
                    }
                }));
            }
            if (option === false) {
                tempArr.push(this.studentsList.filter(function (item) {
                    if (item.skillList.length === sortArr[i]) {
                        return item;
                    }
                }));
            }

        }

        return res.concat(...tempArr);
    }
    //5. Метод шукає найтсаршого або наймолодшого студента в групі
    findMostOldStud(param) {
        const ageList = this.studentsList.map(item => item.age);
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

        return this.studentsList.filter(item => item.age === paramAge);
    }

    // 6. Метод виводить студентів в заданому діапазоні віку
    findRangAgeStud(from, to) {
        const res = [];
        const rangeArr = [];

        for (let i = from; i <= to; i++) {
            rangeArr.push(i);
        }

        for (let i = 0; i < rangeArr.length; i++) {
            for (let j = 0; j < this.studentsList.length; j++) {
                if (this.studentsList[j].age.indexOf(rangeArr[i]) !== -1) {
                    res.push(this.studentsList[j]);
                }
            }
        }

        return res;
    }
}
export default Course;


