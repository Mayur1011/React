import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /*
  *useState a react hook
  Usestate returns an array
  where,
  The first element is the value/variable itself(the current state value) and it intially has the managed value.
  So in these example its {props.title}. The value present in the props.title.

  The second element is the upadating function. It's used to update the value.
  */

  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  // setTitle("Updated!!"); // *this works asynchronously

  /*
    Why can we change something in spite of const being used?
    Arrays (like all objects) are reference types in JS. You can change their content even if the reference to the object/array is constant.

    Here we are not updating the value of title by assigning the new value to title directly and instead we care using a function called setTitle.
    Firstly as we are using const so we cannot change it directly by assigning it.
    Q. If we are not directly changing the value of title then how we are getting the new latest updated value?
    A. This is because we are calling this component function again everytime by using useState function. So the currentstate value gets assigned to
    the title variable.

    updating the state is scheduled and does not occur immediately as soon as we set the state using the handler function returned if so,
    console.log(title) always prints the old value instead of new state

    The reason why we are using this function here is that by calling this function we not only just assign a new value to some variable.
    But by calling this function we will get the new value and the 'component function' in which you called this function(setTitle in this case)
    we be executed again.
    */

  // console.log(title);
  // };
  return (
    // We composed out ExpenseItem component by using card as a wrapper and,
    // and also add some html and a ExpenseDate into it and form a overall ExpenseItem component.

    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
