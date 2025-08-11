function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userId: userId, username: "John Doe" });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
        }, 1000);
    });
}

fetchUser(1)
    .then(user => {
        console.log("User:", user);
        return fetchPosts(user.userId);
    })
    .then(posts => console.log("Posts:", posts))
    .catch(error => console.error("Error:", error));
