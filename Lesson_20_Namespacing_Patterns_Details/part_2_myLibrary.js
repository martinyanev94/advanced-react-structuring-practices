const MyLibrary = {
  greet: function(name) {
    return `Hello, ${name}!`;
  },
  farewell: function(name) {
    return `Goodbye, ${name}!`;
  }
};

console.log(MyLibrary.greet("Eve")); // Outputs: Hello, Eve!
console.log(MyLibrary.farewell("Frank")); // Outputs: Goodbye, Frank!
