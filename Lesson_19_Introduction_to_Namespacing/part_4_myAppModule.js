const MyApp = (() => {
  const privateVariable = "I am private";

  const privateMethod = () => {
    console.log(privateVariable);
  };

  return {
    publicMethod: () => {
      privateMethod();
    },
  };
})();
MyApp.publicMethod(); // Outputs: I am private
