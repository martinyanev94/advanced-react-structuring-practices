class Task {
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}

class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        const newTask = new Task(this.tasks.length + 1, title);
        this.tasks.push(newTask);
    }

    getTasks() {
        return this.tasks;
    }
}
