const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSuscriber = () => {
  // This function will give us the latest updates state whenever the reducer change the data in the store.
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSuscriber);

store.dispatch({ type: "increment" });
