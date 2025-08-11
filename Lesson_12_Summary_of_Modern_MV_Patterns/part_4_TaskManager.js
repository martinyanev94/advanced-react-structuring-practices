import React, { useState } from 'react';

function TaskComponent() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, taskName]);
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
      </ul>
      <button onClick={() => addTask("New Task")}>Add Task</button>
    </div>
  );
}
