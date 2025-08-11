(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mathUtils = factory();
    }
}(this, function() {
    function add(a, b) {
        return a + b;
    }
    
    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }
    
    function divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    };
}));
