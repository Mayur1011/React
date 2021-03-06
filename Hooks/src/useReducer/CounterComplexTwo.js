import { React, useReducer } from "react";

const initialState = 0;
const reducer = (currState, action) => {
    // *This reducer function accepts the currentState and the action to be performed on the currentState.
    switch (action) {
        case "increment":
            return currState + 1;
        case "decrement":
            return currState - 1;
        case "reset":
            return initialState;
        default:
            return currState;
    }
};
const CounterComplexTwo = () => {
    /*
        Here we are handling multiple states.
        1. Incrementing the count.
        2. Decrementing the count.
        3. Reseting the count.
        This multiple state handling can be done using useReducer. 
      */
    // *This dispatch function accepts the action to be performed on the current state.
    const [count, dispatch] = useReducer(reducer, initialState);
    // If we need one more couter
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
        <>
            <h1>Counter : {count}</h1>

            <button
                onClick={() => {
                    dispatch("increment");
                }}
            >
                Increment
            </button>

            <button
                onClick={() => {
                    dispatch("decrement");
                }}
            >
                Decrement
            </button>

            <button
                onClick={() => {
                    dispatch("reset");
                }}
            >
                Reset
            </button>

            <div>
                <h1>Counter 2 : {count2}</h1>

                <button
                    onClick={() => {
                        dispatch2("increment");
                    }}
                >
                    Increment
                </button>

                <button
                    onClick={() => {
                        dispatch2("decrement");
                    }}
                >
                    Decrement
                </button>

                <button
                    onClick={() => {
                        dispatch2("reset");
                    }}
                >
                    Reset
                </button>

            </div>
        </>
    );
};

export default CounterComplexTwo;
