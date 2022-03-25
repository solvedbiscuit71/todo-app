import TodoList from "./TodoList";

function TodoApp() {
  const todoList = [
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

  return (
    <>
      <form>
        <span></span>
        <input type="text" placeholder="Create a new Todo..." />
      </form>

      <TodoList todoList={todoList} />

      <section className="todos__action tab">
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>
      </section>
    </>
  );
}

export default TodoApp;