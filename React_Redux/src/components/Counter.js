import { useSelector, useDispatch } from "react-redux";
// We can also useStore hook  which gives us direct access to the store.
import classes from "./Counter.module.css";

const Counter = () => {
  /*
    This useSelector hook takes a function as an argument which is exectuted by react.
    This function determines which piece of data we want to extract from out state object.
    Suppose we want a small part of data from the react object we have stored in the store, we can use useSelector here  

    When we use a selecter react redux automatically set up a subscription for this component.

  */
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const incrementHandler = () => {
    dispatch({ type: "increment", value: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
