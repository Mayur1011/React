import React from "react";
import { ACTIONS } from "./Todo"
export default function Todoc({ todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
                {todo.name}
            </span>
            {/*
                 To get the results of the below button we must update the state using dispatch function.
                 So we need to  pass the dispatch function as an prop to this component.
            */}
            <button onClick={() => dispatch({ type: ACTIONS.TOOGLE_TODO, payload: { id: todo.id } })}>Toogle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    );
}
