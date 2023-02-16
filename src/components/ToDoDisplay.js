import React from "react";
import {RiCloseCircleLine} from "react-icons/ri";

function ToDoList({todos, removeToDo}) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeToDo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default ToDoList;
