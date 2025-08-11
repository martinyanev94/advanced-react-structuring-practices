// rectangle.js
function validateDimensions(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error("Length and width must be positive numbers.");
    }
}

export function calculateArea(length, width) {
    validateDimensions(length, width);
    return length * width;
}

export function calculatePerimeter(length, width) {
    validateDimensions(length, width);
    return 2 * (length + width);
}
