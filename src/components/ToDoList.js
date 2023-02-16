import React, {useState, useEffect} from "react";
import ToDoInput from "./ToDoInput";
import ToDoDisplay from "./ToDoDisplay";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(existingTodos);
  }, []);

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
    localStorage.setItem("todos", JSON.stringify(removeArr));
  };

  const setPriority = (id, priority) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, priority };
      }
      return todo;
    });
    setTodos(updatedTodos);
    
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <h1>A faire :</h1>
      <ToDoInput onSubmit={addToDo} />
      <ToDoDisplay todos={todos} removeToDo={removeToDo} setPriority={setPriority}/>
    </div>
  );
}

export default ToDoList;
