class Car {
    constructor() {
        this.brand = '';
        this.engine = '';
        this.wheels = 0;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setBrand(brand) {
        this.car.brand = brand;
        return this;
    }

    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    setWheels(wheels) {
        this.car.wheels = wheels;
        return this;
    }

    build() {
        return this.car;
    }
}

// Usage
const builder = new CarBuilder();
const myCar = builder.setBrand("Toyota").setEngine("V8").setWheels(4).build();
console.log(myCar); // Outputs: Car { brand: 'Toyota', engine: 'V8', wheels: 4 }
