function fetchDataWithTimeout(apiUrl, timeoutDuration) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject("Request timed out."), timeoutDuration);
        fetchDataFromAPI(apiUrl).then(result => {
            clearTimeout(timeout);
            resolve(result);
        });
    });
}

const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject("Timeout!"), 2000)
);

Promise.race([fetchDataWithTimeout("https://api.example.com/data", 3000), timeoutPromise])
    .then(result => console.log(result))
    .catch(error => console.error("Error:", error));
