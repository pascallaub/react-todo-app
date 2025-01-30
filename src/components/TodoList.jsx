import React from "react";
import useTodoStore from "../stores/todoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todos } = useTodoStore();
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;