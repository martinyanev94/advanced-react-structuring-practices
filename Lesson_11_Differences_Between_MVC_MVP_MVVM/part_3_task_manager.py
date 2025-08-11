class TaskModel:
    def __init__(self):
        self.tasks = []

    def add_task(self, task_name):
        self.tasks.append(task_name)

    def get_tasks(self):
        return self.tasks


class TaskView:
    def display_tasks(self, tasks):
        print("Current Tasks:")
        for task in tasks:
            print(f" - {task}")

    def get_task_input(self):
        return input("Enter a new task: ")


class TaskPresenter:
    def __init__(self, view, model):
        self.view = view
        self.model = model

    def add_task(self):
        task_input = self.view.get_task_input()
        self.model.add_task(task_input)
        self.update_view()

    def update_view(self):
        tasks = self.model.get_tasks()
        self.view.display_tasks(tasks)


# Usage
model = TaskModel()
view = TaskView()
presenter = TaskPresenter(view, model)

presenter.add_task()
