class Vehicle {
    drive() {
        throw new Error("This method should be overridden!");
    }
}

class Car extends Vehicle {
    drive() {
        return "Driving a car!";
    }
}

class Truck extends Vehicle {
    drive() {
        return "Driving a truck!";
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
                throw new Error("Invalid vehicle type");
        }
    }
}

// Usage
const factory = new VehicleFactory();
const myCar = factory.createVehicle('car');
console.log(myCar.drive()); // Outputs: Driving a car!

const myTruck = factory.createVehicle('truck');
console.log(myTruck.drive()); // Outputs: Driving a truck!
