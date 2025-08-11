const MyApp = MyApp || {};
MyApp.utils = {};

(function() {
  const value = 5;

  this.getValue = () => value;
  this.setValue = newVal => {
    value = newVal;
  };
}).apply(MyApp.utils);
