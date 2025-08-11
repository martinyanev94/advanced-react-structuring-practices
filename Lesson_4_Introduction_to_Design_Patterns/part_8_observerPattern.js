class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notify(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`Observer ${this.name} received: ${message}`);
    }
}

// Usage
const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.attach(observer1);
subject.attach(observer2);

subject.notify('Hello Observers!'); // Outputs: Observer 1 received: Hello Observers! (and Observer 2)
