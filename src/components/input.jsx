import React, { useState } from "react";

const Input = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="input-group mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control bg-light rounded"
        aria-label="Text input with radio button"
      />
      <button className="ml-2 btn btn-secondary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Input;
