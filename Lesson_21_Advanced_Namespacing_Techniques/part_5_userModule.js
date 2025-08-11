// user.js
define([], function() {
  const privateData = { username: "Diana", password: "extrasecret" };

  return {
    getUsername: function() {
      return privateData.username;
    }
  };
});
// main.js
require(['user'], function(user) {
  console.log(user.getUsername()); // Outputs: Diana
});
