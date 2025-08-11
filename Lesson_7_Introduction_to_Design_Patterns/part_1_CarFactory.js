class Car {
    constructor(make) {
        this.make = make;
    }

    display() {
        return `Car make: ${this.make}`;
    }
}

class CarFactory {
    static createCar(make) {
        return new Car(make);
    }
}

// Usage:
const myCar = CarFactory.createCar('Toyota');
console.log(myCar.display()); // Outputs: Car make: Toyota
