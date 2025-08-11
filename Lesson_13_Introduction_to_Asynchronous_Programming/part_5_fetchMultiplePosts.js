async function fetchMultiplePosts() {
    try {
        const [post1, post2] = await Promise.all([
            makeRequest('https://jsonplaceholder.typicode.com/posts/1'),
            makeRequest('https://jsonplaceholder.typicode.com/posts/2')
        ]);
        console.log(post1);
        console.log(post2);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchMultiplePosts();
