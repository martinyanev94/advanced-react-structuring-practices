async function fetchPosts() {
    try {
        const post1 = await makeRequest('https://jsonplaceholder.typicode.com/posts/1');
        console.log(post1);
        const post2 = await makeRequest('https://jsonplaceholder.typicode.com/posts/2');
        console.log(post2);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchPosts();
