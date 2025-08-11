const UserModule = (function() {
  let privateData = { username: "Alice", password: "secret" };
  
  const getData = function() {
    return privateData;
  };

  return {
    getUsername: function() {
      return getData().username;
    },
    isAuthenticated: function() {
      return !!getData().username;
    }
  };
})();

console.log(UserModule.getUsername()); // Outputs: Alice
console.log(UserModule.isAuthenticated()); // Outputs: true
