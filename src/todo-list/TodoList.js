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
    const [todos, setTodos] = useState(
        localStorage.getItem('todos') ? 
        JSON.parse(localStorage.getItem('todos')) :
        exampleTodos
    );

    // localStorage helper functions
    const saveToLocalStorage = (updatedTodos) => {
        const payload = JSON.stringify(updatedTodos);
        localStorage.setItem('todos', payload);
    }
    
    const addTodo = (task) => {
        const updatedTodos = [
            ...todos.map(todo => ({...todo})),
            {id: uuid(), completed: false, task: task}
        ];
        setTodos(updatedTodos);
        saveToLocalStorage(updatedTodos);
    };
    const deleteTodo = (id) => {
        const updatedTodos = [...todos.filter(todo => todo.id !== id)];
        setTodos(updatedTodos);
        saveToLocalStorage(updatedTodos);
    };
    const editTodo = (id, newTask) => {
        const updatedTodos = [
            ...todos.map(todo => 
                todo.id === id 
                ? {...todo, task: newTask} 
                : todo
            )];
        setTodos(updatedTodos);
        saveToLocalStorage(updatedTodos);
    };
    const completeTodo = (id) => {
        const updatedTodos = [
            ...todos.map(todo => 
                todo.id === id 
                ? {...todo, completed: !todo.completed} 
                : todo
            )];
        setTodos(updatedTodos);
        saveToLocalStorage(updatedTodos);
    };
    const resetTodos = () => {
        setTodos(exampleTodos);
        localStorage.removeItem("todos");
    }
    
  return (
    <div className='TodoList'>
        <h1>Todo</h1>
        <NewTodoForm addTodo={addTodo} />
        <button className='TodoList-resetBtn' onClick={resetTodos}>Reset Todos</button>
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