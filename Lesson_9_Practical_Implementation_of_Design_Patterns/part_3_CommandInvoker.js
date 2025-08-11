class CommandInvoker {
    constructor() {
        this.commands = [];
    }

    setCommand(command) {
        this.commands.push(command);
    }

    executeCommands() {
        this.commands.forEach(command => command.execute());
        this.commands = []; // Clear commands after execution
    }
}
