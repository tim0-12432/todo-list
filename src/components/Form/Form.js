import React from "react";

import styles from "./Form.module.scss";

const Form = ({ inputText, setInputText, todos, setTodos, setFilter }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            setTodos([
                ...todos, {text: inputText, completed: false, sub: false, id: Math.random() * 1000}
            ]);
            setInputText("");
        }
    };
    const changeFilterHandler = (e) => {
        setFilter(e.target.value);
    };

    return (
        <form>
            <input onChange={ inputTextHandler } type="text" className={ styles.todoInput } value={ inputText } />
            <button onClick={ submitTodoHandler } type="submit" className={ styles.todoButton }>
                <i className="fas fa-plus-square" />
            </button>
            <div className={ styles.select }>
                <select name="todos" className={ styles.filterTodo } onChange={ changeFilterHandler }>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;