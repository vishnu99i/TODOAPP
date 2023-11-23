import React from 'react';
import "./Todo.css";
import AddTask from './AddTask';
import ListTask from './ListTask';
import { useState } from 'react';
import { useEffect } from 'react';

const Todo = () => {

   const [tasks,setTasks] = useState([]);
   //usestate,mapping,props

   useEffect(() => {
      document.title=`You have ${tasks.length} pending tasks`
   })

   const addTask = (title) => {
      const newTask = [...tasks,{title}]
                     //Spread operator copies data
      setTasks(newTask);
   };

   const removeTask = (index) => {
      const newTask = [...tasks]
      newTask.splice(index,1);
      setTasks(newTask);
   };

  return (
    <>
      <div className="todo-container">

         <div className="header">
            TODO APP
         </div>

         <div className="add-task">
            <AddTask addTask={addTask}/>
         </div>

         <div className="tasks">
            {tasks.map((task,index) => (<ListTask task={task} removeTask={removeTask} index={index} key={index}/>))}
         </div>

      </div>
    </>
  )
}

export default Todo