import React, { useState, useEffect } from 'react';

import './App.css';

import Form from "./components/Form";
import TodoList from './components/TodoList';
import Header from "./components/Header";
import Info from "./components/Info/Info";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    //SAMPLE TASKS
    {text: "work out", completed: false, id: 390.2383389233821},
    {text: "schedule dinner with mike", completed: false, id: 931.6795131329183},
    {text: "call the vet", completed: false, id: 614.1735391540246},
    {text: "finish coding project", completed: false, id: 383.1079088478444}
  ]);
  const [toggle, setToggle] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }, [])

  useEffect(() => {
    switch (toggle) {
      case "completed": setFilteredTodos(todos.filter((todos) => todos.completed)); break;
      case "uncompleted": setFilteredTodos(todos.filter((todos) => !todos.completed)); break;
      default: setFilteredTodos(todos)
    }

    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos, toggle])

  const handleSelect = (e) => {
    setToggle(e.target.value)
  }

  return (
    <>
      <div id="List">
        <Header todos={todos}/>
        <button className={`add ${showForm === true ? "active" : ""}`} onClick={e => setShowForm(prev => !prev)}></button>
        {showForm === true ? <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setToggle={setToggle}/> : null}
        <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} toggle={toggle}/>
        <div className="select">
            <span>Filter:</span> 
            <select onChange={handleSelect} name="todos" id="sf" className="filterTodo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
      </div>
      <Info/>
    </>
  );
}

export default App;
 