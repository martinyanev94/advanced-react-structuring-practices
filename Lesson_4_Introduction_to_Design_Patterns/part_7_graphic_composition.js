class Graphic {
    draw() {
        throw new Error("This method should be overridden!");
    }
}

class Circle extends Graphic {
    draw() {
        console.log("Drawing Circle");
    }
}

class CompositeGraphic extends Graphic {
    constructor() {
        super();
        this.graphics = [];
    }

    add(graphic) {
        this.graphics.push(graphic);
    }

    draw() {
        this.graphics.forEach(graphic => graphic.draw());
    }
}

// Usage
const circle1 = new Circle();
const circle2 = new Circle();

const compositeGraphic = new CompositeGraphic();
compositeGraphic.add(circle1);
compositeGraphic.add(circle2);

compositeGraphic.draw(); // Outputs: Drawing Circle (twice)
