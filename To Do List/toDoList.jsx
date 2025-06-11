import { useState } from "react";

function App() {
  const [task, setTask] = useState(['Task 1', 'Task 2', 'Task 3']);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTask([...task, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const newTaskList = task.filter((_, i) => i !== index);
    setTask(newTaskList);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(task[index]);
  };

  const saveEdit = (index) => {
    const updatedTasks = [...task];
    if (editValue.trim() !== '') {
      updatedTasks[index] = editValue;
      setTask(updatedTasks);
      setEditIndex(null);
      setEditValue('');
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // full viewport height
        backgroundColor: '#f5f5f5', // optional light background
      }}
    >
      <div style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ textAlign: 'center' }}>TODOLIST</h1>

        {/* Add new task */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button onClick={addTask} style={{ padding: '8px 15px' }}>
            Add Task
          </button>
        </div>

        {/* Task list */}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {task.map((item, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: '#d3d3d3',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '5px',
              }}
            >
              {editIndex === index ? (
                <>
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    style={{ flex: 1, padding: '6px' }}
                  />
                  <button
                    onClick={() => saveEdit(index)}
                    style={{
                      padding: '6px 10px',
                      backgroundColor: '#4caf50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    style={{
                      padding: '6px 10px',
                      backgroundColor: '#999',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span style={{ flex: 1, color: 'black' }}>{item}</span>
                  <button
                    onClick={() => startEditing(index)}
                    style={{
                      padding: '6px 10px',
                      backgroundColor: 'white',
                      color: 'black',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeTask(index)}
                    style={{
                      padding: '6px 10px',
                      backgroundColor: 'white',
                      color: 'black',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Count display */}
        <p style={{ textAlign: 'center' }}>Total tasks: {task.length}</p>
      </div>
    </div>
  );
}

export default App;



