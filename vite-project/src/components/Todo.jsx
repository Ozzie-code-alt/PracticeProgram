import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({task, toggleComplete , deleteTodo, editTodo}) => { // dont forget to pass the props here as arguments
  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' :""}`} onClick={()=>{ toggleComplete(task.id)}}>{task.task}</p> {/*Toggle complete starts from here*/}
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onlClick = {()=>editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)}/>
        </div>
    </div>
  );
};

export default Todo;
