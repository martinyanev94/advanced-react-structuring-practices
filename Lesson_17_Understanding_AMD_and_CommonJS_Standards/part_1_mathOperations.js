// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
// app.js
const math = require('./math');

const sum = math.add(5, 3);
const difference = math.subtract(9, 4);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
