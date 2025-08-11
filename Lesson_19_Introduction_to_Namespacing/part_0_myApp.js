const MyApp = (() => {
  function doSomething() {
    console.log("Doing something!");
  }

  return {
    doSomething,
  };
})();
MyApp.doSomething(); // Outputs: Doing something!
