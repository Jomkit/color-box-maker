import React, { useState } from 'react'
import "./Todo.css";
import Form from './Form';

const Todo = ({ id, task, completed, deleteTodo, editTodo, completeTodo }) => {
    const [formOpen, setFormOpen] = useState(false);
    const toggleEdit = () => {setFormOpen(!formOpen)}
  return (
    <>
        <li style={{textDecoration: completed && "line-through"}}>
            Task: {task} 
            <button className='Todo-completeBtn' onClick={completeTodo}>Mark as completed</button>
            <button className='Todo-editBtn' onClick={toggleEdit} >Edit</button>
            <button className='Todo-deleteBtn' onClick={deleteTodo}><span>&#9746;</span></button>
        </li>
        {formOpen && <Form id={id} toggleEdit={toggleEdit} editTodo={editTodo} />}
    </>
  )
}

export default Todo