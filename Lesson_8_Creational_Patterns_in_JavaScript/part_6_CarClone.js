class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    clone() {
        return new Car(this.make, this.model, this.year);
    }
}

// Usage
const originalCar = new Car('Toyota', 'Corolla', 2020);
const clonedCar = originalCar.clone();

console.log(clonedCar); // Outputs: Car { make: 'Toyota', model: 'Corolla', year: 2020 }
