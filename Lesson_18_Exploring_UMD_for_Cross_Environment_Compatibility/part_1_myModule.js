(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node.js
        module.exports = factory();
    } else {
        // Browser globals
        root.myModule = factory();
    }
}(this, function() {
    // Module code goes here
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    return {
        add,
        subtract
    };
}));
