(function () {
    const form1 = document.querySelector('.form');
    const inputs1 = form1.querySelectorAll('input');
    const resetBtn = form1.querySelector('[type="reset"]');
    const inputPassword = form1.querySelector('[name="password"]');

    resetBtn.addEventListener('click', function () {
        inputs1.forEach(elem => {
            if (elem.classList.contains('error')) {
                elem.classList.remove('error')
                elem.nextElementSibling.remove();
            }
        });
        inputPassword.nextElementSibling.style.backgroundColor = '';
    });

    //Створи регулярні вирази для перевірки:
    //1. Ім'я та прізвища (два слова розділені пробілом, тільки букви)
    //2. Дати (формат 02.10.2021)
    //3. Логіна (тільки літери і цифри, всі букви тільки в нижньому регістрі)
    //4. Пароля (символів має бути не менше 8, повинна бути мінімум одна цифра, і одна велика літера)
    //5. Email-у
    //6. Доменного імені
    form1.addEventListener('submit', function (e) {
        e.preventDefault();
        inputs1.forEach(elem => {
            if (elem.getAttribute('name') === 'name') {
                elem.addEventListener('focus', removeError);
                checkName(elem);
            }
            if (elem.getAttribute('name') === 'data') {
                elem.addEventListener('focus', removeError);
                checkData(elem);
            }
            if (elem.getAttribute('name') === 'login') {
                elem.addEventListener('focus', removeError);
                checkLogin(elem);
            }
            if (elem.getAttribute('name') === 'password') {
                elem.addEventListener('focus', removeError);
                checkPassword(elem);
            }
            if (elem.getAttribute('name') === 'email') {
                elem.addEventListener('focus', removeError);
                checkEmail(elem);
            }
            if (elem.getAttribute('name') === 'domain') {
                elem.addEventListener('focus', removeError);
                checkDomain(elem);
            }
        });
    });

    //1. Метод для перевірки Імені та Прізвища
    function checkName(elem) {
        const regExp = /\b\w+\s\w+\b/i;
        if (elem.value === '') {
            setError(elem, 'Це поле обовзякове для заповнення');
        } else if (!elem.value.match(regExp)) {
            setError(elem, "Тут повинно бути Ім'я і Прзівище");
        }

    }
    //2. Метод для перевірки дати
    function checkData(elem) {
        const regExp = /^\d{2}\.\d{2}\.\d{4}$/i;
        if (elem.value === '') return;
        if (!elem.value.match(regExp)) {
            setError(elem, "Дата повинна бути в форматі dd.mm.yyyy");
        }
    }
    //3. Метод для перевірки логіна
    function checkLogin(elem) {
        const regExp = /[A-ZА-ЯІЇЄЙ]/;
        if (elem.value === '') {
            setError(elem, 'Це поле обовзякове для заповнення');
        } else if (elem.value.match(regExp)) {
            setError(elem, "Логін не повиннен мітити великих літер");
        }
    }
    //4. Метод для перевірки пароля
    function checkPassword(elem) {
        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[&%$]).{8,}$/;
        if (elem.value === '') {
            setError(elem, 'Ви поинні обовязково вказати пароль');
        }
        if (elem.value.length < 7) {
            setError(elem, 'Пароль повинен бути не менше 8 символів');
        }
        if (elem.value.length > 7 && !elem.value.match(regExp)) {
            setError(elem, "Повинна бути мінімум одна цифра, і одна велика літера");
        }

    }
    //5. Метод для перевірки пошти
    function checkEmail(elem) {
        const regExp = /^\w+\@\w+\.\w{1,3}$/i;
        if (elem.value !== '' && !elem.value.match(regExp)) {
            setError(elem, 'Пошта повинна бути вказана як example@mail.com');
        }
    }
    //6. Метод для перевірки домену
    function checkDomain(elem) {
        const regExp = /^(http)[s]?:[/]{2}\w+\.\w+$/i;
        if (elem.value !== '' && !elem.value.match(regExp)) {
            setError(elem, 'Домен повинна бути вказана як http//:yoursite.com');
        }
    }
    //7. Додай індикатор складності пароля:
    // червоний - тільки букви,
    // рожевий - букви і цифри,
    // жовтий - букви, цифри, спецсимволи,
    // зелений - літери (мінімум одна в верхньому регістрі), цифри, спецсимволи
    inputPassword.addEventListener('input', function () {
        const redExp = /\w+/;
        const pinckExp = /(?=.*[a-z])(?=.*[0-9])/;
        const yellowExp = /(?=.*[a-z])(?=.*[0-9])(?=.*[&%$@#])/;
        const greenExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$@#])/;

        if (this.value.match(redExp)) {
            this.nextElementSibling.style.backgroundColor = 'red';
        }
        if (this.value.match(pinckExp)) {
            this.nextElementSibling.style.backgroundColor = 'pink';
        }
        if (this.value.match(yellowExp)) {
            this.nextElementSibling.style.backgroundColor = 'yellow';
        }
        if (this.value.match(greenExp)) {
            this.nextElementSibling.style.backgroundColor = 'green';
        }
    });

    function setError(elem, errorMessage) {
        if (elem.classList.contains('error')) return;
        elem.classList.add('error');
        const div = document.createElement('div');
        div.textContent = errorMessage;
        elem.after(div);
    }

    function removeError(e) {
        if (e.target.classList.contains('error')) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.remove();
        }
    }
})();
