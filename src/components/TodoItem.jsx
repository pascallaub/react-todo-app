import React from "react";
import useTodoStore from "../stores/todoStore";

const TodoItem = ({ todo }) => {
    const { toggleTodo, removeTodo } = useTodoStore();

    return (
        <li>
            <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}>
                {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </li >
    );
};

export default TodoItem;