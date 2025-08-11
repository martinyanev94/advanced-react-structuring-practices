const MyLib_greet = function(name) {
  return `Hello, ${name}!`;
};

const MyLib_farewell = function(name) {
  return `Goodbye, ${name}!`;
};

console.log(MyLib_greet("Charlie")); // Outputs: Hello, Charlie!
console.log(MyLib_farewell("Diana")); // Outputs: Goodbye, Diana!
