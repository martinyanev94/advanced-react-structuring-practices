class Shape {
    constructor(drawAPI) {
        this.drawAPI = drawAPI;
    }

    draw() {
        this.drawAPI.drawShape();
    }
}

class Circle extends Shape {
    constructor(radius, drawAPI) {
        super(drawAPI);
        this.radius = radius;
    }

    draw() {
        console.log(`Circle with radius ${this.radius}:`);
        super.draw();
    }
}

class DrawAPI {
    drawShape() {
        console.log("Drawing Shape");
    }
}

// Usage
const drawAPI = new DrawAPI();
const circle = new Circle(5, drawAPI);
circle.draw();
