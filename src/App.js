import React, { useState, useEffect } from "react";
import { Prompt } from "react-st-modal";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import FloatingInfo from "./components/FloatingInfo";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [title, setTitle] = useState("My Todo List");

    useEffect(() => {
      getLocalTodos();
      getLocalTitle();
      console.groupCollapsed("Easteregg!");
      console.info("Congratulations! You found me!");
      console.groupEnd();
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
    useEffect(() => {
      saveToLocalTitle();
    }, [title]);

    const saveToLocalTodos = () => {
      localStorage.setItem("todo-app.todos", JSON.stringify(todos));
    };
    const getLocalTodos = () => {
      if (localStorage.getItem("todo-app.todos") === null) {
        localStorage.setItem("todo-app.todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todo-app.todos"));
        setTodos(todoLocal);
      }
    };
    const saveToLocalTitle = () => {
      localStorage.setItem("todo-app.title", title);
    };
    const getLocalTitle = () => {
      if (localStorage.getItem("todo-app.title") === null) {
        localStorage.setItem("todo-app.title", title);
      } else {
        let titleLocal = localStorage.getItem("todo-app.title");
        setTitle(titleLocal);
      }
    };

    const changeTitleHandler = async () => {
      const newTitle = await Prompt("Change list title", { defaultValue: title, isRequired: true, okButtonText: "change" });
      if (newTitle !== undefined) {
        setTitle(newTitle);
      }
    }

    return (
        <div className="App">
            <Settings title={ title } todos={ todos } setTodos={ setTodos } />
            <Header title={ title } changeTitleHandler={ changeTitleHandler } />
            <Form inputText={ inputText } setInputText={ setInputText } todos={ todos } setTodos={ setTodos } setFilter={ setFilter } />
            <TodoList todos={ filteredTodos } setTodos={ setTodos } />
            <FloatingInfo />
        </div>
    );
}

export default App;
