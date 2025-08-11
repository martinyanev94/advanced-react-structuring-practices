class Car {
    constructor(id, model) {
        this.id = id;
        this.model = model;
    }
}

class CarManager {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
        console.log(`Car added: ${car.model}`);
    }

    removeCar(id) {
        this.cars = this.cars.filter(car => car.id !== id);
        console.log(`Car with ID ${id} removed.`);
    }

    updateCar(id, model) {
        const car = this.cars.find(car => car.id === id);
        if (car) {
            car.model = model;
            console.log(`Car with ID ${id} updated to model: ${model}`);
        } else {
            console.log(`Car with ID ${id} not found.`);
        }
    }
}
