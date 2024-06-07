import React from 'react'
import "./Box.css";

const Box = ({width, height, backgroundColor, deleteBox}) => {
  return (
    <div className='Box' style={ {width: width, height: height, backgroundColor: backgroundColor,} }>
        <button className='Box-deleteBtn' onClick={deleteBox}>X</button>
    </div>
  )
}

export default Box;