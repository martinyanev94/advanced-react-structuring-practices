class Handler {
    constructor(successor) {
        this.successor = successor;
    }

    handleRequest(request) {
        if (this.successor) {
            this.successor.handleRequest(request);
        }
    }
}

class ConcreteHandlerA extends Handler {
    handleRequest(request) {
        if (request === 'A') {
            console.log('Handler A processed request A');
        } else {
            super.handleRequest(request);
        }
    }
}

class ConcreteHandlerB extends Handler {
    handleRequest(request) {
        if (request === 'B') {
            console.log('Handler B processed request B');
        } else {
            super.handleRequest(request);
        }
    }
}

// Usage:
const handlerB = new ConcreteHandlerB(null);
const handlerA = new ConcreteHandlerA(handlerB);

handlerA.handleRequest('A'); // Outputs: Handler A processed request A
handlerA.handleRequest('B'); // Outputs: Handler B processed request B
