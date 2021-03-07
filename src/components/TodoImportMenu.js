import { useState, useEffect } from "react";
import { useDialog } from 'react-st-modal';

function TodoImportMenu({ title, todos, setTodos, file }) {
    const dialog = useDialog();
    const headers = ["todo", "completed", "sub"]

    const [newTodos, setNewTodos] = useState([]);
    const [value, setValue] = useState();

    function displayTodoList(todoArr) {
        const list = [];
        while (todoArr === []) {
            console.log("empty");
        }
        for (const todo of todoArr) {
            list.push(<li key={ Math.round(Math.random() * 100000) }>
                <i className={ todo.sub ? "fas fa-long-arrow-alt-right" : "" } />
                <input type="checkbox" checked={ todo?.completed.replace(/"/g, '') } disabled />
                <h4>{ todo.text }</h4>
            </li>);
        }
        return list;
    }
    
    function importAll() {
        console.log(newTodos);
    }

    useEffect(() => {
        const reader = new FileReader();
        if (file) {
            reader.onload = async function(e) {
            const jsonObject = JSON.parse(e.target.result);
            setNewTodos(jsonObject.todos);
            }
            reader.readAsText(file);
        } else {
            console.log("Failed to read the file!");
        }
    }, []);

    return (
        <div className="import-menu">
            <label>Imported from { file.name }</label>
            <ul>
                { displayTodoList(newTodos) }
            </ul>
            <button onClick={() => {
                importAll();
                dialog.close(value);
            }}>
                <i className="fas fa-clipboard-list" />
                <h3>Import All</h3>
            </button>
            <button disabled>
                <i className="fas fa-clipboard-check" />
                <h3>Import Selected</h3>
            </button>
        </div>
    );
}

export default TodoImportMenu;