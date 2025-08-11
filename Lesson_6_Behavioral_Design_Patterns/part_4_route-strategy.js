class RouteStrategy {
    calculateRoute(start, end) {
        throw new Error("This method should be overridden!");
    }
}

class WalkingStrategy extends RouteStrategy {
    calculateRoute(start, end) {
        return `Walking route from ${start} to ${end}`;
    }
}

class DrivingStrategy extends RouteStrategy {
    calculateRoute(start, end) {
        return `Driving route from ${start} to ${end}`;
    }
}

class BikingStrategy extends RouteStrategy {
    calculateRoute(start, end) {
        return `Biking route from ${start} to ${end}`;
    }
}

class Navigator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    navigate(start, end) {
        return this.strategy.calculateRoute(start, end);
    }
}

// Usage
const navigator = new Navigator();

navigator.setStrategy(new WalkingStrategy());
console.log(navigator.navigate("Home", "Park")); // Walking route from Home to Park

navigator.setStrategy(new DrivingStrategy());
console.log(navigator.navigate("Home", "Office")); // Driving route from Home to Office

navigator.setStrategy(new BikingStrategy());
console.log(navigator.navigate("Home", "Gym")); // Biking route from Home to Gym
