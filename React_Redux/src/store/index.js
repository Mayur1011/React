import { createStore } from "redux";
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

const counterSubsciber = () => {
  // current state
  const updatedState = store.getState();
  console.log(updatedState);
};
store.subscribe(counterSubsciber);
store.dispatch({ type: "increment" });

export default store;
