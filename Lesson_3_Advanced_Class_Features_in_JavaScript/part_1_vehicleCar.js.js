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
        super(licensePlate); // Call the constructor of the parent class
        this.#make = make;
        this.#model = model;
    }

    getCarInfo() {
        return `This car is a ${this.#make} ${this.#model}, with license plate: ${this.getLicensePlate()}.`;
    }
}

const myCar = new Car('Toyota', 'Corolla', 'XYZ-1234');
console.log(myCar.getCarInfo()); // Output: This car is a Toyota Corolla, with license plate: XYZ-1234.
