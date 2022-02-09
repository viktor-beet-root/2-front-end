function myajax(method, url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status < 400) {
                resolve(xhr.response);
            } else {
                reject(xhr);
            }
        }

        xhr.onerror = (e) => {
            reject(xhr, e);
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
    });
}

function parseData(data) {
    if (typeof data === 'object') {
        data = JSON.stringify(data)
    }

    return data;
}

export default myajax;
