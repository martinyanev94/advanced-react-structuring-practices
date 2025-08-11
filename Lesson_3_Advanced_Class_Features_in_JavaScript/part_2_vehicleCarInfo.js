class Vehicle {
    #licensePlate;

    constructor(licensePlate) {
        this.#licensePlate = licensePlate;
    }

    getLicensePlate() {
        return this.#licensePlate;
    }
}

class Car extends Vehicle {
    #make;
    #model;

    constructor(make, model, licensePlate) {
        super(licensePlate);
        this.#make = make;
        this.#model = model;
    }

    getCarInfo() {
        return `${super.getLicensePlate()} - This car is a ${this.#make} ${this.#model}.`;
    }
}

const myCar = new Car('Honda', 'Civic', 'ABC-5678');
console.log(myCar.getCarInfo()); // Output: ABC-5678 - This car is a Honda Civic.
