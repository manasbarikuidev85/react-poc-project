import React, { useState } from 'react';

function TaskLists() {
  const [data, setData] = useState([
    {
      task: 'Clean bedroom',
      subtasks: [
        { description: 'Do laundry', completed: false },
        { description: 'Organize desk', completed: true },
        { description: 'Wipe floors', completed: false },
      ],
    },
    {
      task: 'Study',
      subtasks: [
        { description: 'Review chemistry', completed: false },
        { description: 'Do a React coding challenge', completed: false },
      ],
    },
    {
      task: 'Build website',
      subtasks: [
        { description: 'Choose tech stack', completed: true },
        { description: 'Design pages', completed: false },
        { description: 'Develop', completed: false },
        { description: 'Publish', completed: false },
      ],
    },
  ]);

  // Toggle the completion state of a subtask
  const toggleSubtaskCompletion = (taskIndex, subtaskIndex) => {
    const newData = [...data];
    newData[taskIndex].subtasks[subtaskIndex].completed = !newData[taskIndex].subtasks[subtaskIndex].completed;
    setData(newData);
  };

  // Delete a subtask from a task
  const deleteSubtask = (taskIndex, subtaskIndex) => {
    const newData = [...data];
    newData[taskIndex].subtasks.splice(subtaskIndex, 1);
    setData(newData);
  };

  return (
    <div>
      {data.map((taskItem, taskIndex) => (
        <div key={taskIndex} style={{ marginBottom: '20px' }}>
          <h2>{taskItem.task}</h2>
          <ul style={{ marginLeft: '20px' }}>
            {taskItem.subtasks.map((subtask, subtaskIndex) => (
              <li key={subtaskIndex} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={subtask.completed}
                  onChange={() => toggleSubtaskCompletion(taskIndex, subtaskIndex)}
                />
                <span style={{ marginLeft: '10px', textDecoration: subtask.completed ? 'line-through' : 'none' }}>
                  {subtask.description}
                </span>
                <button
                  style={{ marginLeft: '10px' }}
                  onClick={() => deleteSubtask(taskIndex, subtaskIndex)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TaskLists;
