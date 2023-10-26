import React, { useState } from 'react';

function TodoItem({ todo, removeTodo }) {
  const [completed, setCompleted] = useState(false);

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px 0',
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: completed ? '#6AC259' : 'white',
    transition: 'background-color 0.3s ease',
    paddingRight: '20px',
  };
  

  const textStyle = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? 'white' : 'black',
    transition: 'text-decoration 0.3s ease, color 0.3s ease',
  };

  const completeTask = () => {
    setCompleted(true);
  };
  
  const uncompleteTask = () => {
    setCompleted(false);
  };
  
  const buttonStyle = {
    fontSize: '20px',
    cursor: 'pointer',
    margin: '0 5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    borderRadius: '50%',
  };
  
  return (
    <li style={listItemStyle}>
      <span style={textStyle}>{todo}</span>
      <button onClick={completeTask} className="check-button" style={buttonStyle}>
        &#10003;
      </button>
      <button onClick={removeTodo} className="delete-button" style={buttonStyle}>
        &#10007;
      </button>
    </li>
  );
}

export default TodoItem;
