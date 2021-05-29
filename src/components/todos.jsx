import React from "react";

const Todos = ({ todo, markTodo, removeTodo, index }) => {
  return (
    <div className="input-group">
      <p
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
        type="text"
        className="form-control mr-2 mb-2 bg-light rounded"
        aria-label="Text input with radio button"
      >
        {todo.text}
      </p>
      <button
        className="btn btn-danger mb-2"
        type="submit"
        onClick={() => markTodo(index)}
      >
        <i className="fa fa-check"></i>
      </button>
      <button
        className="btn btn-danger ml-2 mb-2"
        type="submit"
        onClick={() => removeTodo(index)}
      >
        <i className="fa fa-trash-o fa-lg"></i>
      </button>
    </div>
  );
};

export default Todos;
