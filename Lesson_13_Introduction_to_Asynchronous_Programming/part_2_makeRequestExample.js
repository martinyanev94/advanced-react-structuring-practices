function makeRequest(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error));
}

makeRequest('https://jsonplaceholder.typicode.com/posts/1', (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});
