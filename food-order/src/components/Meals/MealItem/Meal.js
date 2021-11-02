import React from "react";
import MealForm from "./MealForm";
import classes from "./Meal.module.css";
import cartContext from "../../../store/cart-context";
const Meal = (props) => {
  const cartCtx = React.useContext(cartContext);
  const price = `$${props.price.toFixed(2)}`;
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default Meal;
