import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TodoList = ({ todos, setTodos, lastStep, setLastStep }) => {
    const [subLayout, setSubLayout] = useState([]);

    const onDragEnd = (param) => {
        const sourceIndex = param.source.index;
        const destinationIndex = param.destination?.index;
        let copy = [...todos];
        if (destinationIndex) {
            copy.splice(destinationIndex, 0, copy.splice(sourceIndex, 1)[0])
            setTodos(copy);
        }
    };
    const onDragStart = () => {
        const copy = [...todos];
        copy.push({text: "example-66666"});
        setLastStep({...lastStep, before: copy});
    };
    const closeSubHandler = (subs, id) => {
        setSubLayout(
            subLayout.map((item, i) => {
                if (todos[i].id === id) {
                    return {
                        ...item, closed: !item.closed
                    };
                }
                if (subs.includes(i) && item.sub) {
                    return {
                        ...item, visible: !item.visible
                    };
                } else {
                    return item;
                }
            })
        );
    };

    useEffect(() => {
        const todoCopy = todos;
        const layout = [];
        todoCopy.map((todo, i) => {
            if (todoCopy[i + 1] !== undefined && todoCopy[i + 1].sub === true  && (todo.sub === false || todo.sub === undefined)) {
                const subs = [];
                for (let k = 0; k < todoCopy.length - i; k++) {
                    if (todoCopy[i + k + 1] !== undefined && todoCopy[i + k + 1].sub === true) {
                        subs.push(i + k + 1);
                    } else {
                        break;
                    }
                }
                layout.push({ subHandler: true, subs: subs, closed: false });
            } else {
                layout.push({ subHandler: false, visible: true, sub: todo.sub });
            }
        });
        setSubLayout(layout);
    }, [todos]);

    return (
        <DragDropContext onDragEnd={ onDragEnd } onDragStart={ onDragStart }>
            <div className="todo-container">
                <Droppable droppableId="droppable-todos" type="TODOS">
                {(provided, snapshot) => (
                    <ul className="todo-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        { todos.map((todo, i) => {
                            return <Todo todo={ todo }
                                key={ todo.id }
                                todos={ todos } setTodos={ setTodos }
                                lastStep={ lastStep } setLastStep={ setLastStep }
                                subLayout={ subLayout[i] } closeSubHandler={ closeSubHandler }
                            />;
                        }
                        ) }
                        {provided.placeholder}
                    </ul>
                )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default TodoList;