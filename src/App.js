import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import Input from "./components/input";
import Todos from "./components/todos";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "This is sample", completed: false },
  ]);
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFiltered(todos.filter((todo) => todo.completed === true));
          break;

        case "active":
          setFiltered(todos.filter((todo) => todo.completed === false));
          break;

        default:
          setFiltered(todos);
      }
    };
    filterHandler();
  }, [todos, status]);

  const addTodo = (text) => {
    const id = todos.length + 1;
    const completed = false;
    const newTodos = [...todos, { id, text, completed }];
    newTodos.id = newTodos.length;
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = true;
    setTodos(newTodo);
  };
  const removeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="mt-5 pt-5 container">
      <Input addTodo={addTodo} />
      <div className="mt-3">
        {filtered.map((todo, index) => (
          <Todos
            key={index}
            todo={todo}
            index={index}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <Filter
        count={todos.length}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
    </div>
  );
};

export default App;
