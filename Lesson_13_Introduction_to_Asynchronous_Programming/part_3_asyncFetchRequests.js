function makeRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => {
        console.log(data);
        return makeRequest('https://jsonplaceholder.typicode.com/posts/2');
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
