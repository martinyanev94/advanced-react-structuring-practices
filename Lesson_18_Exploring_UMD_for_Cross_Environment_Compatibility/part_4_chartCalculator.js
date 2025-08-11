(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['mathUtils'], factory);
    } else if (typeof exports === 'object') {
        const mathUtils = require('./mathUtils');
        module.exports = factory(mathUtils);
    } else {
        root.chart = factory(root.mathUtils);
    }
}(this, function(mathUtils) {
    function calculateAverage(numbers) {
        const sum = numbers.reduce((total, current) => mathUtils.add(total, current), 0);
        return mathUtils.divide(sum, numbers.length);
    }

    return {
        calculateAverage
    };
}));
