class Command {
    execute() {}
}

class AddCarCommand extends Command {
    constructor(carManager, car) {
        super();
        this.carManager = carManager;
        this.car = car;
    }

    execute() {
        this.carManager.addCar(this.car);
    }
}

class RemoveCarCommand extends Command {
    constructor(carManager, id) {
        super();
        this.carManager = carManager;
        this.id = id;
    }

    execute() {
        this.carManager.removeCar(this.id);
    }
}

class UpdateCarCommand extends Command {
    constructor(carManager, id, model) {
        super();
        this.carManager = carManager;
        this.id = id;
        this.model = model;
    }

    execute() {
        this.carManager.updateCar(this.id, this.model);
    }
}
