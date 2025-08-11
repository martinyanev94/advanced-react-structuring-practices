class TaskModel {
  constructor() {
    this.tasks = [];
  }

  addTask(taskName) {
    this.tasks.push(taskName);
  }

  getTasks() {
    return this.tasks;
  }
}

class TaskViewModel {
  constructor(model) {
    this.model = model;
    this.tasks = [];
  }

  loadTasks() {
    this.tasks = this.model.getTasks();
  }

  addTask(taskName) {
    this.model.addTask(taskName);
    this.loadTasks();
  }
}

const model = new TaskModel();
const viewModel = new TaskViewModel(model);
viewModel.addTask("Learn MV Patterns");
console.log(viewModel.tasks);
