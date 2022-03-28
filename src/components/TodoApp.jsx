import TodoCheck from "../styles/components/Todo/TodoCheck";
import TodoInput from "../styles/components/Todo/TodoInput";
import TodoList from "./TodoList";
import Tab from "../styles/components/Tab";
import TabElement from "../styles/components/Tab/TabElement";
import React, { useState, useEffect } from 'react';

const template = [
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
  }
]

const findAfterIndex = (list,after) => {
  let i = 0
  list.forEach(( item,index ) => {
    if (item.text === after){
      i = index
    }
  })
  return i
}

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
      localStorage.setItem("todoList",JSON.stringify(template))
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

  const handleCheck = (text) => {
    setTodos(todoList.map(todo => {
      if (todo.text === text) {
        todo.complete = todo.complete ? false : true
      }
      return todo
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const inputElement = event.target.getElementsByTagName("input")[0]
    if (inputElement.value.trim() === "") {
      return
    }

    setTodos([
      {
        text: inputElement.value.trim(),
        complete: false
      },
      ...todoList
    ])
    inputElement.value = ""
  }

  const dragOver = (event) => {
    const draggingElement = document.getElementsByClassName("dragging")[0]
    const afterElement = findNearestElement(event.clientY)

    const newList = todoList.filter(item => item.text !== draggingElement.childNodes[1].innerText)
    const newObj = {
      text: draggingElement.childNodes[1].innerText,
      complete: draggingElement.checked
    }
    if (afterElement === undefined) {
      newList.push(newObj)
    }else {
      newList.splice(findAfterIndex(newList,afterElement.childNodes[1].innerText),0,newObj)
    }
    setTodos(newList)
  }

  const findNearestElement = (clientY) => {
    const nonedraggingElement = [...document.getElementsByClassName("not-dragging")]
    const nearestElement = nonedraggingElement.reduce((nearest,current) => {
      const rect = current.getBoundingClientRect()
      const offset = rect.y + ( rect.height / 2 ) - clientY
      
      if (offset > 0 && offset < nearest.offset) {
        return {
          offset: offset,
          element: current
        }
      }
      return nearest
    },{
      offset: Number.POSITIVE_INFINITY,
      element: undefined
    })

    return nearestElement.element
  }

  return (
    <>
      <TodoInput onSubmit={handleSubmit}>
        <TodoCheck className="check"/>
        <input type="text" placeholder="Create a new todo..." />
      </TodoInput>

      <TodoList 
        todoList={filterTodos()} 
        handleClear={handleClear} 
        handleDelete={handleDelete} 
        handleCheck={handleCheck}
        handleDrag={dragOver}
        noOfActive={todoList.reduce((count,todo) => {
          if (!todo.complete) {
            count++
          }
          return count
        },0)} 
      />

      <Tab>
        { tabs.map(( tab,index ) => <TabElement onClick={() => switchTab(tab.name)} key={index} selected={tab.selected}>{tab.name}</TabElement>)}
      </Tab>
    </>
  );
}

export default TodoApp;