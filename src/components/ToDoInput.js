import React, {useState} from "react";

function ToDoInput(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
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
      <button className="todo-button">Ajouter</button>
    </form>
  );
}

export default ToDoInput;
