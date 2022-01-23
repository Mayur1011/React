import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    // return { counter: state.counter - 1, showCounter: state.showCounter };
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

// const counterSubsciber = () => {
//   // current state
//   const updatedState = store.getState();
//   console.log(updatedState);
// };
// store.subscribe(counterSubsciber);
// store.dispatch({ type: "increment" });

export default store;
