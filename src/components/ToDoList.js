import React, {useState} from "react";
import ToDoInput from "./ToDoInput";
import ToDoDisplay from "./ToDoDisplay";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addToDo = (ToDo) => {
    if (!ToDo.text || /^\s*$/.test(ToDo.text)) {
      return;
    }

    const newToDos = [ToDo, ...todos];

    setTodos(newToDos);
    console.log(...todos);
  };

  const removeToDo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  return (
    <div>
      <h1>A faire :</h1>
      <ToDoInput onSubmit={addToDo} />
      <ToDoDisplay todos={todos} removeToDo={removeToDo} />
    </div>
  );
}

export default ToDoList;
