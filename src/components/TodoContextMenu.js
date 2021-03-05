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
      }

    return (
        <div className="todo-item-context">
            <button onClick={() => {
                changeTextHandler();
                dialog.close(value);
            }}>
                <i class="fas fa-pencil-alt" />
                <h3>Edit Text</h3>
            </button>
            <button onClick={() => {
                completeHandler();
                dialog.close(value);
            }}>
                <i class="fas fa-check" />
                <h3>{ `${ todo.completed ? "Uncomplete" : "Complete" } Todo` }</h3>
            </button>
            <button onClick={() => {
                deleteHandler();
                dialog.close(value);
            }}>
                <i class="fas fa-trash" />
                <h3>Delete Todo</h3>
            </button>
            <button disabled>
                <i class="fas fa-angle-double-right" />
                <h3>Make Sub-Todo</h3>
            </button>
        </div>
    );
}

export default TodoContextMenu;