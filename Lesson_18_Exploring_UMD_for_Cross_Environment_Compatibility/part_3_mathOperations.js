const mathUtils = require('./mathUtils');

const sum = mathUtils.add(10, 5);
console.log(`Sum: ${sum}`); // Output: Sum: 15

const product = mathUtils.multiply(2, 3);
console.log(`Product: ${product}`); // Output: Product: 6
<script data-main="path/to/main.js" src="path/to/require.js"></script>
require(['mathUtils'], function(mathUtils) {
    const diff = mathUtils.subtract(10, 3);
    console.log(`Difference: ${diff}`); // Output: Difference: 7
});
