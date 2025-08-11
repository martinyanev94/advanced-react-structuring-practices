class Button {
    render() {
        throw new Error("You must implement the render method.");
    }
}

class WindowsButton extends Button {
    render() {
        console.log("Rendering a Windows button.");
    }
}

class MacButton extends Button {
    render() {
        console.log("Rendering a Mac button.");
    }
}

class ButtonFactory {
    static createButton(type) {
        switch (type) {
            case 'Windows':
                return new WindowsButton();
            case 'Mac':
                return new MacButton();
            default:
                throw new Error("Button type not supported");
        }
    }
}

// Usage
const myButton = ButtonFactory.createButton('Windows');
myButton.render(); // Outputs: Rendering a Windows button.
