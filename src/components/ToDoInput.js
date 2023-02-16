import React, {useState} from "react";

function ToDoInput(props) {
  const [input, setInput] = useState(""); // input is the value of the input field
  const [priority, setPriority] = useState(0);// priority is the value of the priority field
  const [description, setDescription] = useState("");// description is the value of the description field

  const handleChange = (e) => {
    setInput(e.target.value);
  };// handleChange is the function that will be called when the input field is changed

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };// handlePriorityChange is the function that will be called when the priority field is changed

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };//  handleDescriptionChange is the function that will be called when the description field is changed
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      priority: priority,
      description: description,
    };// newTodo is the object that will be added to the list of todos

    
    props.onSubmit(newTodo); // Call the function that was passed as a prop to this component
    setInput(""); // Reset the input field
    setPriority(0);// Reset the priority field

    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];// Get existing todos from local storage

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
