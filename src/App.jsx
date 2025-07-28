import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h4>Design and developed by Sumudu Kulathunga</h4>

      <h1>🐳 ToDoBunny</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              className="delete-button"
              onClick={() => deleteTask(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
