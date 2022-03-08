import React from 'react'
import TodoItem from '../MyComponents/TodoItem'

export const Todos = (props) => {
  let todosStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container' style={todosStyle}>
      <h3>Todos List</h3>
      {props.todos.length===0? "No Todos to Display":
      props.todos.map(todo => {
        return (
          <>
            <TodoItem todo = {todo} key ={todo.sno} onDelete={()=>props.onDelete(todo)}/><hr/>
          </>
        )
      })
      }
      
    </div>
  )
}

export default Todos
