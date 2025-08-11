function synchronousFunction() {
    console.log("Start");
    // Simulate a long-running task
    for (let i = 0; i < 1e9; i++) {}
    console.log("End");
}

synchronousFunction();
function asynchronousFunction() {
    console.log("Start");
    // Simulate a fetch call
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    console.log("End");
}

asynchronousFunction();
