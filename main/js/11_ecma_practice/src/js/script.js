(function () {
    const toDoList = [];
    let countId = 1;

    function addTask(toDoList, tasck) {
        if (!tasck) return;

        toDoList.push(tasck);
    }

    function removeTask(toDoList, taskId) {

    }

    function findTaskIndex(toDoList, taskId) {

    }

    function findTask(toDoList, taskId) {

    }

    function getExpiredTaskList(toDoList) {

    }

    function changeTask(toDoList, newTask, taskId) {

    }

    function updateDeadline(task, newDate) {

    }

    function getAllTaskInfo(toDoList) {
        let taskInfoText = '';

        toDoList.forEach(function (item, index) {
            let endLine = '\n';

            if (toDoList.length - 1 === index) endLine = '';

            taskInfoText = taskInfoText + item.getInfoTasck() + endLine;
        });

        return taskInfoText;
    }

    function createTask() {
        const task = {
            title: getData('Add title.'),
            description: getData('Add description.'),
            status: false,
            isDeadline: true,
            id: countId++,
            getInfoTasck,
            changeStatus,
            changeDeadlineStatus
        };

        const deadline = getData(
            'Add deadline (example: dd.mm.yyyy, hh:mm:ss)',
            '28.12.2021, 18:15:25'
        );

        if (!validateDate(deadline)) return;

        task.deadline = deadline;

        return task;
    }

    function validateDate(deadline) {

        const separator = ',';
        const separatorList = ['.', ':'];

        const dateList = deadline
            .split(separator)
            .map(function (item, index) {
                return item.trim().split(separatorList[index]);
            });

        //if (!isDate(dateList[0])) return false;

        //if (!isTime(dateList[1])) return false;

        return isDate(dateList[0]) && isTime(dateList[1]);
    }

    function isDate(date) {
        const nowDate = new Date();

        return (
            date[0] >= nowDate.getDate() &&
            date[1] >= nowDate.getMonth() + 1 &&
            date[2] >= nowDate.getFullYear()
        );
    }

    function isTime(time) {
        const h = time[0] < 24 && time[0] >= 0;
        const m = time[1] < 60 && time[1] >= 0;
        const s = time[2] < 60 && time[2] >= 0;

        return h && s && m;
    }

    function getData(request, text = '') {
        let data;

        do {
            data = prompt(request, text);
        } while (!data);

        return data;
    }

    function changeDeadlineStatus() {

    }

    function changeStatus() {
        this.status = !this.status;

        return this.status;
    }

    function getInfoTasck() {
        const status = this.status ? 'complite' : 'not complited';
        const deadline = this.deadline ? 'not expired' : 'expired';

        return `Task ID: ${this.id};
        Title task: ${this.title};
        Description task: ${this.description};
        Status task: ${status};
        Deadline: ${deadline};`;
    }


    // function getTitle() {
    //     return prompt('Add title.', '');
    // }

    // function getDescription() {
    //     return prompt('Add description.', '');
    // }

    // function getDeadline() {
    //     return prompt(
    //         'Add deadline (example: dd.mm.yyyy, hh:mm:ss)',
    //         'dd.mm.yyyy, hh:mm:ss'
    //     );
    // }

    const d = {
        title: 'Name',
        description: 'Lorem dfgdf ghdfg hjdj',
        id: 1,
        deadline: '28-12-2021, 18:00:15',
        status: false,
        isDeadline: true,
        changeDeadlineStatus() { },
        changeStatus() { },
        getInfoTasck() { },
    }

    addTask(toDoList, createTask());
    addTask(toDoList, createTask());

    console.log(getAllTaskInfo(toDoList));
})();
