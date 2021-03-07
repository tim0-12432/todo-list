import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import { CustomDialog } from "react-st-modal";
import TodoContextMenu from "./TodoContextMenu";

const Todo = ({ todo, todos, setTodos, lastStep, setLastStep }) => {
    const deleteHandler = (e) => {
        setLastStep({...lastStep, before: todos});
        setTodos(
            todos.filter((el) => el.id !== todo.id)
        );
    };
    const completeHandler = (e) => {
        setLastStep({...lastStep, before: todos});
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    };
                }
                return item;
            })
        );
    };
    const getIndex = () => {
        for (let index = 0; index < todos.length; index++) {
            if (todo.id === todos[index].id) {
                return index;
            }
        }
    };

    return (
        <Draggable draggableId={ `draggable-${ todo.id }` } index={ getIndex() }>
            {(provided, snapshot) => (
                <div className={ `todo${todo?.sub ? " sub" : "" }` }
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{ ...provided.draggableProps.style, boxShadow: snapshot.isDraggingOver ? "0 0 30px rgba(0, 0, 0, .3)" : "" }}
                >
                    <i className="fas fa-equals" />
                    <li className={ `todo-item${todo.completed ? " completed" : ""}` }
                        onClick={ async () => {
                            const text = todo.text;
                            const result = await CustomDialog(
                                <TodoContextMenu todo={ todo }
                                                todos={ todos }
                                                setTodos={ setTodos }
                                                lastStep={ lastStep }
                                                setLastStep={ setLastStep }
                                                completeHandler={ completeHandler }
                                                deleteHandler={ deleteHandler }
                                />,
                                {
                                    title: "Todo Options",
                                    showCloseIcon: true,
                                }
                            );
                        } }
                    >
                        { todo.text }
                    </li>
                    <button onClick={ completeHandler } className="complete-btn">
                        <i className="fas fa-check" />
                    </button>
                    <button onClick={ deleteHandler } className="trash-btn">
                        <i className="fas fa-trash" />
                    </button>
                </div>
            )}
        </Draggable>
    );
}

export default Todo;