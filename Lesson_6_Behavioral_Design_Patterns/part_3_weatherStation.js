class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = 0;
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    setTemperature(temp) {
        this.temperature = temp;
        this.notifyObservers();
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

class TemperatureDisplay {
    update(temperature) {
        console.log(`Temperature Display: Current temperature is ${temperature}°C`);
    }
}

class AlertSystem {
    update(temperature) {
        if (temperature > 30) {
            console.log("Alert: Temperature exceeds threshold!");
        }
    }
}

// Usage
const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay();
const alertSystem = new AlertSystem();

weatherStation.addObserver(tempDisplay);
weatherStation.addObserver(alertSystem);

weatherStation.setTemperature(25); // Outputs: Temperature Display: Current temperature is 25°C
weatherStation.setTemperature(35); // Outputs: Temperature Display: Current temperature is 35°C
                                       // Alert: Temperature exceeds threshold!
