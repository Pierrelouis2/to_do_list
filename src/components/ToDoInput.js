import React, {useState} from "react";

function ToDoInput(props) {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState(0);
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      priority: priority,
      description: description,
    };

    
    props.onSubmit(newTodo);
    setInput("");
    setPriority(0);

    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

    // Add new todo to existing todos
    existingTodos.push(newTodo);

    // Save updated todos to local storage
    localStorage.setItem("todos", JSON.stringify(existingTodos));
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={input}
        className="todo-input"
        onChange={handleChange}
      />
      <input
        type="number"
        min="0"
        step="1"
        placeholder="Priorité"
        className="todo-priority"
        value={priority}
        onChange={handlePriorityChange}
      />
      <button className="todo-button">Ajouter</button>
      <input
      type="text"
      placeholder="Description"
      className="todo-description"
      value={description}
      onChange={handleDescriptionChange}
      />
      
    </form>
  );
}

export default ToDoInput;
