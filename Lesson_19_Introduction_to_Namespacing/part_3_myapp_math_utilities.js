const MyApp = MyApp || {};

MyApp.utilities = MyApp.utilities || {};
MyApp.utilities.math = MyApp.utilities.math || {};

MyApp.utilities.math.add = function(a, b) {
  return a + b;
};

console.log(MyApp.utilities.math.add(5, 3)); // Outputs: 8
