import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setFilter }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
            ]);
            setInputText("");
        }
    };
    const changeFilterHandler = (e) => {
        setFilter(e.target.value);
    };

    return (
        <form>
            <input onChange={ inputTextHandler } type="text" className="todo-input" value={ inputText } />
            <button onClick={ submitTodoHandler } type="submit" className="todo-button">
                <i className="fas fa-plus-square" />
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={ changeFilterHandler }>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;