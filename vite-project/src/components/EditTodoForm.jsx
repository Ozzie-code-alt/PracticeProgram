import React from "react";
import { useState } from "react";

// First task is to keep track of user input in textbox
const EditTodoForm = ({editTodo,task}) => {
    const [value, setValue] = useState(task.task) // initial state is empty 

 const handleSubmit = (e)=>{
   // prevent default action
    e.preventDefault()
     // edit todo
    editTodo(value, task.id) // we need to pass this value  to another component, specifically the todoWrapper by using props
    setValue("")
 }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}> {/* When u submit, the page reloads soo to prevent that we need to add a function e.preventDefault*/}
      <input type="text" className="todo-input" value={value} placeholder="Edit Task" onChange={(e)=> setValue(e.target.value)}/> {/* this right here is an anonymous function for an event where it grabs the value in text and puts it on setValue*/}
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  );
};

export default EditTodoForm;
