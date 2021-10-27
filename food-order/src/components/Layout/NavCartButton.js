import React from "react";
import classes from "./NavCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const NavCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default NavCartButton;
