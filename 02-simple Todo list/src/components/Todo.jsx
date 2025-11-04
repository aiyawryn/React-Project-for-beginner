import React, { useState } from "react";
import "../style.css";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => [
      ...todos,
      { text: input, id: Math.floor(Math.random() * 10) },
    ]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id != id));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
