document.getElementById('add-task').onclick = () => {
    const taskTitle = document.getElementById('task-input').value;
    taskController.addTask(taskTitle);
};
