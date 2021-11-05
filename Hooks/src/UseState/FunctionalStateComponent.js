import React from "react";

export default function FunctionalStateComponent() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const incrementPrev = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div>
      <div>Counter_Functional : {counter}</div>
      <button onClick={incrementCounter}>Increment</button>
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button> */}
    </div>
  );
}
