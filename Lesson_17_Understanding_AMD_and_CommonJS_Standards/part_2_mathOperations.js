// math.js
define([], function() {
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    return { add, subtract };
});
// app.js
require(['math'], function(math) {
    const sum = math.add(5, 3);
    const difference = math.subtract(9, 4);
    
    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
});
