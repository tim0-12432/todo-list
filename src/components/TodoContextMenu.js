import { useState } from "react";
import { Prompt, useDialog } from 'react-st-modal';

function TodoContextMenu({ todo, todos, setTodos, completeHandler, deleteHandler }) {
    const dialog = useDialog();

    const [value, setValue] = useState();

    const changeTextHandler = async () => {
        const newText = await Prompt("Change todo item", { defaultValue: todo.text, isRequired: true, okButtonText: "change" });
        if (newText !== undefined) {
            setTodos(
                todos.map((item) => {
                    if (item.id === todo.id) {
                        return {
                            ...item, text: newText
                        };
                    }
                    return item;
                })
            );
        }
    };
    const subPageHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, sub: !item.sub
                    };
                }
                return item;
            })
        );
        dialog.close(value);
    };

    return (
        <div className="todo-item-context">
            <button onClick={() => {
                changeTextHandler();
                dialog.close(value);
            }}>
                <i className="fas fa-pencil-alt" />
                <h3>Edit Text</h3>
            </button>
            <button onClick={() => {
                completeHandler();
                dialog.close(value);
            }}>
                <i className="fas fa-check" />
                <h3>{ `${ todo.completed ? "Uncomplete" : "Complete" } Todo` }</h3>
            </button>
            <button onClick={() => {
                deleteHandler();
                dialog.close(value);
            }}>
                <i className="fas fa-trash" />
                <h3>Delete Todo</h3>
            </button>
            <button onClick={ subPageHandler }>
                <i className={ `fas fa-angle-double-${ todo?.sub ? "left" : "right" }` } />
                <h3>{ `Make ${ todo?.sub ? "normal " : "Sub-" }Todo` }</h3>
            </button>
        </div>
    );
}

export default TodoContextMenu;