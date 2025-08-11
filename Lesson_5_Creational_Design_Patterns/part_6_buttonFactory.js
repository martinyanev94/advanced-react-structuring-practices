class WindowsButton {
    render() {
        return "Rendering Windows Button";
    }
}

class MacButton {
    render() {
        return "Rendering macOS Button";
    }
}

class ButtonFactory {
    createButton(os) {
        if (os === 'windows') {
            return new WindowsButton();
        } else if (os === 'mac') {
            return new MacButton();
        }
        throw new Error("Unsupported OS");
    }
}

// Usage
const factory = new ButtonFactory();
const button = factory.createButton('mac');
console.log(button.render()); // Outputs: Rendering macOS Button
