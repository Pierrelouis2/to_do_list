import React, {useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri";
import {AiOutlineDown} from "react-icons/ai";

function ToDoList({todos, removeToDo}) {
  const [showDescription, setShowDescription] = useState({});

  const handleShowDescription = (todo) => {
    setShowDescription((prev) => ({
      ...prev,
      [todo.id]: !prev[todo.id],
    }));
  };

  const sortedTodos = todos.sort((a, b) => b.priority - a.priority);
  return sortedTodos.map((todo, index) => (
    <div>
    <div
      className= "todo-row"
      key={index}
    >
      <AiOutlineDown
        className="description-icon"
        onClick={() => handleShowDescription(todo)}
      />
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        {todo.priority} &nbsp;
        <RiCloseCircleLine
          onClick={() => removeToDo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
    <div>
    {showDescription[todo.id] && (
        <div className="todo-description-display">{todo.description}</div>
      )}
    </div>
    </div>
  ));
}

export default ToDoList;
