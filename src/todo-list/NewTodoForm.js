import React, { useState } from 'react'
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const INITIALSTATE = {
    task: ''
  }
  const [formData, setFormData] = useState(INITIALSTATE);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(formData.task);
    setFormData({task: ''})
  }
  
  return (
    <form className='NewTodoForm' onSubmit={handleSubmit}>
      <label htmlFor='task'>Description: </label>
      <input 
        id='task'
        type='text'
        name='task'
        placeholder='Grab milk... etc.'
        value={formData.task}
        onChange={handleChange}
      />

      <button>Add Task</button>
    </form>
  )
}

export default NewTodoForm