const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
const person = {
    name: 'Bob',
    age: 25,
};

// Destructuring
const { name, age } = person;
console.log(name); // Bob
console.log(age); // 25
