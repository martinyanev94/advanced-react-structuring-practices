const UserModule = (function() {
  let privateData = { username: "Bob", password: "supersecret" };

  const getData = function() {
    return privateData;
  };

  const getUsername = function() {
    return getData().username;
  };

  const isAuthenticated = function() {
    return !!getData().username;
  };

  return {
    getUsername,
    isAuthenticated
  };
})();

console.log(UserModule.getUsername()); // Outputs: Bob
console.log(UserModule.isAuthenticated()); // Outputs: true
