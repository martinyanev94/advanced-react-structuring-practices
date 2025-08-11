class Vehicle {
    constructor(type) {
        this.type = type;
    }
}

class Car extends Vehicle {
    constructor() {
        super('Car');
    }
}

class Truck extends Vehicle {
    constructor() {
        super('Truck');
    }
}

class VehicleFactory {
    createVehicle(type) {
        switch (type) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            default:
                throw new Error('Invalid vehicle type');
        }
    }
}

// Usage
const factory = new VehicleFactory();
const myCar = factory.createVehicle('car');
console.log(myCar.type); // Outputs: Car
