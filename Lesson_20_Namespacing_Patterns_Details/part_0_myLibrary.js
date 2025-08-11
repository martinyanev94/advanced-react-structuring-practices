const MyLibrary = {
  greet: function(name) {
    return `Hello, ${name}!`;
  },
  farewell: function(name) {
    return `Goodbye, ${name}!`;
  }
};

console.log(MyLibrary.greet("Alice")); // Outputs: Hello, Alice!
console.log(MyLibrary.farewell("Bob")); // Outputs: Goodbye, Bob!
