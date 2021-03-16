import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import { CustomDialog } from "react-st-modal";
import cx from "classnames";

import TodoContextMenu from "./../ContextMenus/TodoContextMenu";

import styles from "./Todolist.module.scss";

const Todo = ({ todo, todos, setTodos, lastStep, setLastStep, subLayout, closeSubHandler }) => {

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

    return subLayout === undefined ?
    "Loading..." :
    (
        <Draggable draggableId={ `draggable-${ todo.id }` } index={ getIndex() }>
            {(provided, snapshot) => (
                <div className={ cx(styles.todo, todo?.sub ? styles.sub : "", subLayout.subHandler !== true ? (subLayout.visible === true ? "" : styles.invisible) : "") }
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{ ...provided.draggableProps.style, boxShadow: snapshot.isDraggingOver ? "0 0 30px rgba(0, 0, 0, .3)" : "" }}
                >
                    { subLayout?.subHandler
                    ? (subLayout.closed ? <i className="fas fa-angle-down" onClick={ () => closeSubHandler(subLayout.subs, todo.id) } /> : <i className="fas fa-angle-up" onClick={ () => closeSubHandler(subLayout.subs, todo.id) } />)
                    : <i className={ cx("fas", "fa-equals", styles.drag) } /> }
                    <li className={ cx(styles.todoItem, todo.completed ? styles.completed : "") }
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
                                    title: `Todo Options "${text}"`,
                                    showCloseIcon: true,
                                }
                            );
                        } }
                    >
                        { todo.text }
                    </li>
                    <button onClick={ completeHandler } className={ styles.completeBtn }>
                        <i className="fas fa-check" />
                    </button>
                    <button onClick={ deleteHandler } className={ styles.trashBtn }>
                        <i className="fas fa-trash" />
                    </button>
                </div>
            )}
        </Draggable>
    );
}

export default Todo;