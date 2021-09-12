// Here we have used object instead of using just values(used in CounterSimple) to pass to reducer function as current_state and action.

import { React, useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

// const reducer = (state, action) => {
// *This function is used to change the count by one. And we can also do this with passing objects,
//   switch (action.type) {
//     case "increment":
//       return { firstCounter: state.firstCounter + 1 };
//     case "decrement":
//       return { firstCounter: state.firstCounter - 1 };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

const reducer = (state, action) => {
  // *As we want to increment or decrement the counter by more than 1 value. So we will not set the static incrementer value. We will set it by the value given by action.
  // Suppose we have 2 counters and we have to update only one. But as we update the state of any one counter the value of the other counter get vanished/ gets lost.
  // So to avoid the this we use spread operator and merge the new changes to the old ones and keep the unchanged ones.
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterComplex = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter1 : {count.firstCounter}</h1>
      <h1>Counter2 : {count.secondCounter}</h1>

      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Decrement 5
      </button>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          Increment Counter 2
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          Decrement Counter 2
        </button>
      </div>

      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
};
export default CounterComplex;
