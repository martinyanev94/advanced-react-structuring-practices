const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure

    if (success) {
        resolve("Promise fulfilled!");
    } else {
        reject("Promise rejected.");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
