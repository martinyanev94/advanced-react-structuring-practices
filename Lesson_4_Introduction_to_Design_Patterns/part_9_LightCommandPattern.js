class Command {
    execute() {
        throw new Error("This method should be overridden!");
    }
}

class Light {
    on() {
        console.log("Light is ON");
    }

    off() {
        console.log("Light is OFF");
    }
}

class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.on();
    }
}

class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.off();
    }
}

// Usage
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

lightOn.execute(); // Outputs: Light is ON
lightOff.execute(); // Outputs: Light is OFF
