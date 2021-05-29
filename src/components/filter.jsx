import React from "react";

const Filter = ({ count, setStatus, todos, setTodos }) => {
  const showAll = () => {
    const filtered = "all";
    setStatus(filtered);
  };
  const completed = () => {
    const filtered = "completed";
    setStatus(filtered);
  };
  const active = () => {
    const filtered = "active";
    setStatus(filtered);
  };

  const clearAll = () => {
    let newTodos = [...todos];
    newTodos = [];
    setTodos(newTodos);
  };
  return (
    <div
      className="mt-5 d-flex btn-group justify-content-between"
      role="group"
      aria-label="Basic example"
    >
      <div>
        <b>
          <span className="btn btn-light">
            <b>{count}</b>
          </span>
        </b>
      </div>
      <div className=" ">
        <button
          autoFocus="autofocus"
          type="button"
          className="btn btn-light btn-default"
          onClick={() => showAll(todos)}
        >
          All
        </button>
        <button
          type="button"
          className="ml-3 mr-3 btn btn-light"
          onClick={() => active(todos)}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => completed(todos)}
        >
          Completed
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-light" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Filter;
