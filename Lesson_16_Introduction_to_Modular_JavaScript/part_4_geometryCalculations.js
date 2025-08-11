// utils.js
export const PI = Math.PI;

export function validatePositiveNumber(value) {
    if (value <= 0) {
        throw new Error("Value must be a positive number.");
    }
}
// rectangle.js (updated)
import { validatePositiveNumber } from './utils.js';

function validateDimensions(length, width) {
    validatePositiveNumber(length);
    validatePositiveNumber(width);
}

export function calculateArea(length, width) {
    validateDimensions(length, width);
    return length * width;
}

export function calculatePerimeter(length, width) {
    validateDimensions(length, width);
    return 2 * (length + width);
}
