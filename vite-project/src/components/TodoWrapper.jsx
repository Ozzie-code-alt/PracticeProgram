import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'
import EditTodoForm from './EditTodoForm';
uuidv4();
// reminder: this acts like our main container soo like almost every prop are both instantiated and edited here 
const TodoWrapper = () => {
    const[todos, settodo] = useState([])

    const addTodo = todo =>{
        settodo([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]) // settodo is then used as a container for todo prop
        console.log(todos)
    }

    const toggleComplete = (id)=>{
        settodo(todos.map((todo) => (
            todo.id === id ? {...todo, completed : !todo.completed} : todo
        )))
    }

    const deleteTodo = (id)=>{
        settodo(todos.filter(todo => todo.id !==id))
    }

    const editTodo = (id) =>{
        settodo(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (task, id)=>{
            settodo(todos.map((todo) => 
                todo.id === id?{...todo, task, isEditing: !todo.isEditing} : todo
            ))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Tasks For Today</h1>
        <TodoForm addTodo={addTodo} /> {/*soo here we added a property addTodo. We can pass it by first instatiating  a function here then getting it there*/ }
         {/* display todos */}
        {todos.map((todo)=> //  here always check that when using functions in jsx no need to use curly braces 
           todo.isEditing ?(
                <EditTodoForm editTodo={editTask} task={todo}/>
            ) : (
            <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo = {deleteTodo}  editTodo = {editTodo}/> // these are props: you can add them here since this is like the main container  
        ))}
      
        </div>
  )
}

export default TodoWrapper