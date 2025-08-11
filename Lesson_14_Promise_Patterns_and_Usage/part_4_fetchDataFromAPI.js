function fetchDataFromAPI(apiUrl) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${apiUrl}`);
        }, Math.random() * 1000); // Simulate varying response times
    });
}

const urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3"
];

Promise.all(urls.map(fetchDataFromAPI))
    .then(results => console.log("All results:", results))
    .catch(error => console.error("An error occurred:", error));
