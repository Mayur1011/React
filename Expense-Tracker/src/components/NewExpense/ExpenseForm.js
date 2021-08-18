import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  /*
      document.getElementById("").addEventListener("click", () => {});
      here in the arrow function present in addEventListner we pass a parameter which is (titleChangeHandler in this case).
      Here, bydefault we get an event object which describes the event which occured.
    */
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  // This above 3 lines creates 3 states, but we can also create a single state

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  /* This difference between these 2 syntax is that in second syntax we are creating a object and then passing it alltogether to create one state.
       And now here we have to updated all the 3 values alltogether

       But its not good way to write the second systax in this way.(syntax at line 36)
       Because the state in second sytax depends on the previous state for updating the current state. here we just use one state
       so we copy the remaining values which are not to be updated so we cant lose them.
       Hence we use just values of previous state and overwrite the values which are need to be changed and keep the rest unchanged.

       Therfore the more better way to write syntax 2 is syntax 3 which passes a anonymous arrow function which react by default executs by itself.
       Q. Why syntax3 is better than syntax2;
       A. React schedules the state updates and in syntax2 there may be the case that use schedule a lot of state updates at same time.
          Then in syntax2 we might end depending on any oudated or incorrect prevstate snapshots.
          But in syntax3 we are getting a prevState parameter so we have the gaurantee that we have the latest previous state snapshot for updating.
    */

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // *And as mentioned for above arrow function we get a event object automatically

    // Syntax 1 -->
    // setEnteredTitle(event.target.value); // syntax if we use different state

    // Syntax 2 -->
    // setUserInput({
    //   ...userInput, // it takes the object and spreads all the key value pairs. We need this so we can override the title and keep remaining data as it is.
    //   enteredTitle: event.target.value,
    // });
    // Syntax 3(better way to write syntax 2) -->
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // by default if we submit any form the browser call the server
    // But here we dont want that so we use this function to prevent this activity.

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    // Now, we need to add this new expense data to the expenses array which is present in App.js.
    // We can do this by sending this data to parent of this file which is NewExpense.js and then NewExpense.js file send this to App.js

    props.onSaveExpenseData(expenseData);

    setUserInput({
      // After submit erase/clear the data from the form.
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
