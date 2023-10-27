import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <div>
        <input
      type="text"
      alue={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Add new task"
  style={{
    padding: '15px',
    width: '15%',
    borderRadius: '20px',
  }}
/>
<button onClick={addTodo} style={{
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '20px',
}}>
  Add
</button>

      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} removeTodo={() => removeTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
