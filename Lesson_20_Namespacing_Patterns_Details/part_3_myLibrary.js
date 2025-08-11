const MyLibrary = {
  utilities: {
    math: {
      add: function(a, b) {
        return a + b;
      },
      subtract: function(a, b) {
        return a - b;
      }
    },
    string: {
      toUpperCase: function(str) {
        return str.toUpperCase();
      },
      toLowerCase: function(str) {
        return str.toLowerCase();
      }
    }
  }
};

console.log(MyLibrary.utilities.math.add(2, 3)); // Outputs: 5
console.log(MyLibrary.utilities.string.toUpperCase("hello")); // Outputs: HELLO
