import React, {useState} from 'react'
import "./Form.css"

const Form = ({id, toggleEdit, editTodo}) => {
    const [formData, setFormData] = useState({editTask: ''});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data, 
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        editTodo(id, formData.editTask);
        toggleEdit();
        setFormData({editTask: ''})
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='editTask'>Edit Task: </label>
        <input
            id="editTask"
            type='text'
            name='editTask'
            value={formData.editTask}
            onChange={handleChange}
        />
        <button className='Form-submitBtn'>Submit</button>
    </form>
  )
}

export default Form