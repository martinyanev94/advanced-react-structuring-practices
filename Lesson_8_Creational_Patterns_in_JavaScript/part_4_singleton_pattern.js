class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
    
    getInstance() {
        return this;
    }

    sayHello() {
        console.log("Hello, I am a Singleton!");
    }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Outputs: true

instance1.sayHello(); // Outputs: Hello, I am a Singleton!
