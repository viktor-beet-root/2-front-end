function myAjax(method, url, callback, data) {
    const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.open(method, url);
    if (method.toLowerCase() === 'get') {
        xhr.send()
    } else {
        xhr.setRequestHeader('Content-type', 'application/json');
        data = parseData(data);
        xhr.send(data);
    }
    function parseData(data) {
        if (typeof data === "object") {
            data = JSON.stringify(data)
        }
        return data;
    }
    xhr.responseType = 'json';

    xhr.onload = () => {
        if (xhr.status < 400) {
            if (typeof callback === "function") {
                callback(xhr.response)
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
            console.log(`Отримано ${e.loaded}  ${e.total}`);
        } else {
            console.log(`Отримано ${e.loaded}`);
        }
    }

}
export default myAjax;
