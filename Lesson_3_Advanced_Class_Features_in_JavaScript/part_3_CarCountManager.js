class Car {
    static #carCount = 0;

    constructor(make, model) {
        this.make = make;
        this.model = model;
        Car.#carCount++; // Increment carCount every time a new car is created
    }

    static getCarCount() {
        return Car.#carCount;
    }

    getCarInfo() {
        return `This car is a ${this.make} ${this.model}.`;
    }
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Honda', 'Civic');
console.log(Car.getCarCount()); // Output: 2
