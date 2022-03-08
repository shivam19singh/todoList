import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer'; //not using {} because export default function Header
import {Todos} from './MyComponents/Todos'; //using {} because using export const Todos
import {AddTodo} from './MyComponents/addTodo';
import {About} from './MyComponents/About';
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    let sno = todos.length+1;
    let myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    // console.log(myTodo);
    
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);


  return(
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Routes>
          <Route exact path="/" element={
          <>
          <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
          }> 
          </Route>
          <Route exact path="/about" element={<About />}>
            
          </Route> 
        </Routes> 
      <Footer />
    </Router>
    </>

  );
  
}

export default App;
