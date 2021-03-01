import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
      getLocalTodos();
    }, []);
    useEffect(() => {
      saveToLocalTodos();
      switch (filter) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
      }
    }, [todos, filter]);

    const saveToLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    };

    return (
        <div className="App">
            <header>
              My Todo List
            </header>
            <Form inputText={ inputText } setInputText={ setInputText } todos={ todos } setTodos={ setTodos } setFilter={ setFilter } />
            <TodoList todos={ filteredTodos } setTodos={ setTodos } />
        </div>
    );
}

export default App;
