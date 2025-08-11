class SupportHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class Receptionist extends SupportHandler {
    handle(request) {
        if (request.level === 1) {
            return `Receptionist handles request: ${request.message}`;
        }
        return super.handle(request);
    }
}

class Technician extends SupportHandler {
    handle(request) {
        if (request.level === 2) {
            return `Technician handles request: ${request.message}`;
        }
        return super.handle(request);
    }
}

class Manager extends SupportHandler {
    handle(request) {
        if (request.level === 3) {
            return `Manager handles request: ${request.message}`;
        }
        return super.handle(request);
    }
}

// Usage
const receptionist = new Receptionist();
const technician = new Technician();
const manager = new Manager();

receptionist.setNext(technician).setNext(manager);

const request1 = { level: 1, message: "Simple inquiry" };
const request2 = { level: 2, message: "Technical issue" };
const request3 = { level: 3, message: "Management request" };

console.log(receptionist.handle(request1)); // Receptionist handles request: Simple inquiry
console.log(receptionist.handle(request2)); // Technician handles request: Technical issue
console.log(receptionist.handle(request3)); // Manager handles request: Management request
