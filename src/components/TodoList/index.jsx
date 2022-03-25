import Todo from "./Todo";

function TodoList(props) {
  return (
    <section className="todos">
      <ul className="todo-list">
        { props.todoList.map(( todo,index ) => <Todo key={index} text={todo.text} complete={todo.complete} />)}
      </ul>

      <div className="todos__info">
        <div>5 Items</div>
        <button>Clear Completed</button>
      </div>
    </section>
  );
}

export default TodoList;