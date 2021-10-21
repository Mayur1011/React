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
const CounterSimple = () => {
  /*
    Here we are handling multiple states.
    1. Incrementing the count.
    2. Decrementing the count.
    3. Reseting the count.
    This multiple state handling can be done using useReducer.
    Note - This can be done using multiple useStates.(For this ex. 3 useState) 
  */

  // *This dispatch function accepts the action to be performed on the current state.
  const [count, dispatch] = useReducer(reducer, initialState);

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
    </>
  );
};

export default CounterSimple;
