// circle.js
const PI = Math.PI;

export function calculateArea(radius) {
    return PI * radius * radius;
}

export function calculateCircumference(radius) {
    return 2 * PI * radius;
}
// app.js
import { calculateArea as rectangleArea, calculatePerimeter } from './rectangle.js';
import { calculateArea as circleArea, calculateCircumference } from './circle.js';

const rectLength = 5;
const rectWidth = 3;
console.log(`Rectangle Area: ${rectangleArea(rectLength, rectWidth)}`);
console.log(`Rectangle Perimeter: ${calculatePerimeter(rectLength, rectWidth)}`);

const circleRadius = 4;
console.log(`Circle Area: ${circleArea(circleRadius)}`);
console.log(`Circle Circumference: ${calculateCircumference(circleRadius)}`);
