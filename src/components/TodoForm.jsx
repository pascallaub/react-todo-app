import React from "react";
import useTodoStore from "../stores/todoStore";

const TodoForm = () => {
    const [title, setTitle] = React.useState("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTodo(title);
            setTitle("");
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
    );
};

export default TodoForm;