import React, { useState, useEffect } from 'react';

const template = [
  "item1",
  "item2",
  "item3"
]

const findAfterIndex = (list,after) => {
  let i = 0
  list.forEach(( item,index ) => {
    if (item === after){
      i = index
    }
  })
  return i
}

function App(props) {
  const [list,setList] = useState([])
  const [drag,setDrag] = useState("")

  useEffect(() => {
    setList(template)
  },[])

  const dragOver = (event) => {
    const draggingElement = document.getElementsByClassName("element element--dragging")[0]
    const afterElement = findNearestElement(event.clientY)

    const newList = list.filter(item => item !== draggingElement.innerHTML)
    if (afterElement === undefined) {
      newList.push(draggingElement.innerHTML)
    }else {
      newList.splice(findAfterIndex(newList,afterElement.innerHTML),0,draggingElement.innerHTML)
    }
    setList(newList)
  }

  const findNearestElement = (clientY) => {
    const nonedraggingElement = [...document.querySelectorAll(".element:not(.element--dragging)")]
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
      <h1>Drag and Drop</h1>

      <ul className='container' onDragOver={dragOver}>
        { list.length && list.map(( item,index ) => (
          <li key={index} 
            className={`element ${item === drag ? "element--dragging" : ""}`}
            draggable="true" 
            onDragStart={event => setDrag(item)} 
            onDragEnd={event => setDrag("")}>{item}
          </li>
          )
        )}
      </ul>
    </>
  );
}

export default App;