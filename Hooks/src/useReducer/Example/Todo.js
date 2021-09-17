import React, { useReducer, useState } from "react";
import Todoc from "./Todoc";

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOOGLE_TODO: "toogle-todo",
    DELETE_TODO: "delete-todo",
};
const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOOGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => { return todo.id !== action.payload.id });
        default:
            return todos;
    }
};
const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false };
};
const Todo = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents reloading of page
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName("");
    };
    console.log(todos);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            {todos.map((todo) => {
                return <Todoc key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
        </>
    );
};
export default Todo;
