import TodoCheck from "../../styles/components/Todo/TodoCheck";
import TodoElement from "../../styles/components/Todo/TodoElement";

function Todo(props) {
  return (
    <TodoElement draggable="true" className={props.drag === props.text ? "dragging" : "not-dragging"} onDragStart={_ => props.setDrag(props.text)} onDragEnd={_ => props.setDrag(null)} checked={props.complete}>
      <TodoCheck onClick={() => props.handleCheck(props.text)} checked={props.complete} className="check"/>
      <p>{props.text}</p>

      <svg onClick={() => props.handleDelete(props.text)} className="cross" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    </TodoElement>
  );
}

export default Todo;