import TodoCheck from "../styles/components/Todo/TodoCheck";
import TodoInput from "../styles/components/Todo/TodoInput";
import TodoList from "./TodoList";
import Tab from "../styles/components/Tab";
import TabElement from "../styles/components/Tab/TabElement";

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
      <TodoInput>
        <TodoCheck className="check"/>
        <input type="text" placeholder="Create a new todo..." />
      </TodoInput>

      <TodoList todoList={todoList} />

      <Tab>
        <TabElement selected>All</TabElement>
        <TabElement>Active</TabElement>
        <TabElement>Completed</TabElement>
      </Tab>
    </>
  );
}

export default TodoApp;