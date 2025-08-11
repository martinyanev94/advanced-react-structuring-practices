const MyLibrary = MyLibrary || {};
MyLibrary.utils = {};

(function() {
  const secretValue = 42;

  this.getSecretValue = function() {
    return secretValue;
  };
}).apply(MyLibrary.utils);

console.log(MyLibrary.utils.getSecretValue()); // Outputs: 42
