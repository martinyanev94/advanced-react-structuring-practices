// user.js
const session = require('./session');

function getUser(id) {
    if (session.isAuthenticated()) {
        // Logic to get the user
    }
}
// user.js
define(['session'], function(session) {
    function getUser(id) {
        if (session.isAuthenticated()) {
            // Logic to get the user
        }
    }
});
