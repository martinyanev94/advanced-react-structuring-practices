function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Data not found.");
        }, 1000);
    });
}

fetchData()
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error))
    .finally(() => console.log("Fetch attempt completed."));
