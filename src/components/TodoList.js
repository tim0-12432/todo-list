import React from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TodoList = ({ todos, setTodos }) => {
    const onDragEnd = (param) => {
        const sourceIndex = param.source.index;
        const destinationIndex = param.destination?.index;
        let copy = [...todos];
        if (destinationIndex) {
            copy.splice(destinationIndex, 0, copy.splice(sourceIndex, 1)[0])
            setTodos(copy);
        }
    };

    return (
        <DragDropContext onDragEnd={ onDragEnd }>
            <div className="todo-container">
                <Droppable droppableId="droppable-todos" type="TODOS">
                {(provided, snapshot) => (
                    <ul className="todo-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        { todos.map(todo => (
                            <Todo todo={ todo } key={ todo.id } todos={ todos } setTodos={ setTodos } />
                        )) }
                        {provided.placeholder}
                    </ul>
                )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default TodoList;