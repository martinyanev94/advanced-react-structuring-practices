class LegacySystem {
    request() {
        return "Data from legacy system";
    }
}

class NewSystem {
    specificRequest() {
        return "Data from new system";
    }
}

class Adapter {
    constructor(newSystem) {
        this.newSystem = newSystem;
    }

    request() {
        return this.newSystem.specificRequest();
    }
}

// Usage
const legacySystem = new LegacySystem();
const newSystem = new NewSystem();
const adapter = new Adapter(newSystem);

console.log(legacySystem.request()); // Outputs: Data from legacy system
console.log(adapter.request()); // Outputs: Data from new system
