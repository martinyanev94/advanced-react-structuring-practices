class Button {
    render() {}
}

class Checkbox {
    render() {}
}

class WindowsButton extends Button {
    render() {
        console.log("Rendering a Windows button.");
    }
}

class WindowsCheckbox extends Checkbox {
    render() {
        console.log("Rendering a Windows checkbox.");
    }
}

class MacButton extends Button {
    render() {
        console.log("Rendering a Mac button.");
    }
}

class MacCheckbox extends Checkbox {
    render() {
        console.log("Rendering a Mac checkbox.");
    }
}

class GUIFactory {
    static createUI(type) {
        switch (type) {
            case 'Windows':
                return {
                    button: new WindowsButton(),
                    checkbox: new WindowsCheckbox(),
                };
            case 'Mac':
                return {
                    button: new MacButton(),
                    checkbox: new MacCheckbox(),
                };
            default:
                throw new Error("Unsupported UI type");
        }
    }
}

// Usage
const macUI = GUIFactory.createUI('Mac');
macUI.button.render(); // Outputs: Rendering a Mac button.
macUI.checkbox.render(); // Outputs: Rendering a Mac checkbox.
