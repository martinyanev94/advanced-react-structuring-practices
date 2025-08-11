class Car {
    #make;
    #model;

    constructor(make, model) {
        this.#make = make;
        this.#model = model;
    }

    get make() {
        return this.#make;
    }

    set model(newModel) {
        this.#model = newModel;
    }

    getCarInfo() {
        return `This car is a ${this.#make} ${this.#model}.`;
    }
}

const myCar = new Car('Ford', 'Fusion');
console.log(myCar.make); // Output: Ford
myCar.model = 'Focus'; // Using the setter
console.log(myCar.getCarInfo()); // Output: This car is a Ford Focus.
