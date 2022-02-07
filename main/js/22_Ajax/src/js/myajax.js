function myajax(method, url, callback, data) {
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    // xhr.onreadystatechange = () => {
    //     // UNSENT = 0; исходное состояние
    //     // OPENED = 1; вызван метод open
    //     // HEADERS_RECEIVED = 2; получены заголовки ответа
    //     // LOADING = 3; ответ в процессе передачи (данные частично получены)
    //     // DONE = 4; запрос завершён

    //     if (xhr.readyState === 4 && xhr.status < 400) {
    //         console.log(xhr.response);
    //     } else if (xhr.readyState === 4 && xhr.status >= 400) {
    //         console.error(xhr.response, xhr.status)
    //     }
    // }

    xhr.onload = () => {
        if (xhr.status < 400) {
            if (typeof callback === 'function') {
                callback(xhr.response);
            }
        } else {
            console.error('error');
        }
    }

    xhr.onerror = (e) => {
        console.error(e)
    }

    xhr.onprogress = (e) => {
        if (e.lengthComputable) {
            console.log(`Получено ${e.loaded} из ${e.total}`)
        } else {
            console.log(`Получено ${e.loaded}`)
        }
    }


    xhr.open(method, url);

    if (method.toLowerCase() === 'get') {
        xhr.send()
    } else {
        xhr.setRequestHeader('Content-type', 'application/json');
        data = parseData(data);
        xhr.send(data);
    }
}

function parseData(data) {
    if (typeof data === 'object') {
        data = JSON.stringify(data)
    }

    return data;
}

export default myajax;
