// sphere.js
import { PI, validatePositiveNumber } from './utils.js';

export function calculateVolume(radius) {
    validatePositiveNumber(radius);
    return (4 / 3) * PI * Math.pow(radius, 3);
}
