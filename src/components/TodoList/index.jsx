import { useState } from "react";
import TodoInfo from "../../styles/components/Todo/TodoInfo";
import TodoWrapper from "../../styles/layouts/TodoWrapper";
import Todo from "./Todo";

function TodoList(props) {
  const [drag,setDrag] = useState(null)

  return (
    <TodoWrapper>
      <ul>
        { props.todoList.map(( todo,index ) => (
          <Todo 
            handleDelete={props.handleDelete} 
            handleCheck={props.handleCheck} 
            drag={drag}
            setDrag={setDrag}
            key={index} 
            text={todo.text} 
            complete={todo.complete} 
          />)
        )}
      </ul>

      <TodoInfo>
        <p>{props.noOfActive} Items left</p>
        <div onClick={props.handleClear}>Clear Completed</div>
      </TodoInfo>
    </TodoWrapper>
  );
}

export default TodoList;