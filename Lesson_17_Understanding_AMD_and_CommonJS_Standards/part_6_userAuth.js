// login.js
const auth = require('./auth');

function login(username, password) {
    const isLoggedIn = auth.authenticate(username, password);
    if (isLoggedIn) {
        console.log("Welcome, " + username);
    } else {
        console.log("Invalid credentials");
    }
}

module.exports = login;
// auth.js
function authenticate(username, password) {
    // Pretend we are checking against saved credentials
    return username === 'user' && password === 'pass';
}

module.exports = { authenticate };
// login.js
define(['auth'], function(auth) {
    function login(username, password) {
        const isLoggedIn = auth.authenticate(username, password);
        if (isLoggedIn) {
            console.log("Welcome, " + username);
        } else {
            console.log("Invalid credentials");
        }
    }
    return login;
});
// auth.js
define([], function() {
    function authenticate(username, password) {
        // Pretend we are checking against saved credentials
        return username === 'user' && password === 'pass';
    }
    return { authenticate };
});
