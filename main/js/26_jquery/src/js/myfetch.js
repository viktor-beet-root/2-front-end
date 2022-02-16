function myfetch(url, options) {
    return fetch(url, options).then(response => {
        if (response.ok) {
            return response.json();
        }
    });
}

export default myfetch;
