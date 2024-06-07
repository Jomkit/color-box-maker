import React, {useState} from 'react'
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import "./BoxList.css";

const BoxList = () => {
    const [boxes, setBoxes] = useState([
      {id: uuid(), width: "100px", height: "100px", color: "lightblue"},
      {id: uuid(), width: "100px", height: "100px", color: "magenta"},
    ]);

    const addBox = (newBox) => {
      setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }
    const deleteBox = (id) => {
      const newBoxes = boxes.map(box => ({...box})).filter(box => box.id != id);
      setBoxes([...newBoxes]);
    }

  return (
    <div className='BoxList'>
        {boxes.map(
          ({id, width, height, color}) => 
            <Box 
              key={id}
              width={width} 
              height={height} 
              backgroundColor={color} 
              deleteBox={(e) => deleteBox(id)}
            />
          )}

          <h3>New Box Form</h3>            
          <NewBoxForm addBox={addBox} />
    </div>
  )
}

export default BoxList