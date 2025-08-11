// calculator.js
import { add } from './add.js';
import { subtract } from './subtract.js';

const sum = add(5, 3);
const difference = subtract(5, 3);

console.log(`Sum: ${sum}`);           // Output: Sum: 8
console.log(`Difference: ${difference}`); // Output: Difference: 2
