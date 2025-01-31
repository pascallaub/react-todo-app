import { useEffect, useState } from "react";

function TodoItem({ todo, onUpdate }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    useEffect(() => {
        setEditText(todo.text);
    }, [todo]);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        onUpdate(todo.id, { text: editText });
    };

    const handleInputChange = (e) => {
        setEditText(e.target.value);
    };
    
    return (
        <>
            <input
                type="checkbox"
                name="done"
                id=""
                className="size-5 cursor-pointer rounded border-slate-300 border-b-gray-500 transition-all checked:border-blue-600 checked:bg-blue-400 hover:shadow-md" checked={isChecked} onChange={handleCheck} />
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={handleInputChange}
                    className="border-b border-gray-300"
                />
            ) : (
                <span className={`mx-4 ${isChecked ? 'line-through' : ''}`}>
                    {todo.text}
                </span>
            )}
            <div className="ml-auto flex space-x-2">
                {isEditing ? (
                    <button
                        className="bg-[#C850C0] px-4 py-2 text-white"
                        onClick={handleSaveClick}
                    >
                        speichern
                    </button>
                ) : (
                    <button
                        className="bg-[#C850C0] px-4 py-2 text-white"
                        onClick={handleEditClick}
                    >
                        bearbeiten
                    </button>
                )}
              <button className="bg-[#C850C0] px-4 py-2 text-white">löschen</button>
            </div>

              </>

    )
}

export default TodoItem;