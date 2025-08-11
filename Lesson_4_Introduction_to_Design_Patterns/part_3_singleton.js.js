class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = [];
    }

    addData(item) {
        this.data.push(item);
    }

    getData() {
        return this.data;
    }
}

// Usage
const singleton1 = new Singleton();
singleton1.addData('Item 1');

const singleton2 = new Singleton();
singleton2.addData('Item 2');

console.log(singleton1.getData()); // Outputs: ['Item 1', 'Item 2']
console.log(singleton2.getData()); // Outputs: ['Item 1', 'Item 2']
console.log(singleton1 === singleton2); // Outputs: true
