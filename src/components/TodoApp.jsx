import TodoCheck from "../styles/components/Todo/TodoCheck";
import TodoInput from "../styles/components/Todo/TodoInput";
import TodoList from "./TodoList";
import Tab from "../styles/components/Tab";
import TabElement from "../styles/components/Tab/TabElement";
import React, { useState, useEffect } from 'react';

const templateTodos = [
  {
    text: "Complete online JavaScript course",
    complete: true
  },
  {
    text: "Jag around the park 3x",
    complete: false
  },
  {
    text: "10 minutes meditation",
    complete: false
  },
  {
    text: "Read for 1 hour",
    complete: false
  },
  {
    text: "Pick up groceries",
    complete: false
  },
  {
    text: "Complete Todo App on Frontend Mentor",
    complete: false
  },
]

function TodoApp() {
  const [todoList,setTodos] = useState([])
  const [tabs,setTabs] = useState([
    {
      name: "All",
      selected: true
    },
    {
      name: "Active",
      selected: false
    },
    {
      name: "Completed",
      selected: false
    }
  ])

  useEffect(() => {
    if (!localStorage.getItem("todoList")){
      localStorage.setItem("todoList",JSON.stringify(templateTodos))
    }
    setTodos(JSON.parse(localStorage.getItem("todoList")))
  },[])

  useEffect(() => {
    localStorage.setItem("todoList",JSON.stringify(todoList))
  },[todoList])

  const switchTab = (name) => {
    const newTabs = JSON.parse(JSON.stringify(tabs))
    newTabs.forEach(tab => {
      if (tab.name === name){
        tab.selected = true
      }else if (tab.selected){
        tab.selected = false
      }
    })
    setTabs(newTabs)
  }

   const filterTodos = () => {
     const filter = tabs.reduce((value, tab) => {
       if (tab.selected){
         return tab.name
       }
       return value
     },"")

     switch (filter) {
        case "All":
          return todoList
        case "Active":
          return todoList.filter(todo => !todo.complete && todo)
        case "Completed":
          return todoList.filter(todo => todo.complete && todo)
     }
   }

   const handleClear = () => {
      setTodos(todoList.filter(todo => !todo.complete && todo))
   }
   
   const handleDelete = (text) => {
     setTodos(todoList.filter(todo => todo.text !== text && todo))
   }

  return (
    <>
      <TodoInput>
        <TodoCheck className="check"/>
        <input type="text" placeholder="Create a new todo..." />
      </TodoInput>

      <TodoList todoList={filterTodos()} handleClear={handleClear} handleDelete={handleDelete } />

      <Tab>
        { tabs.map(( tab,index ) => <TabElement onClick={() => switchTab(tab.name)} key={index} selected={tab.selected}>{tab.name}</TabElement>)}
      </Tab>
    </>
  );
}

export default TodoApp;