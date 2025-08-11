class Computer {
    constructor(cpu, ram, storage) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
    }

    specs() {
        console.log(`CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}`);
    }
}

class ComputerBuilder {
    constructor() {
        this.cpu = '';
        this.ram = '';
        this.storage = '';
    }

    setCPU(cpu) {
        this.cpu = cpu;
        return this; // allow for method chaining
    }

    setRAM(ram) {
        this.ram = ram;
        return this;
    }

    setStorage(storage) {
        this.storage = storage;
        return this;
    }

    build() {
        return new Computer(this.cpu, this.ram, this.storage);
    }
}

// Usage
const myComputer = new ComputerBuilder()
    .setCPU('Intel Core i7')
    .setRAM('16GB')
    .setStorage('512GB SSD')
    .build();

myComputer.specs(); // Outputs: CPU: Intel Core i7, RAM: 16GB, Storage: 512GB SSD
