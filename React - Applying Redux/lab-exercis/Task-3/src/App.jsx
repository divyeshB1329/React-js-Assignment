import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, updateTask } from './features/taskSlice';


// Task 3:
//   • Build a crud application using Redux-Toolkit for state management. Allow users
//   to add,remove, delete and update.
const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskInput, setTaskInput] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  // Handle Add or Update Task
  const handleAddOrUpdateTask = () => {
    if (taskInput.trim()) {
      if (editTaskId !== null) {
        // If editing, update the task
        dispatch(updateTask({ id: editTaskId, text: taskInput }));
        setEditTaskId(null);
      } else {
        // If adding, create a new task
        dispatch(addTask({ id: Date.now(), text: taskInput }));
      }
      setTaskInput('');
    }
  };

  // Handle Remove Task
  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      <h1>CRUD Application</h1>

      {/* Add/Update Task Field */}
      <div>
        <h2>{editTaskId !== null ? 'Update Task' : 'Add Task'}</h2>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddOrUpdateTask}>
          {editTaskId !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}

            {/* Edit Task */}
            <button onClick={() => {
              setEditTaskId(task.id);
              setTaskInput(task.text);
            }}>
              Edit
            </button>

            {/* Remove Task */}
            <button onClick={() => handleRemoveTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
