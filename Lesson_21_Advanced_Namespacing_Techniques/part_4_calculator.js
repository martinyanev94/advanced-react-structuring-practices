// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

export default multiply;
// main.js
import multiply, { add, subtract } from './utils.js';

console.log(add(2, 3)); // Outputs: 5
console.log(subtract(5, 2)); // Outputs: 3
console.log(multiply(3, 4)); // Outputs: 12
