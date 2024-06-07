import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import "./TodoList.css";

// Components
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const exampleTodos = [
        { id: uuid(), task: "Walk dog" },
        { id: uuid(), task: "Mow lawn" },
        { id: uuid(), task: "Water flowers" },
    ]
    const [todos, setTodos] = useState(exampleTodos);
    const addTodo = (task) => {
        setTodos([
            ...todos.map(todo => ({...todo})),
            {id: uuid(), task: task}
        ]);
    };
    const deleteTodo = (id) => {
        setTodos([
            ...todos.filter(todo => todo.id !== id)
        ]);
    };
    
  return (
    <div className='TodoList'>
        <h1>Todo</h1>
        <NewTodoForm addTodo={addTodo} />
        <hr className='TodoList-divider'></hr>
        <ul>
            {todos.map(({ id, task }) => (<Todo key={id} task={task} deleteTodo={(e) => deleteTodo(id)} />))}
        </ul>
    </div>
  )
}

export default TodoList