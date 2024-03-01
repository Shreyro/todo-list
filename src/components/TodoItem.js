import React from 'react';

const TodoItem = ({ todo, addTodo }) => {
    const completedStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none',
    };

    const handleMarkComplete = () => {
        // Simulate database update here (if applicable)
        addTodo(todo.text); // Update state to reflect change in completeness
    };

    return (
        <li style={completedStyle}>
            <input type="checkbox" checked={todo.completed} onChange={handleMarkComplete} />
            {todo.text}
        </li>
    );
};

export default TodoItem;
