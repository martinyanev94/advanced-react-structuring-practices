class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.displayTasks(this.model.getTasks());
    }

    addTask(title) {
        this.model.addTask(title);
        this.view.displayTasks(this.model.getTasks());
    }
}
