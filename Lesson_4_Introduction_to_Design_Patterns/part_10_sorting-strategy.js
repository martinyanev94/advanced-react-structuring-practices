class SortStrategy {
    sort(data) {
        throw new Error("This method should be overridden!");
    }
}

class BubbleSort extends SortStrategy {
    sort(data) {
        console.log("Sorting using Bubble Sort");
        // Sorting logic here
    }
}

class QuickSort extends SortStrategy {
    sort(data) {
        console.log("Sorting using Quick Sort");
        // Sorting logic here
    }
}

class SortContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    sort(data) {
        this.strategy.sort(data);
    }
}

// Usage
const context = new SortContext(new BubbleSort());
context.sort([5, 3, 2]); // Outputs: Sorting using Bubble Sort

context.setStrategy(new QuickSort());
context.sort([5, 3, 2]); // Outputs: Sorting using Quick Sort
