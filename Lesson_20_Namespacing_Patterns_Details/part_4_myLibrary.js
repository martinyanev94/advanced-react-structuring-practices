const MyLibrary = (function() {
  const privateVariable = "I'm private!";

  const privateMethod = function() {
    console.log(privateVariable);
  };

  return {
    publicGreet(name) {
      return `Hello, ${name}!`;
    },
    callPrivateMethod() {
      privateMethod();
    }
  };
})();

console.log(MyLibrary.publicGreet("Gina")); // Outputs: Hello, Gina!
MyLibrary.callPrivateMethod(); // Outputs: I'm private!
