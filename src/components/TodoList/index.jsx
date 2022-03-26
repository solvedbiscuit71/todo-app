import TodoInfo from "../../styles/components/Todo/TodoInfo";
import TodoWrapper from "../../styles/layouts/TodoWrapper";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <TodoWrapper>
      <ul>
        { props.todoList.map(( todo,index ) => <Todo key={index} text={todo.text} complete={todo.complete} />)}
      </ul>

      <TodoInfo>
        <p>5 Items left</p>
        <div onClick={props.handleClear}>Clear Completed</div>
      </TodoInfo>
    </TodoWrapper>
  );
}

export default TodoList;