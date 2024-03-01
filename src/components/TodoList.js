import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, addTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} addTodo={addTodo} />
            ))}
            <button onClick={() => addTodo('Add new todo')}>Add Todo</button>
        </ul>
    );
};

export default TodoList;
