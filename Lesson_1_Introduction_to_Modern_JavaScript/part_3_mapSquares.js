const numbers = [1, 2, 3, 4];

// Regular function
const squares = numbers.map(function(num) {
    return num * num;
});

// Arrow function
const squaresArrow = numbers.map(num => num * num);

console.log(squares); // [1, 4, 9, 16]
console.log(squaresArrow); // [1, 4, 9, 16]
