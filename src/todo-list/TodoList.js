import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import "./TodoList.css";

// Components
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const exampleTodos = [
        { id: uuid(), completed: true, task: "Walk dog" },
        { id: uuid(), completed: false, task: "Mow lawn" },
        { id: uuid(), completed: false, task: "Water flowers" },
    ]
    const [todos, setTodos] = useState(exampleTodos);
    const addTodo = (task) => {
        setTodos([
            ...todos.map(todo => ({...todo})),
            {id: uuid(), completed: false, task: task}
        ]);
    };
    const deleteTodo = (id) => {
        setTodos([
            ...todos.filter(todo => todo.id !== id)
        ]);
    };
    const editTodo = (id, newTask) => {
        setTodos([
            ...todos.map(todo => todo.id === id ? {...todo, task: newTask} : todo)
        ]);
    };
    const completeTodo = (id) => {
        setTodos([
            ...todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        ]);
    };
    
  return (
    <div className='TodoList'>
        <h1>Todo</h1>
        <NewTodoForm addTodo={addTodo} />
        <hr className='TodoList-divider'></hr>
        <ul className='TodoList-ul'>
            {todos.map(({ id, task, completed }) => (
                <Todo 
                key={id}
                 id={id} 
                 task={task} 
                 completed={completed} 
                 deleteTodo={() => deleteTodo(id)} 
                 editTodo={editTodo} 
                 completeTodo={() => completeTodo(id)}
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoList