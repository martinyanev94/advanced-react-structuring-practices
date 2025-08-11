// multiply.js
export function multiply(a, b) {
    return a * b;
}
// multiplyFromAnotherSource.js
export function multiply(a, b) {
    return a * b + 1; // Just a variation
}
// calculator.js
import { multiply as multiplyBasic } from './multiply.js';
import { multiply as multiplyWithOffset } from './multiplyFromAnotherSource.js';

const product1 = multiplyBasic(4, 3); // Output: 12
const product2 = multiplyWithOffset(4, 3); // Output: 13

console.log(`Basic Product: ${product1}`); // Basic Product: 12
console.log(`Offset Product: ${product2}`); // Offset Product: 13
