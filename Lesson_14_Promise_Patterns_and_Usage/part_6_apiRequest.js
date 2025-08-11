function apiRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(`Fetch error: ${error}`));
    });
}

apiRequest("https://jsonplaceholder.typicode.com/posts")
    .then(data => console.log(data))
    .catch(error => console.error(error));
