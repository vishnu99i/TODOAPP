import React from 'react'
import { useState } from 'react'

const AddTask = ({addTask}) => {
  //"e" in onchange is an event object and it is used to add new tasks
  //console.log(e.target.value) will give content entered as a new task

  const [value,setValue] = useState("");
  const addItem = () => {
                           addTask(value);
                           setValue("");
                        };

  return (
    <>
      <div className="input-container">
         <input type="text" className="input" placeholder="Add a new Task" value={value} onChange={(e) => {setValue(e.target.value)}}/>
         <button className="add-btn" onClick={addItem}>ADD</button>
      </div>
    </>
  )
}

export default AddTask