import React, { useState } from 'react'

const NewBoxForm = ({ addBox }) => {
    const INITIALSTATE = {
        color: '',
        height: '', 
        width: ''
    }    
    const [formData, setFormData] = useState(INITIALSTATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIALSTATE);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='color'>Color</label>
            <input
                id="color"
                type="text"
                name='color'
                placeholder='Color'
                value={formData.color}
                onChange={handleChange}
            />

            <label htmlFor='height'>Height</label>
            <input
                id="height"
                type="text"
                name='height'
                placeholder='Height'
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor='width'>Width</label>
            <input
                id="width"
                type="text"
                name='width'
                placeholder='Width'
                value={formData.width}
                onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm