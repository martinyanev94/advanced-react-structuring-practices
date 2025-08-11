class Prototype {
    constructor(name) {
        this.name = name;
    }

    clone() {
        return new Prototype(this.name);
    }
}

// Usage
const original = new Prototype("Original");
const clone = original.clone();

console.log(clone.name); // Outputs: Original
console.log(original === clone); // Outputs: false (different instances)
