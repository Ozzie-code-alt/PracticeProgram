import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'
uuidv4();

const TodoWrapper = () => {
    const[todos, settodo] = useState([])

    const addTodo = todo =>{
        settodo([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]) // settodo is then used as a container for todo prop
        console.log(todos)
    }

    const toggleComplete = (id)=>{
        settodo(todos.map((todo) => 
            todo.id === id ? {...todo, completed : !todo.completed} : todo
        ))
    }

  return (
    <div className='TodoWrapper'>
        <h1>Tasks For Today</h1>
        <TodoForm addTodo={addTodo} /> {/*soo here we added a property addTodo. We can pass it by first instatiating  a function here then getting it there*/ }
        
        {todos.map((todo, index)=>( //  here always check that when using functions in jsx no need to use curly braces 
            <Todo task={todo} key={index} toggleComplete={toggleComplete}/> // these are props task and key 
        ))}
      
        </div>
  )
}

export default TodoWrapper