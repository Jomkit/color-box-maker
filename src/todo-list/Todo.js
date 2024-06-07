import React from 'react'
import "./Todo.css";

const Todo = ({ task, deleteTodo }) => {
  return (
    <li>
        Task: {task} <button className='Todo-deleteBtn' onClick={deleteTodo}><span>&#9746;</span></button>
    </li>
  )
}

export default Todo